import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LINKS } from "./setting";

type TNavbarCore = {
	isOutBound: boolean;
};

const NavbarCore = (props: TNavbarCore) => {
	const router = useRouter();
	const currentPath = router.asPath;
	const [textColor, setTextColor] = useState<"white" | "black">("white");

	useEffect(() => {
		if (props.isOutBound) {
			setTextColor("black");
		} else {
			setTextColor("white");
		}
	}, [props.isOutBound]);

	return (
		<nav className={`w-full flex justify-between items-center`}>
			<div className="image-container">
				<div className={`${textColor === "white" && "hidden"} logo-red-container h-12 relative`}>
					<Image
						src="/logo/logo_red.svg"
						alt="logo"
						fill
						unoptimized
						sizes=""
						className="!relative"
					/>
				</div>
				<div className={`${textColor === "black" && "hidden"} logo-white-container h-12 relative`}>
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
			<ul className="flex flex-row flex-1 items-center justify-end">
				{LINKS.map((link, index) => (
					<li
						className={`uppercase cursor-pointer text-xl text-${textColor} ${textColor === "black" ? "font-semibold" : "font-normal"} ${index === LINKS.length - 1 ? "mr-0" : "mr-10"} ${currentPath.includes(link.id) && `p-2 border-2 border-${textColor} rounded-full`}`}
						key={link.id}>
						<a
							onClick={() => {
								router.push(`#${link.id}`);
							}}>
							{link.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavbarCore;
