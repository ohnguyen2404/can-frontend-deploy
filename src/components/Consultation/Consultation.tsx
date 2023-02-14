import React, { useState } from "react";
import { isEmailValid, isPhoneValid } from "../../utils/validator";
import TitleButton from "../Buttons/TitleButton";
import InputField from "../Fields/InputField";

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
		await fetch("api/sendmail", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				subject: `Yêu cầu Tư vấn miễn phí của "${name}"`,
				html: `<!DOCTYPE html>
				<html>
				<head>
					<title></title>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<style type="text/css">
						body {
							height: 100% !important;
							margin: 0 !important;
							padding: 0 !important;
							width: 100% !important;
						}
						.title-form {
							text-align: center;
							font-weight: 700;
							font-size: 36px;
							text-transform: uppercase;
							color: rgb(206, 56, 50);
						}
						.form-container {
							border-style: dashed;
							border-width: 1px;
							border-color: rgb(206, 56, 50);
							max-width: 500px;
							margin: auto;
							display: grid;
							padding: 16px;
							font-size: 18px;
							font-weight: 400;
							line-height: 28px;
						}
						.form-container tr {
							padding: 4px;
						}
					</style>
				</head>
				<body>
					<h2 class="title-form">TƯ VẤN MIỄN PHÍ</h2>
					<div class="form-container">
						<table>
							<tr>
								<td class="name">
									Họ & tên:
								</td>
								<td class="info-name">
									${name}
								</td>
							</tr>
							<tr>
								<td class="email">
									Email:
								</td>
								<td class="info-email">
									${email}
								</td>
							</tr>
							<tr>
								<td class="phone">
									Số điện thoại:
								</td>
								<td class="info-phone">
									${phone}
								</td>
							</tr>
						</table>
					</div>
				</body>
				</html>`,
			}),
		});
	};

	return (
		<section id="consultation">
			<div className="consultation-container grid grid-cols-4 grid-rows-2 my-16 px-6">
				<div className="image-container col-span-1">
					<img
						src="assets/consultation.jpg"
						alt="consultation.jpg"
					/>
				</div>
				<div className="title-container col-span-3 flex flex-col justify-center text-center text-strongPink">
					<span className="title text-[80px] font-bold uppercase">Tư vấn miễn phí</span>
					<span className="description text-[32px] leading-[38px] font-semibold mx-[10%]">Hãy để chuyên viên tư của Can Immigration Vietnam giúp bạn chinh phục giấc mơ đặt chân đến Canada nhé!</span>
				</div>
				<div className="form-container col-span-3 col-start-2">
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
