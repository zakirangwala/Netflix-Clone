import axios from "axios";

//use a base url to make requests to database using various endpoints from requests.js
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
