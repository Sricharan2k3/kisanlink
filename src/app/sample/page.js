import NavBarComponent from "./navbar1";
import LogoComponent from "./logo";

const Header = () => {
  return (
    <div className="flex justify-center items-center  px-4">
      <div className="flex justify-between items-center max-w-screen-2xl w-full">
        <LogoComponent />
        <NavBarComponent />
      </div>
    </div>
  );
};

export default Header;
