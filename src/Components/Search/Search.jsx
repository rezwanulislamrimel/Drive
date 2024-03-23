import React from "react";
//! imported icon -----------
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";

function Search() {
  return (
    <div>
      <div className="search container section ">
        <div className="sectionContainer grid">
          <div className="btns flex">
            <div className="singleBtn">
              <span>Business Class</span>
            </div>

            <div className="singleBtn">
              <span>AC</span>
            </div>

            <div className="singleBtn">
              <span>Non-AC</span>
            </div>
          </div>
          <div className="searchInputs flex">
            {/* signle input section one  */}

            <div className="singlInput flex">
              <div className="iconDiv">
                <HiOutlineLocationMarker className="icon"></HiOutlineLocationMarker>
              </div>
              <div className="texts">
                <h4>Location</h4>
                <input type="text " placeholder="where you want to go" />
              </div>
            </div>
            {/* signle input section Two */}

            <div className="singlInput flex">
              <div className="iconDiv">
                <RiAccountPinCircleLine className="icon"></RiAccountPinCircleLine>
              </div>
              <div className="texts">
                <h4>Travelers</h4>
                <input type="text " placeholder="Add Geusts" />
              </div>
            </div>
            {/* signle input section Three  */}

            <div className="singlInput flex">
              <div className="iconDiv">
                <RxCalendar className="icon"></RxCalendar>
              </div>
              <div className="texts">
                <h4>Cheack In</h4>
                <input type="text " placeholder="Add Data" />
              </div>
            </div>
            {/* signle input section Four  */}

            <div className="singlInput flex">
              <div className="iconDiv">
                <RxCalendar className="icon"></RxCalendar>
              </div>
              <div className="texts">
                <h4>Cheack Out</h4>
                <input type="text " placeholder="Add Data" />
              </div>
            </div>
            {/* btn section  */}

            <button className="btn btnBlock flex">Search Bus</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
