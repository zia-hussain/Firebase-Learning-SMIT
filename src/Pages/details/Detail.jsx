import React from "react";
import useFetch from "../../hooks/useFetch";
import "./style.scss";
import { useParams } from "react-router-dom";
import DetailsBanner from "./detailsBanner/DetailsBanner";
function Detail() {
  // const { mediaType, id } = useParams();
  // const { data, loading } = useFetch(`/${mediaType}/${id}`);

  return (
    <div>
      <DetailsBanner />
    </div>
  );
}

export default Detail;
