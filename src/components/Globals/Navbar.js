import React from 'react'

import './Navbar.css'

function Navbar() {

  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">MoGO</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#about-us">about us</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#services">services</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#we-do">we do</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#our-team">Our Team</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#our-work">Our Work</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#reviews">reviews</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#blogs">blogs</a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>

  )
}

export default Navbar;


