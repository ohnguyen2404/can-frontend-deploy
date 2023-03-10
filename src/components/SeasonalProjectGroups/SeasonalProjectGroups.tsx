import React, { useRef } from "react";
import { TComponent } from "../../utils/types";
import STYLE_GROUPS from "../../utils/styles";
import gsap from "gsap/dist/gsap";
import Draggable from "gsap/dist/Draggable";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SeasonalProject from "./SeasonalProject";
import { LIST_PROJECT } from "./setting";
import TitleButton from "../Buttons/TitleButton";
import { useIsomorphicLayoutEffect } from "../../utils/helper";

type TSubComponent = {
	SeasonalProject: typeof SeasonalProject;
};

const SeasonalProjectGroups: TComponent & TSubComponent = () => {
	const ref_seft = useRef<HTMLDivElement>(null);
	const ref_slider = useRef<HTMLDivElement>(null);

	useIsomorphicLayoutEffect(() => {
		const context = gsap.context(() => {
			gsap.registerPlugin(ScrollTrigger, Draggable);
			gsap.to(ref_slider.current, {
				x: () => -(ref_slider.current!.scrollWidth - ref_slider.current!.offsetWidth),
				ease: "none",
				scrollTrigger: {
					trigger: ref_seft.current,
					start: "top 5%",
					end: () => `+=${ref_slider.current!.scrollWidth - ref_slider.current!.offsetWidth}`,
					scrub: 1,
					invalidateOnRefresh: true,
					pin: true,
				},
			});
		});
		return () => context.revert();
	}, []);

	return (
		<section id="seasonal-project-groups">
			<div
				className={`seasonal-project-groups-container ${STYLE_GROUPS.flexStart} flex-col my-17.5 md:my-25 py-15 md:py-17.5 bg-lightBlue rounded-[30px] overflow-hidden`}
				ref={ref_seft}>
				<div className="mx-15 md:mx-8">
					<TitleButton title="Chi tiết" />
				</div>
				<div className="mx-15 md:mx-8 mt-14 md:mt-12.5 text-[40px] md:text-[80px] text-strongBlue font-bold whitespace-nowrap">
					<h1>HOẠT ĐỘNG THEO MÙA</h1>
				</div>
				<div
					className="flex flex-row mt-4 mx-15 md:mx-8"
					id="slider"
					ref={ref_slider}>
					{LIST_PROJECT.map((project, index) => (
						<SeasonalProject
							key={index}
							id={project.id}
							title={project.title}
							imgSrc={project.imgSrc}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

SeasonalProjectGroups.SeasonalProject = SeasonalProject;

export default SeasonalProjectGroups;
