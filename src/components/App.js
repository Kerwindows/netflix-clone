import React, { useState, useEffect } from "react";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";
import Banner from "./Banner/Banner";
import Main from "./Main";
import Footer from "./Footer";
import Titles from "./Titles/Titles";
import Nav from "./Nav/Nav";
import "../index.css";

function App() {
  // state variable for user info
  const [currentUser, setCurrentUser] = useState("");
  const [popularPic, setPopularPic] = useState([]);
  const [netflixMovies, setNetflixMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [romanticMovies, setRomanticMovies] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);

  useEffect(() => {
    api.fetchNetflixOriginal().then((data) => 
    {
      return setPopularPic(data.results[Math.floor(Math.random() * data.results.length - 1)])
    });
    api.fetchNetflixOriginal().then((data) => setNetflixMovies(data.results));
    api.fetchTrending().then((data) => setTrendingMovies(data.results));
    api.fetchTopRated().then((data) => setTopRatedMovies(data.results));
    api.fetchActionMovies().then((data) => setActionMovies(data.results));
    api.fetchComedyMovies().then((data) => setComedyMovies(data.results));
    api.fetchRomanticMovies().then((data) => setRomanticMovies(data.results));
    api.fetchDocumentaries().then((data) => setDocumentaries(data.results));
  }, []);
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
      <Nav/>
      <Banner movie={popularPic}/>
        <div className="page">
          {/* <Header /> */}
         
          <Titles title="NETFLIX ORIGINALS" movies={netflixMovies} />
          <Titles title="Trending Now" movies={trendingMovies} />
          <Titles title="Top Rated" movies={topRatedMovies} />
          <Titles title="Action" movies={actionMovies} />
          <Titles title="Comedies" movies={comedyMovies} />
          <Titles title="Romantic Movies" movies={romanticMovies} />
          <Titles title="Ducumentaries" movies={documentaries} />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
