import { useRef } from "react";
import { Direction, TComponent } from "../../utils/types";
import ProgramCard, { TProgramCard } from "./ProgramCard";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ITEM_IN_ROW, LIST_PROGRAM_INFO, WIDTH_ITEM } from "./setting";
import { useIsomorphicLayoutEffect } from "../../utils/helper";
import ProgramSubGroup from "./ProgramSubGroup";

type TSubComponent = {
	ProgramCard: typeof ProgramCard;
};

const ProgramGroups: TComponent & TSubComponent = () => {
	const ref_self = useRef<HTMLElement>(null);

	return (
		<section
			id="program-group"
			ref={ref_self}>
			<div className="program-group-container flex flex-col my-high mx-8">
				<div className="title-container flex items-center justify-center w-40 h-10 border rounded-full border-black my-8">
					<span className="font-bold text-2xl mb-1">Chương trình</span>
				</div>
				<div className="program-sub-group-wrap">
					<div className="program-sub-group-wrap-inner aspect-[27/5] my-10">
						<ProgramSubGroup
							direction={Direction.Left}
							cardLeft={{
								imgSrc: LIST_PROGRAM_INFO[0].imgSrc,
								imgAlt: LIST_PROGRAM_INFO[0].imgAlt,
								title: LIST_PROGRAM_INFO[0].title,
							}}
							cardRight={{
								imgSrc: LIST_PROGRAM_INFO[1].imgSrc,
								imgAlt: LIST_PROGRAM_INFO[1].imgAlt,
								title: LIST_PROGRAM_INFO[1].title,
							}}
						/>
					</div>
					<div className="program-sub-group-wrap-inner aspect-[27/5] my-10">
						<ProgramSubGroup
							direction={Direction.Right}
							cardLeft={{
								imgSrc: LIST_PROGRAM_INFO[2].imgSrc,
								imgAlt: LIST_PROGRAM_INFO[2].imgAlt,
								title: LIST_PROGRAM_INFO[2].title,
							}}
							cardRight={{
								imgSrc: LIST_PROGRAM_INFO[3].imgSrc,
								imgAlt: LIST_PROGRAM_INFO[3].imgAlt,
								title: LIST_PROGRAM_INFO[3].title,
							}}
						/>
					</div>
					<div className="program-sub-group-wrap-inner aspect-[27/5] my-10">
						<ProgramSubGroup
							direction={Direction.Left}
							cardLeft={{
								imgSrc: LIST_PROGRAM_INFO[4].imgSrc,
								imgAlt: LIST_PROGRAM_INFO[4].imgAlt,
								title: LIST_PROGRAM_INFO[4].title,
							}}
							cardRight={{
								imgSrc: LIST_PROGRAM_INFO[5].imgSrc,
								imgAlt: LIST_PROGRAM_INFO[5].imgAlt,
								title: LIST_PROGRAM_INFO[5].title,
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

ProgramGroups.ProgramCard = ProgramCard;

export default ProgramGroups;
