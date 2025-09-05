import Link from "next/link";
import navigations, { Navigation } from "@/data/navigations";
import contacts, { ContactMe } from "@/data/connect";

const Footer = () => {
  return (
    <div className="bg-resume-gray-200 border-resume-teal-100 flex items-center justify-between border-t-4 px-10 py-5">
      <Link
        href="/"
        className="hover:text-resume-teal-200 w-1/3 px-5 text-center text-2xl font-bold text-white transition-colors"
      >
        Jimmy Munoz
      </Link>
      <div className="border-resume-teal-100 flex w-1/3 flex-col items-center border-x-4 text-white">
        <p className="text-2xl font-bold">LINKS</p>
        <div className="flex flex-col items-center gap-3">
          {navigations.map(({ name, link }: Navigation, index) => (
            <Link
              key={index}
              href={link}
              className="hover:text-resume-teal-200 mx-4 text-2xl transition-colors"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex w-1/3 flex-col items-center text-white">
        <p className="text-2xl font-bold">Let&apos;s Connect</p>
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
