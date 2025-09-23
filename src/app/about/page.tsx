import WhoIAm from "@/components/about/whoiam";
import Tools from "@/components/about/tools";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <WhoIAm />
      <Tools />
    </div>
  );
};

export default About;
