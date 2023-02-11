import { useState } from "react";
import InputField from "../../Fields/InputField";
import CheckboxField from "../../Fields/CheckboxField";
import SelectField from "../../Fields/SelectField";
import InputFileField from "../../Fields/InputFileField";
import TitleButton from "../../Buttons/TitleButton";
import { LIST_COLLEGE_SCHOOL, LIST_HIGH_SCHOOL_PRIVATE, LIST_HIGH_SCHOOL_PUBLIC, LIST_LANGUAGES_SCHOOL, LIST_UNIVERSITY_SCHOOL } from "../../../utils/settings";

const SchoolRegistrationForm = () => {
	const [name, setName] = useState<string>();
	const [isDisplayNameError, setIsDisplayNameError] = useState<boolean>(false);
	const [email, setEmail] = useState<string>();
	const [isDisplayEmailError, setIsDisplayEmailError] = useState<boolean>(false);
	const [phone, setPhone] = useState<string>();
	const [isDisplayPhoneError, setIsDisplayPhoneError] = useState<boolean>(false);
	const [semesterFirst, setSemesterFirst] = useState<boolean>(false);
	const [semesterSecond, setSemesterSecond] = useState<boolean>(false);
	const [semesterThird, setSemesterThird] = useState<boolean>(false);
	const [semesterFourth, setSemesterFourth] = useState<boolean>(false);
	const [major, setMajor] = useState<string>();
	const [isDisplayMajorError, setIsDisplayMajorError] = useState<boolean>(false);
	const [passportFileList, setPassportFileList] = useState<FileList | null>(null);
	const [ieltsFileList, setIeltsFileList] = useState<FileList | null>(null);
	const [transcriptsHighSchoolFileList, setTranscriptsHighSchoolFileList] = useState<FileList | null>(null);
	const [transcriptsCollegeFileList, setTranscriptsCollegeFileList] = useState<FileList | null>(null);

	enum InstitutionTypeSchool {
		COLLEGE = "College",
		UNIVERSITY = "University",
		LANGUAGES_SCHOOL = "Languages School",
		HIGH_SCHOOL_PUBLIC = "High School Public",
		HIGH_SCHOOL_PRIVATE = "High School Private",
	}

	const listInstitutionTypeSchoolId = "institution-type-school";
	const listInstitutionTypeSchool: InstitutionTypeSchool[] = Object.entries(InstitutionTypeSchool).map(([item, value]) => value);
	const [institutionTypeSchool, setInstitutionTypeSchool] = useState<string>();
	const [isDisplayInstitutionTypeSchoolError, setIsDisplayInstitutionTypeSchoolError] = useState<boolean>(false);

	const handleSetInstitutionTypeSchool = (value: string) => {
		setIsDisplaySchoolError(false);
		setInstitutionTypeSchool(value);
		console.log(value);
		if (value === InstitutionTypeSchool.COLLEGE) {
			setListSchool(LIST_COLLEGE_SCHOOL);
			return;
		}
		if (value === InstitutionTypeSchool.UNIVERSITY) {
			setListSchool(LIST_UNIVERSITY_SCHOOL);
			return;
		}
		if (value === InstitutionTypeSchool.LANGUAGES_SCHOOL) {
			setListSchool(LIST_LANGUAGES_SCHOOL);
			return;
		}
		if (value === InstitutionTypeSchool.HIGH_SCHOOL_PUBLIC) {
			setListSchool(LIST_HIGH_SCHOOL_PUBLIC);
			return;
		}
		if (value === InstitutionTypeSchool.HIGH_SCHOOL_PRIVATE) {
			setListSchool(LIST_HIGH_SCHOOL_PRIVATE);
			return;
		}
		setListSchool([]);
		setIsDisplaySchoolError(true);
	};

	const listSchoolId = "school-registration-list";
	const [listSchool, setListSchool] = useState<string[]>([]);
	const [school, setSchool] = useState<string>("");
	const [isDisplaySchoolError, setIsDisplaySchoolError] = useState<boolean>(false);

	const fieldContainer = "field-container my-5";

	const handleSubmit = () => {};

	return (
		<div id="school-registration">
			<div className="school-registration-form-container flex flex-row justify-center">
				<div className="image-container w-[35%] bg-no-repeat bg-center bg-cover rounded-[30px] -mr-[2%]"></div>
				<div className="form-container w-[65%] px-[5%] py-8 bg-white rounded-[30px] -ml-[2%]">
					<div className="title-container">
						<span className="title font-extrabold text-5xl text-strongPink uppercase">Đăng ký trường học</span>
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
							<div className={fieldContainer}>
								<SelectField
									id={listInstitutionTypeSchoolId}
									list={listInstitutionTypeSchool}
									label="Chương trình học"
									placeHolder="--Chọn chương trình--"
									errorMessage="Chương trình học chưa phù hợp"
									isRequired={true}
									isDisplayErrorMessage={isDisplayInstitutionTypeSchoolError}
									handleChangeValue={handleSetInstitutionTypeSchool}
								/>
							</div>
							<div className={fieldContainer}>
								<SelectField
									id={listSchoolId}
									list={listSchool}
									label="Trường"
									placeHolder="--Chọn trường--"
									errorMessage="Trường chưa phù hợp"
									isRequired={true}
									isDisplayErrorMessage={isDisplaySchoolError}
									handleChangeValue={setSchool}
								/>
							</div>
						</div>
						<div className={fieldContainer}>
							<div className="sub-title-container">
								<span className="text-strongPink font-bold text-xl">Kỳ nhập học</span>
							</div>
							<div className="list-checkbox-field-container flex flex-row justify-between w-1/2 my-1">
								<CheckboxField
									id="setSemesterFirst"
									label="Tháng 1"
									handleChangeValue={setSemesterFirst}
								/>
								<CheckboxField
									id="setSemesterSecond"
									label="Tháng 5"
									handleChangeValue={setSemesterSecond}
								/>
								<CheckboxField
									id="setSemesterThird"
									label="Tháng 9"
									handleChangeValue={setSemesterThird}
								/>
								<CheckboxField
									id="setSemesterFourth"
									label="Khác"
									handleChangeValue={setSemesterFourth}
								/>
							</div>
						</div>
						<div className={fieldContainer}>
							<InputField
								type="text"
								placeHolder="Ngành học và ghi chú"
								errorMessage="Ngành học và ghi chú chưa phù hợp"
								isRequired={true}
								isDisplayErrorMessage={isDisplayMajorError}
								handleChangeValue={setMajor}
							/>
						</div>
						<div className={fieldContainer}>
							<div className="input-field-container grid grid-rows-2 grid-cols-2 gap-y-4">
								<InputFileField
									id="passport"
									multiple={true}
									maxFile={5}
									accept="application/msword, application/vnd.ms-powerpoint, application/pdf, image/*"
									label="Passport"
									handleChangeValue={setPassportFileList}
								/>
								<InputFileField
									id="ielts"
									multiple={true}
									maxFile={5}
									accept="application/msword, application/vnd.ms-powerpoint, application/pdf, image/*"
									label="IELTS"
									handleChangeValue={setIeltsFileList}
								/>
								<InputFileField
									id="transcriptsHighSchool"
									multiple={true}
									maxFile={5}
									accept="application/msword, application/vnd.ms-powerpoint, application/pdf, image/*"
									label="Học bạ và bằng tốt nghiệp"
									handleChangeValue={setTranscriptsHighSchoolFileList}
								/>
								<InputFileField
									id="transcriptsCollege"
									multiple={true}
									maxFile={5}
									accept="application/msword, application/vnd.ms-powerpoint, application/pdf, image/*"
									label="Học bạ và bằng tốt nghiệp Đại Học/Cao Đẳng"
									handleChangeValue={setTranscriptsCollegeFileList}
								/>
							</div>
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
		</div>
	);
};
export default SchoolRegistrationForm;
