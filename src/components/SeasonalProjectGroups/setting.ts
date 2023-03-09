import { Assert } from "../../utils/types";

type TSeasonalProject = {
	id: string;
	title: string;
	imgSrc: string;
};

export const PROJECT_MIN_WIDTH = 680;
export const PROJECT_MIN_WIDTH_VW = 45;

export const LIST_PROJECT = Assert<TSeasonalProject[]>([
	{
		id: "summer-camp",
		title: "Trại hè",
		imgSrc: "/assets/seasonalProject/SUMMER-CAMP-2023-01.jpg",
	},
	{
		id: "winter-camp",
		title: "Trại đông",
		imgSrc: "/assets/seasonalProject/SUMMER-CAMP-2023-03.jpg",
	},
	{
		id: "summer-camp2",
		title: "Trại hè 2",
		imgSrc: "/assets/seasonalProject/SUMMER-CAMP-2023-02.jpg",
	},
	{
		id: "winter-camp2",
		title: "Trại đông 2",
		imgSrc: "/assets/seasonalProject/SUMMER-CAMP-2023-04.jpg",
	},
]);
