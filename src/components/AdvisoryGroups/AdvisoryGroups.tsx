import React, { useState } from "react";
import AdvisoryGroup from "./AdvisoryGroup";
import { AdvisoryType } from "../../utils/types";

const AdvisoryGroups = () => {
	const [curTab, setCurTab] = useState(AdvisoryType.StudyAbroad);

	return (
		<section
			id="advisory"
			className="w-full">
			<div className="w-full pl-6 flex flex-row justify-between items-center">
				<p className="text-4xl font-bold text-strongBlue">LỘ TRÌNH TƯ VẤN</p>
				<div className="flex flex-row border-b-gray-400 border-b-[1px]">
					<span
						className={`text-4xl font-bold px-10 py-4 rounded-t-3xl cursor-pointer hover:text-lightPink hover:bg-strongPink ${curTab === AdvisoryType.Settled ? "text-lightPink bg-strongPink" : "text-strongPink bg-lightPink"} `}
						onClick={() => setCurTab(AdvisoryType.Settled)}>
						ĐỊNH CƯ
					</span>
					<span
						className={`text-4xl font-bold px-10 py-4 rounded-t-3xl cursor-pointer hover:text-lightBlue hover:bg-strongBlue ${curTab === AdvisoryType.StudyAbroad ? "text-lightBlue bg-strongBlue" : "text-strongBlue bg-lightBlue"}`}
						onClick={() => setCurTab(AdvisoryType.StudyAbroad)}>
						DU HỌC
					</span>
				</div>
			</div>

			<AdvisoryGroup type={curTab} />

			<div className="w-full bg-white h-[200px]"></div>
			<div className="w-full bg-lightBlue h-[200px]"></div>
		</section>
	);
};

export default AdvisoryGroups;
