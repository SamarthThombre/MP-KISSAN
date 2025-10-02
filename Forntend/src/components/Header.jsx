import Navbar from "./NavBar";

const Header = () => {
  return (
    <header className="bg-green-700 text-white sticky top-0 z-50 flex justify-between items-center px-8 py-4 shadow-md">
      <div className="text-2xl font-bold flex items-center gap-2">
        🌱 MP KISSAN
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
