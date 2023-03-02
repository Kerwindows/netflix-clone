import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discover from "./Main/Discover";
import PageNotFound from "./Main/PageNotFound";
import GetStarted from "./Main/GetStarted";
import TrailerMoreInfo from "./Trailers/TrailerMoreInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="discover" element={<Discover />} />
        <Route path="discover/:mediaType/:tvId" element={<TrailerMoreInfo />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="*" element={<PageNotFound />} />
        <Route exact path="/" element={<GetStarted />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
