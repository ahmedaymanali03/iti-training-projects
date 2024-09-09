import React from 'react';
import './App.css';



const Movie = ({ name, releaseYear, genre }) => {
    return (
        <div>
            <h2 className='Name'>{name}</h2>
            <p>
                Released in: {releaseYear}<br />
                Genre: {genre}
            </p>
        </div>
    );
}

export default Movie;

