import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDc3Mzg5ZDcwZjVjYTUwYmM2MWM2N2ZiYWFlMmUwMCIsInN1YiI6IjY1ZGYxNmMyOGM0NGI5MDE3YzE0NmVhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cOt-YGTd0_EfXB0-FKLRzkn6SeA-EMbhhT_L8m2AaY4";
const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
