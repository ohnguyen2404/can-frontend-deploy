import Head from "next/head";
import Image from "next/image";
import STYLE_GROUPS from "../utils/styles";
import { Banner, Navbar, TagInfoGroups, SeasonalProjectGroups, ProgramGroups } from "../components";

export default function Home() {
	return (
		<div className="bg-indigo-400 w-full h-[2800px]">
			<Head>
				<title>CANIMMVN</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<Navbar />
			<Banner />
			<TagInfoGroups />
			<SeasonalProjectGroups />
			<ProgramGroups/>
			<div
				id="tool-kit"
				className="text-white"></div>
		</div>
	);
}
