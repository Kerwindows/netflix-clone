import React, { useState, useEffect } from "react";
import "./Titles.css";
import Card from "../Card";

function Titles({ title, movies }) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    setMovieList(movies);
  }, [movies]);

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
    <div className="titles">
      <h2>{title}</h2>
      <ul
        className="title__posters"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {movieList &&
          movieList.map((movie) => <Card key={movie.id} movie={movie} />)}
      </ul>
      
    </div>
  );
}

export default Titles;
