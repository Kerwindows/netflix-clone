import React, { useState, useEffect } from "react";
import "./MoreInfoBanner.css";
const base_url = "https://image.tmdb.org/t/p/original/";
const playButton = "https://cdn-icons-png.flaticon.com/128/727/727245.png";
const votes = "https://cdn-icons-png.flaticon.com/128/126/126473.png";

function MoreInfoBanner({ movie }) {
  console.log(movie);
  const [movieInfo, setMovieInfo] = useState([]);
  useEffect(() => {
    setMovieInfo(movie);
  }, [movie]);

  function convertTimeString(totalMinutes) {
    if (totalMinutes == null) {
      return "";
    }
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return hours + "h " + minutes + "m ";
  }

  function getYearFromDate(dateString) {
    if (dateString == null) {
      return "";
    }
    const date = new Date(dateString);
    const year = date.getFullYear();
    return year;
  }

  return (
    <div>
      <header
        className="more-info-banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${base_url}${movieInfo?.backdrop_path})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="more-info__banner-contents">
          <h1 className="more-info__banner-title">
            {movieInfo?.title || movieInfo?.name || movieInfo?.original_name}
          </h1>
          <section className="more-info__banner-info-block">
            <div>
              <div className="more-info__banner-movie-details">
                <span className="more-info__banner-release-date">
                  {getYearFromDate(movieInfo?.release_date)}
                </span>
                <span className="more-info__banner-runtime">
                  {convertTimeString(movieInfo?.runtime)}
                </span>
                <span className="more-info__banner-rating">
                  <span className="more-info__banner-rating-text">
                  Rating: {movieInfo?.vote_average}
                  </span>
                  <img
                    className="more-info__banner-rating-icon"
                    src={votes}
                    alt="Votes"
                  />
                </span>
                <span>
                Vote Count: {movieInfo?.vote_count}
                </span>
              </div>
              <p className="more-info__banner-description">
                {movieInfo?.overview}
              </p>
            </div>
            <div>
              <div className="more-info__banner-info">
                <div className="more-info__banner-logos">
                  {movieInfo?.production_companies &&
                    movieInfo?.production_companies.map((movie, i) => (
                      <img
                        key={i}
                        className="more-info__banner-logo"
                        src={`${base_url}${movie.logo_path}`}
                        alt="Logo"
                      />
                    ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="more-info__banner-fadeBottom"></div>
      </header>
      <section className="more-info__description">
        <div className="more-info__genres">
          <span className="more-info__title">Genre: </span>
          {movieInfo?.genres &&
            movieInfo?.genres.map((genre, i) => (
              <span key={genre.id} className="more-info__genre-text">
                {genre.name}
                {i < movieInfo?.genres.length - 1 && ", "}
              </span>
            ))}
        </div>
        <div className="more-info__site">
          <span className="more-info__title">Visit the official site: </span>
          <a
            className="more-info__link"
            href={movieInfo?.homepage}
            target="_blank"
            rel="noreferrer"
          >
            {movieInfo?.homepage}
          </a>
        </div>
        <div className="more-info__production">
          <span className="more-info__title">Production Companies: </span>
          {movieInfo?.production_companies &&
            movieInfo?.production_companies.map((prod, i) => (
                <span key={prod.id} className="more-info__text">
                  {prod.name}
                  {i < movieInfo?.production_companies.length - 1 && ", "}
                </span>
            ))}
        </div>
        <div className="more-info__languages">
        <span className="more-info__title">Languages: </span>
        {movieInfo?.spoken_languages &&
            movieInfo?.spoken_languages.map((prod, i) => (
                <span key={prod.id} className="more-info__text">
                  {prod.name}
                  {i < movieInfo?.spoken_languages.length - 1 && ", "}
                </span>
            ))}        
        </div>
      </section>
    </div>
  );
}

export default MoreInfoBanner;

// {
//   "adult": false,
//   "backdrop_path": "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
//   "belongs_to_collection": {
//       "id": 87096,
//       "name": "Avatar Collection",
//       "poster_path": "/uO2yU3QiGHvVp0L5e5IatTVRkYk.jpg",
//       "backdrop_path": "/iaEsDbQPE45hQU2EGiNjXD2KWuF.jpg"
//   },
//   "budget": 460000000,
//   "genres": [
//       {
//           "id": 878,
//           "name": "Science Fiction"
//       },
//       {
//           "id": 12,
//           "name": "Adventure"
//       },
//       {
//           "id": 28,
//           "name": "Action"
//       }
//   ],
//   "homepage": "https://www.avatar.com/movies/avatar-the-way-of-water",
//   "id": 76600,
//   "imdb_id": "tt1630029",
//   "original_language": "en",
//   "original_title": "Avatar: The Way of Water",
//   "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
//   "popularity": 1629.46,
//   "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
//   "production_companies": [
//       {
//           "id": 574,
//           "logo_path": "/iB6GjNVHs5hOqcEYt2rcjBqIjki.png",
//           "name": "Lightstorm Entertainment",
//           "origin_country": "US"
//       },
//       {
//           "id": 127928,
//           "logo_path": "/cxMxGzAgMMBhTXkcpYYCxWCOY90.png",
//           "name": "20th Century Studios",
//           "origin_country": "US"
//       }
//   ],
//   "production_countries": [
//       {
//           "iso_3166_1": "US",
//           "name": "United States of America"
//       }
//   ],
//   "release_date": "2022-12-14",
//   "revenue": 2267383862,
//   "runtime": 192,
//   "spoken_languages": [
//       {
//           "english_name": "English",
//           "iso_639_1": "en",
//           "name": "English"
//       }
//   ],
//   "status": "Released",
//   "tagline": "Return to Pandora.",
//   "title": "Avatar: The Way of Water",
//   "video": false,
//   "vote_average": 7.737,
//   "vote_count": 5500
// }
