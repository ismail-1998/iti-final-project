import React, { Fragment } from 'react'

function BlogItem(props) {
  return (
    <Fragment>
      <div className="col-md-4 col-sm-12">
        <div className="blog-item">
          <img src={props.image} width="100%" alt="blog..." />
          <h5>{props.title}</h5>
          <p>{props.desc}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default BlogItem
