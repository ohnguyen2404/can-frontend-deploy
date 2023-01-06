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

export const { PROJECT_MIN_WIDTH, PROJECTS } = SEASONAL_PROJECTS

export const { HEIGHT, LINKS } = NAVBAR;
