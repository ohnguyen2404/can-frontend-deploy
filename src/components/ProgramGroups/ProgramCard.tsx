import { CSSProperties } from "react";
import CircleButton from "../Buttons/CircleButton";

export type TProgramInfo = {
	imgSrc: string;
	imgAlt?: string;
	title?: string;
};

export type TProgramCard = TProgramInfo & {
	width: CSSProperties["width"];
	id: number;
};

const ProgramCard = (props: TProgramCard) => {
	return (
		<div
			id={`card-${props.id}`}
			className="program-card-container aspect-[3/4] relative"
			style={{
				width: props.width,
				zIndex: props.id + 1,
			}}>
			<img
				src={props.imgSrc}
				alt={props.imgAlt}
				className="w-full h-full object-fill"
			/>
			<div className="title-container flex flex-row justify-center items-center absolute bottom-[5%] left-[5%]">
				<span className="title text-4xl font-bold uppercase text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.9)] mx-1 mb-1">{props.title}</span>
				<div className="button-container mx-2">
					<CircleButton buttonColor="white" />
				</div>
			</div>
		</div>
	);
};

export default ProgramCard;
