import React, { Fragment, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ReviewItem = ({ animation, src, name, job, comment }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    })
  }, [])
  
  return (
    <Fragment>
      <div className="profile-box" data-aos={animation}>
        <div className="profile-img">
          <img src={src} width="100%" alt="person"/>
        </div>

        <div className="profile-text">
          <p className="name">{name}</p>
          <span>{job}</span>
          <span className="underline"></span>

          <p className="comment">{comment}</p>
        </div>
        <div className="clear-fix"></div>
      </div>
    </Fragment>
  )
}

export default ReviewItem
