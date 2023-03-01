import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
import "./Banner.css";
const base_url = "https://image.tmdb.org/t/p/original/";
const playButton = "https://cdn-icons-png.flaticon.com/128/727/727245.png";
const moreInfo = "https://cdn-icons-png.flaticon.com/128/6583/6583141.png";

function Banner({ movie, onCardClick, type = "tv" }) {
  const [bannerMovie, setBannerMovie] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBannerMovie(movie);
    setBackgroundImage(`${base_url}${movie.backdrop_path}`);
  }, [movie]);

  function handleClick() {
    onCardClick(movie);
  }
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  return (
    <div>
      <animated.div style={style}>
        <header
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "center center",
            transition: "background-image 1s ease-in-out",
          }}
        >
          <div className="banner__contents">
            <h1 className="banner__title">
              {bannerMovie?.title ||
                bannerMovie?.name ||
                bannerMovie?.original_name}
            </h1>
            <div className="banner__buttons">
              <button
                onClick={handleClick}
                className="banner__button banner__button-white"
              >
                <img
                  className="banner__button-icon"
                  src={playButton}
                  alt="play button"
                />
                <p className="banner__button-text">Play</p>
              </button>

              <Link
                className="banner__button-link"
                to={`${
                  movie.media_type != null
                    ? movie.media_type
                    : type == null
                    ? "movie"
                    : type
                }/${movie.id}`}
              >
                <button className="banner__button">
                  <img
                    className="banner__button-icon banner__button-icon-white"
                    src={moreInfo}
                    alt="info button"
                  />
                  <p className="banner__button-text">More Info</p>
                </button>
              </Link>
            </div>
            <p className="banner__description">
              {truncate(bannerMovie?.overview, 150)}
            </p>
          </div>
          <div className="banner__fadeBottom"></div>
        </header>
      </animated.div>
    </div>
  );
}

export default Banner;
