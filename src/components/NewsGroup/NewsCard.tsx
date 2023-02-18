import React from "react";

export type TNewsCard = {
	imgUrl: string;
	isSelected: boolean;
	handleOnClick: () => void;
	newsLength: number;
	idx: number;
};

const NewsCard = ({ imgUrl, isSelected, handleOnClick, newsLength, idx }: TNewsCard) => {
	return (
		<img
			onClick={handleOnClick}
			className={`w-[332px] h-[380px] object-fit ${idx !== newsLength - 1 && "mr-2"} ${isSelected && "selected-news-card"} cursor-pointer opacity-60`}
			src={imgUrl}
		/>
	);
};

export default NewsCard;
