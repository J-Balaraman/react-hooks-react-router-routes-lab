import React from 'react';
import { movies } from "../data";
import NavBar from "../components/NavBar";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <div className="movie-list">
          {movies.map((movie, index) => (
            <div key={index}>
              <h2>{movie.title}</h2>
              <Link to={`/movie/${movie.title}`}>View Info</Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;