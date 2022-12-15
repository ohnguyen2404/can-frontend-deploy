import { Assert } from "./types";

type TLink = {
	id: string;
	title: string;
};

type TLinks = TLink[];

export const NAVBAR = {
	HEIGHT: 80,
	LINKS: Assert<TLinks>([
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
	]),
};

export const { HEIGHT, LINKS } = NAVBAR;
