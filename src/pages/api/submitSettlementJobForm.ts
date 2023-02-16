import type { NextApiRequest } from "next/types";
import nodemailerTransporter from "../../utils/nodemailer";
import { unlink } from "fs";
import { FILE_FORM_UPLOAD_NAME, html } from "../../utils/settings/setting";
import _nextConnect from "../../middlewares/nextConnect";
import guardContentLength from "../../middlewares/guardContentLength";
import handleFiles from "../../middlewares/handleFiles";
import { SettlementJobFormBody } from "../../components/ServiceGroups/setting";
import { TSettlementJobForm } from "../../components/ServiceGroups/types";

export const config = {
	api: {
		bodyParser: false,
	},
};

type NextConnectApiRequest = NextApiRequest & {
	files: Express.Multer.File[];
};

export default _nextConnect
	.use(guardContentLength)
	.use(handleFiles(FILE_FORM_UPLOAD_NAME))
	.post(async (request: NextConnectApiRequest, response) => {
		// request.emit("close");
		const files = request.files;
		const data: TSettlementJobForm = request.body;

		if (!data.id) {
			return response.status(400).json({ message: "Bad request" });
		}

		const attachments = files.map((file) => {
			return {
				filename: file.filename.replace(`${data.id}_`, ""),
				path: file.path,
			};
		});

		nodemailerTransporter
			.sendMail({
				from: process.env["MAIL_USER"],
				to: process.env["MAIL_USER"],
				html: html(SettlementJobFormBody(data)),
				subject: `Yêu cầu Đăng ký việc làm định cư của "${data.name}"`,
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
