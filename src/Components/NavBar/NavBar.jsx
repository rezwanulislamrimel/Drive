import React from "react";
import { FaTachometerAlt } from "react-icons/fa";
import { FcSupport } from "react-icons/fc";

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
            <FcSupport></FcSupport> Support
          </li>
          <li className="flex">
            <AiOutlineGlobal></AiOutlineGlobal> Languages
          </li>
        </div>
        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>
      <div className="navBarTwo">
        <div className="logoDiv">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
