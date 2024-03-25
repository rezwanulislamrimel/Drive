/* eslint-disable no-unused-vars */
import React from "react";

// Imported Images
import gridImage from "../../assets/grid-img.png";

const Support = () => {
  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small> Travel Support</small>
          <h2> Plan Your Travel With Confident </h2>
          <p>
            Booking Assistance and Travel Planning: Anticipating Your Journey
            Ahead!
          </p>
        </div>
        {/* card design  */}
        <div className="infoDiv grid">
          <div className="textDiv grid">
            {/* travel plan 1 */}
            <div className="singleInfo">
              <span className="number">01</span>
              <h4>Travel Requirment For Dhaka</h4>
              <p>
                Booking Assistance and Travel Planning: Anticipating Your
                Journey Ahead!
              </p>
            </div>
            {/* travel plan 2 */}
            <div className="singleInfo">
              <span className="number numberColor1">02</span>
              <h4>Travel Requirment For Dhaka</h4>
              <p>
                Booking Assistance and Travel Planning: Anticipating Your
                Journey Ahead!
              </p>
            </div>
            {/* travel plan 3 */}
            <div className="singleInfo">
              <span className="number numberColor2">03</span>
              <h4>Seamless Chauffeur Services </h4>
              <p>
                Booking Assistance and Travel Planning: Anticipating Your
                Journey Ahead!
              </p>
            </div>
          </div>
          {/* img  */}
          <div className="imgDiv">
            <img src={gridImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
