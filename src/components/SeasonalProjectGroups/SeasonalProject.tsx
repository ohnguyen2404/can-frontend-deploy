import React, { useState } from "react";
import CircleButton from "../Buttons/CircleButton";
import { PROJECT_MIN_WIDTH_VW } from "./setting";

type TSeasonalProject = {
	id: string;
	title: string;
	imgSrc: string;
};

const SeasonalProject = ({ id, title, imgSrc }: TSeasonalProject) => {
	const [hoverState, setHoverState] = useState<boolean>(false);
	return (
		<div
			key={id}
			className="flex flex-col mr-4 last:mr-0 cursor-pointer"
			style={{
				minWidth: `${PROJECT_MIN_WIDTH_VW}vw`,
			}}
			onMouseEnter={() => setHoverState(true)}
			onMouseLeave={() => setHoverState(false)}>
			<div className="flex flex-row items-end mb-2 md:mb-3">
				<span className="text-2xl md:text-4xl leading-none mr-2 overflow-hidden text-ellipsis whitespace-nowrap">{title}</span>
				<CircleButton
					useExternal
					hoverState={hoverState}
				/>
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
