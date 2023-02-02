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

type TSeasonalProject = {
  id: string;
  title: string;
  imgSrc: string;
}

type TSeasonalProjects = TSeasonalProject[]

export const SEASONAL_PROJECTS = {
  PROJECT_MIN_WIDTH: 680,
  PROJECTS: Assert<TSeasonalProjects>([
    {
      id: 'summer-camp',
      title: 'Trại hè',
      imgSrc: '/SUMMER-CAMP-2023-01.png',
    },
    {
      id: 'winter-camp',
      title: 'Cắm trại mùa đông',
      imgSrc: '/SUMMER-CAMP-2023-03.png',
    },
    {
      id: 'summer-camp2',
      title: 'Trại hè 2',
      imgSrc: '/SUMMER-CAMP-2023-02.png',
    },
    {
      id: 'winter-camp2',
      title: 'Cắm trại mùa đông 2',
      imgSrc: '/SUMMER-CAMP-2023-04.png',
    },
  ])
}

export type TAdvisoryStep = {
  title: string,
  imgSrc: string
}

export const STUDY_ABOARD_ADVISORY_STEPS: TAdvisoryStep[] = [
  {
    title: 'Tư vấn',
    imgSrc: '/assets/advisory/icon-CAN-01.png',
  },
  {
    title: 'Chọn trường, ngành',
    imgSrc: '/assets/advisory/icon-CAN-02.png'
  },
  {
    title: 'Thu thập và thụ lý hồ sơ',
    imgSrc: '/assets/advisory/icon-CAN-03.png'
  },
  {
    title: 'Nhận Visa',
    imgSrc: '/assets/advisory/icon-CAN-06.png'
  },
  {
    title: 'Đưa đón sân bay',
    imgSrc: '/assets/advisory/icon-CAN-04.png'
  },
  {
    title: 'Sắp xếp nơi ở',
    imgSrc: '/assets/advisory/icon-CAN-05.png'
  },
  {
    title: 'Chuyển trường miễn phí',
    imgSrc: '/assets/advisory/icon-CAN-09.png'
  },
  {
    title: 'Gia hạn giấy tờ',
    imgSrc: '/assets/advisory/icon-CAN-08.png'
  },
  {
    title: 'Việc làm định cư tại Canada',
    imgSrc: '/assets/advisory/icon-CAN-07.png'
  },
]

export const SETTLED_ADVISORY_STEPS: TAdvisoryStep[] = [
  {
    title: 'Tư vấn nghề nghiệp',
    imgSrc: '/assets/advisory/icon-CAN-01.png',
  },
  {
    title: 'Phỏng vấn',
    imgSrc: '/assets/advisory/icon-CAN-10.png',
  },
  {
    title: 'Xây dựng hồ sơ xin Giấy phép lao động',
    imgSrc: '/assets/advisory/icon-CAN-08.png',
  },
  {
    title: 'Nhận Working Visa',
    imgSrc: '/assets/advisory/icon-CAN-06.png',
  },
  {
    title: 'Làm việc trong thời gian nhất định',
    imgSrc: '/assets/advisory/icon-CAN-07.png',
  },
  {
    title: 'Xây dựng hồ sơ PR tại Canada',
    imgSrc: '/assets/advisory/icon-CAN-03.png',
  },
  {
    title: 'Nhận thẻ thường trú và bảo lãnh gia đình tại Việt Nam',
    imgSrc: '/assets/advisory/icon-CAN-11.png',
  },
]

export const { PROJECT_MIN_WIDTH, PROJECTS } = SEASONAL_PROJECTS

export const { HEIGHT, LINKS } = NAVBAR;


