import React from "react";
import closeIcon from "../../images/close-icon.svg";
import YouTube from "react-youtube";
import { ColorRing } from "react-loader-spinner";
import "./VideoPopup.css";

function VideoPopup({ onClose, movie, trailerUrl }) {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

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
          {(!trailerUrl && "Cannot be found") ||
            (movie && movie?.name ? movie?.name : movie?.title)}
        </p>
      </div>
    </div>
  );
}

export default VideoPopup;
