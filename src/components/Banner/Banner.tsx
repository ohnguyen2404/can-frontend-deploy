import { TComponent } from "../../utils/types";
import Navbar from "../Navbar/Navbar";
import SashRibbon from "./SashRibbon";

type TSubComponent = {
	SashRibbon: typeof SashRibbon;
};

const Banner: TComponent & TSubComponent = () => {
	return (
		<div className="banner w-full relative">
			<video
				src="https://canimmvn.com/welcome.mp4"
				className="w-full"
				autoPlay
				muted
				loop
				playsInline></video>
			<div className="sash-ribbon-wrap w-full h-[7vw] bg-white absolute bottom-[10%] flex flex-row overflow-hidden">
				<Banner.SashRibbon />
				<Banner.SashRibbon />
			</div>
		</div>
	);
};

Banner.SashRibbon = SashRibbon;

export default Banner;
