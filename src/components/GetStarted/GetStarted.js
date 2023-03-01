import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
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
              Unlimited movies, TV shows trailers.
            </h1>
            <h2 className="get-started__subtitle">
              Watch anywhere. Watch anytime.
            </h2>
            <h3 className="get-started__cta">
              CLick the start button to continue
            </h3>
            <Link className="get-started__link" to="discover">
              <button className="get-started__button">
                <span>Get Started</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="get-started__fadeBottom"></div>
      </animated.div>
    </div>
  );
}

export default GetStarted;
