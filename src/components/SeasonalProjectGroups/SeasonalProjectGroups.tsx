import React, { useLayoutEffect, useRef } from "react";
import { TComponent } from "../../utils/types";
import STYLE_GROUPS from "../../utils/styles";
import gsap from "gsap/dist/gsap";
import Draggable from "gsap/dist/Draggable";
import SeasonalProject from "./SeasonalProject";
import { PROJECTS, PROJECT_MIN_WIDTH } from "../../utils/settings";
import TitleButton from "../Buttons/TitleButton";

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
			<div className={`mx-6 pb-1`}>
				<TitleButton title="Chi tiết" />
			</div>
			<div className="mx-6 text-8xl text-strongBlue font-bold mt-8">
				<h1>HOẠT ĐỘNG THEO MÙA</h1>
			</div>

			<div
				className="flex flex-row mt-4 mx-6"
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
