import { useEffect, useState } from "react";
import "./style.scss";
import { fetchDataFromApi } from "../../../Utils/api";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../Components/lazyLoadImage/Img";
import ContentWrapper from "../../../Components/ContentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const [bgImage, setBgImage] = useState(null);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const imageUrl = res.images.secure_base_url + "original";
      setBgImage(imageUrl);
    });
  };

  useEffect(() => {
    if (bgImage && data && data.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * 20);
      const backdropPath = data.results[randomIndex]?.backdrop_path;
      if (backdropPath) {
        const bg = bgImage + backdropPath;
        setBackground(bg); // Set the background image here
      }
    }
  }, [bgImage, data]);

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  // For Search Btn For Clicked
  const searchBtnClick = () => {
    let input = document.getElementById("input");
    if (input.value === "") {
      alert(
        "❌Empty searches lead to undiscovered treasures. Keep exploring!👍"
      );
      return;
    } else {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              id="input"
              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button onClick={searchBtnClick}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
