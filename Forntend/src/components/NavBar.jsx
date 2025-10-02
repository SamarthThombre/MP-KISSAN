import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-6">
      <Link
        className="text-white hover:text-yellow-400 font-semibold transition-colors duration-200"
        to="/"
      >
        Home
      </Link>
      <Link
        className="text-white hover:text-yellow-400 font-semibold transition-colors duration-200"
        to="/profile"
      >
        Profile
      </Link>
      <Link
        className="text-white hover:text-yellow-400 font-semibold transition-colors duration-200"
        to="/crops"
      >
        Crops
      </Link>
      <Link
        className="text-white hover:text-yellow-400 font-semibold transition-colors duration-200"
        to="/market-place"
      >
        Marketplace
      </Link>
    </nav>
  );
};

export default Navbar;
