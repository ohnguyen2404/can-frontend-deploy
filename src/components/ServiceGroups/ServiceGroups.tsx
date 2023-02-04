import React, { useContext } from "react";
import { TComponent } from "../../utils/types";
import SubServiceSection from "./SubServiceSection";
import ModalContext from "../Toolkits/Modal/ModalContext";

type TSubComponent = {
	SubServiceSection: typeof SubServiceSection;
};

const ServiceGroups: TComponent & TSubComponent = () => {
	const modalContext = useContext(ModalContext);
	return (
		<section id="service-groups">
			<div className="sub-section title-section uppercase">Dịch vụ</div>
			<div className="sub-section school-registration"></div>
			<div className="sub-section settlement-job"></div>
			<div className="sub-section international-insurance"></div>
			<SubServiceSection/>
		</section>
	);
};

ServiceGroups.SubServiceSection = SubServiceSection;

export default ServiceGroups;
