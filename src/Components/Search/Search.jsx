import React, { useState } from "react";

//! imported icon -----------
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";

// import { RxCalendar } from "react-icons/rx";
// date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Search() {
  // dropdown section
  const [date, setDate] = useState(new Date());
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
                {/* <input type="text " placeholder="Enter City" /> */}

                <form>
                  <input type="text" list="browsers" name="favorite_browser" />
                  <datalist id="browsers">
                    <option value="Rangpur"></option>
                    <option value="Dhaka"></option>
                    <option value="Rajshahi"></option>
                    <option value="Mymensingh"></option>
                    <option value="Khulna"></option>
                    <option value="Chittagong"></option>
                    <option value="Barisal"></option>
                    <option value="Sylhet"></option>
                  </datalist>
                </form>
              </div>
            </div>
            {/* signle input section Two */}

            <div className="singlInput flex">
              <div className="iconDiv">
                <RiAccountPinCircleLine className="icon"></RiAccountPinCircleLine>
              </div>
              <div className="texts">
                <h4>To</h4>
                {/* <input type="text " placeholder="Enter City" /> */}

                <form>
                  <input type="text" list="browsers" name="favorite_browser" />
                  <datalist id="browsers">
                    <option value="Rangpur"></option>
                    <option value="Dhaka"></option>
                    <option value="Rajshahi"></option>
                    <option value="Mymensingh"></option>
                    <option value="Khulna"></option>
                    <option value="Chittagong"></option>
                    <option value="Barisal"></option>
                    <option value="Sylhet"></option>
                  </datalist>
                </form>

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
                {/* <input type="text " placeholder="Pick a date" /> */}

                {/* <div>
                  <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                  />
                </div> */}
                <div>
                  <DatePicker
                    showTimeSelect
                    minTime={new Date(0, 0, 0, 12, 30)}
                    maxTime={new Date(0, 0, 0, 19, 0)}
                    selected={date}
                    onChange={(date) => setDate(date)}
                  />
                </div>
              </div>
            </div>
            {/* signle input section Four */}

            <div className="singlInput flex">
              <div className="iconDiv">
                <SlCalender className="icon"></SlCalender>
              </div>
              <div className="texts">
                <h4>Date of Return (Optional) </h4>
                {/* <input type="text " placeholder="Pick a date" /> */}

                {/* <div>
                  <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                  />
                </div> */}
                <div>
                  <DatePicker
                    showTimeSelect
                    minTime={new Date(0, 0, 0, 12, 30)}
                    maxTime={new Date(0, 0, 0, 19, 0)}
                    selected={date}
                    onChange={(date) => setDate(date)}
                  />
                </div>
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
