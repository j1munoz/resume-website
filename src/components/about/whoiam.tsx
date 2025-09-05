import Header from "@/components/about/header";

const WhoIAm = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Header name="Who I Am" />
      <div className="w-2/3 text-2xl text-white">
        I am Jimmy Munoz, a third year Computer Science student at UC Riverside
        with a passion in software engineering. I enjoy making efficient and
        significant applications that will create a positive impact to the
        people around me and the world. Although I am proficient in C++, some
        new additions to my tech stack have been added, including TypeScript,
        TailwindCSS, React.js, and more. I am very a curious person who is
        always willing to try and learn something new, even if it is outside my
        comfort zone.
      </div>
    </div>
  );
};

export default WhoIAm;
