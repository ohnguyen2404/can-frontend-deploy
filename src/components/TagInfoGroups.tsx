import React from "react"
import styles from "../styles"

const TagInfoGroups = () => {
  const containerStyle = `flex flex-col flex-1 justify-between ${styles.flexCenter} rounded-lg`
  const paragraphStyle =
    "text-center border-[1px] border-t-gray-400 border-transparent my-8 pt-2 w-[90%] mx-6 text-xl"

  const H2Style = "my-8 text-3xl font-semibold"
  return (
    <section id="tag-info-groups" className={`w-full ${styles.flexCenter} px-6 py-10 bg-white`}>
      <div className={`${containerStyle} bg-lightBlue mr-6 rounded-lg`}>
        <h2 className={H2Style}>Thị trường</h2>
        <img src="/test_info.svg" className={`object-fit max-w-[300px] max-h-[260px]`} />
        <div className={paragraphStyle}>
          <p>Việt Nam, Phillipine, Ấn Độ,</p>
          <p>Trung Quốc, Hong Kong</p>
        </div>
      </div>
      <div className={`${containerStyle} bg-lightPink mr-6 rounded-lg`}>
        <h2 className={H2Style}>Khách hàng</h2>
        <img src="/test_info.svg" className={`object-fit max-w-[300px] max-h-[260px]`} />
        <div className={paragraphStyle}>
          <p>Hỗ trợ hơn 10 000</p>
          <p>khách hàng</p>
        </div>
      </div>
      <div className={`${containerStyle} bg-lightBlue mr-6 rounded-lg`}>
        <h2 className={H2Style}>Hồ sơ</h2>
        <img src="/test_info.svg" className={`object-fit max-w-[300px] max-h-[260px]`} />
        <div className={paragraphStyle}>
          <p>Hơn 3000 hồ sơ</p>
          <p>nhận được PR</p>
        </div>
      </div>
      <div className={`${containerStyle} bg-lightPink mr-0 rounded-lg`}>
        <h2 className={H2Style}>Tỷ lệ</h2>
        <img src="/test_info.svg" className={`object-fit max-w-[300px] max-h-[260px]`} />
        <div className={paragraphStyle}>
          <p>97% tỷ lệ đậu hồ sơ PR</p>
          <p>và Visa du học</p>
        </div>
      </div>
    </section>
  )
}

export default TagInfoGroups
