import { InstitutionTypeSchool } from "./setting";

export type TSchoolRegistrationForm = {
	id: string;
	name: string;
	email: string;
	phone: string;
	semester: {
		semesterFirst: boolean;
		semesterSecond: boolean;
		semesterThird: boolean;
		semesterFourth: boolean;
	};
	institutionTypeSchool: InstitutionTypeSchool;
	school: string;
	major?: string;
	files: FileList;
};
