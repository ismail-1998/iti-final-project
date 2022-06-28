import React, { Fragment, useEffect } from "react";
import { FaRegImage, FaCode, FaBullseye } from "react-icons/fa";
import SectionHeader from "../../Globals/SectionHeader";

import AOS from "aos";
import "aos/dist/aos.css";
import "./WeDo.css";

function WeDo() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });

    var accordions = document.getElementsByClassName("accordion");
    for (let i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }, []);

  return (
    <Fragment>
      <div className="we-do" id="we-do">
        <div className="container">
          <SectionHeader
            smallTitle="Services"
            bigTitle="what we do"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quis delectus obcaecati repudiandae iusto. Voluptatibus vel autexplicabo officia modi dolores nihil quod deserunt, cum quam perspiciatis voluptatem asperiores rerum"
          />

          <div className="we-do-content">
            <div className="row">
              <div className="col-6" data-aos="zoom-in">
                <img
                  src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>

              <div className="col-6" data-aos="fade-left">
                <div className="accordion">
                  <i><FaRegImage/></i>
                  <p>photograpy</p>
                </div>
                <div className="panel">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                <div className="accordion">
                  <i><FaCode/></i>
                  <p>creativity</p>
                </div>
                <div className="panel">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                <div className="accordion">
                  <i><FaBullseye/></i>
                  <p>web design</p>
                </div>
                <div className="panel">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default WeDo;
