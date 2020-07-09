import React from "react";

function Footer() {
  return (
    <footer className="footer sticky-bottom text-light text-center bg-secondary py-3 border-3 mt-3">
      <div className="text-center col-12">
        <a
          target="_blank"
          href="https://github.com/Pete331"
          className="btn btn-neutral btn-icon btn-github btn-round btn-lg"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-2x"></i>{" "}
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/peter-brennan-a61563192/"
          className="btn btn-neutral btn-icon btn-linkedin btn-lg btn-round"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-2x"></i>{" "}
        </a>
        <a
          target="_blank"
          href="https://www.twitter.com/Pete_331"
          className="btn btn-neutral btn-icon btn-twitter btn-round btn-lg"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/Pete331"
          className="btn btn-neutral btn-icon btn-facebook btn-round btn-lg"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook fa-2x"></i>
        </a>
      </div>
      © 2020 - Designed & Coded by Peter Brennan <br />
      Perth - Australia
    </footer>
  );
}

export default Footer;
