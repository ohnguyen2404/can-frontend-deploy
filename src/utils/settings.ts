import { Assert } from "./types";

type TLink = {
	id: string;
	title: string;
};

type TLinks = TLink[];

export const NAVBAR = {
	HEIGHT: 80,
	LINKS: Assert<TLinks>([
		{
			id: "feeds",
			title: "Tin tức",
		},
		{
			id: "program",
			title: "Chương trình",
		},
		{
			id: "service",
			title: "Dịch vụ",
		},
		{
			id: "consult",
			title: "Lộ trình tư vấn",
		},
		{
			id: "office",
			title: "Văn phòng",
		},
		{
			id: "register",
			title: "Đăng ký",
		},
	]),
};

export const { HEIGHT, LINKS } = NAVBAR;

type TSeasonalProject = {
	id: string;
	title: string;
	imgSrc: string;
};

type TSeasonalProjects = TSeasonalProject[];

export const SEASONAL_PROJECTS = {
	PROJECT_MIN_WIDTH: 680,
	PROJECTS: Assert<TSeasonalProjects>([
		{
			id: "summer-camp",
			title: "Trại hè",
			imgSrc: "/SUMMER-CAMP-2023-01.png",
		},
		{
			id: "winter-camp",
			title: "Cắm trại mùa đông",
			imgSrc: "/SUMMER-CAMP-2023-03.png",
		},
		{
			id: "summer-camp2",
			title: "Trại hè 2",
			imgSrc: "/SUMMER-CAMP-2023-02.png",
		},
		{
			id: "winter-camp2",
			title: "Cắm trại mùa đông 2",
			imgSrc: "/SUMMER-CAMP-2023-04.png",
		},
	]),
};

export const { PROJECT_MIN_WIDTH, PROJECTS } = SEASONAL_PROJECTS;

export type TAdvisoryStep = {
	title: string;
	imgSrc: string;
};

export const STUDY_ABOARD_ADVISORY_STEPS: TAdvisoryStep[] = [
	{
		title: "Tư vấn",
		imgSrc: "/assets/advisory/icon-CAN-01.png",
	},
	{
		title: "Chọn trường, ngành",
		imgSrc: "/assets/advisory/icon-CAN-02.png",
	},
	{
		title: "Thu thập và thụ lý hồ sơ",
		imgSrc: "/assets/advisory/icon-CAN-03.png",
	},
	{
		title: "Nhận Visa",
		imgSrc: "/assets/advisory/icon-CAN-06.png",
	},
	{
		title: "Đưa đón sân bay",
		imgSrc: "/assets/advisory/icon-CAN-04.png",
	},
	{
		title: "Sắp xếp nơi ở",
		imgSrc: "/assets/advisory/icon-CAN-05.png",
	},
	{
		title: "Chuyển trường miễn phí",
		imgSrc: "/assets/advisory/icon-CAN-09.png",
	},
	{
		title: "Gia hạn giấy tờ",
		imgSrc: "/assets/advisory/icon-CAN-08.png",
	},
	{
		title: "Việc làm định cư tại Canada",
		imgSrc: "/assets/advisory/icon-CAN-07.png",
	},
];

export const SETTLED_ADVISORY_STEPS: TAdvisoryStep[] = [
	{
		title: "Tư vấn nghề nghiệp",
		imgSrc: "/assets/advisory/icon-CAN-01.png",
	},
	{
		title: "Phỏng vấn",
		imgSrc: "/assets/advisory/icon-CAN-10.png",
	},
	{
		title: "Xây dựng hồ sơ xin Giấy phép lao động",
		imgSrc: "/assets/advisory/icon-CAN-08.png",
	},
	{
		title: "Nhận Working Visa",
		imgSrc: "/assets/advisory/icon-CAN-06.png",
	},
	{
		title: "Làm việc trong thời gian nhất định",
		imgSrc: "/assets/advisory/icon-CAN-07.png",
	},
	{
		title: "Xây dựng hồ sơ PR tại Canada",
		imgSrc: "/assets/advisory/icon-CAN-03.png",
	},
	{
		title: "Nhận thẻ thường trú và bảo lãnh gia đình tại Việt Nam",
		imgSrc: "/assets/advisory/icon-CAN-11.png",
	},
];

export const LIST_COLLEGE_SCHOOL = [
	"Bow Valley College, Calgary, Alberta",
	"Herzing College, Montreal, Quebec",
	"Fanshawe College, London, Ontario",
	"JRS College, Scarborough, Ontario",
	"Academy of Learning, Toronto, Ontario",
	"Canadian Tourism College, Vancouver, British Columbia",
	"Cornerstone College, Vancouver, British Columbia",
	"Langara College, Vancouver, British Columbia",
	"Lambton College of Applied Arts and Technology, Sarnia, Ontario",
	"Hanson Canada (Cambrian), Toronto/Vancouver/Brampton, Ontario/British Columbia",
	"Saskatchewan Polytechnic, Saskatoon, Saskatchewan",
	"Conestoga College, Toronto, Ontario",
	"Winston College, New Westminster, British Columbia",
	"Academy of Aeronautics, Montreal, Quebec",
	"Centennial College, Toronto, Ontario",
	"Toronto International College, Toronto, Ontario",
	"Ashton College, Vancouver, British Columbia",
	"The College of New Caledonia, Prince George, British Columbia",
	"Lester B. Pearson Vocational College, Dorval, Quebec",
	"Blanche Macdonald Centre for Applied Design, Vancouver, British Columbia",
	"Canadian College of Massage & Hydrotherapy, Ontario",
	"North Island College, Vancouver Island, British Columbia",
	"Sir Sandford Fleming College of Applied Arts and Technology, Peterborough, Ontario",
	"ITD College, Vancouver, British Columbia",
	"Georgian College, Barrie, Ontario",
	"Toronto School of Management, Toronto, Ontario",
	"Durham College, Oshawa, Ontario",
	"Trios College, Mississauga, Ontario",
	"Arbutus College, Vancouver, British Columbia",
	"Camosun College, Victoria, British Columbia",
	"Anderson College, Toronto, Ontario",
	"Lakeland College, Vermilion&Llyodminister, Alberta",
	"Sault College, Sault Ste.Marie, Ontario",
	"Sprott Shaw Language College, Vancouver, British Columbia",
	"SIAST ( The Saskatchewan Institute of Applied Science and Technology), Saskatoon, Saskatchewan",
	"GPRC, Grande Prairie, Alberta",
	"Nova Scotia College of Early Childhood Education (NSCECE), Halifax, Nova Scotia",
	"Vancouver Film School , Vancouver, British Columbia",
	"IBT College, Toronto, Ontario",
	"Omni College, Richmond, British Columbia",
	"Navitas Ltd. ( Fraser International College and International College of Manitoba), Multiple Locations",
	"Lethbridge College, Alberta",
	"Lasalle College, Quebec/Vancouver, Montreal/British Columbia",
	"Evergreen College, Toronto, Ontario",
	"Assiniboine Community College, Brandon, Manitoba",
	"SAIT (Southern Alberta Institute of Technology), Calgary, Alberta",
	"Camber College, City of Powell River, British Columbia",
	"Acsenda and Arbutus College, Vancouver, British Columbia",
	"CDI College (Vancouver), VCC, VCAD, PCU, Vancouver, British Columbia",
	"CDI College (Montreal), Montreal, Quebec",
	"VCC (Vancouver Community College), Vancouver, British Columbia",
	"Sheridan College, Oakville, Ontario",
	"ACE Acumen, GTA, Ontario",
	"St Clair College, Windsor, Ontario",
	"Niagara College, Welland, Ontario",
	"Royal Crown College of Business and Technology, Toronto, Ontario",
	"Yukon College, Whitehorse, Yukon Territory",
	"Pures College of Technology, Toronto, Ontario",
	"George Brown College, Toronto, Ontario",
	"Mohawk College, Hamilton, Ontario",
	"Art Institute of Vancouver, Vancouver, British Columbia",
	"Northwest Community College, Terrace, British Columbia",
	"CEGEP, Montreal, Quebec",
	"BCIT College, Burnaby, British Columbia",
	"Northern College, Timmins, Ontario",
	"IIT (International Institute of Travel), Toronto, Ontario",
	"Algonquin College, Ottawa, Ontario",
	"Humber College, GTA, Ontario",
	"Canadore College, North Bay, Ontario",
	"Okanagan College, Kelowna, British Columbia",
	"Seneca College, GTA, Ontario",
	"Manitoba Institute of Technology, Winnipeg, Manitoba",
	"Winnipeg Technical College, Winnipeg, Manitoba",
	"Medicine Hat College, Medicine Hat, Alberta",
	"Red River College, Winnipeg, Manitoba",
	"Oxford College of Arts, Business, and Technology, Toronto, Ontario",
];

export const LIST_UNIVERSITY_SCHOOL = [
	"Cape Breton University, Sydney, Nova Scotia",
	"University of Prince Edward Island, Charlottetown, PEI",
	"University of Fraser Valley, Abbotsford, British Columbia",
	"University of Ontario Instituted of Technology (UOIT), Oshawa, Ontario",
	"University of Saskatchewan, Saskatoon, Saskatchewan",
	"University of Calgary, Calgary, Alberta",
	"Lakehead University, Thunder Bay, Ontario",
	"Conrcordia University of Edmonton, Edmonton, Alberta",
	"Concordia University, Montreal, Quebec",
	"Laurentian University, Sudbury, Ontario",
	"York University, Toronto, Ontario",
	"University of Manitoba, Manitoba, Winnipeg",
	"University of Toronto (School of Continuing Studies), Toronto, Ontario",
	"Vancouver Island University, Vancouver Island, British Columbia",
	"Mount Royal University, Calgary, Alberta",
	"King's University College at Western College, London, Ontario",
	"University of Victoria, Victoria, British Columbia",
	"Acadia University, Wolfville, Nova Scotia",
	"Queen's University, Kingston, Ontario",
	"Mount Saint Vincent University, Halifax, Nova Scotia",
	"University of California, San Diego, United States",
	"University of California, Santa Barbara, United States",
	"California State University, Los Angeles, United States",
	"Univrsity of Michigan-Flint, Michigan, United States",
	"University of Regina, Regina, Saskatchewan",
	"Brock University, St.Catherines, Ontario",
	"University of Windsor, Windsor, Ontario",
	"Capilano University, North Vancouver, British Columbia",
	"Thompson Rivers University, Kamloops, British Columbia",
	"Mount Allison University, Sackville, New Brunswick",
	"University of New Brunswick, Saint John, New Brunswick",
	"University of Guelph, Guelph, Ontario",
	"Texas Wesleyan University, Texas, United States",
	"Royal Roads Unviersity, Victoria, British Columbia",
	"University Canada West, Vancouver (+ more), British Columbia",
	"Kwantlen Polytechnic University, Surrey, British Columbia",
];

export const LIST_LANGUAGES_SCHOOL = ["ILAC, Vancouver, British Columbia", "ILAC, Toronto, Ontario"];

export const LIST_HIGH_SCHOOL_PUBLIC = [
	"Abbotsford School District, Abbotsford, British Columbia",
	"Burnaby District School Board, Burnaby, British Columbia",
	"Catholic District School Board of Eastern Ontario [CDSBEO], Kemptville, Ontario",
	"District School Board of Niagara, St. Catharines, Ontario",
	"Edmonton Public School, Edmonton, Alberta",
	"Greater Essex Country District School Board, Windsor, Ontario",
	"Greater Saskatoon Catholic Schools, Saskatoon, Saskatchewan",
	"Halton Catholic District School Board - Public, Halton, British Columbia",
	"Hamilton Wentworth District School Board [HWDSB], Hamilton, Ontario",
	"Kawartha Pine Ridge District School Board [KPRDSB], Peterborough, Ontario",
	"Lakehead Public School, Thunder Bay, Ontario",
	"Langley School District, Langley, British Columbia",
	"Ottawa-Carleton District School Board [OCDSB], Ottawa, Ontario",
	"Peel District School Board, Peel, Ontario",
	"Sooke Schools, Victoria, British Columbia",
	"St. James-Assiniboia School Division, Winnipeg, Manitoba",
	"Surrey School District, Surrey, British Columbia",
	"Thames Valley District School Board [TVDSB], London, Ontario",
	"The Calgary Board of Education, Calgary, Alberta",
	"The Nova Scotia International Student Program, Nova Scotia, New Brunswick",
	"Toronto Catholic District School Board [TCDSB], Toronto, Ontario",
	"Toronto District School Board [TDSB], Toronto, Ontario",
	"Upper Canada Leger Centre, Brockville, Ontario",
	"Vancouver School Board, Vancouver, British Columbia",
	"Waterloo Catholic District School Board, Waterloo, Ontario",
	"York Catholic District School Board, Richmond Hill, Ontario",
	"York Region District School Board [YRDSB], Richmond Hill, Ontario",
];

export const LIST_HIGH_SCHOOL_PRIVATE = [
	"Albert College, Belleville, Ontario", //
	"Birmingham International College of Canada (BICC), Toronto, Ontario",
	"Bodwell High School, Toronto, Ontario",
	"Bronte College, Mississauga, Ontario",
	"Brookes Shawnigan Lake, Shawnigan Lake, British Columbia",
	"Brooklyn College, Toronto, Ontario",
	"Columbia International College, Saskatoon, Saskatchewan",
	"Halton Catholic District School Board - Private, Hamilton, Ontario",
	"J.Addison School, Markham, Ontario",
	"Laekfield College School, Laekfield, Ontario",
	"London International Acaemy, London, Ontario",
	"Mentor College, Mississauga, Ontario",
	"Niagara Christian Community of School (NCC), Niagara, Ontario",
	"Ridley College, St. Catharines, Ontario",
	"Upper Madison College – High School, Toronto, Ontario",
	"Urban International School, Toronto, Ontario",
];

// in bytes - 25MB = 25000000B
export const MAX_LISTFILE_SIZE = 25000000;
export const MAX_NUMBER_FILE = 5;

export const ERROR_UNKNOWN = "Unkown error occurred";
export const ERROR_CONTENT_LENGTH = "Content length too large";

export const FILE_FORM_UPLOAD_NAME = "files-upload";
export const FILE_FORM_UPLOAD_TYPE = {
	PASSPORT: "passort",
	IELTS: "ielts",
	TRANSCRIPT_HIGH_SCHOOL: "transcript-high-school",
	TRANSCRIPT_COLLEGE: "transcript-college",
};
