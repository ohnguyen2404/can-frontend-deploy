import STYLE_GROUPS from "../../utils/styles"
import TagInfoGroups from "./TagInfoGroups"

export type TTagInfo = {
    header: string,
    imgSrc: string,
    listContent: string[],
}

const TagInfo = (props: TTagInfo) => {
    const containerStyle = `${STYLE_GROUPS.flexCenter} flex flex-col flex-1 justify-between rounded-lg tag-info-group shadow-lg`;
    const paragraphStyle = "text-center border-[1px] border-t-gray-400 border-transparent my-8 pt-2 w-[90%] text-xl truncate";
    const H2Style = "my-8 text-3xl font-semibold";
    return (
        <div className={`${containerStyle} bg-lightBlue blue-container mr-6 rounded-lg min-h-[260px]`}>
            <h2 className={H2Style}>
                {props.header}
            </h2>
            <img src={`${props.imgSrc}`} className={`object-contain max-w-[300px] max-h-[260px]`} />
            <div className={paragraphStyle}>
                {props.listContent.map((item) => {
                    return <p>
                        {item}
                    </p>
                })}
            </div>
        </div>
    )
}

export default TagInfo;