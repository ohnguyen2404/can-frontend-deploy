import React from "react";

const CircleArrow = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1}
			stroke="currentColor"
			className="w-7 h-7 border-[1px] ml-2 p-1 border-black rounded-full cursor-pointer hover:bg-strongPink hover:text-white hover:border-transparent">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
			/>
		</svg>
	);
};

export default CircleArrow;
