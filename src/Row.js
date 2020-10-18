import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  //Snippet that runs based on a specific condition or variable
  useEffect(() => {
    // will make asynchronous call since info coming from 3rd party service (1 to 3 seconds)
    //make requests to TMDB
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); //if [] is blank, run once when row loads and dont run again
  console.log(movies);
  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      <div className="row__posters">
        {/* several row_posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* container -> posters */}
    </div>
  );
}
export default Row;
