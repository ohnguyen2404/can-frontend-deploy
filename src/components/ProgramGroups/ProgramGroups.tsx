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
			imgSrc: "assets/example.jpg",
			imgAlt: "example.jpg",
			title: "he he",
		},
		{
			imgSrc: "assets/example-2.jpg",
			imgAlt: "example.jpg",
			title: "he he",
		},
		{
			imgSrc: "assets/example.jpg",
			imgAlt: "example.jpg",
			title: "he he",
		},
		{
			imgSrc: "assets/example-2.jpg",
			imgAlt: "example.jpg",
			title: "he he",
		},
		{
			imgSrc: "assets/example.jpg",
			imgAlt: "example.jpg",
			title: "he he",
		},
		{
			imgSrc: "assets/example-2.jpg",
			imgAlt: "example.jpg",
			title: "he he",
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
		listCard.forEach((card, index) => {
			if (index === 0) {
				return;
			}
			const indexFloor = Math.floor(index / itemInRow);
			gsap.set(`#card-${card.id}`, {
				y: `${34 * (index % itemInRow) + 100 * indexFloor}%`,
			});
			if (index === 1) {
				timeline.to(`#card-${card.id}`, {
					y: 0,
				});
				return;
			}
			timeline.to(
				`#card-${card.id}`,
				{
					y: 0,
				},
				`<${100 / (2 * (indexFloor + 1))}%`,
			);
		});
	}, []);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const createScrollTrigger = () => {
			ScrollTrigger.getById(ID)?.kill();
			ScrollTrigger.create({
				id: ID,
				markers: true,
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
			className={`program-group-container relative`}>
			<div
				id="container-1"
				className="flex flex-row absolute top-0 left-0">
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
				className="flex flex-row absolute top-0 left-0">
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
