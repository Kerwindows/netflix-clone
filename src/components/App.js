import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import NoPage from "./NoPage/NoPage";
import GetStarted from "./GetStarted/GetStarted";
import Tv from "./Tv/Tv";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="discover" element={<Home />} />
        <Route path="discover/:mediaType/:tvId" element={<Tv />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="*" element={<NoPage />} />
        <Route exact path="/" element={<GetStarted />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
