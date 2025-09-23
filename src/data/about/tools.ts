import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiCplusplus,
  SiPrettier,
  SiEslint,
} from "react-icons/si";
import { IconType } from "react-icons";

interface Tool {
  icon: IconType;
  name: string;
}

const tools: Tool[] = [
  {
    icon: RiTailwindCssFill,
    name: "TailwindCSS",
  },
  {
    icon: FaReact,
    name: "React.js",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
  },
  {
    icon: SiCplusplus,
    name: "C++",
  },
  {
    icon: FaGithub,
    name: "GitHub",
  },
  {
    icon: SiPrettier,
    name: "Prettier",
  },
  {
    icon: SiEslint,
    name: "ESLint",
  },
];

export default tools;
