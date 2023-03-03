import React, { useState, useEffect } from "react";
import "./Trailer.css";
import Card from "../Cards/Card";

function Trailer({ title, movies, size, type, onCardClick }) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    setMovieList(movies);
  }, [movies]);

  //script for clicking and dragging cards
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const currentX = e.pageX - e.currentTarget.offsetLeft;
    const distance = currentX - startX;
    e.currentTarget.scrollLeft = scrollLeft - distance;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <div className="trailer">
      <h2 className="trailer__title">{title}</h2>
      <ul
        className="trailer__posters"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {movieList &&
          movieList.map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
              onCardClick={onCardClick}
              size={size}
              type={type}
            />
          ))}
      </ul>
    </div>
  );
}

export default Trailer;
