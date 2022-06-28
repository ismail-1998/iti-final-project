import React, { Fragment } from 'react'

function WorkItem(props) {
    return (
        <Fragment>
            <div className="box">
              <img
                src={props.img}
                alt="ًWork ..."
              />
              <div className="overlay">
                <div className="overlay-content">
                  <i className="fa fa-image"></i>
                  <span>creativity designed</span>
                </div>
              </div>
            </div>
        </Fragment>
    )
}

export default WorkItem
