import { TComponent } from "../../utils/types";
import SashRibbon from "./SashRibbon";

type TSubComponent = {
	SashRibbon: typeof SashRibbon;
};

const Banner: TComponent & TSubComponent = () => {
	return (
		<section className="banner">
			<div className="banner-container relative">
				<video
					src="/assets/videos/canada-video.mp4"
					className="object-cover w-full h-[60vh] sm:h-fit"
					autoPlay
					muted
					loop
					playsInline></video>
				<div className="sash-ribbon-wrap w-full h-[7.5%] sm:h-[10%] bg-white absolute bottom-[10%] flex flex-row overflow-hidden">
					<Banner.SashRibbon key={1} />
					<Banner.SashRibbon key={2} />
				</div>
				<div className="title-container flex flex-col text-white absolute top-[30%] sm:top-[20%] left-[20%] sm:left-auto right-auto sm:right-[10%] text-xl sm:text-4xl sm:text- font-medium">
					<span className="title">Start your new journey</span>
					<span className="title">in Canada with</span>
					<span className="title">Can Immigration Vietnam</span>
				</div>
			</div>
		</section>
	);
};

Banner.SashRibbon = SashRibbon;

export default Banner;
