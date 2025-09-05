interface HeaderProp {
  name: string;
}

const Header = ({ name }: HeaderProp) => {
  return <div className="mt-5 p-5 text-6xl text-white">{name}</div>;
};

export default Header;
