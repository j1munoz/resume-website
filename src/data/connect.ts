import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import type { IconType } from "react-icons";

export interface ContactMe {
  icon: IconType;
  link: string;
}

const contacts: ContactMe[] = [
  {
    icon: FaGithub,
    link: "https://github.com/j1munoz",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/jimmy-munoz-8a7a47290/",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/j1.munoz?igsh=MTN3c3czYTBtMzhvdQ%3D%3D&utm_source=qr",
  },
  {
    icon: LuMail,
    link: "mailto: jimmymunoz397@gmail.com",
  },
];

export default contacts;
