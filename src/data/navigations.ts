export interface Navigation {
  name: string;
  link: string;
  style?: string;
}

const navigations: Navigation[] = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Contact",
    link: "/contact",
    style:
      "text-white bg-resume-teal-100 rounded-full hover:bg-resume-teal-200 transition-colors px-6 py-2",
  },
];

export default navigations;
