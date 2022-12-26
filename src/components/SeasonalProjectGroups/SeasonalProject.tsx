import React from "react";
import STYLE_GROUPS from "../../utils/styles";
import { CircleArrow } from "../index";

type TSeasonalProject = {
	id: string;
	title: string;
	imgSrc: string;
	isLastChild: boolean;
};

const SeasonalProject = ({ id, title, imgSrc, isLastChild }: TSeasonalProject) => {
	return (
		<div
			key={id}
			className={`flex flex-col ${!isLastChild && "mr-3"} min-w-[680px]`}>
			<div className="flex flex-row items-center">
				<span className="text-4xl mb-2">{title}</span>
				<CircleArrow />
			</div>
			<img
				className="rounded-xl w-[680px] h-[460px] overflow-hidden"
				//src={imgSrc}
        src={'/project.png'}
			/>
		</div>
	);
};

export default SeasonalProject;
