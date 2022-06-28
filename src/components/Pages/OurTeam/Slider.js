import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";

import img1 from "../../../assets/images/slider/person-1.jpg";
import img2 from "../../../assets/images/slider/person-2.jpg";
import img3 from "../../../assets/images/slider/person-3.jpg";

import "./Slider.css";

function Slider() {
  return (
    <Fragment>
      <div className="slider">
        <div className="container">
          <Carousel controls={true} variant="dark">
            <Carousel.Item interval={3000}>
              <div className="row">
                <div className="col-lg-3 col-sm-12">
                  <img
                    className="w-100 rounded-circle"
                    src={img1}
                    alt="Third slide"
                  />
                </div>

                <Carousel.Caption className="col-lg-9 col-sm-12">
                  <div className="desc">
                    <q>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Impedit voluptatem et nobis sapiente veniam fugiat,
                      obcaecati laudantium pariatur
                    </q>
                    <p>
                      <span className="underline"></span>
                      &nbsp; &nbsp; Mohammed
                    </p>
                  </div>
                </Carousel.Caption>
              </div>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <div className="row">
                <div className="col-lg-3 col-sm-12">
                  <img
                    className="w-100 rounded-circle"
                    src={img2}
                    alt="Third slide"
                  />
                </div>

                <div className="col-lg-9 col-sm-12">
                  <Carousel.Caption className="w-100">
                    <div className="desc">
                      <q>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Impedit voluptatem et nobis sapiente veniam
                        fugiat, obcaecati laudantium pariatur
                      </q>
                      <p>
                        <span className="underline"></span>
                        &nbsp; &nbsp; Malala
                      </p>
                    </div>
                  </Carousel.Caption>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <div className="row">
                <div className="col-lg-3 col-sm-12">
                  <img
                    className="w-100 rounded-circle"
                    src={img3}
                    alt="Third slide"
                  />
                </div>

                <div className="col-lg-9 col-sm-12">
                  <Carousel.Caption>
                    <div className="desc">
                      <q>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Impedit voluptatem et nobis sapiente veniam
                        fugiat, obcaecati laudantium pariatur
                      </q>
                      <p>
                        <span className="underline"></span>
                        &nbsp; &nbsp; Youssef
                      </p>
                    </div>
                  </Carousel.Caption>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </Fragment>
  );
}

export default Slider;
