import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './index.css';
import Movie from './Movie';

const Movies = () => {
   
    const [moviesArr]= useState([
        {
            id: uuid(), name: 'Iron Man', releaseYear: 2008, genre: 'Action'
        },
        {
            id: uuid(), name: 'The Incredible Hulk', releaseYear: 2008, genre: 'Action'
        },
        {
            id: uuid(), name: 'Iron Man 2', releaseYear: 2010, genre: 'Action'},
        {
            id: uuid(), name: 'Thor', releaseYear: 2011, genre: 'Action'
        },
        {
            id: uuid(), name: 'Captain America: The First Avenger', releaseYear: 2011, genre: 'Action'
        },
        {
            id: uuid(), name: 'The Avengers', releaseYear: 2012, genre: 'Action'
        },
    ]);
    return (
        <div>
            {moviesArr.map((u) => <Movie key={uuid()} {...u}></Movie>)}</div>);
};


export default Movies;