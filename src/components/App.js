import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Main/Home";
import NotFound from "./Main/NotFound";
import GetStarted from "./Main/GetStarted";
import TrailerMoreInfo from "./Trailers/TrailerMoreInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="discover" element={<Home />} />
        <Route path="discover/:mediaType/:tvId" element={<TrailerMoreInfo />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route exact path="/" element={<GetStarted />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
