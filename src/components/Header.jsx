import BottomNavbar from "./BottomNavbar";
import TopHeader from "./TopHeader";
import TopNavbar from "./TopNavbar";

const Header = () => {
  return (
    <header className="sticky md:static w-full top-0 z-50 bg-white">
      <TopHeader />
      <div>
        <TopNavbar />
        <BottomNavbar />
      </div>
    </header>
  );
};
export default Header;
