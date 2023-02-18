import { Assert } from "../../utils/types";

type TLink = {
	id: string;
	title: string;
};

type TLinks = TLink[];

export const HEIGHT = 80;
export const LINKS = Assert<TLinks>([
	{
		id: "feeds",
		title: "Tin tức",
	},
	{
		id: "program",
		title: "Chương trình",
	},
	{
		id: "service",
		title: "Dịch vụ",
	},
	{
		id: "consult",
		title: "Lộ trình tư vấn",
	},
	{
		id: "office",
		title: "Văn phòng",
	},
	{
		id: "register",
		title: "Đăng ký",
	},
]);
