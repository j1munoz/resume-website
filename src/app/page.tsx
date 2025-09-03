import Introduction from "@/components/home/introduction";
import Informations from "@/components/home/informations";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 gap-y-20">
      <Introduction />
      <Informations />
    </div>
  );
};

export default Home;
