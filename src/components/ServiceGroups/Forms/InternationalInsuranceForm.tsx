import { useContext, useState } from "react";
import InputField from "../../Fields/InputField";
import TitleButton from "../../Buttons/TitleButton";
import DateField from "../../Fields/DateField";
import { TInternationalInsuranceForm } from "../types";
import { isEmailValid, isPhoneValid } from "../../../utils/validator";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import StateModal from "../../Toolkits/Modal/StateModal";
import { State } from "../../../utils/types";
import React from "react";
import FormContext from "./FormContext";

const InternationalInsuranceForm = () => {
	const TITLE = "Bảo hiểm quốc tế";
	const TIME_STATE_PRESENT = 3000;

	const [name, setName] = useState<TInternationalInsuranceForm["name"]>();
	const [isDisplayNameError, setIsDisplayNameError] = useState<boolean>(false);
	const [doB, setDoB] = useState<TInternationalInsuranceForm["doB"]>();
	const [isDisplayDoBError, setIsDisplayDoBError] = useState<boolean>(false);
	const [insurancePeriod, setInsurancePeriod] = useState<TInternationalInsuranceForm["insurancePeriod"]>();
	const [isDisplayinsurancePeriodError, setIsDisplayinsurancePeriodError] = useState<boolean>(false);
	const [phone, setPhone] = useState<TInternationalInsuranceForm["phone"]>();
	const [isDisplayPhoneError, setIsDisplayPhoneError] = useState<boolean>(false);
	const [address, setAddress] = useState<TInternationalInsuranceForm["address"]>();
	const [isDisplayAddressError, setIsDisplayAddressError] = useState<boolean>(false);
	const [email, setEmail] = useState<TInternationalInsuranceForm["email"]>();
	const [isDisplayEmailError, setIsDisplayEmailError] = useState<boolean>(false);

	const formContext = useContext(FormContext);
	const [mirrorState, setMirrorState] = useState<State>(formContext!.state);

	const handleSubmit = async () => {
		setIsDisplayNameError(false);
		setIsDisplayEmailError(false);
		setIsDisplayPhoneError(false);
		setIsDisplayDoBError(false);
		setIsDisplayinsurancePeriodError(false);
		setIsDisplayAddressError(false);
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

		setMirrorState(State.LOADING);
		formContext?.setState(State.LOADING);

		await axios
			.post("api/submitInternationalInsuranceForm", {
				id: uuidv4(),
				name: name,
				doB: doB,
				insurancePeriod: insurancePeriod,
				phone: phone,
				address: address,
				email: email,
			})
			.then((response) => {
				console.log("response");
				console.log(response);
				setMirrorState(State.SUCCESS);
				formContext?.setState(State.NONE);
				setTimeout(() => {
					setMirrorState(State.NONE);
				}, TIME_STATE_PRESENT);
			})
			.catch((error) => {
				console.log("error");
				console.log(error);
				setMirrorState(State.FAILURE);
				formContext?.setState(State.NONE);
				setTimeout(() => {
					setMirrorState(State.NONE);
				}, TIME_STATE_PRESENT);
			});
	};

	const fieldContainer = "field-container my-5";

	return (
		<div id="international-insurance">
			{mirrorState !== State.NONE ? (
				<StateModal
					name={TITLE}
					state={mirrorState}
				/>
			) : (
				<div className="international-insurance-form-container flex flex-row justify-center">
					<div className="image-container w-[35%] bg-no-repeat bg-center bg-cover rounded-[30px] -mr-[3%]"></div>
					<div className="form-container w-[65%] px-[5%] py-8 bg-white rounded-[30px] -ml-[3%]">
						<div className="title-container">
							<span className="title font-extrabold text-5xl text-strongPink uppercase">{TITLE}</span>
						</div>
						<div className="form-field-container">
							<div className="info-field-container">
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
									<DateField
										label="Ngày sinh"
										errorMessage="Ngày sinh chưa phù hợp"
										isRequired={true}
										isDisplayErrorMessage={isDisplayDoBError}
										handleChangeValue={setDoB}
									/>
								</div>
								<div className={fieldContainer}>
									<DateField
										label="Thời gian bảo hiểm"
										errorMessage="Thời gian bảo hiểm chưa phù hợp"
										isRequired={true}
										isDisplayErrorMessage={isDisplayinsurancePeriodError}
										handleChangeValue={setInsurancePeriod}
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
								<div className={fieldContainer}>
									<InputField
										type="text"
										placeHolder="Địa chỉ"
										errorMessage="Địa chỉ chưa phù hợp"
										isRequired={true}
										isDisplayErrorMessage={isDisplayAddressError}
										handleChangeValue={setAddress}
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
							</div>
							<div className={`${fieldContainer} mt-11`}>
								<span className="description font-medium text-xl text-strongPink">Sau khi đăng kí đầy đủ thông tin, CAN Immigration sẽ gửi email và cách thức thanh toán bảo hiểm.</span>
							</div>
							<div className={fieldContainer}>
								<TitleButton
									title="Gửi"
									buttonColor="strongPink"
									handleOnClick={handleSubmit}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default InternationalInsuranceForm;
