import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import UserConext from "./UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserConext);
  const cartItems = useSelector((store) => store.cart.items);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      style={{
        background: "rgba(13,13,13,0.92)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid #1f1f1f",
      }}
      className="sticky top-0 z-50 flex items-center justify-between px-8 py-4"
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 group">
        <div
          style={{ background: "#f97316", borderRadius: "10px" }}
          className="w-9 h-9 flex items-center justify-center text-white text-lg font-bold"
        >
          F
        </div>
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.3rem",
            fontWeight: 700,
            color: "#f5f5f0",
            letterSpacing: "-0.01em",
          }}
        >
          Food<span style={{ color: "#f97316" }}>Villa</span>
        </span>
      </Link>

      {/* Nav */}
      <nav className="flex items-center gap-8">
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="nav-link text-sm font-medium"
            style={{ color: location.pathname === to ? "#f5f5f0" : "#888" }}
          >
            {label}
          </Link>
        ))}

        {/* Cart */}
        <Link
          to="/cart"
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all"
          style={{
            background: cartItems.length > 0 ? "#f97316" : "#1c1c1c",
            color: cartItems.length > 0 ? "#fff" : "#aaa",
            border: "1px solid",
            borderColor: cartItems.length > 0 ? "#f97316" : "#2a2a2a",
          }}
        >
          <span>🛒</span>
          <span>{cartItems.length}</span>
        </Link>

        {/* Login */}
        <button
          onClick={() =>
            setBtnName(btnNameReact === "Login" ? "Logout" : "Login")
          }
          className="text-sm font-medium px-4 py-2 rounded-full transition-all"
          style={{
            border: "1px solid #2a2a2a",
            color: "#aaa",
            background: "transparent",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = "#f97316";
            e.currentTarget.style.color = "#f97316";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = "#2a2a2a";
            e.currentTarget.style.color = "#aaa";
          }}
        >
          {btnNameReact}
        </button>

        {loggedInUser && (
          <span
            className="text-sm font-medium px-3 py-1 rounded-full"
            style={{ background: "#1c1c1c", color: "#f97316" }}
          >
            {loggedInUser}
          </span>
        )}
      </nav>
    </header>
  );
};

export default Header;
