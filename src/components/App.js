import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discover from "./Main/Discover";
import PageNotFound from "./Main/PageNotFound";
import GetStarted from "./Main/GetStarted";
import TrailerMoreInfo from "./Trailers/TrailerMoreInfo";
import movieTrailer from "movie-trailer";
import About from "./Main/About";
import Search from "./Main/Search";

function App() {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
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
      movieTrailer(movie?.name || movie?.title || movie?.original_name)
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
    <BrowserRouter>
      <Routes>
        <Route
          path="discover"
          element={
            <Discover
              handleCardClick={handleCardClick}
              trailerUrl={trailerUrl}
              setTrailerUrl={setTrailerUrl}
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
              closeAllPopups={closeAllPopups}
            />
          }
        />
        <Route path="discover/:mediaType/:tvId" element={<TrailerMoreInfo />} />
        <Route
          path="search/:query?"
          element={
            <Search
              handleCardClick={handleCardClick}
              trailerUrl={trailerUrl}
              setTrailerUrl={setTrailerUrl}
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
              closeAllPopups={closeAllPopups}
            />
          }
        />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
        <Route exact path="/" element={<GetStarted />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
