import navigations, { Navigation } from "@/data/navigations";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex border-b-4 bg-resume-gray-200 border-resume-teal-100 shadow-2xl items-center justify-between w-full p-5 sticky top-0 z-50">
      <Link
        href="/"
        className="text-2xl font-bold text-white hover:text-resume-teal-200 transition-colors"
      >
        Jimmy Munoz
      </Link>
      <div className="flex gap-x-8 items-center">
        {navigations.map(({ name, link, style }: Navigation, index) => (
          <Link
            key={index}
            href={link}
            className={`${style ? style : "text-2xl text-white hover:text-resume-teal-200 mx-4"} text-2xl transition-colors`}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
