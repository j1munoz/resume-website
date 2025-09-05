import infos from "@/data/home/infos";
import Information from "@/components/home/information";

const Informations = () => {
  return (
    <div className="flex w-2/3 flex-col gap-y-20">
      {infos.map(
        ({ color, hoverColor, title, description, link, icon }, index) => (
          <Information
            key={index}
            color={color}
            hoverColor={hoverColor}
            title={title}
            description={description}
            link={link}
            icon={icon}
          />
        ),
      )}
    </div>
  );
};

export default Informations;
