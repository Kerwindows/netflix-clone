/* --------------------------------- imports -------------------------------- */
import React from "react";
import PopupWithForm from "./PopupWithForm";

/* ------------------------ function EditProfilePopup ----------------------- */


  function AddPlacePopup(props) {
    const [name, setName] = React.useState("");
    const [link, setLink] = React.useState("");
  
    React.useEffect(() => {
      setName("");
      setLink("");
    }, [props.isOpen]);
  
    function handleNameChange(evt) {
      setName(evt.target.value);
    }
  
    function handleLinkChange(evt) {
      setLink(evt.target.value);
    }
  
    function handleSubmit(e) {
      // Prevent the browser from navigating to the form address
      e.preventDefault();
  
      // Pass the values of the managed components to the external handler
      props.onAddPlaceSubmit({
        name,
        link,
      });
    }
  
  return (
    <PopupWithForm
    name="add-place"
    title="Add Place"
    submitText={props.isLoading ? "Saving..." : "Create"}
    isOpen={props.isOpen}
    onClose={props.onClose}
    onSubmit={handleSubmit}
    >
      <input
        id="js-input-place-name-input"
        className="popup__form-input js-input-type-place-name"
        name="name"
        type="text"
        minLength="2"
        maxLength="30"
        placeholder="Title"
        onChange={handleNameChange}
        value={name}
        required
      />
      <span className="popup__input-type-error js-input-place-name-input-error"></span>
      <input
        id="js-input-place-url-input"
        className="popup__form-input js-input-type-place-url"
        name="link"
        type="url"
        placeholder="Url Link"
        onChange={handleLinkChange}
        value={link}
        required
      />
      <span className="popup__input-type-error js-input-place-url-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
