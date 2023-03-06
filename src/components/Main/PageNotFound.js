import React from "react";
import "./PageNotFound.css";

function NoPage() {
  return (
    <>
      <div className="not-found">
        <div className="not-found__info">
          <h1 className="not-found__title">404</h1>
          <h2 className="not-found__subtitle">This page cannot be found</h2>
        </div>
      </div>
      <div className="not-found__fadeBottom"></div>
    </>
  );
}

export default NoPage;
