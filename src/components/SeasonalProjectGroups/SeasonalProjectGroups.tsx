import React, { useLayoutEffect, useRef } from "react";
import { TComponent } from "../../utils/types";
import STYLE_GROUPS from "../../utils/styles";
import gsap from "gsap/dist/gsap";
import Draggable from "gsap/dist/Draggable";
import SeasonalProject from "./SeasonalProject";

type TSubComponent = {
	SeasonalProject: typeof SeasonalProject;
};

const SeasonalProjectGroups: TComponent & TSubComponent = () => {
	const sliderRef = useRef(null);
	useLayoutEffect(() => {
		gsap.registerPlugin(Draggable);
	}, []);
	return (
		<section
			id="tag-info-groups"
			className={`w-full ${STYLE_GROUPS.flexCenter} px-6 py-10 bg-lightBlue`}>
			<div className={`flex flex-row items-center text-2xl border-black border-[1px] rounded-full px-8 pb-1`}>
				<span>Chi tiết</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1}
					stroke="currentColor"
					className="w-5 h-5 mt-1 ml-1">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
					/>
				</svg>
			</div>
			<div
				id="slider"
				ref={sliderRef}>
				{/*<SeasonalProject
					imgSrc="aa"
					title="b"
				/>*/}
			</div>
		</section>
	);
};

SeasonalProjectGroups.SeasonalProject = SeasonalProject;

export default SeasonalProjectGroups;
