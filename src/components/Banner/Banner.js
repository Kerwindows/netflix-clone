import React, { useState,useEffect } from "react";
import "./Banner.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Banner({ movie }) {
    const [bannerMovie, setBannerMovie] = useState([]);
    useEffect(() => {
      setBannerMovie(movie);
    }, [movie]);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
  return (
    <div>
      <header className="banner" style={{
        backgroundSize:"cover",
        backgroundImage:`url(${base_url}${bannerMovie?.backdrop_path})`,
        backgroundPosition:"center center"
        }}> 
        <div className="banner__contents">
            <h1 className="banner__title">
                {bannerMovie?.title || bannerMovie?.name || bannerMovie?.original_name}</h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            <p className="banner__description">
                {truncate(bannerMovie?.overview,150)}
            </p>
        </div>
        <div className="banner__fadeBottom"></div>
       </header>
    </div>
  );
}

export default Banner;
