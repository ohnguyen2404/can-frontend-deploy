import { useRef } from "react";
import { TComponent } from "../../utils/types";
import ProgramCard, { TProgramCard } from "./ProgramCard";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ITEM_IN_ROW, LIST_PROGRAM_INFO, WIDTH_ITEM } from "./setting";
import { useIsomorphicLayoutEffect } from "../../utils/helper";

type TSubComponent = {
	ProgramCard: typeof ProgramCard;
};

const ProgramGroups: TComponent & TSubComponent = () => {
	const ref_self = useRef<HTMLElement>(null);

	const listCard: TProgramCard[] = LIST_PROGRAM_INFO.map((cardInfo, index) => {
		return {
			id: index,
			width: WIDTH_ITEM,
			imgSrc: cardInfo.imgSrc,
			imgAlt: cardInfo.imgAlt,
			title: cardInfo.title,
		} as TProgramCard;
	});

	useIsomorphicLayoutEffect(() => {
		const context = gsap.context(() => {
			const timeline = gsap.timeline();
			for (let index = ITEM_IN_ROW; index < listCard.length; index++) {
				const card = listCard[index];
				// gsap.set(`#card-${card.id}`, {
				// 	y: "100%",
				// });
				timeline.to(`#card-${card.id}`, {
					yPercent: -100,
				});
			}
			gsap.registerPlugin(ScrollTrigger);
			console.log("ref_self.current?.scrollHeight", ref_self.current!.scrollHeight + 240);
			console.log("ref_self.current?.offsetHeight", ref_self.current?.offsetHeight);
			ScrollTrigger.create({
				trigger: ref_self.current,
				animation: timeline,
				scrub: true,
				start: "top 5%",
				end: () => `+=${ref_self.current?.scrollHeight}`,
				pin: true,
				invalidateOnRefresh: true,
			});
		});
		return () => context.revert();
	}, []);

	return (
		<section
			id="program-group"
			className="program-group-container flex flex-col my-high"
			ref={ref_self}>
			<div
				id="container-1"
				className="flex flex-row justify-center">
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
				className="flex flex-row justify-center">
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
		</section>
	);
};

ProgramGroups.ProgramCard = ProgramCard;

export default ProgramGroups;
