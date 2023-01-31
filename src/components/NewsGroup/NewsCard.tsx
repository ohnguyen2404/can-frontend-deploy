import React from "react";

export type TNewsCard = {
	imgUrl: string;
};

const NewsCard = ({ imgUrl }: TNewsCard) => {
	return (
		<img
			className="w-[332px] h-[380px] object-fit mr-2"
			src={imgUrl}
		/>
	);
};

export default NewsCard;
