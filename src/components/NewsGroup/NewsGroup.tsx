import React, { useState } from "react";
import { TComponent } from "../../utils/types";
import CircleButton from "../Buttons/CircleButton";
import LongButton from "../Buttons/LongButton";
import { Direction } from "../../utils/types";
import NewsCard from "./NewsCard";

const MOCK_NEWS = [
	{
		title: "SUMMER-CAMP-2023-01-1",
		imgUrl: "/SUMMER-CAMP-2023-01.png",
	},
	{
		title: "SUMMER-CAMP-2023-02-1",
		imgUrl: "/SUMMER-CAMP-2023-02.png",
	},
	{
		title: "SUMMER-CAMP-2023-03-1",
		imgUrl: "/SUMMER-CAMP-2023-03.png",
	},
	{
		title: "SUMMER-CAMP-2023-04-1",
		imgUrl: "/SUMMER-CAMP-2023-04.png",
	},
	{
		title: "SUMMER-CAMP-2023-01-2",
		imgUrl: "/SUMMER-CAMP-2023-01.png",
	},
	{
		title: "SUMMER-CAMP-2023-02-2",
		imgUrl: "/SUMMER-CAMP-2023-02.png",
	},
	{
		title: "SUMMER-CAMP-2023-03-2",
		imgUrl: "/SUMMER-CAMP-2023-03.png",
	},
	{
		title: "SUMMER-CAMP-2023-04-2",
		imgUrl: "/SUMMER-CAMP-2023-04.png",
	},
	{
		title: "SUMMER-CAMP-2023-01-3",
		imgUrl: "/SUMMER-CAMP-2023-01.png",
	},
	{
		title: "SUMMER-CAMP-2023-02-3",
		imgUrl: "/SUMMER-CAMP-2023-02.png",
	},
	{
		title: "SUMMER-CAMP-2023-03-3",
		imgUrl: "/SUMMER-CAMP-2023-03.png",
	},
	{
		title: "SUMMER-CAMP-2023-04-3",
		imgUrl: "/SUMMER-CAMP-2023-04.png",
	},
];

const NewsGroup: TComponent = () => {
	const [curIdx, setCurIdx] = useState(2);
	const onClickPrev = () => {
		if (curIdx > 0) {
			setCurIdx((curIdx) => curIdx - 1);
			if (curIdx < MOCK_NEWS.length - 2) {
				document.getElementById("news-slider")!.scrollLeft -= 340;
			}
		}
	};

	const onClickNext = () => {
		if (curIdx < MOCK_NEWS.length - 1) {
			setCurIdx((curIdx) => curIdx + 1);
			if (curIdx >= 2) {
				document.getElementById("news-slider")!.scrollLeft += 340;
			}
		}
	};

	const onClickCard = (idx: number) => {
		setCurIdx(idx);
	};

	console.log(curIdx);

	return (
		<section
			id="news"
			className="w-full mt-10">
			<div className="flex flex-row justify-between">
				<div className="ml-6 font-bold text-4xl uppercase">
					<span className="float-left">{MOCK_NEWS[curIdx].title.substring(0, MOCK_NEWS[curIdx].title.length - 1)}</span>
					<span className="flex flex-row items-center float-right">
						<span className="pr-3">{MOCK_NEWS[curIdx].title.substring(MOCK_NEWS[curIdx].title.length - 1)}</span>
						<CircleButton />
					</span>
				</div>
				<div className="flex flex-row mr-6 justify-between">
					<LongButton
						direction={Direction.Left}
						handleOnClick={onClickPrev}
					/>
					<div className="w-4"></div>
					<LongButton
						direction={Direction.Right}
						handleOnClick={onClickNext}
					/>
				</div>
			</div>

			<div
				id="news-slider"
				className="w-full mt-16 min-h-[600px] items-center flex flex-row overflow-x-scroll scrollbar-hide">
				{MOCK_NEWS.map(({ imgUrl }, idx) => (
					<NewsCard
						isSelected={idx === curIdx}
						handleOnClick={() => onClickCard(idx)}
						imgUrl={imgUrl}
						idx={idx}
						newsLength={MOCK_NEWS.length}
					/>
				))}
			</div>
		</section>
	);
};

export default NewsGroup;
