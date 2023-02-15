import React, { useLayoutEffect, useRef } from "react";
import { TComponent } from "../../utils/types";
import STYLE_GROUPS from "../../utils/styles";
import gsap from "gsap/dist/gsap";
import Draggable from "gsap/dist/Draggable";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SeasonalProject from "./SeasonalProject";
import { LIST_PROJECT, PROJECT_MIN_WIDTH } from "./setting";
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
				minX: window.innerWidth - LIST_PROJECT.length * PROJECT_MIN_WIDTH - 8 * LIST_PROJECT.length,
				maxX: 0,
			},
		});
	}, []);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to("#seasonal-project-groups", {
			scrollTrigger: {
				trigger: "#seasonal-project-groups",
				scrub: true,
				start: "top 80%",
				end: "top 25%",
			},
			paddingLeft: 0,
			paddingRight: 0,
		});
	});
	return (
		<section
			id="seasonal-project-groups"
			className="px-[10%] my-10">
			<div className={`tag-info-groups-container ${STYLE_GROUPS.flexStart} flex-col w-full py-36 bg-lightBlue rounded-[1.875rem] overflow-hidden`}>
				<div className="mx-6 pb-1">
					<TitleButton title="Chi tiết" />
				</div>
				<div className="mx-6 text-[80px] text-strongBlue font-bold mt-8">
					<h1>HOẠT ĐỘNG THEO MÙA</h1>
				</div>

				<div
					className="flex flex-row mt-4 mx-6"
					id="slider"
					ref={sliderRef}>
					{LIST_PROJECT.map((project, index) => (
						<SeasonalProject
							key={index}
							id={project.id}
							title={project.title}
							imgSrc={project.imgSrc}
							isLastChild={index === LIST_PROJECT.length - 1}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

SeasonalProjectGroups.SeasonalProject = SeasonalProject;

export default SeasonalProjectGroups;
