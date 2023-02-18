import React from "react";
import { TComponent } from "../../utils/types";
import TagInfo from "./TagInfo";

type TSubComponent = {
	TagInfo: typeof TagInfo;
};

const TagInfoGroups: TComponent & TSubComponent = () => {
	const mediaWrap = "flex flex-col sm:flex-row lg:my-0 mb-10 w-full";
	const mediaSubWrap = "flex sm:my-0 mb-10 w-full";
	return (
		<section
			id="tag-info-groups"
			className="flex flex-col lg:flex-row my-10 justify-center w-full px-6 bg-white">
			<div className={`media-wrap ${mediaWrap}`}>
				<div className={`media-sub-wrap ${mediaSubWrap}`}>
					<TagInfoGroups.TagInfo
						key="Thị trường"
						header="Thị trường"
						imgSrc="assets/tagInfoGroups/market.png"
						imgAlt="market.png"
						bgColor="blue"
						listContent={["Việt Nam, Phillipine, Ấn Độ,", "Trung Quốc, Hong Kong"]}
					/>
				</div>
				<div className={`media-sub-wrap ${mediaSubWrap}`}>
					<TagInfoGroups.TagInfo
						key="Khách hàng"
						header="Khách hàng"
						imgSrc="assets/tagInfoGroups/customer.png"
						imgAlt="customer.png"
						bgColor="pink"
						listContent={["Hỗ trợ hơn 10 000", "khách hàng"]}
					/>
				</div>
			</div>
			<div className={`media-wrap media-wrap-last ${mediaWrap}`}>
				<div className={`media-sub-wrap ${mediaSubWrap}`}>
					<TagInfoGroups.TagInfo
						key="Hồ sơ"
						header="Hồ sơ"
						imgSrc="assets/tagInfoGroups/profile.png"
						imgAlt="profile.png"
						bgColor="blue"
						listContent={["Hơn 3000 hồ sơ", "nhận được PR"]}
					/>
				</div>
				<div className={`media-sub-wrap media-wrap-last ${mediaSubWrap}`}>
					<TagInfoGroups.TagInfo
						key="Tỷ lệ"
						header="Tỷ lệ"
						imgSrc="assets/tagInfoGroups/percent.png"
						imgAlt="percent.png"
						bgColor="pink"
						listContent={["97% tỷ lệ đậu hồ sơ PR", "và Visa du học"]}
					/>
				</div>
			</div>
		</section>
	);
};
TagInfoGroups.TagInfo = TagInfo;
export default TagInfoGroups;
