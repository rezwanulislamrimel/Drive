import React from "react";

// imported icon
import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";

function Info() {
  return (
    <div className="info section">
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2>Travel to make memories all around the banagladesh</h2>
          <button className="btn">Learn More</button>
        </div>

        {/* grid  */}
        <div className="cardDiv grid">
          {/* grid one  */}
          <div className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className="icon"></RxCalendar>
            </div>

            <span className="cardTitile">Book Now</span>
            <p>you can also call us on your phone to book ticket!</p>
          </div>
          {/* grid two  */}
          <div className="singleCard grid">
            <div className="iconDiv flex colorz1">
              <BsShieldCheck className="icon"></BsShieldCheck>
            </div>

            <span className="cardTitile">Smart CheackList</span>
            <p>you can also call us on your phone to book ticket!</p>
          </div>
          {/* grid three  */}
          <div className="singleCard grid">
            <div className="iconDiv flex colorz2">
              <BsBookmarkCheck className="icon"></BsBookmarkCheck>
            </div>

            <span className="cardTitile">Save More</span>
            <p>you can also call us on your phone to book ticket!</p>
          </div>
          {/* grid four  */}
          {/* <div className="singleCard grid">
            <div className="iconDiv flex colorz2">
              <FiUsers className="icon"></FiUsers>
            </div>

            <span className="cardTitile">About Us</span>
            <p>you can also call us on your phone to book ticket!</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Info;
