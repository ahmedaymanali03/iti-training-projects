import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './index.css';
import Movie from './Movie';
import { Component } from 'react';

const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + apiKey;
class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            error: null,
            isLoaded: false
        };
    }
    componentDidMount() {
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        movies: result.results
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const { error, isLoaded, movies } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    {movies.map(movie => (
                        <Movie key={uuid()} name={movie.title} releaseYear={movie.release_date} genre={movie.overview} img={imgPath + movie.poster_path} />
                    ))}
                </div>
            );
        }
    }


}

export default Movies;