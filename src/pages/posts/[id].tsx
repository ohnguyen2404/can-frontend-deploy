import { GetServerSideProps } from "next";
import { getPostById } from "../../services/facebook-api";

export type TPost = {
	id: string;
	createdTime: string;
	message: string;
	imgUrl: string;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const postInfo = await getPostById(params!["id"]);

	console.log("1111postInfo", postInfo);

	try {
		return {
			props: {},
		};
	} catch (err) {
		console.log("__posts/[id].tsx getServerSideProps error: ", err);
		return {
			props: { post: {} },
		};
	}
};

export default function Post() {
	return (
		<div className="w-full">
			<div className="flex flex-col w-[80%] mx-auto">
				<span className="text-2xl text-gray-400 font-semibold">13/02/2023</span>
				<div className="w-[80%] flex flex-col items-center text-center mt-2 mx-auto">
					<span className="text-4xl font-bold uppercase mb-8">Top những lý do vì sao nên cho bé tham gia chương trình trại hè Canada 2023</span>
					<img
						className="object-fit rounded-3xl mb-8"
						src="/assets/programGroups/dinhcu.jpg"
					/>
					<span className="text-xl text-left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ligula sit amet velit volutpat dignissim vitae sit amet arcu. Morbi porttitor, felis a malesuada commodo, orci purus varius ex, vel gravida ante ante eget ipsum. Nullam molestie ex quam, eu ultricies velit lacinia egestas. Phasellus volutpat ipsum justo, nec elementum risus fermentum eu. Integer ultrices metus nec ante tincidunt ultricies. Pellentesque vulputate sem ac faucibus interdum. Nulla bibendum vitae lacus non iaculis. Pellentesque vel efficitur diam, at finibus odio. Nulla aliquam elementum iaculis. Nullam rhoncus ut elit in laoreet. Cras id eros in ante accumsan rhoncus eget aliquam est. Cras sed lacus quis nibh facilisis lacinia. Mauris ac pulvinar ex, nec porta diam. Etiam vitae lectus facilisis, faucibus purus id, placerat odio. Nam efficitur vehicula lectus, quis rhoncus felis ultrices vel. Fusce elit elit, tincidunt ut venenatis ut, fringilla vitae dolor. Sed vel orci mattis, vehicula
						eros eu, finibus sem. Mauris ornare justo ex, eu posuere urna sollicitudin vel. Suspendisse eu sagittis nisl. Suspendisse lacinia urna sed leo elementum, non hendrerit diam posuere. Praesent lorem magna, aliquam in ultrices et, condimentum non odio. Aliquam consectetur, turpis vel porta dapibus, risus odio eleifend libero, non scelerisque ante dolor non lorem. Nullam sit amet viverra massa. Cras tellus sapien, elementum vitae ex eget, ullamcorper cursus diam. Curabitur sollicitudin tortor arcu, a dignissim risus vulputate ut. Donec laoreet orci et pretium hendrerit. Morbi ex diam, laoreet at ornare eget, consectetur at ipsum. Ut facilisis pretium urna, quis rhoncus velit consequat a. Morbi molestie, mi ut pellentesque commodo, nibh massa ultrices lacus, et vehicula mi metus eget turpis. Sed id volutpat velit, eu malesuada arcu. Duis pharetra tempor pretium. Vivamus consectetur ut ligula ut tincidunt. Quisque ultrices turpis in orci bibendum, at fermentum sapien
						malesuada. Nulla facilisi. Donec eleifend dictum diam id bibendum. Maecenas ultrices metus vel libero rutrum ultrices. Curabitur a pretium erat, ut condimentum leo. Pellentesque feugiat egestas augue, vitae placerat tortor commodo non. Aliquam erat volutpat. Cras vel neque justo. Donec tempus sodales tincidunt. Suspendisse ultricies nec ex vel placerat.
					</span>
				</div>
			</div>
		</div>
	);
}
