import React, { useLayoutEffect, useRef } from "react";
import { TComponent } from "../../utils/types";
import STYLE_GROUPS from "../../utils/styles";
import gsap from "gsap/dist/gsap";
import Draggable from "gsap/dist/Draggable";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SeasonalProject from "./SeasonalProject";
import { LIST_PROJECT } from "./setting";
import TitleButton from "../Buttons/TitleButton";

type TSubComponent = {
	SeasonalProject: typeof SeasonalProject;
};

const SeasonalProjectGroups: TComponent & TSubComponent = () => {
	const ref_seft = useRef(null);
	const ref_slider = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const context = gsap.context(() => {
			gsap.registerPlugin(ScrollTrigger, Draggable);
			gsap.to(ref_slider.current, {
				xPercent: -100,
				ease: "none",
				scrollTrigger: {
					trigger: ref_seft.current,
					start: "top 5%",
					end: () => `+=${ref_slider.current!.offsetWidth}`,
					scrub: 1,
					invalidateOnRefresh: true,
					pin: true,
				},
			});
		});
		return () => context.revert();
	}, []);

	return (
		<section
			id="seasonal-project-groups"
			className="my-10"
			ref={ref_seft}>
			<div className={`tag-info-groups-container ${STYLE_GROUPS.flexStart} flex-col w-full py-medium bg-lightBlue rounded-[1.875rem] overflow-hidden`}>
				<div className="mx-6 pb-1">
					<TitleButton title="Chi tiết" />
				</div>
				<div className="mx-6 text-[80px] text-strongBlue font-bold mt-8">
					<h1>HOẠT ĐỘNG THEO MÙA</h1>
				</div>
				<div
					className="flex flex-row mt-4 mx-6"
					id="slider"
					ref={ref_slider}>
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
