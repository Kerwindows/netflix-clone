/* --------------------------------- imports -------------------------------- */
import React from "react";
import PopupWithForm from "./PopupWithForm";

/* ------------------------ function EditProfilePopup ----------------------- */

function EditAvatarPopup(props) {
  const avatarRef = React.useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm
      name="edit-profile-pic"
      title="Change profile picture"
      submitText={props.isLoading ? "Saving..." : "Save"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarRef}
        id="js-input-edit-profile-pic-input"
        className="popup__form-input js-input-type-edit-profile-pic"
        name="avatar"
        type="url"
        placeholder="Url Link"
        required
      />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
