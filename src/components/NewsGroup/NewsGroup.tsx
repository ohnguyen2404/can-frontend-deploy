import React, { useEffect, useRef } from "react";
import { TComponent } from "../../utils/types";
import CircleButton from "../Buttons/CircleButton";
import LongButton from "../Buttons/LongButton";
import { Direction } from "../../utils/types";
import NewsCard from "./NewsCard";

const MOCK_NEWS = [
	{
		imgUrl: "/SUMMER-CAMP-2023-01.png",
	},
	{
		imgUrl: "/SUMMER-CAMP-2023-02.png",
	},
	{
		imgUrl: "/SUMMER-CAMP-2023-03.png",
	},
	{
		imgUrl: "/SUMMER-CAMP-2023-04.png",
	},
	{
		imgUrl: "/SUMMER-CAMP-2023-01.png",
	},
	{
		imgUrl: "/SUMMER-CAMP-2023-02.png",
	},
	{
		imgUrl: "/SUMMER-CAMP-2023-03.png",
	},
	{
		imgUrl: "/SUMMER-CAMP-2023-04.png",
	},
];

const NewsGroup: TComponent = () => {
	return (
		<section
			id="news"
			className="w-full mt-10">
			<div className="flex flex-row justify-between">
				<div className="ml-6 font-bold text-4xl uppercase">
					<span>Top những lý do vì sao nên cho bé tham gia</span>
					<div className="flex flex-row items-center">
						<span className="pr-3">chương trình trại hè Canada 2023</span>
						<CircleButton />
					</div>
				</div>
				<div className="flex flex-row mr-6 justify-between">
					<LongButton direction={Direction.Left} />
          <div className="w-4"></div>
					<LongButton direction={Direction.Right} />
				</div>
			</div>

			<div className="w-full mt-48 relative h-[500px] flex flex-row">
				{MOCK_NEWS.map(({ imgUrl }) => (
					<NewsCard imgUrl={imgUrl} />
				))}
			</div>
		</section>
	);
};

export default NewsGroup;
