import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Nav from "../Header/Nav";
import Card from "../Cards/Card";
import SearchPopup from "../Popups/SearchPopup";
import Footer from "../Footer/Footer";
import VideoPopup from "../Popups/VideoPopup";
import { ColorRing } from "react-loader-spinner";
import "./Search.css";

function Search({ handleCardClick, trailerUrl, selectedCard, closeAllPopups }) {
  const { query } = useParams();
  const [trailerInfo, setTrailerInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .queryMovieSearch(query)
      .then((data) => {
        const filteredResults = data.results.filter((result) => {
          return result.backdrop_path !== null;
        });
        setTrailerInfo(filteredResults);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  return (
    <div>
      <Nav />
      <section className="search">
        <SearchPopup querySearched={query} />
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
          <ul className="search__posters">
            {trailerInfo &&
              trailerInfo?.map((movie) => (
                <Card
                  key={movie.id}
                  movie={movie}
                  onCardClick={handleCardClick}
                />
              ))}
          </ul>
        )}
      </section>
      <Footer />
      <VideoPopup
        movie={selectedCard}
        onClose={closeAllPopups}
        trailerUrl={trailerUrl}
      />
    </div>
  );
}

export default Search;
