import navigations, { Navigation } from "@/data/navigations";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-resume-gray-200 border-resume-teal-100 shadow-resume-teal-200 sticky top-0 z-50 flex w-full items-center justify-between border-b-4 p-5 shadow-xl">
      <Link
        href="/"
        className="hover:text-resume-teal-200 text-2xl font-bold text-white transition-colors"
      >
        Jimmy Munoz
      </Link>
      <div className="flex items-center gap-x-8">
        {navigations.map(({ name, link, style }: Navigation, index) => (
          <Link
            key={index}
            href={link}
            className={`${style ? style : "hover:text-resume-teal-200 mx-4 text-2xl text-white"} text-2xl transition-colors`}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
