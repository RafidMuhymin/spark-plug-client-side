import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="d-flex flex-column flex-md-row p-4 gap-4 justify-content-between">
      <div className="d-flex flex-column gap-3 justify-content-between">
        <h2>Spark Plug</h2>

        <p className="text-secondary">
          Copyright {new Date().getFullYear()} 2022 Spark Plug
        </p>
      </div>

      <div className="d-flex flex-column gap-3 justify-content-evenly">
        <nav className="d-flex gap-2 justify-content-end align-items-center">
          <a href="#">
            <Icon icon="logos:facebook" />
          </a>
          <a href="#">
            <Icon icon="logos:twitter" />
          </a>
          <a href="#">
            <Icon icon="logos:discord" />
          </a>
          <a href="#">
            <Icon icon="logos:youtube" />
          </a>
          <a href="#">
            <Icon icon="logos:instagram" />
          </a>
        </nav>

        <nav className="d-flex gap-2 justify-content-end align-items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
}
