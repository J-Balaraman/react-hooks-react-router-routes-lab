import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ title }) {
  const movieDetailURL = `/movies/${title}`;

  return (
    <article>
      <Link to={movieDetailURL}>
        <h2>{title}</h2>
      </Link>
    </article>
  );
}

export default MovieCard;
