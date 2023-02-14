import Image from "next/image";

const ImageRunner = () => {
	return (
		<div className="image-runner h-full flex shrink-0 relative">
			{[...Array(59).keys()].map((idx) => (
				<span className="h-full w-fit flex shrink-0 items-center mx-[2vw]">
					<Image
						src={`/assets/approvalCases/image-${idx}.jpg`}
						alt={`approvalCases/image-${idx}.jpg`}
						width={382}
						height={531}
					/>
				</span>
			))}
		</div>
	);
};

export default ImageRunner;
