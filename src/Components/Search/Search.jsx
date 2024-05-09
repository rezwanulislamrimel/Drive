import React from "react";

//! imported icon -----------
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";

// import { RxCalendar } from "react-icons/rx";

function Search() {
  // dropdown section

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

          <div className="searchInputs flex ">
            {/* signle input section one  */}

            <div className="singlInput flex">
              <div className="iconDiv">
                <HiOutlineLocationMarker className="icon"></HiOutlineLocationMarker>
              </div>
              <div className="texts">
                <h4>From</h4>
                <input type="text " placeholder="Enter City" />
              </div>
            </div>
            {/* signle input section Two */}

            <div className="singlInput flex">
              <div className="iconDiv">
                <RiAccountPinCircleLine className="icon"></RiAccountPinCircleLine>
              </div>
              <div className="texts">
                <h4>To</h4>
                <input type="text " placeholder="Enter City" />

                {/* dropdown second section end  here  */}
              </div>
            </div>
            {/* signle input section Three */}

            <div className="singlInput flex">
              <div className="iconDiv">
                <SlCalender className="icon"></SlCalender>
              </div>
              <div className="texts">
                <h4>Date of Journey</h4>
                <input type="text " placeholder="Pick a date" />
              </div>
            </div>
            {/* signle input section Four */}

            <div className="singlInput flex">
              <div className="iconDiv">
                <SlCalender className="icon"></SlCalender>
              </div>
              <div className="texts">
                <h4>Date of Return </h4>
                <input type="text " placeholder="Pick a date" />
              </div>
            </div>

            {/* btn section  */}
          </div>
          <div>
            <div className="btns">
              <button className="btn btnBlock flex">Search Bus</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
