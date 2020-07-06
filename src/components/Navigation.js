import React from "react";
import { Link } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";

function Navigation() {
  return (
    <header className="border-bottom border-dark mb-3 sticky-top">
      {/* <!-- Menu hides when smaller than 768px --> */}
      <div className="row">
        <div className="col-3 d-none d-md-block bg-info navbar">
          <div className="text-center text-light" id="name">
            Peter Brennan
          </div>
        </div>
        <div className="col-9 d-none d-md-block bg-white">
          <div className="nav justify-content-end">
            <ul className="nav">
              <li className="nav-item">
              <Link className="btn nav-link text-muted" to="/">About</Link>
              </li>
              <li className="nav-item">
                <Link className="btn nav-link text-muted" to="/Portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
              <Link className="btn nav-link text-muted" to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 
        <!-- Menu shows when smaller than 768px --> */}
      <div className="">
        <div className="row d-md-none">
          <div className="col-12 text-center navbar-brand bg-info text-light">
            Peter Brennan
          </div>
        </div>
        <div className="nav d-md-none">
          <div className="col-12 bg-white">
            <ul className="nav justify-content-center">
              <li className="nav-item">
              <Link className="btn nav-link text-muted" to="/">About</Link>
              </li>
              <li className="nav-item">
              <Link className="btn nav-link text-muted" to="/Portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
              <Link className="btn nav-link text-muted" to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
