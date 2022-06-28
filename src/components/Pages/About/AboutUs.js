import React, { Fragment } from "react";
import SectionHeader from "../../Globals/SectionHeader";
import { FaPencilAlt, FaUsers, FaRegHandshake } from "react-icons/fa";

import "./AboutUs.css";
import AboutItem from "./AboutItem";
import { header, content } from "./about_data";

function AboutUs() {
  const { firstTitle, secondTitle, desc } = header;

  const icons = [FaPencilAlt, FaUsers, FaRegHandshake];
  return (
    <Fragment>
      <div className="about-us" id="about-us">
        <div className="container">
          <SectionHeader
            smallTitle={firstTitle}
            bigTitle={secondTitle}
            desc={desc}
          />

          <div className="about-us-items">
            <div className="row d-sm-flex justify-content-sm-center">
              {content.map((item, index) => {
                const { animation, image, desc } = item;
                
                return (
                  <AboutItem
                    key={index}
                    animation={animation}
                    src={image}
                    icon={icons[index]}
                    desc={desc}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
    </Fragment>
  );
}

export default AboutUs;
