import { useRef } from "react";
import { Direction, TComponent } from "../../utils/types";
import ProgramCard from "./ProgramCard";
import { LIST_PROGRAM_INFO } from "./setting";
import ProgramSubGroup from "./ProgramSubGroup";

type TSubComponent = {
	ProgramCard: typeof ProgramCard;
};

const ProgramGroups: TComponent & TSubComponent = () => {
	return (
	<section id="program-groups">
			<div className="program-groups-container flex flex-col my-17.5 md:my-25 mx-15 md:mx-8">
				<div className="title-container flex items-center justify-center w-25 md:w-40 h-6 md:h-10 border rounded-full border-black my-8">
					<span className="font-bold text-xs md:text-2xl mb-0.5 md:mb-1">Chương trình</span>
				</div>
				<div className="program-sub-group-wrap">
					<div className="program-sub-group-wrap-inner aspect-[27/5] my-4 md:my-10">
						<ProgramSubGroup
							direction={Direction.Left}
							cardLeft={{
								imgSrc: LIST_PROGRAM_INFO[0].imgSrc,
								imgAlt: LIST_PROGRAM_INFO[0].imgAlt,
								title: LIST_PROGRAM_INFO[0].title,
								direction: Direction.Left,
							}}
							cardRight={{
								imgSrc: LIST_PROGRAM_INFO[1].imgSrc,
								imgAlt: LIST_PROGRAM_INFO[1].imgAlt,
								title: LIST_PROGRAM_INFO[1].title,
								direction: Direction.Right,
							}}
						/>
					</div>
					<div className="program-sub-group-wrap-inner aspect-[27/5] my-4 md:my-10">
						<ProgramSubGroup
							direction={Direction.Right}
							cardLeft={{
								imgSrc: LIST_PROGRAM_INFO[2].imgSrc,
								imgAlt: LIST_PROGRAM_INFO[2].imgAlt,
								title: LIST_PROGRAM_INFO[2].title,
								direction: Direction.Left,
							}}
							cardRight={{
								imgSrc: LIST_PROGRAM_INFO[3].imgSrc,
								imgAlt: LIST_PROGRAM_INFO[3].imgAlt,
								title: LIST_PROGRAM_INFO[3].title,
								direction: Direction.Right,
							}}
						/>
					</div>
					<div className="program-sub-group-wrap-inner aspect-[27/5] my-4 md:my-10">
						<ProgramSubGroup
							direction={Direction.Left}
							cardLeft={{
								imgSrc: LIST_PROGRAM_INFO[4].imgSrc,
								imgAlt: LIST_PROGRAM_INFO[4].imgAlt,
								title: LIST_PROGRAM_INFO[4].title,
								direction: Direction.Left,
							}}
							cardRight={{
								imgSrc: LIST_PROGRAM_INFO[5].imgSrc,
								imgAlt: LIST_PROGRAM_INFO[5].imgAlt,
								title: LIST_PROGRAM_INFO[5].title,
								direction: Direction.Right,
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
