import { useEffect, useLayoutEffect } from "react";
import { TComponent } from "../../utils/types";
import ProgramCard, { TProgramCard, TProgramInfo } from "./ProgramCard";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

type TSubComponent = {
	ProgramCard: typeof ProgramCard;
};

const ProgramGroups: TComponent & TSubComponent = () => {
	const ID = "ProgramGroups_ST";
	const array: TProgramInfo[] = [
		{
			imgSrc: "assets/programGroups/traihe.jpg",
			imgAlt: "traihe.jpg",
			title: "Trại hè",
		},
		{
			imgSrc: "assets/programGroups/vieclam.jpg",
			imgAlt: "vieclam.jpg",
			title: "Việc làm",
		},
		{
			imgSrc: "assets/programGroups/dulich.jpg",
			imgAlt: "dulich.jpg",
			title: "Du lịch",
		},
		{
			imgSrc: "assets/programGroups/dinhcu.jpg",
			imgAlt: "dinhcu.jpg",
			title: "Định cư",
		},
		{
			imgSrc: "assets/programGroups/duhoc.jpg",
			imgAlt: "duhoc.jpg",
			title: "Du học",
		},
		{
			imgSrc: "assets/programGroups/pathway.jpg",
			imgAlt: "pathway.jpg",
			title: "Pathway",
		},
	];
	const itemInRow = 3;
	const widthItem = "33%";
	const listCard: TProgramCard[] = array.map((cardInfo, index) => {
		return {
			id: index,
			width: widthItem,
			imgSrc: cardInfo.imgSrc,
			imgAlt: cardInfo.imgAlt,
			title: cardInfo.title,
		} as TProgramCard;
	});
	const timeline = gsap.timeline();

	useLayoutEffect(() => {
		const context = gsap.context(() => {
			for (let index = itemInRow; index < listCard.length; index++) {
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
				{listCard.slice(0, itemInRow).map((card) => {
					return (
						<ProgramGroups.ProgramCard
							key={card.id}
							id={card.id}
							width={widthItem}
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
				{listCard.slice(itemInRow).map((card) => {
					return (
						<ProgramGroups.ProgramCard
							key={card.id}
							id={card.id}
							width={widthItem}
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
