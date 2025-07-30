import { InformationProps } from "@/data/home/infos";
import Link from "next/link";

const Information = ({
  color,
  hoverColor,
  title,
  description,
  link,
}: InformationProps) => {
  const bgColorMap = {
    "resume-teal-100": "bg-resume-teal-100",
    "resume-blue-100": "bg-resume-blue-100",
    "resume-yellow-100": "bg-resume-yellow-100",
  };
  const bgColor =
    bgColorMap[color as keyof typeof bgColorMap] || "bg-resume-yellow-100";

  return (
    <div className="flex flex-col items-start justify-center w-2/3 gap-3">
      <p className={`text-5xl text-${color}`}>{title}</p>
      <p className="text-2xl">{description}</p>
      <Link
        href={link}
        className={`text-2xl px-8 py-1 rounded-full text-white hover:bg-[${hoverColor}] transition-colors ${bgColor}`}
      >
        Learn More →
      </Link>
    </div>
  );
};

export default Information;
