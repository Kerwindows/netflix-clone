import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import netflixTrailerLogo from "../../images/netflix-trailer-park-logo.svg";

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  //script for adding background to Nav on scroll
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll); // Add the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Remove the scroll event listener when the component unmounts
    };
  }, []);

  return (
    <div className={`nav ${scrolled ? "nav_scrolled" : ""}`}>
      <Link to="../discover">
        <img
          className="nav__logo"
          src={`${netflixTrailerLogo}`}
          alt="Netflix Logo"
        />
      </Link>

      <div className="nav__links">
        <Link to="../about">
          <span className="nav__about">About</span>
        </Link>
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix Avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
