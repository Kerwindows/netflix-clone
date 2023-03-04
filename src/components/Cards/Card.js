import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import placeholder from "../../images/placeholder.jpg";

const base_url = "https://image.tmdb.org/t/p/w342";
const playButton = "https://cdn-icons-png.flaticon.com/128/483/483054.png";
const viewMore = "https://cdn-icons-png.flaticon.com/128/2985/2985151.png";

function Card({ movie, onCardClick, size, type = "movie" }) {
  function handleClick() {
    onCardClick(movie);
  }

  return (
    <li className={`${size ? "card card_bg" : "card"}`}>
      <img
        className="card__image"
        src={`${base_url}${movie.poster_path}` || placeholder}
        alt={movie.name}
      />
      <div
        className={`${
          size != null ? "card__info" : "card__info card__info_sm"
        }`}
      >
        <div className="card__info-top">
          <h3
            className={`${size ? "card__title" : "card__title card__title_sm"}`}
          >
            {movie.title || movie.name || movie.original_title}
          </h3>
        </div>
        <div className="card__info-middle">
          <p className="card__links">
            <img
              onClick={handleClick}
              className={`${size ? "card__play card__play_bg" : "card__play"}`}
              src={playButton}
              alt="play"
            />
          </p>
          <Link to={`${movie?.media_type || type || "movie"}/${movie?.id}`}>
            <p className="card__link">
              <img
                className={`${
                  size
                    ? "card__view-more card__view-more_bg"
                    : "card__view-more"
                }`}
                src={viewMore}
                alt="View more"
              />
            </p>
          </Link>
        </div>
        <div className="card__info-bottom">
          <p
            className={`${
              size != null
                ? "card__vote-average"
                : "card__vote-average card__vote-average_sm"
            }`}
          >
            Vote Ave: <span>{movie.vote_average}</span>
          </p>
        </div>
      </div>
    </li>
  );
}

export default Card;
