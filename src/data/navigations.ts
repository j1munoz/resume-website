export interface Navigation {
  name: string;
  link: string;
  style?: string;
}

const navigations: Navigation[] = [
  {
    name: "ABOUT",
    link: "/about",
  },
  {
    name: "PROJECTS",
    link: "/projects",
  },
  {
    name: "CONTACT",
    link: "/contact",
    style:
      "text-white bg-resume-yellow-200 rounded-full hover:bg-resume-blue-100 transition-colors px-6 py-2",
  },
];

export default navigations;
