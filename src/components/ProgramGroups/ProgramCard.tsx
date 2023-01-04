import CircleButton from "../Buttons/CircleButton";

type TProgramCard = {
	imgSrc: string;
	imgAlt?: string;
	title?: string;
};

const ProgramCard = (props: TProgramCard) => {
	return (
		<div className="program-card-container w-1/3 h-[55vw] relative">
			<img
				src={props.imgSrc}
				alt={props.imgAlt}
				className="aspect-[3/5]"
			/>
			<div className="title-container flex flex-row justify-center items-center absolute bottom-[5%] left-[5%]">
				<span className="title text-4xl font-bold uppercase text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.9)] mx-1 mb-1">{props.title}</span>
				<div className="button-container mx-2">
					<CircleButton />
				</div>
			</div>
		</div>
	);
};

export default ProgramCard;
