import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import NoPage from "./NoPage/NoPage";
import Tv from "./Tv/Tv";

function App() {
   return (
    <BrowserRouter>
    <Routes>
          <Route path="home" element={<Home />} />
          <Route path=":mediaType/:tvId" element={<Tv />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<NoPage />} />
          <Route exact path="/" element={<Home />}>
        </Route>
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
