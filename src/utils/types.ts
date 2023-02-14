export type TComponent<T = undefined> = T extends undefined ? { (): JSX.Element } : { (props: T): JSX.Element };

export const Assert = <T>(element: T) => element;

export enum Direction {
	"Left",
	"Center",
	"Right",
}

export enum AdvisoryType {
	"Settled",
	"StudyAbroad",
}

export type TSchoolRegistrationForm = {
	name: string;
	email: string;
	phone: string;
	semester: {
		semesterFirst: boolean;
		semesterSecond: boolean;
		semesterThird: boolean;
		semesterFourth: boolean;
	};
	major: string;
	files: FileList;
};
