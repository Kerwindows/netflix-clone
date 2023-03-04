import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Nav from "../Header/Nav";
import Card from "../Cards/Card";
import SearchPopup from "../Popups/SearchPopup";
import Footer from "../Footer/Footer";
import "./Search.css";

function Search() {
  const { query } = useParams();
  const [trailerInfo, setTrailerInfo] = useState([]);

  useEffect(() => {
    api.queryMovieSearch(query).then((data) => {
      const filteredResults = data.results.filter((result) => {
        return result.backdrop_path !== null;
      });
      setTrailerInfo(filteredResults);
    });
  }, [query]);

  return (
    <div>
      <Nav />
      <section className="search">
        <SearchPopup querySearched={query} />
        <ul className="search__posters">
          {trailerInfo &&
            trailerInfo?.map((movie) => <Card key={movie.id} movie={movie} />)}
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default Search;
