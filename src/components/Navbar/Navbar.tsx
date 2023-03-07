import React, { useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap/dist/gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { HEIGHT, LINKS } from "./setting";
import STYLE_GROUPS from "../../utils/styles";

const Navbar = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollToPlugin);
	}, []);

	const [isOutBound, setIsOutBound] = useState<boolean>(false);
	const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
	const [isScrollUp, setIsScrollUp] = useState<boolean>(true);
	const [isActive, setIsActive] = useState<boolean>(false);
	const [isContrastStyle, setIsContrastStyle] = useState<boolean>(false);

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
	}, [prevScrollPos]);

	useEffect(() => {
		if (isOutBound) {
			setIsContrastStyle(true);
		} else {
			setIsContrastStyle(false);
			if (isActive) {
				setIsContrastStyle(true);
			}
		}
	}, [isOutBound, isActive]);

	return (
		<div
			id="navbar"
			className={`flex flex-col z-10 w-full ${isScrollUp ? "show" : "hide"} ${isOutBound ? "fixed" : "absolute"}`}>
			<div className={`${STYLE_GROUPS.flexCenter} ${isContrastStyle ? "bg-white" : "bg-transparent"} px-6 sm:px-8 py-2`}>
				<nav className="w-full flex justify-between items-center">
					<div className="image-container">
						<div className={`${!isContrastStyle && "hidden"} logo-red-container h-12 relative`}>
							<Image
								src="/logo/logo_red.svg"
								alt="logo"
								fill
								unoptimized
								sizes=""
								className="!relative"
							/>
						</div>
						<div className={`${isContrastStyle && "hidden"} logo-white-container h-12 relative`}>
							<Image
								src="/logo/logo_white.svg"
								alt="logo"
								fill
								unoptimized
								sizes=""
								className="!relative"
							/>
						</div>
					</div>
					<div
						className={`hamburger ${isContrastStyle ? "before:bg-black after:bg-black" : "before:bg-white after:bg-white"} block sm:hidden w-8 relative`}
						onClick={() => setIsActive(!isActive)}></div>
					<ul className="hidden sm:flex flex-row flex-1 items-center justify-end">
						{LINKS.map((link) => (
							<li
								className={`${isOutBound ? "font-semibold text-black" : "font-normal text-white"} uppercase cursor-pointer text-xl text-center mx-5 last:mx-0`}
								key={link.id}>
								<a
									onClick={() => {
										gsap.to(window, {
											scrollTo: `#${link.id}`,
										});
									}}>
									{link.title}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<ul className={`${isActive ? "flex" : "hidden"} sm:hidden sm-nav flex-col bg-white px-6 py-10`}>
				{LINKS.map((link) => (
					<li
						className="font-semibold text-black uppercase cursor-pointer text-xl my-1"
						key={link.id}>
						<a
							onClick={() => {
								gsap.to(window, {
									scrollTo: `#${link.id}`,
								});
							}}>
							{link.title}
						</a>
					</li>
				))}
			</ul>
			<div className={`${STYLE_GROUPS.flexCenter} ${isOutBound || isActive ? "bg-red-600 w-[95%] h-1 self-center" : "bg-white w-[100%] h-[2px]"}`}></div>
		</div>
	);
};

export default Navbar;
