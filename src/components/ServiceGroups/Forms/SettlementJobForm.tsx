import { useState } from "react";
import InputField from "../../Fields/InputField";
import DataListField from "../../Fields/DatalistField";
import InputFileField from "../../Fields/InputFileField";
import TitleButton from "../../Buttons/TitleButton";

const SettlementJobForm = () => {
	const [name, setName] = useState<string>("");
	const [isDisplayNameError, setIsDisplayNameError] = useState<boolean>(false);
	const [email, setEmail] = useState<string>("");
	const [isDisplayEmailError, setIsDisplayEmailError] = useState<boolean>(false);
	const [phone, setPhone] = useState<string>("");
	const [isDisplayPhoneError, setIsDisplayPhoneError] = useState<boolean>(false);
	const [job, setJob] = useState<string>("");
	const [isDisplayJobError, setIsDisplayJobError] = useState<boolean>(false);
	const [passportFileList, setPassportFileList] = useState<FileList | null>(null);
	const [ieltsFileList, setIeltsFileList] = useState<FileList | null>(null);
	const [transcriptsHighSchoolFileList, setTranscriptsHighSchoolFileList] = useState<FileList | null>(null);
	const [transcriptsCollegeFileList, setTranscriptsCollegeFileList] = useState<FileList | null>(null);

	const listJobId = "job-registration-list";
	const listJob: string[] = ["hehe", "hoho", "haha"];

	const fieldContainer = "field-container my-5";

	const handleSubmit = () => {};

	return (
		<div id="settlement-job">
			<div className="settlement-job-form-container flex flex-row justify-center">
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
								<DataListField
									idList={listJobId}
									list={listJob}
									placeHolder="Danh sách công việc"
									errorMessage="Danh sách công việc chưa phù hợp"
									isRequired={true}
									isDisplayErrorMessage={isDisplayJobError}
									handleChangeValue={setJob}
								/>
							</div>
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
export default SettlementJobForm;
