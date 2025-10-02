
const Footer = () => {
  return (
    <footer
      style={{
        background: "#2e7d32",
        color: "white",
        padding: "1rem 2rem",
        textAlign: "center",
        marginTop: "2rem",
      }}
    >
      <p style={{ margin: "0.5rem 0" }}>🌱 MP KISSAN</p>
      <p style={{ margin: "0.5rem 0", fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} MP KISSAN. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
