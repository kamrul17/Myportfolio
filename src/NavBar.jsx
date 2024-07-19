import React from "react";
import logo from "./assets/logoai.jfif";
import "./index.css";
function NavBar() {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav
      className="navbar   navbar-expand-lg navbar-dark shadow-lg "
      id="top-nav"
    >
      <div className=" container-fluid ">
        <a className="navbar-brand" href="#">
          <img src={logo} id="logo-img" className="img-fluid" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav  mx-auto mb-2 mb-lg-0   ">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact">
            {" "}
            <button type="button" className="All_btn">
              Hire Me
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
