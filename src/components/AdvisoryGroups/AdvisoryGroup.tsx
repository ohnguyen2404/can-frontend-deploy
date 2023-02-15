import React from "react";
import StepsRow from "./StepsRow";
import { STUDY_ABOARD_ADVISORY_STEPS, SETTLED_ADVISORY_STEPS } from "./setting";
import { AdvisoryType } from "../../utils/types";

export type TAdvisoryGroup = {
	type: AdvisoryType;
};

const AdvisoryGroup = ({ type }: TAdvisoryGroup) => {
	const dataArray = type === AdvisoryType.Settled ? SETTLED_ADVISORY_STEPS : STUDY_ABOARD_ADVISORY_STEPS;
	const bgColor = type === AdvisoryType.Settled ? "lightPink" : "lightBlue";
	const tripleSetCounts = [...Array(Math.ceil(dataArray.length / 3)).keys()];

	return (
		<>
			{tripleSetCounts.map((count, idx) => (
				<StepsRow
					key={idx}
					rowCounts={tripleSetCounts.length}
					rowIdx={idx}
					bgColor={(count + 1) % 2 === 0 ? "white" : bgColor}
					steps={dataArray.slice(count * 3, count * 3 + 3)}
				/>
			))}
		</>
	);
};

export default AdvisoryGroup;
