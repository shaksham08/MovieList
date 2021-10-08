import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [movieDetail, setMovieDetails] = useState({});
  const [error, setError] = useState(null);
  let { movieId } = useParams();
  const fetchMovieDetail = async () => {
    setIsLoading(true);
    const res = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=63ddc9de4729ecf35523cbb3c1dc1ae4&language=en-US`
      )
      .catch((err) => {
        console.log(err);
      });
    setIsLoading(false);
    setMovieDetails(res.data);
  };

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  const {
    title,
    genres,
    overview,
    popularity,
    poster_path,
    runtime,
    release_date,
  } = movieDetail;
  if (isLoading) {
    return <h1>Loading....</h1>;
  } else
    return (
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
        <h1>{title}</h1>
        <h2>{overview}</h2>
        <h2>{runtime}</h2>
        <h2>{release_date}</h2>
      </div>
    );
}
