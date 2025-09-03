import Link from "next/link";
import navigations, { Navigation } from "@/data/navigations";
import contacts, { ContactMe } from "@/data/connect";

const Footer = () => {
  return (
    <div className="flex border-t-4 bg-resume-gray-200 border-resume-teal-100 items-center justify-between px-10 py-5">
      <Link
        href="/"
        className="text-2xl text-white font-bold px-5 w-1/3 text-center hover:text-resume-teal-200 transition-colors"
      >
        Jimmy Munoz
      </Link>
      <div className="flex flex-col items-center w-1/3 border-x-4 border-resume-teal-100 text-white">
        <p className="font-bold text-2xl">LINKS</p>
        <div className="flex flex-col items-center gap-3">
          {navigations.map(({ name, link }: Navigation, index) => (
            <Link
              key={index}
              href={link}
              className="text-2xl hover:text-resume-teal-200 mx-4 transition-colors"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center w-1/3 text-white">
        <p className="font-bold text-2xl">Let&apos;s Connect</p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
          {contacts.map(({ link, icon: Icon }: ContactMe, index) => (
            <Link
              key={index}
              href={link}
              target="_blank"
              className="hover:text-resume-teal-200 transition-colors"
            >
              <Icon className="text-4xl" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
