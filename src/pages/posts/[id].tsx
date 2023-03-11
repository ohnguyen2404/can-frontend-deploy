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
	const paragraphs = post.message.split("\n\n");
	return (
		<div className="w-full">
			<Navbar isDynamic={false} />
			<div className="post-container-wrap w-[80%] mx-auto mt-36 mb-6 md:mb-5">
				<div className="title-container text-center mb-6 md:mb-5">
					<span className="title text-[40px] md:text-[60px] lg:text-[80px] font-bold uppercase">{title}</span>
				</div>
				<div className="date-container w-fit mx-auto">
					<span className="text-2xl font-bold uppercase text-center">{formatDate(new Date(post.createdTime))}</span>
				</div>
			</div>
			<div className="image-container-wrap relative mb-10 md:mb-20 after:content-[''] after:absolute after:-z-10 after:w-full after:h-[100vh] after:bg-lightBlue after:bottom-1/2">
				<div className="image-container w-[90%] mx-auto">
					<img
						className="w-full h-full object-contain"
						src={post.imgUrl}
					/>
				</div>
			</div>
			<div className="post-container-wrap w-[80%] mx-auto">
				<div className="content-container w-[80%] mx-auto">
					{paragraphs.map((paragraph, index) => (
						<span
							key={index}
							className="block text-xl font-medium mb-4">
							{paragraph}
						</span>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}
