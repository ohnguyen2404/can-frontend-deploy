import React, { useState } from "react";
import CircleButton from "../Buttons/CircleButton";
import LongButton from "../Buttons/LongButton";
import { Direction } from "../../utils/types";
import NewsCard from "./NewsCard";
import { TNews } from "./types";

type TNewsGroup = {
	news: TNews[];
};

const NewsGroup = ({ news }: TNewsGroup) => {
	const [curIdx, setCurIdx] = useState(2);

	const onClickPrev = () => {
		if (curIdx > 0) {
			setCurIdx((curIdx) => curIdx - 1);
			if (curIdx < news.length - 2) {
				document.getElementById("news-slider")!.scrollLeft -= 340;
			}
		}
	};

	const onClickNext = () => {
		if (curIdx < news.length - 1) {
			setCurIdx((curIdx) => curIdx + 1);
			if (curIdx >= 2) {
				document.getElementById("news-slider")!.scrollLeft += 340;
			}
		}
	};

	const onClickCard = (idx: number) => {
		setCurIdx(idx);
	};

	const onClickButton = () => {
		const curUrl = window.location.href;
		window.open(`${curUrl}/posts/${news[curIdx].id}`);
	};

	return (
		<section id="news">
			<div className="news-container my-25">
				<div className="flex flex-row justify-between mx-8">
					<div className="font-bold text-4xl uppercase">
						{news[curIdx]?.title}
						<div className="inline-block mb-2 ml-2 align-middle">
							<CircleButton handleOnClick={onClickButton} />
						</div>
					</div>
					<div className="flex flex-row justify-between">
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
					{news.map(({ imgUrl }, idx) => (
						<NewsCard
							key={idx}
							isSelected={idx === curIdx}
							handleOnClick={() => onClickCard(idx)}
							imgUrl={imgUrl}
							idx={idx}
							newsLength={news.length}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default NewsGroup;
