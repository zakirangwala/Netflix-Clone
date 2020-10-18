import React from "react";
import "./App.css";
import Row from "./Row.js";
import requests from "./requests.js";
import Banner from "./Banner.js";

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      {/* Banner */}
      <Banner></Banner>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Indian Movies" fetchUrl={requests.fetchIndianMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
