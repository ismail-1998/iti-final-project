import React, { Fragment, useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

const ServiceItem = ({ animation, icon, title, desc }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    })
  }, [])
  return (
    <Fragment>
      <div className="left" data-aos={animation}>
        <div className="icon-box">
          <i>
            {React.createElement(icon)}
          </i>
        </div>
        <div className="text-box">
          <p className="title">{title}</p>
          <p>{desc}</p>
        </div>
      </div>
    </Fragment>
  )
}

export default ServiceItem
