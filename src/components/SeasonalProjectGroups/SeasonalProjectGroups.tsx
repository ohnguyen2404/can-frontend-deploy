import React, { useLayoutEffect, useRef } from "react";
import { TComponent } from "../../utils/types";
import STYLE_GROUPS from "../../utils/styles";
import gsap from "gsap/dist/gsap";
import Draggable from "gsap/dist/Draggable";
import SeasonalProject from "./SeasonalProject";
import { PROJECTS, PROJECT_MIN_WIDTH } from "../../utils/settings";

type TSubComponent = {
	SeasonalProject: typeof SeasonalProject;
};

const SeasonalProjectGroups: TComponent & TSubComponent = () => {
	const sliderRef = useRef(null);
	useLayoutEffect(() => {
		gsap.registerPlugin(Draggable);

		Draggable.create(sliderRef.current, {
			type: "x",
			zIndexBoost: false,
			duration: 0.2,
			bounds: {
				minX: window.innerWidth - PROJECTS.length * PROJECT_MIN_WIDTH - 8 * PROJECTS.length,
				maxX: 0,
			},
		});
	}, []);
	return (
		<section
			id="tag-info-groups"
			className={`flex flex-col w-full ${STYLE_GROUPS.flexStart} py-10 bg-lightBlue rounded-[30px] overflow-hidden`}>
			<div className={`w-36 flex flex-row items-center text-2xl border-black border-[1px] rounded-full mx-6 px-7 pb-1 cursor-pointer hover:bg-strongPink hover:text-white hover:border-transparent`}>
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
			<div className="mx-6 text-8xl text-strongBlue font-bold mt-12">
				<h1>HOẠT ĐỘNG THEO MÙA</h1>
			</div>

			<div
				className="flex flex-row mt-4"
				id="slider"
				ref={sliderRef}>
				{PROJECTS.map((project, index) => (
					<SeasonalProject
						id={project.id}
						title={project.title}
						imgSrc={project.imgSrc}
						isLastChild={index === PROJECTS.length - 1}
					/>
				))}
			</div>
		</section>
	);
};

SeasonalProjectGroups.SeasonalProject = SeasonalProject;

export default SeasonalProjectGroups;
