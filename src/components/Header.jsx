import { BiBookAlt } from "react-icons/bi";
import ThemeToggle from "./ThemeToggle";
const Header = () => {
  return (
    <div className="my-5 flex justify-between">
      <div className="flex items-center gap-2">
        <BiBookAlt size={32} className="fill-violet-600" />
        <h1 className="text-2xl font-bold uppercase">Dictionary</h1>
      </div>
      <div className="mx-3">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
