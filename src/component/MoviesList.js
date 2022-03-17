import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./Add";

const MoviesList = ({ movies, setMovies, rating, keysearch }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="list">
      {" "}
      <button onClick={handleShow}>Add</button>
      <Add setMovies={setMovies} movies={movies} show={show} handleClose={handleClose} />
      {movies
        .filter(
          (el) =>
            el.title
              .toLowerCase()
              .trim()
              .includes(keysearch.toLowerCase().trim()) &&
              el.rate>= rating
        )
        .map((el) => (
          <MovieCard movie={el} />
        ))}
    </div>
  );
};

export default MoviesList;
