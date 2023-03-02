import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import BannerMoreInfo from "../Banners/BannerMoreInfo";
import Nav from "../Header/Nav";

function TrailerMoreInfo() {
  const { mediaType, tvId } = useParams();
  const [trailerMoreInfo, setTrailerMoreInfo] = useState([]);

  useEffect(() => {
    api.fetchTvShow(mediaType, tvId).then((data) => {
      setTrailerMoreInfo(data);
    });
  }, [mediaType, tvId]);

  return (
    <div>
      <Nav />
      <BannerMoreInfo movie={trailerMoreInfo} />
    </div>
  );
}

export default TrailerMoreInfo;
