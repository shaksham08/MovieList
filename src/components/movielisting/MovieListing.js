import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setMovies } from "../../redux/movie/movie.actions";
import Movie from "../movie/Movie";

export default function MovieListing() {
  const movies = useSelector((state) => state);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  console.log(movies.allmovies);

  const fetchMovies = async () => {
    setIsLoading(true);
    const res = await axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=63ddc9de4729ecf35523cbb3c1dc1ae4&language=en-US&page=${page}`
      )
      .catch((err) => {
        console.log(err);
      });
    dispatch(setMovies(res.data.results));
    setPage(page + 1);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {movies.allmovies.movies.map((movie) => {
          return <Movie {...movie} />;
        })}
      </div>

      {isLoading && (
        <div className="text-center">
          <h3>Loading..</h3>
        </div>
      )}

      <div className="mb-4">
        {!isLoading && (
          <button onClick={fetchMovies} className="btn btn-info">
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
