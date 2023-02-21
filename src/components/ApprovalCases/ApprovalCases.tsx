import React from "react";
import ImageRunner from "./ImageRunner";

const ApprovalCases = () => {
	return (
		<section id="approval-cases" className="w-full relative my-high">
			<p className="my-16 px-6 text-4xl font-bold text-strongPink">HÌNH ẢNH</p>
			<div className="w-full bg-white flex flex-row overflow-hidden">
				<ImageRunner />
				<ImageRunner />
			</div>
		</section>
	);
};

export default ApprovalCases;
