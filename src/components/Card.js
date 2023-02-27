import React, { useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";

/* ------------------------ function EditProfilePopup ----------------------- */
function Card({ movie }) {
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <li className="card">
      <img
        onClick={() => {
          handleClick(movie);
        }}
        className="card__image"
        src={`${base_url}${movie.poster_path}`}
        alt={movie.name}
      />
      <YouTube videoId={trailerUrl} opts={opts} />
    </li>
  );
}

export default Card;