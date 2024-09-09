
import React, { useState } from 'react';
import axios from 'axios';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [poster, setPoster] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = { title, overview, poster, fromLocal: true };

    axios.post('http://localhost:3001/movies', newMovie)
      .then(response => {
        console.log('Movie added:', response.data);
        setMessage('Movie added successfully!');
        setTitle('');
        setOverview('');
        setPoster('');
      })
      .catch(error => {
        console.error('Error adding movie:', error);
        setMessage('Failed to add movie. Please try again.');
      });
  };

  return (
    <div className="container mt-4">
      <h1>Add Movie</h1>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input 
            type="text" 
            className="form-control" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="overview">Overview</label>
          <textarea 
            className="form-control" 
            id="overview" 
            value={overview} 
            onChange={(e) => setOverview(e.target.value)} 
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="poster">Poster URL</label>
          <input 
            type="text" 
            className="form-control" 
            id="poster" 
            value={poster} 
            onChange={(e) => setPoster(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
