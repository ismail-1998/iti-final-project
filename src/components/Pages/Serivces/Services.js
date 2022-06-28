import React, { Fragment } from "react";
import {
  FaClock,
  FaChartArea,
  FaDesktop,
  FaBookmark,
  FaHome,
  FaDigitalTachograph,
} from "react-icons/fa";

import services_data from "./services_data";
import SectionHeader from "../../Globals/SectionHeader";
import ServiceItem from "./ServiceItem";

import "./Services.css";

function Services() {
  const header = services_data.header;
  const content = services_data.content;

  const icons = [
    FaClock,
    FaChartArea,
    FaDesktop,
    FaBookmark,
    FaHome,
    FaDigitalTachograph,
  ];

  return (
    <Fragment>
      <div className="services" id="services">
        <div className="container">
          <SectionHeader
            smallTitle={header.firstTitle}
            bigTitle={header.secondTitle}
            desc={header.desc}
          />

          <div className="services-content">
            {content.map((item, index) => {
              const { animation, title, desc } = item;
              return (
                <ServiceItem
                  key={index}
                  animation={animation}
                  icon={icons[index]}
                  title={title}
                  desc={desc}
                />
              );
            })}

            <div className="clear-fix"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Services;
