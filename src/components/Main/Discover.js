import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import "../../index.css";
import api from "../../utils/api";
import Nav from "../Header/Nav";
import Banner from "../Banners/Banner";
import Trailer from "../Trailers/Trailer";
import Footer from "../Footer/Footer";
import VideoPopup from "../Popups/VideoPopup";
import movieTrailer from "movie-trailer";
import { ColorRing } from "react-loader-spinner";

function Discover() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [trendingVideos, setTrendingVideos] = useState({});
  const [trendingArray, setTrendingArray] = useState([]);
  const [movies, setMovies] = useState({
    netflix: [],
    trending: [],
    action: [],
    comedy: [],
    romantic: [],
    documentaries: [],
  });

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      api
        .fetchTrending()
        .then((data) => {
          setTrendingArray(data.results);
          console.log(data.results);
          return setTrendingVideos(
            data.results[Math.floor(Math.random() * data.results.length - 1)]
          );
        })
        .catch((err) => {
          console.log(err);
        });
      api
        .fetchNetflixOriginal()
        .then((data) => {
          setMovies((prevMovies) => ({
            ...prevMovies,
            netflix: data.results.slice(0, 10),
          }));
        })
        .catch((err) => {
          console.log(err);
        });
      api
        .fetchTrending()
        .then((data) => {
          setMovies((prevMovies) => ({
            ...prevMovies,
            trending: data.results,
          }));
        })
        .catch((err) => {
          console.log(err);
        });
      api
        .fetchActionMovies()
        .then((data) => {
          setMovies((prevMovies) => ({
            ...prevMovies,
            action: data.results,
          }));
        })
        .catch((err) => {
          console.log(err);
        });
      api
        .fetchComedyMovies()
        .then((data) => {
          setMovies((prevMovies) => ({
            ...prevMovies,
            comedy: data.results,
          }));
        })
        .catch((err) => {
          console.log(err);
        });
      api
        .fetchRomanticMovies()
        .then((data) => {
          setMovies((prevMovies) => ({
            ...prevMovies,
            romantic: data.results,
          }));
        })
        .catch((err) => {
          console.log(err);
        });
      api
        .fetchDocumentaries()
        .then((data) => {
          setMovies((prevMovies) => ({
            ...prevMovies,
            documentaries: data.results,
          }));
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomVideo =
        trendingArray[Math.floor(Math.random() * trendingArray.length)];

      setTrendingVideos(randomVideo);
    }, 15000);

    return () => clearInterval(interval);
  }, [trendingArray]);

  function handleCardClick(clickedCard) {
    setSelectedCard(clickedCard);
    getTrailer(clickedCard);
  }

  function closeAllPopups() {
    setSelectedCard(null);
    getTrailer("");
  }
  // eslint-disable-next-line
  const closeAllPopupsCallback = useCallback(closeAllPopups, []);
  const getTrailerCallback = useCallback(getTrailer, [
    trailerUrl,
    setTrailerUrl,
  ]);

  function getTrailer(movie) {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || "", { tmdbId: movie?.id })
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
          setTrailerUrl("");
        });
    }
  }
  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopupsCallback();
        getTrailerCallback("");
      }
    };
    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [closeAllPopupsCallback, getTrailerCallback]);

  return (
    <>
      <Nav />
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            backgroundColor: "#000",
          }}
        >
          <ColorRing
            visible={true}
            height="100"
            width="100"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"]}
          />
        </div>
      ) : (
        <>
          <Banner movie={trendingVideos} onCardClick={handleCardClick} />
          <div className="main">
            <Trailer
              title="NETFLIX ORIGINALS"
              movies={movies.netflix}
              size="big"
              type="tv"
              onCardClick={handleCardClick}
            />
            <Trailer
              title="Trending Now"
              movies={movies.trending}
              onCardClick={handleCardClick}
            />

            <Trailer
              title="Action"
              movies={movies.action}
              onCardClick={handleCardClick}
            />
            <Trailer
              title="Comedies"
              movies={movies.comedy}
              onCardClick={handleCardClick}
            />
            <Trailer
              title="Romantic Movies"
              movies={movies.romantic}
              onCardClick={handleCardClick}
            />
            <Trailer
              title="Ducumentaries"
              movies={movies.documentaries}
              onCardClick={handleCardClick}
            />

            <Footer />
          </div>
        </>
      )}
      <VideoPopup
        movie={selectedCard}
        onClose={closeAllPopups}
        trailerUrl={trailerUrl}
      />
    </>
  );
}

export default Discover;
