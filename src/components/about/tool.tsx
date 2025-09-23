import { IconType } from "react-icons";

export interface ToolProps {
  icon: IconType;
  name: string;
}

const Tool = ({ icon: Icon, name }: ToolProps) => {
  return (
    <div className="flex w-2/3 flex-col items-center justify-center gap-5 rounded-xl border-2 border-black bg-gray-200 p-4 transition-transform hover:scale-115">
      <Icon className="text-8xl text-black" />
      <p className="mb-2 text-2xl">{name}</p>
    </div>
  );
};

export default Tool;
