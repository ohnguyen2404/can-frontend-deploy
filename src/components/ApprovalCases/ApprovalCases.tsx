import React from "react";
import ImageRunner from "./ImageRunner";

const ApprovalCases = () => {
	return (
		<section id="approval-cases">
			<div className="approval-cases-container w-full relative my-high">
				<span className="my-16 px-6 text-4xl font-bold text-strongBlue uppercase">Hình ảnh</span>
				<div className="w-full bg-white bg flex flex-row h-[70vh] overflow-hidden">
					<ImageRunner />
					<ImageRunner />
				</div>
				<div className="spacer h-14 border-b border-silver"></div>
			</div>
		</section>
	);
};

export default ApprovalCases;
