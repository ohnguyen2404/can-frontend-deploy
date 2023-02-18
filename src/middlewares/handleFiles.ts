import multer from "multer";
import { MAX_CONTENT_FILE_SIZE, MAX_NUMBER_FILE } from "../utils/settings/setting";

export default (fileFromName: string) =>
	multer({
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
	}).array(fileFromName);
