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
			imgSrc: "assets/traihe.png",
			imgAlt: "traihe.png",
			title: "Trại hè",
		},
		{
			imgSrc: "assets/vieclam.png",
			imgAlt: "vieclam.png",
			title: "Việc làm",
		},
		{
			imgSrc: "assets/dulich.png",
			imgAlt: "dulich.png",
			title: "Du lịch",
		},
		{
			imgSrc: "assets/dinhcu.jpg",
			imgAlt: "dinhcu.jpg",
			title: "Định cư",
		},
		{
			imgSrc: "assets/duhoc.png",
			imgAlt: "duhoc.png",
			title: "Du học",
		},
		{
			imgSrc: "assets/pathway.png",
			imgAlt: "pathway.png",
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

	useEffect(() => {
		for (let index = itemInRow; index < listCard.length; index++) {
			const card = listCard[index];
			gsap.set(`#card-${card.id}`, {
				y: "100%",
			});
			timeline.to(`#card-${card.id}`, {
				y: 0,
			});
		}
	}, []);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const createScrollTrigger = () => {
			ScrollTrigger.getById(ID)?.kill();
			ScrollTrigger.create({
				id: ID,
				trigger: "#program-group",
				animation: timeline,
				scrub: true,
				start: "top 5%",
				endTrigger: "#EndTriggerTemp",
				end: `bottom 5%`,
				pin: true,
			});
		};
		createScrollTrigger();
		window.addEventListener("resize", createScrollTrigger);
		return () => window.removeEventListener("resize", createScrollTrigger);
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
