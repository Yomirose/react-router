import React from 'react';
import { useNavigate } from 'react-router-dom';


function MovieCard({ movie }) {
  const navigate = useNavigate();

  function movieApp(){
    navigate("/");
    navigate("/movie");
    navigate("/movielist");
  }
  
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={`${movie.title} poster`} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>

      <button onClick={movieApp}>movieApp</button>
    </div>
    
  );
};

export default MovieCard;
