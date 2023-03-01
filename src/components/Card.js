import React from "react";
import { Link } from "react-router-dom";
const base_url = "https://image.tmdb.org/t/p/original/";
const playButton = "https://cdn-icons-png.flaticon.com/128/483/483054.png";
const viewMore = "https://cdn-icons-png.flaticon.com/128/2985/2985151.png";
const placeholder =
  "https://th.bing.com/th/id/OIP.qTVxMRWnKMxisf_nBYuy-gHaHa?pid=ImgDet&rs=1";

function Card({ movie, onCardClick, size, type }) {
  function handleClick() {
    onCardClick(movie);
  }

  return (
    <li className={`${size != null ? "card card_bg" : "card"}`}>
      <img
        className="card__image"
        src={`${base_url}${movie.poster_path || placeholder}`}
        alt={movie.name}
      />
      <div
        className={`${
          size != null ? "card__info" : "card__info card__info_sm"
        }`}
      >
        <div className="card__info-top">
          <h3
            className={`${
              size != null ? "card__title" : "card__title card__title_sm"
            }`}
          >
            {movie.title || movie.name || movie.original_title}
          </h3>
        </div>
        <div className="card__info-middle">
          <p className="card__links">
            <img
              onClick={handleClick}
              className="card__play"
              src={playButton}
              alt="play"
            />
          </p>
          <Link
            to={`${
              movie.media_type
                ? movie.media_type
                : type == null
                ? "movie"
                : type
            }/${movie.id}`}
          >
            <p className="card__link">
              <img className="card__view-more" src={viewMore} alt="View more" />
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
