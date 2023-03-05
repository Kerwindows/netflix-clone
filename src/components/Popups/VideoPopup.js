import React, { useState, useEffect } from "react";
import closeIcon from "../../images/close-icon.svg";
import YouTube from "react-youtube";
import { ColorRing } from "react-loader-spinner";
import "./VideoPopup.css";

function VideoPopup({ onClose, movie, trailerUrl }) {
  const [loadingWords, setLoadingWords] = useState("Searching for Trailer...");
  const [timeoutId, setTimeoutId] = useState(null);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function closeVideo() {
    onClose();
    setLoadingWords("Searching for Trailer...");
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setTimeoutId(
      setTimeout(() => {
        setLoadingWords("Trailer cannot be found");
      }, 15000)
    );
  }

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        setLoadingWords("Searching for Trailer...");
      }
    };
    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [trailerUrl]);

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (!trailerUrl) {
      setLoadingWords("Searching for Trailer...");
      setTimeoutId(
        setTimeout(() => {
          setLoadingWords("Trailer cannot be found");
        }, 15000)
      );
    }
    // eslint-disable-next-line
  }, [trailerUrl]);

  return (
    <div className={`popup ${movie && "popup_opened"}`}>
      <div className="popup__overlay"></div>
      <div className="popup__form-card popup__form-image">
        <button
          onClick={closeVideo}
          aria-label="Close Form Button"
          className="popup__close-btn popup__image-close-btn"
          type="button"
        >
          <img className="popup__close-icon" src={closeIcon} alt="close" />
        </button>
        {(trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />) || (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={[
              "#d81f26",
              "#d81f26",
              "#d81f26",
              "#d81f26",
              "#d81f26",
              "#d81f26",
              "#d81f26",
            ]}
          />
        )}
        <p className="popup__card-image-preview-name">
          {(!trailerUrl && loadingWords) ||
            (movie && movie?.name ? movie?.name : movie?.title)}
        </p>
      </div>
    </div>
  );
}

export default VideoPopup;
