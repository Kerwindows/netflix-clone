import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import "../../index.css";
import api from "../../utils/api";
import Banner from "../Banner/Banner";
import Footer from "../Footer";
import Titles from "../Titles/Titles";
import Nav from "../Nav/Nav";
import VideoPopup from "../VideoPopup/VideoPopup";
import { ColorRing } from "react-loader-spinner";
import movieTrailer from "movie-trailer";

function Home() {
  // state variable for user info
  const [selectedCard, setSelectedCard] = useState(null);
  const [popularPics, setPopularPics] = useState({});
  const [movies, setMovies] = useState({
    netflix: [],
    trending: [],
    action: [],
    comedy: [],
    romantic: [],
    documentaries: [],
  });
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      api
        .fetchTrending()
        .then((data) => {
          return setPopularPics(
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
            netflix: data.results,
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
    const fetchNetflixOriginal = () => {
      api
        .fetchTrending()
        .then((data) => {
          return setPopularPics(
            data.results[Math.floor(Math.random() * data.results.length - 1)]
          );
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const netflixInterval = setInterval(fetchNetflixOriginal, 15000);

    return () => clearInterval(netflixInterval);
  }, []);

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

  function getTrailer(mov) {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(mov?.name || "", { tmdbId: mov?.id })
        .then((url) => {
          console.log("url", url);
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          } else {
            setTrailerUrl("");
          }
        })
        .catch((error) => console.log(error));
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
          <Banner movie={popularPics} onCardClick={handleCardClick} />
          <div className="page">
            <Titles
              title="NETFLIX ORIGINALS"
              movies={movies.netflix}
              size="big"
              type="tv"
              onCardClick={handleCardClick}
            />
            <Titles
              title="Trending Now"
              movies={movies.trending}
              onCardClick={handleCardClick}
            />

            <Titles
              title="Action"
              movies={movies.action}
              onCardClick={handleCardClick}
            />
            <Titles
              title="Comedies"
              movies={movies.comedy}
              onCardClick={handleCardClick}
            />
            <Titles
              title="Romantic Movies"
              movies={movies.romantic}
              onCardClick={handleCardClick}
            />
            <Titles
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

export default Home;
