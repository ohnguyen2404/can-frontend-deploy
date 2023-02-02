type TTitleButton = {
	buttonColor?: "strongPink" | "black";
	title: string;
	handleOnClick?: () => void;
};

const TitleButton = (props: TTitleButton) => {
	const buttonColor = props.buttonColor ? props.buttonColor : "black";

	return (
		<div
			className={`button title-button border-${buttonColor} w-fit h-10 px-7 rounded-full border-[1px] flex items-center justify-center overflow-hidden`}
			onClick={props.handleOnClick}>
			<span className={`text-${buttonColor} text-2xl align-middle mx-1 mb-1`}>{props.title}</span>
			<div className={`icon-container stroke-${buttonColor} w-[0.875rem] h-[0.875rem] mx-1`}>
				<svg
					viewBox="0 0 13 13"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M3 1H12V10"
						strokeLinejoin="round"
					/>
					<path
						d="M12 1L0.5 12.5"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
		</div>
	);
};

export default TitleButton;
