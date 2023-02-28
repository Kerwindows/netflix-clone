import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import Banner from "../Banner/Banner";
import Footer from "../Footer";
import Titles from "../Titles/Titles";
import Nav from "../Nav/Nav";
import ImagePopup from "../ImagePopup/ImagePopup";
import "../../index.css";
import movieTrailer from 'movie-trailer';

function Home() {
  // state variable for user info
  const [selectedCard, setSelectedCard] = useState(null);
  const [popularPic, setPopularPic] = useState([]);
  const [netflixMovies, setNetflixMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  // const [topRatedMovies, setTopRatedMovies] = useState([]);
  // const [topRatedTvShows, setTopRatedTvShows] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [romanticMovies, setRomanticMovies] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    api.fetchNetflixOriginal().then((data) => {
      return setPopularPic(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    });
    api.fetchNetflixOriginal().then((data) => setNetflixMovies(data.results));
    api.fetchTrending().then((data) => setTrendingMovies(data.results));
    // api.fetchTopRatedMovies().then((data) => setTopRatedMovies(data.results));
    // api.fetchTopRatedTvShows().then((data) => setTopRatedTvShows(data.results));
    api.fetchActionMovies().then((data) => setActionMovies(data.results));
    api.fetchComedyMovies().then((data) => setComedyMovies(data.results));
    api.fetchRomanticMovies().then((data) => setRomanticMovies(data.results));
    api.fetchDocumentaries().then((data) => setDocumentaries(data.results));
  }, []);

  function closeAllPopups() {
    setSelectedCard(null);
    getTrailer('')
  }
  function handleCardClick(clickedCard) {
    setSelectedCard(clickedCard);
    getTrailer(clickedCard)
  }

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
        
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);
  
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function  getTrailer(mov){
  if (trailerUrl) {
    setTrailerUrl("");
    console.log(trailerUrl)
  } else {
    movieTrailer(mov?.name || "")
      .then((url) => {
        console.log(url)
        if (url) {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }else{
          setTrailerUrl('')
        }
      })
      .catch((error) => console.log(error));
  }
};

  return (
    <>
      <Nav />
      <Banner movie={popularPic} onCardClick={handleCardClick} />
      <div className="page">
        <Titles title="NETFLIX ORIGINALS" movies={netflixMovies} size='big' type='tv' onCardClick={handleCardClick}/>
        <Titles title="Trending Now" movies={trendingMovies} />
        {/* <Titles title="Top Rated Movies" movies={topRatedMovies} />
        <Titles title="Top Rated Tv Shows" movies={topRatedTvShows} /> */}
        <Titles title="Action" movies={actionMovies} />
        <Titles title="Comedies" movies={comedyMovies} />
        <Titles title="Romantic Movies" movies={romanticMovies} />
        <Titles title="Ducumentaries" movies={documentaries} />
        <Footer />
        
      </div>
      <ImagePopup movie={selectedCard} onClose={closeAllPopups} trailerUrl={trailerUrl} opts={opts} />
    </>
  );
}

export default Home;
