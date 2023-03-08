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

	const fieldContainer = "field-container my-8";

	return (
		<section id="consultation">
			<div className="consultation-container grid grid-cols-4 grid-rows-2 my-17.5 md:my-25 mx-15 md:mx-8">
				<div className="image-container lg:row-span-2 rounded-r-[30px] overflow-hidden">
					<img
						src="assets/consultation/banner.jpg"
						alt="banner.jpg"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="title-container col-span-3 flex flex-col justify-center items-center text-center text-strongPink">
					<span className="title text-[40px] md:text-[80px] font-bold uppercase">Tư vấn miễn phí</span>
					<div className="description-container flex flex-col mx-4">
						<span className="description md:text-3xl md:leading-[38px] font-semibold">Hãy để chuyên viên tư vấn của Can Immigration Vietnam</span>
						<span className="description md:text-3xl md:leading-[38px] font-semibold">giúp bạn chinh phục giấc mơ đặt chân đến Canada nhé!</span>
					</div>
				</div>
				<div className="form-container lg:col-start-2 col-span-full lg:col-span-3 lg:mx-17.5">
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
					<div className="button-container flex justify-center mt-10 md:mt-16">
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
