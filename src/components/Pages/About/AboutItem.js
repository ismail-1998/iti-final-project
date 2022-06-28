import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const AboutItem = ({ animation, src, icon, desc }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <>
      <div className="col-md-4 col-sm-12" data-aos={animation}>
        <div className="item">
          <img src={src} alt="About" width="100%" />
          <div className="overlay">
            <div className="overlay-content">
              <i>{React.createElement(icon)}</i>
              <span>{desc}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutItem;
