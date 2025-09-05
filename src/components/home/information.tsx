import { InformationProps } from "@/data/home/infos";
import Link from "next/link";

const Information = ({
  color,
  hoverColor,
  title,
  description,
  link,
  icon: Icon,
}: InformationProps) => {
  const bgColorMap = {
    "resume-teal-100": "bg-resume-teal-100",
    "resume-purple-100": "bg-resume-purple-100",
    "resume-red-100": "bg-resume-red-100",
  };
  const bgHoverMap = {
    "resume-teal-200": "hover:bg-resume-teal-200",
    "resume-purple-200": "hover:bg-resume-purple-200",
    "resume-red-200": "hover:bg-resume-red-200",
  };
  const bgColor =
    bgColorMap[color as keyof typeof bgColorMap] || "bg-resume-yellow-100";

  const bgHoverColor =
    bgHoverMap[hoverColor as keyof typeof bgHoverMap] || "bg-resume-yellow-100";

  return (
    <div className="flex w-4/5 items-start justify-between">
      <div className="flex w-2/3 flex-col items-start justify-center gap-3">
        <p className={`text-5xl text-${color}`}>{title}</p>
        <p className="text-2xl text-white">{description}</p>
        <Link
          href={link}
          className={`rounded-full px-8 py-1 text-2xl text-white transition-colors ${bgColor} ${bgHoverColor}`}
        >
          Learn More →
        </Link>
      </div>
      <Icon className={`text-${color} text-9xl`} />
    </div>
  );
};

export default Information;
