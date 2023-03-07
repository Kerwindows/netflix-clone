import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Header/Nav";
import { animated, useSpring } from "@react-spring/web";
import "./GetStarted.css";

function GetStarted() {
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  return (
    <div>
      <Nav />
      <animated.div style={style}>
        <div className="get-started">
          <div className="get-started__info">
            <h1 className="get-started__title">
              Unlimited Movie Trailers For Free
            </h1>
            <h2 className="get-started__subtitle">
              Watch anywhere. Watch anytime.
            </h2>
            <h3 className="get-started__cta">
              Click the start button to continue
            </h3>
            <Link className="get-started__link" to="discover">
              <button className="get-started__button">
                <span>Get Started</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="get-started__fadeBottom"></div>
        <article className="get-started__disclaimer">
          <p className="get-started__disclaimer-text">
            We would like to emphasize that this website has been created solely
            for educational and demonstration purposes. It is important to note
            that we are not affiliated with any movie streaming service, and
            this site should not be construed as representing any third-party
            affiliation. Our primary objective is to utilize this platform to
            showcase the skills and expertise of our developer. Thank you for
            your understanding.
          </p>
        </article>
      </animated.div>
    </div>
  );
}

export default GetStarted;
