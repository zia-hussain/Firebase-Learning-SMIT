import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../Utils/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading state as true
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchDataFromApi(url);
        setData(res);
      } catch (err) {
        setError("Something went wrong!");
      } finally {
        setLoading(false); // Set loading state to false after fetching data or encountering an error
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
