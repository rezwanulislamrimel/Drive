import React, { useEffect } from "react";

// import images

import img from "../../assets/heading.png";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  // useeffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="home flex container ">
      <div className="mainContent">
        <h1 data-aos="fade-up" data-aos-duraton="2500">
          Lets Make Memories With D.Drive...!
        </h1>
      </div>
      <div className="homeImg flex">
        <img src={img} className="bus" alt="" />
      </div>
    </div>
  );
};

export default Home;
