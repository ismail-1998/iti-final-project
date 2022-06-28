import React, { Fragment } from 'react'
import './SectionHeader.css'

function SectionHeader(props) {
  return (
    <Fragment>
      <div className="text">
        <div className="box-title">
          <p className="title-0">{props.smallTitle}</p>
          <h2 className="title-1">{props.bigTitle}</h2>
          <span className="underline"></span>
        </div>
        <p>{props.desc}</p>
      </div>
    </Fragment>
  )
}

export default SectionHeader
