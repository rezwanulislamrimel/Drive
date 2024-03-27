import React from "react";

//! imported desctination images
import Dhaka from "../../assets/Dhaka2.avif";

// Import traveler images
import traveler1 from "../../assets/traveler.jpg";
const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this months!</h2>

        <div className="tavelersContainer grid">
          {/*  Single Traveler Card  */}
          <div className="sinlgeTraveler">
            {/* Destination */}
            <img src={Dhaka} className="destinationImg" />
            {/* Traveler Details */}
            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src={traveler1} className="travelerImg" />
              </div>
              <div className="travelerName">
                <span>Dihan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travelers;
