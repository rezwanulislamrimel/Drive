import React, { useState } from "react";
import { FaTachometerAlt } from "react-icons/fa";
import { FcSupport } from "react-icons/fc";
//  import images
import logo from "../../assets/logo.png";
import { TfiMenuAlt } from "react-icons/tfi";
import { AiOutlineGlobal } from "react-icons/ai";

function NavBar() {
  // remove navbar in the small width screen
  const [active, setActive] = useState("navBarMenu");
  const showNavBar = () => {
    setActive("navBarMenu showNavBar");
  };

  const removeNavBar = () => {
    setActive("navBarMenu");
  };
  //  add a bacground color in the second navbar
  const [noBG, addBg] = useState("NavigationBarTwo");
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg("NavigationBarTwo navbarWithBg");
    } else {
      addBg("NavigationBarTwo");
    }
  };
  window.addEventListener("scroll", addBgColor);
  return (
    <div className="NavigationBar flex">
      <div className="NavigationBarOne flex">
        <div>
          <FaTachometerAlt className="icon"></FaTachometerAlt>
        </div>
        <div className=" none flex">
          <li className="flex">
            <FcSupport className="icon"></FcSupport> Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon"></AiOutlineGlobal> Languages
          </li>
        </div>
        <div className="ats flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>
      <div className={noBG}>
        <div className="logoDiv">
          <img src={logo} className="logo" />
        </div>
        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">
              Home
            </li>
            <li onClick={removeNavBar} className="listItem">
              About
            </li>
            <li onClick={removeNavBar} className="listItem">
              Offer
            </li>
            <li onClick={removeNavBar} className="listItem">
              Seats
            </li>
            <li onClick={removeNavBar} className="listItem">
              Destinations
            </li>
          </ul>
          <button onClick={removeNavBar} className="btn flex btnOne">
            Contact
          </button>
        </div>
        <button className="btn flex btnTwo">Contact</button>
        <div onClick={showNavBar} className="toggleIcon">
          <TfiMenuAlt className="icon"></TfiMenuAlt>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
