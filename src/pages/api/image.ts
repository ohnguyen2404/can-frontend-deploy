import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import multer from "multer";
import { ERROR_CONTENT_LENGTH, ERROR_UNKNOWN, MAX_LISTFILE_SIZE, MAX_NUMBER_FILE, FILE_FORM_UPLOAD_NAME } from "../../utils/settings";

export const config = {
	api: {
		bodyParser: false,
	},
};

type NextConnectApiRequest = NextApiRequest & {
	images: Express.Multer.File[];
};

const upload = multer({
	limits: {
		fileSize: MAX_LISTFILE_SIZE,
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
		if (parseInt(contentLength) > MAX_LISTFILE_SIZE) {
			throw new Error(ERROR_CONTENT_LENGTH);
		}
		next();
	})
	.use(upload.array(FILE_FORM_UPLOAD_NAME))
	.post(async (request: NextConnectApiRequest, response) => {
		console.log(request);
		response.status(200).json({
			status: "oke",
		});
	});
