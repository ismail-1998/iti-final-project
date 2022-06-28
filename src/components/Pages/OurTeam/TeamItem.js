import React, { Fragment, useEffect } from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";


import AOS from 'aos'
import 'aos/dist/aos.css'

function TeamItem({animation, src, name, job}) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    })
  }, [])

  return (
    <Fragment>
      <div className="col-4 " data-aos={animation}>
        <div className="member-img">
          <img
            src={src}
            className="customimage"
            width="100%"
            alt="member..."
          />
          <div className="overlay">
            <div className="overlay-content">
              <ul>
                <li>
                  <a href="/">
                    <i><FaFacebook/></i>
                  </a>
                </li>

                <li>
                  <a href="/">
                    <i><FaTwitter/></i>
                  </a>
                </li>

                <li>
                  <a href="/">
                    <i><FaInstagram/></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="member-name">{name}</p>
        <p className="member-job">{job}</p>
      </div>
    </Fragment>
  )
}

export default TeamItem
