import React from "react";

export type TStepCard = {
	order: number;
	title: string;
	imgSrc: string;
};

const StepCard = ({ order, title, imgSrc }: TStepCard) => {
	return (
		<div className="py-8 flex flex-col">
			<div className="flex flex-row">
				<span className="pb-1 h-8 w-8 text-2xl rounded-full border-black border flex items-center justify-center mr-2">{order + 1}</span>
				<span className="text-xl">{title}</span>
			</div>
			<div className="mt-8 w-3/4 mx-auto">
				<img
					className="max-w-[185px] max-h-[110px]"
					src={imgSrc}
				/>
			</div>
		</div>
	);
};

export default StepCard;
