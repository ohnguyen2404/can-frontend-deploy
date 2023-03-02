import React, { useState } from "react";
import { isEmailValid, isPhoneValid } from "../../utils/validator";
import TitleButton from "../Buttons/TitleButton";
import InputField from "../Fields/InputField";
import axios from "axios";
import { TConsultationForm } from "./types";
import { v4 as uuidv4 } from "uuid";

const Consultation = () => {
	const [name, setName] = useState<string>();
	const [isDisplayNameError, setIsDisplayNameError] = useState<boolean>(false);
	const [email, setEmail] = useState<string>();
	const [isDisplayEmailError, setIsDisplayEmailError] = useState<boolean>(false);
	const [phone, setPhone] = useState<string>();
	const [isDisplayPhoneError, setIsDisplayPhoneError] = useState<boolean>(false);

	const fieldContainer = "field-container my-8";

	const handleSubmit = async () => {
		setIsDisplayNameError(false);
		setIsDisplayEmailError(false);
		setIsDisplayPhoneError(false);
		if (!name) {
			setIsDisplayNameError(true);
			return;
		}
		if (!email || !isEmailValid(email)) {
			setIsDisplayEmailError(true);
			return;
		}
		if (!phone || !isPhoneValid(phone)) {
			setIsDisplayPhoneError(true);
			return;
		}

		await axios
			.post("api/submitConsultation", {
				id: uuidv4(),
				name: name,
				email: email,
				phone: phone,
			} as TConsultationForm)
			.then((response) => {
				console.log("response");
				console.log(response);
			})
			.catch((error) => {
				console.log("error");
				console.log(error);
			});
	};

	return (
		<section id="consultation">
			<div className="consultation-container grid grid-cols-4 grid-rows-2 my-high mx-8">
				<div className="image-container col-span-1">
					<img
						src="assets/consultation.jpg"
						alt="consultation.jpg"
					/>
				</div>
				<div className="title-container col-span-3 flex flex-col justify-center text-center text-strongPink">
					<span className="title text-[80px] font-bold uppercase">Tư vấn miễn phí</span>
					<span className="description text-3xl leading-[38px] font-semibold mx-high">Hãy để chuyên viên tư vấn của Can Immigration Vietnam giúp bạn chinh phục giấc mơ đặt chân đến Canada nhé!</span>
				</div>
				<div className="form-container col-span-3 col-start-2 mx-medium">
					<div className="group-field-container">
						<div className={fieldContainer}>
							<InputField
								type="text"
								placeHolder="Họ & tên"
								errorMessage="Họ & tên chưa phù hợp"
								isRequired={true}
								isDisplayErrorMessage={isDisplayNameError}
								handleChangeValue={setName}
							/>
						</div>
						<div className={fieldContainer}>
							<InputField
								type="email"
								placeHolder="Email"
								errorMessage="Email chưa phù hợp"
								isRequired={true}
								isDisplayErrorMessage={isDisplayEmailError}
								handleChangeValue={setEmail}
							/>
						</div>
						<div className={fieldContainer}>
							<InputField
								type="tel"
								placeHolder="Số điện thoại"
								errorMessage="Số điện thoại chưa phù hợp"
								isRequired={true}
								isDisplayErrorMessage={isDisplayPhoneError}
								handleChangeValue={setPhone}
							/>
						</div>
					</div>
					<div className="button-container flex justify-center mt-16">
						<TitleButton
							buttonColor="strongPink"
							title="Đặt hẹn"
							handleOnClick={handleSubmit}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Consultation;
