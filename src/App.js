// import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  // const [movies, setMovies] = useState([
  //   {
  //     title: 'Star Wars',
  //     description: 'The struggle between good and evil',
  //     posterURL: 'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  //     rating: 8.8
  //   },
  // ]);

  // const handleAddMovie = (movie) => {
  //   setMovies([...movies, movie]);
  // };

  // const handleFilter = (filter) => {
  //   const { title, rating } = filter;
  //   let filteredMovies = movies;

  //   if (title) {
  //     filteredMovies = filteredMovies.filter(movie => 
  //       movie.title.toLowerCase().includes(title.toLowerCase())
  //     );
  //   }

  //   if (rating) {
  //     filteredMovies = filteredMovies.filter(movie => 
  //       movie.rating >= rating
  //     );
  //   }

  //   setMovies(filteredMovies);
  // };

  return (
    <div className="App">
      <h1>My Movie App</h1>
      {/* <Filter onFilter={handleFilter} />
      <AddMovie onAdd={handleAddMovie} />
      <MovieList movies={movies} /> */}
      <Routes>
        <Route path="/" element={<Filter />} />
        <Route path="/movie" element={<AddMovie />} />
        <Route path="/movielist" element={<MovieList movie={App}/>} />
      </Routes>
    </div>
  );
}

export default App;
