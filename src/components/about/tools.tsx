import Tool from "@/components/about/tool";
import tools from "@/data/about/tools";
import Header from "@/components/about/header";

const Tools = () => {
  return (
    <div className="flex w-2/3 flex-col items-center justify-center gap-5">
      <Header name="What I Use" />
      <div className="grid w-full grid-cols-4 items-center justify-center gap-10">
        {tools.map(({ icon, name }, index) => (
          <Tool key={index} name={name} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
