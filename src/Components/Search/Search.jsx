import React from "react";
//! imported icon -----------
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";

function Search() {
  return (
    <div>
      <div className="search container section ">
        <div className="sectionContainer grid">
          <div className="searchBtn flex">
            <div className="singleSearchBtn">
              <span>Business Class</span>
            </div>

            <div className="singleSearchBtn">
              <span>AC</span>
            </div>

            <div className="singleSearchBtn">
              <span>Non-AC</span>
            </div>
          </div>
        </div>
        <div className="searchInputs flex">
          {/* signle input section  */}
          <div className="singlInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon"></HiOutlineLocationMarker>
            </div>
            <div className="contents">
              <h4>Location</h4>
              <input type="text " placeholder="where you want to go" />
            </div>
          </div>
          <div className="singlInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon"></RiAccountPinCircleLine>
            </div>
            <div className="contents">
              <h4>Location</h4>
              <input type="text " placeholder="where you want to go" />
            </div>
          </div>
          <div className="singlInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon"></HiOutlineLocationMarker>
            </div>
            <div className="contents">
              <h4>Location</h4>
              <input type="text " placeholder="where you want to go" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
