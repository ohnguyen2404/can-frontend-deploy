import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LINKS } from "../../utils/settings";

type TNavbarCore = {
	isOutBound: boolean;
};

const NavbarCore = (props: TNavbarCore) => {
	const router = useRouter();
	const currentPath = router.asPath;
	const [textColor, setTextColor] = useState<"white" | "black">("white");
	const [logoColor, setLogoColor] = useState<"white" | "red" | "blue">("white");

	useEffect(() => {
		if (props.isOutBound) {
			setTextColor("black");
			setLogoColor("red");
		} else {
			setTextColor("white");
			setLogoColor("white");
		}
	}, [props.isOutBound]);

	return (
		<nav className={`w-full flex justify-between items-center`}>
			<Image
				src={`/logo_${logoColor}.png`}
				alt="logo"
				width={75}
				height={59}
			/>
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
