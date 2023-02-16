import type { NextApiRequest, NextApiResponse } from "next";
import nodemailerTransporter from "../../utils/nodemailer";
import _nextConnect from "../../middlewares/nextConnect";
import { html } from "../../utils/settings/setting";
import { TInternationalInsuranceForm } from "../../components/ServiceGroups/types";
import { InternationalInsuranceFormBody } from "../../components/ServiceGroups/setting";

export default _nextConnect.post(async (request: NextApiRequest, response: NextApiResponse) => {
	const data: TInternationalInsuranceForm = request.body;
	try {
		nodemailerTransporter
			.sendMail({
				from: process.env["MAIL_USER"],
				to: process.env["MAIL_USER"],
				html: html(InternationalInsuranceFormBody(data)),
				subject: `Yêu cầu Đăng ký việc làm định cư của "${data.name}"`,
			})
			.then((res) => {
				console.log(res);
			});
		return response.status(200).json({ success: true });
	} catch (error) {
		console.log(error);
		return response.status(400).json({ message: "Bad request" });
	}
});
