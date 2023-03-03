import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import trailerWatch from "../../images/trailer-watch-logo.svg";
import watchAvatar from "../../images/watch-avatar.svg";

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
        <img className="nav__logo" src={`${trailerWatch}`} alt="Movie logo" />
      </Link>

      <div className="nav__links">
        <Link class="nav__link" to="../about">
          <span className="nav__about">About</span>
        </Link>
        <img className="nav__avatar" src={watchAvatar} alt="Avatar" />
      </div>
    </div>
  );
}

export default Nav;
