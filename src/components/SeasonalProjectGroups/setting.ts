import { Assert } from "../../utils/types";

type TSeasonalProject = {
	id: string;
	title: string;
	imgSrc: string;
};

export const PROJECT_MIN_WIDTH = 680;

export const LIST_PROJECT = Assert<TSeasonalProject[]>([
	{
		id: "summer-camp",
		title: "Trại hè",
		imgSrc: "/SUMMER-CAMP-2023-01.png",
	},
	{
		id: "winter-camp",
		title: "Cắm trại mùa đông",
		imgSrc: "/SUMMER-CAMP-2023-03.png",
	},
	{
		id: "summer-camp2",
		title: "Trại hè 2",
		imgSrc: "/SUMMER-CAMP-2023-02.png",
	},
	{
		id: "winter-camp2",
		title: "Cắm trại mùa đông 2",
		imgSrc: "/SUMMER-CAMP-2023-04.png",
	},
]);
