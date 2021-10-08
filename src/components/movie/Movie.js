import React from "react";

import { Link } from "react-router-dom";

export default function Movie({
  id,
  release_date,
  poster_path,
  overview,
  title,
}) {
  return (
    <div className="col-3 mt-4 mb-4">
      <div class="card" style={{ width: "18rem" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{overview}</p>
          <p class="card-text">
            <strong>Release Date : </strong> {release_date}
          </p>
          <Link to={`/movie/${id}`} class="btn btn-primary">
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
}
