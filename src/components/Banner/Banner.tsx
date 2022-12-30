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
			<div className="sash-ribbon-wrap w-full h-[10%] bg-white absolute bottom-[10%] flex flex-row overflow-hidden">
				<Banner.SashRibbon />
				<Banner.SashRibbon />
			</div>
			<div className="title-container flex flex-col text-white absolute top-[20%] right-[10%] text-4xl font-medium">
				<span className="title">
					Start your new journey
				</span>
				<span className="title">
					in Canada with
				</span>
				<span className="title">
					Can Immigration Vietnam
				</span>
			</div>
		</div>
	);
};

Banner.SashRibbon = SashRibbon;

export default Banner;
