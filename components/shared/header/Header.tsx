import UpperBar from "@/components/shared/header/UpperBar";
import LowerBar from "@/components/shared/header/LowerBar";

const Header = () => {
  return (
    <header className="flex flex-col w-full">
      <UpperBar />
      <LowerBar />
    </header>
  );
};
export default Header;
