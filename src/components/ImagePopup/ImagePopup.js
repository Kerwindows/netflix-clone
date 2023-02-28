import React, { useState } from "react";
import closeIcon from "../../images/close-icon.svg";
import YouTube from "react-youtube";
import loader from "../../images/loader.png";

function ImagePopup({ onClose, movie, trailerUrl, opts }) {
  return (
    <div className={`popup ${movie && "popup_opened"}`}>
      {/* <div className={`popup popup_opened`}> */}
      <div className="popup__overlay"></div>
      <div className="popup__form-card popup__form-image">
        <button
          onClick={onClose}
          aria-label="Close Form Button"
          className="popup__close-btn popup__image-close-btn"
          type="button"
        >
          <img className="popup__close-icon" src={closeIcon} alt="close" />
        </button>
        {trailerUrl ? (
          <YouTube videoId={trailerUrl} opts={opts} />
        ) : (
          <div>
            <h1>No trailer found.</h1>
          </div>
        )}
        <p className="popup__card-image-preview-name">
          {movie && movie?.homepage}
        </p>
      </div>
    </div>
  );
}

export default ImagePopup;
