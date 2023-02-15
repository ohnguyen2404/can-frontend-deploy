import nextConnect from "next-connect";
import { NextApiRequest, NextApiResponse } from "next/types";

const _nextConnect = nextConnect<NextApiRequest, NextApiResponse>({
	onError(error, req, res) {
		console.log("onError");
		console.log(error);
		res.status(501).json({ err: `${error.message}` });
	},
	onNoMatch(req, res) {
		console.log("onNoMatch");
		res.writeHead(405);
	},
});

export default _nextConnect;
