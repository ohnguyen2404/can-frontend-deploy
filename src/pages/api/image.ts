import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import multer from "multer";
import { trans } from "../../utils/nodemailer";
import { ERROR_CONTENT_LENGTH, ERROR_UNKNOWN, MAX_CONTENT_FILE_SIZE, MAX_NUMBER_FILE, FILE_FORM_UPLOAD_NAME } from "../../utils/settings";
import { unlink } from "fs";
import { TSchoolRegistrationForm } from "../../utils/types";
import html, { SchoolRegistrationFormBody } from "../../utils/html";

export const config = {
	api: {
		bodyParser: false,
	},
};

type NextConnectApiRequest = NextApiRequest & {
	files: Express.Multer.File[];
};

const upload = multer({
	limits: {
		fileSize: MAX_CONTENT_FILE_SIZE,
		files: MAX_NUMBER_FILE,
	},
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, "./public/uploads");
		},
		filename: (req, file, cb) => {
			cb(null, file.originalname);
		},
	}),
});

export default nextConnect<NextApiRequest, NextApiResponse>({
	onError(error, req, res) {
		console.log("onError");
		console.log(error);
		res.status(501).json({ err: `${error.message}` });
	},
	onNoMatch(req, res) {
		console.log("onNoMatch");
		res.writeHead(405);
	},
})
	.use((req, res, next) => {
		const contentLength = req.headers["content-length"];
		if (!contentLength || typeof Number(contentLength) !== "number") {
			throw new Error(ERROR_UNKNOWN);
		}
		if (parseInt(contentLength) > MAX_CONTENT_FILE_SIZE) {
			throw new Error(ERROR_CONTENT_LENGTH);
		}
		next();
	})
	.use(upload.array(FILE_FORM_UPLOAD_NAME))
	.post(async (request: NextConnectApiRequest, response) => {
		// request.emit("close");
		const files = request.files;
		const data: TSchoolRegistrationForm = request.body;
		data.semester = JSON.parse((<unknown>data.semester) as string);

		if (!data.id) {
			return response.status(400).json({ message: "Bad request" });
		}

		const attachments = files.map((file) => {
			return {
				filename: file.filename.replace(`${data.id}_`, ""),
				path: file.path,
			};
		});

		trans
			.sendMail({
				from: process.env["MAIL_USER"],
				to: process.env["MAIL_USER"],
				html: html(SchoolRegistrationFormBody(data)),
				subject: `Đăng ký trường học của "${data.name}"`,
				attachments: attachments,
			})
			.then((res) => {
				files.forEach((file) => {
					unlink(file.path, (error) => {
						if (error) {
							console.log(error);
							throw error;
						}
						console.log(`${file.path} was deleted`);
					});
				});
				console.log(res);
				return response.status(200).json({ success: true });
			})
			.catch((error) => {
				console.log(error);
				return response.status(400).json({ message: "Bad request" });
			});
	});
