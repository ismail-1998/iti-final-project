import React from "react";
import SectionHeader from "../../Globals/SectionHeader";
import ReviewItem from "./ReviewItem";

import "./Reviews.css";
import review_data from "./review_data";

import revBackImg from "../../../assets/images/reviews/background-review.jpg";

function Reviews() {
  const header = review_data.header;
  const content = review_data.content;

  return (
    <div className="reviews" id="reviews">
      <img src={revBackImg} alt="" />

      <div className="container">
        <SectionHeader
          smallTitle={header.firstTitle}
          bigTitle={header.secondTitle}
          desc=""
        />

        <div id="reviews-content">
          {content.map((item, index) => {
            const { animation, image, name, job, comment } = item;
            return (
              <ReviewItem
                key={index}
                animation={animation}
                src={image}
                name={name}
                job={job}
                comment={comment}
              />
            );
          })}

          <div className="clear-fix"></div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
