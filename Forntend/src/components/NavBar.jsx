import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "1.5rem",
      }}
    >
      <Link style={{ color: "white", textDecoration: "none" }} to="/">Home</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/profile">Profile</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/crops">Crops</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/market-place">Marketplace</Link>
    </nav>
  );
};

export default Navbar;
