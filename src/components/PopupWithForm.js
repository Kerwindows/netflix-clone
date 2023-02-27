/* --------------------------------- imports -------------------------------- */
import React from "react";
import closeIcon from "../images/close-icon.svg";

/* ------------------------- function PopupWIthForm ------------------------- */
function PopupWithForm(props) {
  return (
    <div id={props.name} className={`popup ${props.isOpen && "popup_opened"}`}>
      <div className="popup__overlay"></div>
      <div className="popup__form-card">
        <button
          onClick={props.onClose}
          aria-label="Close Form Button"
          type="button"
          className={`popup__close-btn popup__${props.name}-close-btn`}
        >
          <img className="popup__close-icon" src={closeIcon} alt="close" />
        </button>
        <form 
        id={props.name}  
        onSubmit={props.onSubmit}
          className={`popup__${props.name}-form popup__form`}
          name={`${props.name}Form`}
        >
          <h2 className="popup__form-label">{props.title}</h2>
          {props.children}
          <span
            className={`popup__input-type-error js-input-${props.name}-pic-input-error`}
          ></span>
          <button className="popup__button" type="submit">
            {props.submitText}
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
