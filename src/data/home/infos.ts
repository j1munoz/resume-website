import { IoPerson, IoPeopleSharp } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import type { IconType } from "react-icons";

export interface InformationProps {
  color: string;
  hoverColor: string;
  title: string;
  description: string;
  link: string;
  icon: IconType;
}

const infos: InformationProps[] = [
  {
    color: "resume-teal-100",
    hoverColor: "resume-teal-200",
    title: "About Me",
    description:
      "I am an aspiring developer who is eager to learn new technologies and apply my knowledge to the real world as I currently pursue my degree at UC Riverside. After studying Computer Science for 3 years, I have learned many languages, tools, and technologies to enhance my skills and capabilities.",
    link: "/about",
    icon: IoPerson,
  },
  {
    color: "resume-purple-100",
    hoverColor: "resume-purple-200",
    title: "Projects",
    description:
      "Some of my areas of expertise involve creating terminal-based games and websites to help promote clubs at UC Riverside. These projects contained of 4+ developers for each project, using languages such as C++, TypeScript, React.js, and more!",
    link: "/projects",
    icon: RiComputerLine,
  },
  {
    color: "resume-red-100",
    hoverColor: "resume-red-200",
    title: "Contact Me",
    description:
      "Have any questions or want to reach out to me? Feel free to send me message to any of my socials. I respond within 24 hours when the message have been sent. Looking forward to connecting with you!",
    link: "/contact",
    icon: IoPeopleSharp,
  },
];

export default infos;
