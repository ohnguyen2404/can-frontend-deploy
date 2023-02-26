export type supportBgColors = "blue" | "pink";

export type TTagInfo = {
	header: string;
	imgSrc: string;
	imgAlt: string;
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
	return (
		<div className={`tag-info ${bgStyles[props.bgColor]} flex flex-col w-full justify-between items-center mx-3 rounded-lg shadow-lg`}>
			<h2 className={`${props.bgColor === "blue" ? "text-strongBlue" : "text-strongPink"} my-8 text-3xl font-semibold`}>{props.header}</h2>
			<div className="image-container w-3/4">
				<img
					src={props.imgSrc}
					alt={props.imgAlt}
					className="object-contain"
				/>
			</div>
			<div className="paragraph-container text-center border border-t-gray-400 border-transparent my-8 pt-2 w-[90%] text-xl leading-5">
				{props.listContent.map((item, idx) => {
					return <p key={idx}>{item}</p>;
				})}
			</div>
		</div>
	);
};

export default TagInfo;
