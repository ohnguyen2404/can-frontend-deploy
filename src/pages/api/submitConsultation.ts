import type { NextApiRequest, NextApiResponse } from "next";
import nodemailerTransporter from "../../utils/nodemailer";
import _nextConnect from "../../middlewares/nextConnect";
import { ConsultationFormBody } from "../../components/Consultation/setting";
import { html } from "../../utils/settings/setting";
import { TConsultationForm } from "../../components/Consultation/types";

export default _nextConnect.post(async (request: NextApiRequest, response: NextApiResponse) => {
	const data: TConsultationForm = request.body;
	nodemailerTransporter
		.sendMail({
			from: process.env["MAIL_USER"],
			to: process.env["MAIL_USER"],
			html: html(ConsultationFormBody(data)),
			subject: `Yêu cầu Tư vấn miễn phí của "${data.name}"`,
		})
		.then((result) => {
			console.log(result);
			return response.status(200).json({ success: true });
		})
		.catch((error) => {
			console.log(error);
			return response.status(400).json({ message: "Bad request" });
		});
});
