import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";


import img1 from "../../assets/images/footer/footer-blog-1.jpg";
import img2 from "../../assets/images/footer/footer-blog-2.jpg";
import img3 from "../../assets/images/footer/footer-blog-3.jpg";

import img4 from "../../assets/images/footer/footer-insta.jpg";

import "./Footer.css";
function Footer() {
  return (
    <div className="footer" id="contact">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <h3>MOGO</h3>
            <p className="footer-desc">
              MoGo PSD template is best suitable for agencies and featured by
              clean and modern design. It includes many useful components like
              milestones, accordions, portfolio thumbnails, testimonial
              carousels and other widgets. Are you ready to get started?
            </p>

            <p>
              <strong>
                <span>15K </span>
                Followers
              </strong>
            </p>

            <hr />

            <div className="social-icons">
              <p>Follow us :</p>
              <ul>
                <li>
                  <a href="/">
                    <FaFacebookF />
                  </a>
                </li>

                <li>
                  <a href="/">
                    <FaTwitter />
                  </a>
                </li>

                <li>
                  <a href="/">
                    <FaInstagram />
                  </a>
                </li>

                <li>
                  <a href="/">
                    <FaPinterest />
                  </a>
                </li>

                <li>
                  <a href="/">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>

            <form autoComplete="off">
              <input type="text" placeholder="Your Email..." />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="footer-blogs">
              <h5>blogs</h5>

              <ul id="footer-blogs">
                <li>
                  <img alt="" src={img1} width="100%" />
                  <div>
                    <p>LOREM IPSUM DOLOR SIT</p>
                    <p>AMET CONSECTETUR ADLPISCING</p>
                    <span>jan 9, 2016</span>
                  </div>
                </li>
                <li>
                  <img alt="" src={img2} width="100%" />
                  <div>
                    <p>CONSECTETUR ADLPISCINE ELIT.</p>
                    <p>SED DO EIUSMOD TEMPOR</p>
                    <span>jan 9, 2016</span>
                  </div>
                </li>
                <li>
                  <img alt="" src={img3} width="100%" />
                  <div>
                    <p>SED DO EIUSMOD TEMPOR</p>
                    <p>INCIDIDUNT UT LABORE</p>
                    <span>jan 9, 2016</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="footer-insta">
              <h5>instagram</h5>
              <img alt="" src={img4} width="60%" />
              <a href="/">View more photos</a>
            </div>
          </div>
        </div>

        <hr />

        <div className="row text-center">
          <p>
            &copy; Created by ( Ismail Ahmed ) - ITI FrontEnd Training Course
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
