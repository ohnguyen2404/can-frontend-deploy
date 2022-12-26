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
			<div className="w-full h-[5vw] bg-white absolute bottom-[4vw] flex flex-row">
				<Banner.SashRibbon />
				<Banner.SashRibbon />
			</div>
		</div>
	);
};

Banner.SashRibbon = SashRibbon;

export default Banner;
