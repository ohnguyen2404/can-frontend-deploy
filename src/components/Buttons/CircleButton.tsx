import { CSSProperties } from "react";

type TCircleButton = {
	handleOnClick?: () => void;
	buttonColor?: CSSProperties["color"];
};

const CircleButton = (props: TCircleButton) => {
    const buttonColor = props.buttonColor ? props.buttonColor : "black"
	return (
		<div
			className={`button circle-button border-${buttonColor} h-8 w-8 rounded-full border-[1px] flex items-center justify-center overflow-hidden`}
			onClick={props.handleOnClick}>
			<div className={`icon-container stroke-${buttonColor} w-2/5 h-2/5`}>
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

export default CircleButton;
