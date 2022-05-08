import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState();

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="d-flex flex-column flex-md-row p-3 gap-3 justify-content-between">
      <div className="d-flex gap-3 justify-content-between w-100">
        <h2 className="fs-1">Spark Plug</h2>

        <button className="btn py-1 px-2 d-md-none" onClick={handleMenuToggle}>
          <Icon icon="dashicons:menu-alt3" />
        </button>
      </div>

      <nav
        className={
          (showMenu ? "d-flex " : "d-none ") +
          "d-md-flex flex-column flex-md-row gap-3 align-items-center"
        }
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/sign-in">Sign In</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </header>
  );
}
