import React from "react";
import STYLE_GROUPS from "../../utils/styles";
import CircleButton from "../Buttons/CircleButton";
import { PROJECT_MIN_WIDTH_VW } from "./setting";

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
			className={`${!isLastChild && "mr-3"} flex flex-col`}
			style={{
				minWidth: `${PROJECT_MIN_WIDTH_VW}vw`
			}}>
			<div className="flex flex-row items-center">
				<span className="text-4xl mb-3 mr-2">{title}</span>
				<CircleButton />
			</div>
			<div className="image-container flex w-full">
				<img
					className="rounded-xl object-fill aspect-[29/20] overflow-hidden"
					src={imgSrc}
				/>
			</div>
		</div>
	);
};

export default SeasonalProject;
