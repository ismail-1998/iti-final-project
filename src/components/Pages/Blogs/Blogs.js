import React, { Fragment } from "react";
import SectionHeader from "../../Globals/SectionHeader";
import BlogItem from "./BlogItem";

import blog_data from "./blog_data";

import "./Blogs.css";

function Blogs() {
  const header = blog_data.header;
  const content = blog_data.content;

  return (
    <Fragment>
      <div className="blogs" id="blogs">
        <div className="container">
          <SectionHeader
            smallTitle={header.firstTitle}
            bigTitle={header.secondTitle}
            desc=""
          />

          <div className="blogs-content">
            <div className="row">
              {content.map((item, index) => {
                const { image, title, desc } = item;
                return <BlogItem key={index} image={image} title={title} desc={desc} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Blogs;
