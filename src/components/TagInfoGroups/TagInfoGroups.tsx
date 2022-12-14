import React from "react"
import STYLE_GROUPS from "../../utils/styles"
import { TComponent } from "../../utils/types"
import TagInfo from "./TagInfo"

type TSubComponent = {
  TagInfo: typeof TagInfo,
}

const TagInfoGroups: TComponent & TSubComponent = () => {
  return (
    <section id="tag-info-groups" className={`w-full ${STYLE_GROUPS.flexCenter} px-6 py-10 bg-white`}>
      <TagInfoGroups.TagInfo
        key={"Thị trường"}
        header="Thị trường"
        imgSrc={"/market.png"}
        listContent={["Việt Nam, Phillipine, Ấn Độ,", "Trung Quốc, Hong Kong"]} />
      <TagInfoGroups.TagInfo
        key={"Khách hàng"}
        header="Khách hàng"
        imgSrc={"/customer.png"}
        listContent={["Hỗ trợ hơn 10 000", "khách hàng"]} />
      <TagInfoGroups.TagInfo
        key={"Hồ sơ"}
        header="Hồ sơ"
        imgSrc={"/profile.png"}
        listContent={["Hơn 3000 hồ sơ", "nhận được PR"]} />
      <TagInfoGroups.TagInfo
        key={"Tỷ lệ"}
        header="Tỷ lệ"
        imgSrc={"/percent.png"}
        listContent={["97% tỷ lệ đậu hồ sơ PR", "và Visa du học"]} />
    </section>
  )
}
TagInfoGroups.TagInfo = TagInfo;
export default TagInfoGroups
