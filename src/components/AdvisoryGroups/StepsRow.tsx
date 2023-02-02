import React from "react";
import StepCard from "./StepCard";
import { TAdvisoryStep } from "../../utils/settings";

export type TStepRows = {
	rowIdx: number;
	bgColor: string;
	steps: TAdvisoryStep[];
};

const StepsRow = ({ bgColor, steps, rowIdx }: TStepRows) => {
	return (
		<div className={`w-full flex flex-row bg-${bgColor} ${(rowIdx + 1) % 2 === 0 && 'border-gray-400 border-y-[1px]'}`}>
			<div className="w-[8%] text-2xl pl-8 pt-8">*</div>
			<div className={`w-[90%] flex flex-row bg-${bgColor}`}>
				{steps.map((step, idx) => (
					<StepCard
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
