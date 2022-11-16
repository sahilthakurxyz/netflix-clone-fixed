import axios from "axios";

// base url to make request to the according movie from the database..
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;

// https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US
