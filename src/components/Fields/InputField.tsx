import React, { Dispatch, HTMLInputTypeAttribute } from "react";

type TInputField = {
	placeHolder?: string;
	type: HTMLInputTypeAttribute;
	isRequired?: boolean;
	handleChangeValue: Dispatch<React.SetStateAction<any | undefined>>;
};

const InputField = (props: TInputField) => {
	return (
		<input
			type={props.type}
			placeholder={props.placeHolder}
			onChange={(event) => props.handleChangeValue(event.target.value)}
			className="w-full border-b-[1px] border-strongPink text-strongPink placeholder-strongPink text-xl font-medium focus:outline-none focus:placeholder:text-transparent"
		/>
	);
};

export default InputField;
