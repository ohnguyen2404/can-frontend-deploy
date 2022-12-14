import React from "react"
import STYLE_GROUPS from "../../utils/styles"

const TagInfoGroups = () => {
  const containerStyle = `flex flex-col flex-1 justify-between ${STYLE_GROUPS.flexCenter} rounded-lg tag-info-group shadow-lg`
  const paragraphStyle =
    "text-center border-[1px] border-t-gray-400 border-transparent my-8 pt-2 w-[90%] text-xl truncate"

  const H2Style = "my-8 text-3xl font-semibold"
  return (
    <section id="tag-info-groups" className={`w-full ${STYLE_GROUPS.flexCenter} px-6 py-10 bg-white`}>
      <div className={`${containerStyle} bg-lightBlue blue-container mr-6 rounded-lg min-h-[260px]`}>
        <h2 className={H2Style}>Thị trường</h2>
        <img src="/market.png" className={`object-contain max-w-[300px] max-h-[260px]`} />
        <div className={paragraphStyle}>
          <div>Việt Nam, Phillipine, Ấn Độ,</div>
          <div>Trung Quốc, Hong Kong</div>
        </div>
      </div>
      <div className={`${containerStyle} bg-lightPink pink-container mr-6 rounded-lg`}>
        <h2 className={H2Style}>Khách hàng</h2>
        <img src="/customer.png" className={`object-contain max-w-[300px] max-h-[260px]`} />
        <div className={paragraphStyle}>
          <p>Hỗ trợ hơn 10 000</p>
          <p>khách hàng</p>
        </div>
      </div>
      <div className={`${containerStyle} bg-lightBlue blue-container mr-6 rounded-lg`}>
        <h2 className={H2Style}>Hồ sơ</h2>
        <img src="/profile.png" className={`object-contain max-w-[300px] max-h-[260px]`} />
        <div className={paragraphStyle}>
          <p>Hơn 3000 hồ sơ</p>
          <p>nhận được PR</p>
        </div>
      </div>
      <div className={`${containerStyle} bg-lightPink pink-container mr-0 rounded-lg`}>
        <h2 className={H2Style}>Tỷ lệ</h2>
        <img src="/percent.png" className={`object-contain max-w-[300px] max-h-[260px]`} />
        <div className={paragraphStyle}>
          <p>97% tỷ lệ đậu hồ sơ PR</p>
          <p>và Visa du học</p>
        </div>
      </div>
    </section>
  )
}

export default TagInfoGroups
