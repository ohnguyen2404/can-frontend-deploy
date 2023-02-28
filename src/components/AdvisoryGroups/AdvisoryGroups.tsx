import React, { useState } from "react";
import AdvisoryGroup from "./AdvisoryGroup";
import { AdvisoryType } from "./types";

const AdvisoryGroups = () => {
	const [curTab, setCurTab] = useState(AdvisoryType.StudyAbroad);

	return (
		<section id="advisory">
			<div className="advisory-container my-high">
				<div className="flex flex-row justify-between">
					<div className="title-container flex items-center justify-center w-44 h-10 ml-8 border rounded-full border-black">
						<span className="font-bold text-2xl mb-1">Lộ trình tư vấn</span>
					</div>
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
			</div>
		</section>
	);
};

export default AdvisoryGroups;
