import { useEffect } from "react";
import { fetchDataFromApi } from "./Utils/api";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/home/Home";
import Details from "./Pages/details/Detail";
import SearchResult from "./Pages/searchResult/SearchResult";
import Explore from "./Pages/explore/Explore";
import PageNotFound from "./Pages/404/PageNotFound";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        profile: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        backdrop: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["movie", "tv"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
