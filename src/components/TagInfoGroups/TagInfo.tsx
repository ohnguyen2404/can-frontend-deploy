import STYLE_GROUPS from "../../utils/styles";

export type supportBgColors = "blue" | "pink";

export type TTagInfo = {
	header: string;
	imgSrc: string;
	bgColor: supportBgColors;
	listContent: string[];
};

export type TBgStyles = {
	[key in supportBgColors]: string;
};

const bgStyles: TBgStyles = {
	blue: "bg-lightBlue blue-container",
	pink: "bg-lightPink pink-container",
};

const TagInfo = (props: TTagInfo) => {
	const containerStyle = `${STYLE_GROUPS.flexCenter} flex flex-col flex-1 justify-between rounded-lg tag-info-group shadow-lg`;
	const paragraphStyle = "text-center border-[1px] border-t-gray-400 border-transparent my-8 pt-2 w-[90%] text-xl truncate leading-5";
	const H2Style = `my-8 text-3xl font-semibold ${props.bgColor === "blue" ? "text-strongBlue" : "text-strongPink"}`;
	return (
		<div className={`${containerStyle} ${bgStyles[props.bgColor]} mr-6 rounded-lg min-h-[260px]`}>
			<h2 className={H2Style}>{props.header}</h2>
			<img
				src={`${props.imgSrc}`}
				className={`object-contain max-w-[300px] max-h-[260px]`}
			/>
			<div className={paragraphStyle}>
				{props.listContent.map((item, idx) => {
					return <p key={idx}>{item}</p>;
				})}
			</div>
		</div>
	);
};

export default TagInfo;
