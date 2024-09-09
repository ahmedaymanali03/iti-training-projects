
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + apiKey;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [localMovies, setLocalMovies] = useState([]);

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => console.error('Error fetching movies from TMDB API:', error));
  }, []);

  // Fetch movies from JSON server
  useEffect(() => {
    axios.get('http://localhost:3001/movies')
      .then(response => setLocalMovies(response.data))
      .catch(error => console.error('Error fetching movies from JSON server:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/movies/${id}`)
      .then(() => {
        setLocalMovies(localMovies.filter(movie => movie.id !== id));
        console.log(`Movie with id ${id} deleted.`);
      })
      .catch(error => console.error('Error deleting movie:', error));
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {[...movies, ...localMovies].map(movie => (
          <div className="col-md-4 mb-4" key={movie.id}>
            <div className="card">
              <img 
                src={movie.poster ? movie.poster : `${imgPath}${movie.poster_path}`} 
                className="card-img-top" 
                alt={movie.title} 
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview.substring(0, 100)}...</p>
                <Link to={`/movie/${movie.id}`} className="btn btn-primary mr-2">View Details</Link>
                {movie.fromLocal && (
                  <button 
                    onClick={() => handleDelete(movie.id)} 
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
