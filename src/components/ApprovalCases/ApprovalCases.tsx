import React from "react";
import SashRibbon from "./SashRibbon";

const ApprovalCases = () => {
	return (
		<div className="approval-cases w-full relative">
			<p className="my-16 px-6 text-4xl font-bold text-strongPink">HÌNH ẢNH</p>

			<div className="w-full bg-white flex flex-row overflow-hidden">
				<SashRibbon />
				<SashRibbon />
			</div>
		</div>
	);
};

export default ApprovalCases;
