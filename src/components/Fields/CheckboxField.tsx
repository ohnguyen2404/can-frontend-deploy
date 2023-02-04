import React, { Dispatch } from "react";

type TCheckboxField = {
	id: string;
	label: string;
	handleChangeValue: Dispatch<React.SetStateAction<any | undefined>>;
};

const CheckboxField = (props: TCheckboxField) => {
	return (
		<div className="checkbox-field-container flex items-center">
			<input
				type="checkbox"
				id={props.id}
				name={props.label}
				onChange={(event) => props.handleChangeValue(event.target.value)}
				className="w-4 h-4"
			/>
			<label
				htmlFor={props.id}
				className="label font-medium text-strongPink text-xl mx-2">
				{props.label}
			</label>
		</div>
	);
};

export default CheckboxField;
