import "./App.css";
import { useEffect } from "react";
import { fetchDataFromApi } from "./Utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.homeSlice.url); // Adjusted useSelector

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <div className="App">
      <h1>
        App
        {url}
      </h1>
    </div>
  );
}

export default App;
