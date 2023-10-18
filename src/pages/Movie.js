import { movies } from "../data";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { title } = useParams();
  const movie = movies.find((m) => m.title === title);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
            <h1>{movie.title}</h1>
            <p>{movie.time} minutes</p>
            <div>
              {movie.genres.map((genre, index) => (
                <span key={index}>{genre}</span>
              ))}
            </div>
      </main>
    </>
  );
}

export default Movie;