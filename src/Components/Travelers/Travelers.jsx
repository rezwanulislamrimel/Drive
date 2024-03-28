import React from "react";

//! imported desctination images
import Dhaka from "../../assets/Dhaka2.avif";
import Coxsbazar from "../../assets/coxsbazar.jpg";
// import khulna from "../../assets/khulna.jpg";

// Import traveler images
import traveler1 from "../../assets/traveler.jpg";
import traveler2 from "../../assets/traveler.jpg";
// import traveler3 from "../../assets/traveler.jpg";

// Maping
const travelers = [
  {
    id: 1,
    destinationImg: Dhaka,
    travelerImg: traveler2,
    travelerName: "Dihan",
    socialLink: "@Dihan97",
  },
  {
    id: 2,
    destinationImg: Coxsbazar,
    travelerImg: traveler1,
    travelerName: "Rimel",
    socialLink: "@Rimel97",
  },
  // {
  //   id: 3,
  //   destinationImg: khulna,
  //   travelerImg: traveler3,
  //   travelerName: "Farhan",
  //   socialLink: "@Farhan95",
  // },
];

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this months!</h2>

        <div className="tavelersContainer grid">
          {/* maping  */}
          {travelers.map(
            ({ id, destinationImg, travelerImg, travelerName, socialLink }) => {
              return (
                // {/*  Single Traveler Card  */}
                <div key={id} className="sinlgeTraveler">
                  {/* Destination */}
                  <img src={destinationImg} className="destinationImg" />
                  {/* Traveler Details */}
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImg} className="travelerImg" />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p> {socialLink} </p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
