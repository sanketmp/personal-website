import "./Nav.css";
import { BiHomeSmile, BiMessageSquareDetail } from "react-icons/bi";
import { MdOutlineInfo } from "react-icons/md";
import { BsLaptop } from "react-icons/bs";
import { useState } from "react";

const Nav = () => {
  const [activeItem, setActiveItem] = useState("#Home");

  return (
    <nav className="navigation">
      <a
        href="#Home"
        onClick={() => setActiveItem("#Home")}
        className={activeItem === "#Home" ? "active" : ""}
      >
        <BiHomeSmile />
      </a>
      <a
        href="#About"
        onClick={() => setActiveItem("#About")}
        className={activeItem === "#About" ? "active" : ""}
      >
        <MdOutlineInfo />
      </a>
      <a
        href="#Skills"
        onClick={() => setActiveItem("#Skills")}
        className={activeItem === "#Skills" ? "active" : ""}
      >
        <BsLaptop />
      </a>
      <a
        href="#Contact"
        onClick={() => setActiveItem("#Contact")}
        className={activeItem === "#Contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
