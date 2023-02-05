import { useState } from "react";
import InputField from "../../Fields/InputField";
import TitleButton from "../../Buttons/TitleButton";
import DateField from "../../Fields/DateField";

const InternationalInsuranceForm = () => {
	const [name, setName] = useState<string>("");
	const [isDisplayNameError, setIsDisplayNameError] = useState<boolean>(false);
	const [birthday, setBirthday] = useState<string>("");
	const [isDisplayBirthdayError, setIsDisplayBirthdayError] = useState<boolean>(false);
	const [insurancePeriod, setInsurancePeriod] = useState<string>("");
	const [isDisplayinsurancePeriodError, setIsDisplayinsurancePeriodError] = useState<boolean>(false);
	const [phone, setPhone] = useState<string>("");
	const [isDisplayPhoneError, setIsDisplayPhoneError] = useState<boolean>(false);
	const [address, setAddress] = useState<string>("");
	const [isDisplayAddressError, setIsDisplayAddressError] = useState<boolean>(false);
	const [email, setEmail] = useState<string>("");
	const [isDisplayEmailError, setIsDisplayEmailError] = useState<boolean>(false);

	const fieldContainer = "field-container my-5";

	const handleSubmit = () => {};

	return (
		<div className="international-insurance-form-container flex flex-row justify-center">
			<div className="image-container w-[35%] bg-no-repeat bg-center bg-cover rounded-[30px] -mr-[1.5%]"></div>
			<div className="form-container w-[65%] px-[5%] py-8 bg-white rounded-[30px] -ml-[1.5%]">
				<div className="title-container">
					<span className="title font-extrabold text-5xl text-strongPink uppercase">Đăng ký việc làm định cư</span>
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
								placeHolder="Ngày sinh"
								errorMessage="Ngày sinh chưa phù hợp"
								isRequired={true}
								isDisplayErrorMessage={isDisplayBirthdayError}
								handleChangeValue={setBirthday}
							/>
						</div>
						<div className={fieldContainer}>
							<DateField
								placeHolder="Thời gian bảo hiểm"
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
	);
};
export default InternationalInsuranceForm;
