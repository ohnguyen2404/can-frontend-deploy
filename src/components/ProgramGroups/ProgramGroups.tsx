import { Direction } from "../../utils/types";
import { TComponent } from "../../utils/types";
import CircleButton from "../Buttons/CircleButton";
import LongButton from "../Buttons/LongButton";
import TitleButton from "../Buttons/TitleButton";
import ProgramCard from "./ProgramCard";

type TSubComponent = {
	ProgramCard: typeof ProgramCard;
};

const ProgramGroups: TComponent & TSubComponent = () => {
	return (
		<div className="program-group-container flex flex-row">
            <ProgramGroups.ProgramCard imgSrc="assets/example.jpg" title="hahe hahe"/>
            <ProgramGroups.ProgramCard imgSrc="assets/example.jpg" title="hahe hahe"/>
            <ProgramGroups.ProgramCard imgSrc="assets/example.jpg" title="hahe hahe"/>
		</div>
	);
};

ProgramGroups.ProgramCard = ProgramCard;

export default ProgramGroups;
