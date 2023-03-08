import React from "react";

export type TStepCard = {
	order: number;
	title: string;
	imgSrc: string;
};

const StepCard = (props: TStepCard) => {
	return (
		<div className="step-card-container grid grid-rows-2">
			<div className="title-container flex mx-4 items-center">
				<span className="order-container flex items-center justify-center pb-1 h-8 w-8 text-2xl font-medium rounded-full border-black border">{props.order + 1}</span>
				<span className="title font-medium text-xl text-center mx-3">{props.title}</span>
			</div>
			<div className="image-container h-24 mt-8">
				<img
					className="h-full object-contain mx-auto"
					src={props.imgSrc}
				/>
			</div>
		</div>
	);
};

export default StepCard;
