/* --------------------------------- imports -------------------------------- */
import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

/* ------------------------ function EditProfilePopup ----------------------- */

function EditProfilePopup(props) {
  // Subscription to the context
  const currentUser = React.useContext(CurrentUserContext);
  // input state variables
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    // Prevent the browser from navigating to the form address
    evt.preventDefault();

    // Pass the values of the managed components to the external handler
    props.onUpdateUser({
      name,
      description
    });
  }

  return (
    <PopupWithForm
      name="edit"
      title="Edit profile"
      submitText={props.isLoading ? "Saving..." : "Save"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="name-input"
        minLength="2"
        maxLength="40"
        className="popup__form-input js-input-type-profile-name"
        name="name"
        type="text"
        placeholder="Name"
        onChange={handleNameChange}
        value={name || ""}
        required
      />
      <span className="popup__input-type-error name-input-error"></span>

      <input
        id="about-input"
        minLength="2"
        maxLength="200"
        className="popup__form-input js-input-type-profile-about-me"
        name="about"
        type="text"
        placeholder="About Me"
        onChange={handleDescChange}
        value={description || ""}
        required
      />
      <span className="popup__input-type-error about-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
