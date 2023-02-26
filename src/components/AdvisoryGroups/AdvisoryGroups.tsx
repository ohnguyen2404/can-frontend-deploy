import React, { useState } from "react";
import AdvisoryGroup from "./AdvisoryGroup";
import { AdvisoryType } from "./types";

const AdvisoryGroups = () => {
	const [curTab, setCurTab] = useState(AdvisoryType.StudyAbroad);

	return (
		<section
			id="advisory"
			className="w-full my-high">
			<div className="w-full pl-6 flex flex-row justify-between items-center">
				<p className="text-4xl font-bold text-strongBlue">LỘ TRÌNH TƯ VẤN</p>
				<div className="flex flex-row border-b-gray-400 border-b">
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
		</section>
	);
};

export default AdvisoryGroups;
