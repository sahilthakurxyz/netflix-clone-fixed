import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
import { ToastContainer, toast } from "react-toastify";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    // code running inside only once till component props are not change by external Api
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      {/* <Logo /> */}
      <div className="banner__contents">
        <ToastContainer />
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}{" "}
        </h1>
        <div className="banner__buttons">
          <button
            className="banner__button"
            onClick={() => {
              toast("You can scroll down see Amazing series");
            }}
          >
            Play
          </button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__discription">
          {truncate(movie?.overview, 150)}{" "}
        </h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
