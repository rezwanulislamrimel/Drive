import React from "react";
import { FaTachometerAlt } from "react-icons/fa";
import { FcSupport } from "react-icons/fc";
//  import images
import logo from "../../assets/logo.png";
import { TfiMenuAlt } from "react-icons/tfi";
import { AiOutlineGlobal } from "react-icons/ai";

function NavBar() {
  return (
    <div className="navbar flex">
      <div className="navBarOne flex">
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
        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>
      <div className="navBarTwo">
        <div className="logoDiv">
          <img src={logo} className="logo" />
        </div>
        <div className="navBarMenu">
          <ul className="menu flex">
            <li className="listItem">Home</li>
            <li className="listItem">About</li>
            <li className="listItem">Offer</li>
            <li className="listItem">Seats</li>
            <li className="listItem">Destinations</li>
          </ul>
          <button className="btn flex btnOne">Contact</button>
        </div>
        {/* <button className="btn flex btnTwo">Contact</button> */}
        <div className="toggleIcon">
          <TfiMenuAlt></TfiMenuAlt>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
