import type { NextApiRequest, NextApiResponse } from "next";
import { trans } from "../../utils/nodemailer";

const test = async (request: NextApiRequest, response: NextApiResponse) => {
	if (request.method !== "POST") {
		return response.status(400).json({ message: "Bad request" });
	}
	try {
		trans
			.sendMail({
				from: "pham.giahuy.9041@gmail.com",
				to: "pham.giahuy.9041@gmail.com",
				text: "test text",
				subject: "test subject",
			})
			.then((res) => {
				console.log(res);
			});
			return response.status(200).json({ success: true });
	} catch (error) {
		console.log(error);
		return response.status(400).json({ message: "Bad request" });
	}
};

export default test;
