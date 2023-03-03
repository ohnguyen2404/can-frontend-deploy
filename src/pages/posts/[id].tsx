import { GetServerSideProps } from "next";
import { getPostById } from "../../services/facebook-api";
import { formatDate, formatNewsTitle } from "../../utils/helper";

export type TPost = {
	id: string;
	createdTime: string;
	message: string;
	imgUrl: string;
};

type TFBPost = {
	post: TPost;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	try {
		return {
			props: {
				post: await getPostById(params!["id"]),
			},
		};
	} catch (err) {
		console.log("__posts/[id].tsx getServerSideProps error: ", err);
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
			<div className="flex flex-col w-[80%] mx-auto">
				<span className="text-2xl text-gray-400 font-semibold">{formatDate(new Date(post.createdTime))}</span>
				<div className="w-[80%] flex flex-col items-left mt-2 mx-auto">
					<span className="text-4xl font-bold uppercase mb-8 text-center">{title}</span>
					<img
						className="object-fit rounded-3xl mb-8"
						src={post.imgUrl}
					/>
					{paragraphs.map((paragraph) => (
						<span className="text-xl">{paragraph}</span>
					))}
				</div>
			</div>
		</div>
	);
}
