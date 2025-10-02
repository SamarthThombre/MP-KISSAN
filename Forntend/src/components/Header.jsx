import Navbar from "./NavBar";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#2e7d32",
        padding: "1rem 2rem",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>🌱 MP KISSAN</div>
      <Navbar />
    </header>
  );
};

export default Header;
