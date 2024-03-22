import React from "react";
// import

import img from "../../assets/heading.png";

const Home = () => {
  return (
    <div className="home flex container ">
      <div className="mainContent">
        <h1>Lets Make Memories With D.Drive...!</h1>
      </div>
      <div className="homeImg flex">
        <img src={img} className="bus" alt="" />
      </div>
    </div>
  );
};

export default Home;
