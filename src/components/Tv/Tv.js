import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Banner from "../MoreInfoBanner/MoreInfoBanner";
import Nav from "../Nav/Nav";

function Tv() {
  const { mediaType, tvId } = useParams();
  const [tvShow, setTvShow] = useState([]);

  useEffect(() => {
    api.fetchTvShow(mediaType, tvId).then((data) => {
      setTvShow(data);
    });
  }, [mediaType, tvId]);

  return (
    <div>
      <Nav />
      <Banner movie={tvShow} />
    </div>
  );
}

export default Tv;
