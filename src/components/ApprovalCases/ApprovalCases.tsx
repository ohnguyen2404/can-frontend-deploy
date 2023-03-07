import React from "react";
import ImageRunner from "./ImageRunner";

const ApprovalCases = () => {
	return (
		<section id="approval-cases">
			<div className="approval-cases-container w-full relative my-25">
				<div className="title-container flex items-center justify-center w-40 h-10 border rounded-full border-black my-8 mx-8">
					<span className="font-bold text-2xl mb-1">Hình ảnh</span>
				</div>
				<div className="image-runner-container flex flex-row w-full bg-white h-[70vh] overflow-hidden border-b border-silver pb-[2vh]">
					<ImageRunner key={1} />
					<ImageRunner key={2} />
				</div>
				<div className="spacer h-14 border-b border-silver"></div>
			</div>
		</section>
	);
};

export default ApprovalCases;
