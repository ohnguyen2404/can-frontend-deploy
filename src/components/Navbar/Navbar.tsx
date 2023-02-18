import React, { useState, useEffect } from "react";
import { HEIGHT } from "./setting";
import STYLE_GROUPS from "../../utils/styles";
import { TComponent } from "../../utils/types";
import NavbarCore from "./NavbarCore";

type TSubComponent = {
	NavbarCore: typeof NavbarCore;
};

const Navbar: TComponent & TSubComponent = () => {
	const [isOutBound, setIsOutBound] = useState<boolean>(false);
	const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
	const [isScrollUp, setIsScrollUp] = useState<boolean>(true);

	const handleScroll = () => {
		const currentScrollPos = window.scrollY;

		if (currentScrollPos > prevScrollPos) {
			setIsScrollUp(false);
		} else {
			setIsScrollUp(true);
		}

		setPrevScrollPos(currentScrollPos);

		if (currentScrollPos <= HEIGHT / 10) {
			setIsOutBound(false);
		} else {
			setIsOutBound(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<div className={`z-10 w-full flex flex-col navbar ${isScrollUp ? "show" : "hide"} ${isOutBound ? "fixed" : "absolute"}`}>
			<div className={`px-8 py-2 ${STYLE_GROUPS.flexCenter} ${isOutBound ? "bg-white" : "bg-transparent"}`}>
				<Navbar.NavbarCore
					isOutBound={isOutBound}
				/>
			</div>
			<div className={` ${STYLE_GROUPS.flexCenter} ${isOutBound ? "bg-red-600 w-[94%] h-[6px] self-center" : "bg-white w-[100%] h-[2px]"}`}></div>
		</div>
	);
};

Navbar.NavbarCore = NavbarCore;

export default Navbar;
