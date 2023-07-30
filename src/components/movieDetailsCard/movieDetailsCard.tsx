import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { css } from "@emotion/css";

interface MovieCardProps {
  movieId: string;
  title: string;
  genre: string;
  imdbRating: string;
  cast: string;
  director: string;
  poster: string;
  type: string;
  year: string
}

const MovieDetailsCard = ({ movieId, title, genre, imdbRating, cast, director, poster, type, year } : MovieCardProps) => {
  const [movieSaved, setMovieSaved] = useState(false);
  const saveMovieBtnStyles = css`
    background-color: green;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  `

  const removeMovieBtnStyles = css`
    background-color: red;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  `

  const savedMovieText = css`
  border: 3px dotted gray;
  width: max-content;
  padding: 5px 10px;
  background: #d1efd1;
  margin-bottom: 10px;
  `

  useEffect(()=>{
    if(localStorage.getItem("savedMovies")) {
        const stringifiedItem = localStorage.getItem("savedMovies");
        const savedMoviesObj = JSON.parse(stringifiedItem ? stringifiedItem : "{}");
        if( movieId in savedMoviesObj){
            setMovieSaved(true);
        }
    }
  },[])

  const saveMovieHandler = () => {
    const MovieDetails = {
        id: movieId,
        title: title,
        genre: genre,
        imdbRating: imdbRating,
        cast: cast,
        director: director,
        poster: poster,
        type: type,
        year: year,
    }

    if(localStorage.getItem("savedMovies")) {
        const stringifiedItem = localStorage.getItem("savedMovies");
        const savedMoviesObj = JSON.parse(stringifiedItem ? stringifiedItem : "{}");
        if(savedMoviesObj && !(movieId in savedMoviesObj)){
            savedMoviesObj[movieId] = MovieDetails;
        }
        localStorage.setItem("savedMovies", JSON.stringify(savedMoviesObj));
    } else {
        const savedMoviesObj:any = {}
        savedMoviesObj[movieId] = MovieDetails;
        localStorage.setItem("savedMovies", JSON.stringify(savedMoviesObj));
    }
    setMovieSaved(true);
  }

  const removeMoviesHandler = () => {
    if(localStorage.getItem("savedMovies")) {
        const stringifiedItem = localStorage.getItem("savedMovies");
        const savedMoviesObj = JSON.parse(stringifiedItem ? stringifiedItem : "{}");
        if(savedMoviesObj && (movieId in savedMoviesObj)){
            delete savedMoviesObj[movieId];
            localStorage.setItem("savedMovies", JSON.stringify(savedMoviesObj));
        }
        console.log("saved Movies after delete: ", savedMoviesObj);
        setMovieSaved(false);
    }
  }

  console.log("movieSaved is =>", movieSaved);

  return (
    <div
      className={css`
        border: 1px solid #ccc;
        padding: 10px;
        height: max-content;
        font-size: 0.75rem;
        width: 90%;
        margin: 10px;
        background-color: #fff;
        cursor: pointer;

        /* Hover styles */
        &:hover {
          background-color: #eee;
        }
        @media (min-width: 769px) {
            height: 95%;
            width: 50%;
            font-size: 1rem;
        }
      `}
    >
      <div>
        <div className={css`
        font-size: 1.5rem;
        margin: 2%;
        text-align: center;
        `}>Movie Description</div>
      <div className={css`
        height: 370px;
        background-size: contain;
      `}>
        <img src={poster} alt={title} className={css`
        height: 100%;
        width: 100%;
      `}/>
      </div>
      
        <h3>{title}</h3>
        <p>Genre: {genre}</p>
        <p>Director: {director}</p>
        <p>Imdb Rating: {imdbRating}</p>
        <p>Cast: {cast}</p>
        {!movieSaved ? <button className={saveMovieBtnStyles} 
        onClick={saveMovieHandler}>Save Movie</button>
        : <div>
            <div className={savedMovieText}>you have Saved this Movie</div>
            <button className={removeMovieBtnStyles} 
            onClick={removeMoviesHandler}>Remove Movie</button>
        </div>
        }
      </div>
    </div>
  );
};

export default MovieDetailsCard;
