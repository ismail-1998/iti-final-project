import React from "react";
import {
  FaTree,
  FaWhatsapp,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaLeaf,
} from "react-icons/fa";

import SectionHeader from "../../Globals/SectionHeader";
import TeamItem from "./TeamItem";
import our_team_data from "./our_team_data";

import "./OurTeam.css";
import Slider from "./Slider";

function OurTeam() {
  const header = our_team_data.header;
  const content = our_team_data.content;

  return (
    <div className="our-team" id="our-team">
      <div className="container">
        <SectionHeader
          smallTitle={header.firstTitle}
          bigTitle={header.secondTitle}
          desc={header.desc}
        />

        {/* Members */}
        <div className="members">
          <div className="row">
            {content.map((item, index) => {
              const { animation, image, name, job } = item;
              return (
                <TeamItem
                  key={index}
                  animation={animation}
                  src={image}
                  name={name}
                  job={job}
                />
              );
            })}

            <div className="clear-fix"></div>
          </div>
        </div>
      </div>

      <div className="list-icons">
        <FaTree className="icon" />
        <FaWhatsapp className="icon" />
        <FaTwitter className="icon" />
        <FaYoutube className="icon" />
        <FaPinterest className="icon" />
        <FaLeaf className="icon" />
      </div>

      <div className="container">
        <Slider />
      </div>
    </div>
  );
}

export default OurTeam;
