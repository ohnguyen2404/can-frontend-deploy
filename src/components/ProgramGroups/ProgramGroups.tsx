import { useEffect, useLayoutEffect } from "react";
import { TComponent } from "../../utils/types";
import ProgramCard, { TProgramCard } from "./ProgramCard";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ITEM_IN_ROW, LIST_PROGRAM_INFO, WIDTH_ITEM } from "./setting";

type TSubComponent = {
	ProgramCard: typeof ProgramCard;
};

const ProgramGroups: TComponent & TSubComponent = () => {
	const ID = "ProgramGroups_ST";
	const listCard: TProgramCard[] = LIST_PROGRAM_INFO.map((cardInfo, index) => {
		return {
			id: index,
			width: WIDTH_ITEM,
			imgSrc: cardInfo.imgSrc,
			imgAlt: cardInfo.imgAlt,
			title: cardInfo.title,
		} as TProgramCard;
	});
	
	useLayoutEffect(() => {
		const context = gsap.context(() => {
			const timeline = gsap.timeline();
			for (let index = ITEM_IN_ROW; index < listCard.length; index++) {
				const card = listCard[index];
				gsap.set(`#card-${card.id}`, {
					y: "100%",
				});
				timeline.to(`#card-${card.id}`, {
					y: 0,
				});
			}
			gsap.registerPlugin(ScrollTrigger);
			ScrollTrigger.create({
				id: ID,
				trigger: "#program-group",
				animation: timeline,
				scrub: true,
				start: "top 5%",
				endTrigger: "#EndTriggerTemp",
				end: `bottom 5%`,
				pin: true,
				invalidateOnRefresh: true,
			});
		});
		return () => context.revert();
	}, []);

	return (
		<div
			id="program-group"
			className="program-group-container relative">
			<div
				id="container-1"
				className="flex flex-row justify-center absolute top-0 left-0 right-0">
				{listCard.slice(0, ITEM_IN_ROW).map((card) => {
					return (
						<ProgramGroups.ProgramCard
							key={card.id}
							id={card.id}
							width={WIDTH_ITEM}
							imgSrc={card.imgSrc}
							imgAlt={card.imgAlt}
							title={card.title}
						/>
					);
				})}
			</div>
			<div
				id="container-2"
				className="flex flex-row justify-center absolute top-0 left-0 right-0">
				{listCard.slice(ITEM_IN_ROW).map((card) => {
					return (
						<ProgramGroups.ProgramCard
							key={card.id}
							id={card.id}
							width={WIDTH_ITEM}
							imgSrc={card.imgSrc}
							imgAlt={card.imgAlt}
							title={card.title}
						/>
					);
				})}
			</div>
		</div>
	);
};

ProgramGroups.ProgramCard = ProgramCard;

export default ProgramGroups;
