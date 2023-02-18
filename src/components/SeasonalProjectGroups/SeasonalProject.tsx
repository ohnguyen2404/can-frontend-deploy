import React from "react";
import STYLE_GROUPS from "../../utils/styles";
import CircleButton from "../Buttons/CircleButton";

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
				<span className="text-4xl mb-3 mr-2">{title}</span>
				<CircleButton />
			</div>
			<img
				className="rounded-xl w-[680px] h-[460px] overflow-hidden"
				src={imgSrc}
			/>
		</div>
	);
};

export default SeasonalProject;
