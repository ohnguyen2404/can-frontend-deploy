import React from "react";
import STYLE_GROUPS from "../../utils/styles";
import { TComponent } from "../../utils/types";
import TagInfo from "./TagInfo";

type TSubComponent = {
	TagInfo: typeof TagInfo;
};

const TagInfoGroups: TComponent & TSubComponent = () => {
	return (
		<section
			id="tag-info-groups"
			className={`w-full ${STYLE_GROUPS.flexCenter} px-6 py-10 bg-white`}>
			<TagInfoGroups.TagInfo
				key={"Thị trường"}
				header="Thị trường"
				imgSrc={"assets/tagInfoGroups/market.png"}
				bgColor={"blue"}
				listContent={["Việt Nam, Phillipine, Ấn Độ,", "Trung Quốc, Hong Kong"]}
			/>
			<TagInfoGroups.TagInfo
				key={"Khách hàng"}
				header="Khách hàng"
				imgSrc={"assets/tagInfoGroups/customer.png"}
				bgColor={"pink"}
				listContent={["Hỗ trợ hơn 10 000", "khách hàng"]}
			/>
			<TagInfoGroups.TagInfo
				key={"Hồ sơ"}
				header="Hồ sơ"
				imgSrc={"assets/tagInfoGroups/profile.png"}
				bgColor={"blue"}
				listContent={["Hơn 3000 hồ sơ", "nhận được PR"]}
			/>
			<TagInfoGroups.TagInfo
				key={"Tỷ lệ"}
				header="Tỷ lệ"
				imgSrc={"assets/tagInfoGroups/percent.png"}
				bgColor={"pink"}
				listContent={["97% tỷ lệ đậu hồ sơ PR", "và Visa du học"]}
			/>
		</section>
	);
};
TagInfoGroups.TagInfo = TagInfo;
export default TagInfoGroups;
