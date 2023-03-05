import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import "./SearchPopup.css";

function SearchPopup() {
  const [querySearched, setQuerySearched] = useState("");

  function handleQueryChange(e) {
    setQuerySearched(e.target.value);
  }

  return (
    <div className="search-popup">
      <form className="search-popup__container">
        <input
          className="search-popup__input"
          type="text"
          name="query"
          value={querySearched}
          onChange={handleQueryChange}
          placeholder="Search for movie"
        />
        <Link className="search-popup__link" to={`/search/${querySearched}`}>
          {" "}
          <button className="search-popup__button" type="submit">
            <BiSearch />
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchPopup;
