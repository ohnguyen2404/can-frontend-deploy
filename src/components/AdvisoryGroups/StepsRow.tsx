import React from "react";
import StepCard from "./StepCard";
import { TAdvisoryStep } from "../../utils/settings";

export type TStepRows = {
	bgColor: string;
	steps: TAdvisoryStep[];
	rowIdx: number;
	rowCounts: number;
};

const StepsRow = ({ bgColor, steps, rowIdx, rowCounts }: TStepRows) => {
	return (
		<div className={`w-full flex flex-row bg-${bgColor} ${(rowIdx + 1) % 2 === 0 && "border-gray-400 border-y-[1px]"} ${rowIdx === 0 && "rounded-tl-3xl"} ${rowIdx === rowCounts - 1 && "rounded-bl-3xl"}`}>
			<div className="w-[15%] text-2xl pl-8 pt-8">*</div>
			<div className={`w-[85%] bg-${bgColor} grid grid-cols-3 gap-4`}>
				{steps.map((step, idx) => (
					<StepCard
						key={idx}
						order={idx + 3 * rowIdx}
						title={step.title}
						imgSrc={step.imgSrc}
					/>
				))}
			</div>
		</div>
	);
};

export default StepsRow;
