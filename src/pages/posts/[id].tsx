import { GetStaticProps } from "next";
import { getPostById, getPageNews } from "../../services/facebook-api";
import { formatDate, formatNewsTitle } from "../../utils/helper";
import { Navbar, Footer } from "../../components";

export type TPost = {
	id: string;
	createdTime: string;
	message: string;
	imgUrl: string;
};

type TFBPost = {
	post: TPost;
};

export async function getStaticPaths() {
	const paths = (await getPageNews()).map((post) => {
		return {
			params: { id: post.id },
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		return {
			props: {
				post: await getPostById(params!["id"]),
			},
		};
	} catch (err) {
		console.log("__posts/[id].tsx getStaticProps error: ", err);
		return {
			props: { post: {} },
		};
	}
};

export default function FBPost({ post }: TFBPost) {
	const title = formatNewsTitle(post.message);
	const paragraphs = post.message.split("\n");

	return (
		<div className="w-full">
			<Navbar isDynamic={false} />
			<div className={`h-[80px]`} />
			<div className="w-[60%] flex flex-col items-left mt-8 mx-auto">
				<span className="text-7xl font-bold uppercase mb-6 text-center">{title}</span>
				<span className="text-2xl font-semibold uppercase mb-6 text-center">{formatDate(new Date(post.createdTime))}</span>
				<img
					className="object-fit rounded-3xl mb-16"
					src={post.imgUrl}
				/>
				{paragraphs.map((paragraph) => (
					<span className="text-xl">{paragraph}</span>
				))}
			</div>
			<Footer />
		</div>
	);
}
