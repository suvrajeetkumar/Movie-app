import React, { useEffect, useState } from 'react';
import MovieDetailsCard from '../components/movieDetailsCard/movieDetailsCard';
import { getMovieDescription } from '../actions/MovieListApis';
import MovieDetailsSkeleton from '../components/skeletonMovieDetailsCard';
import { useThemeContext } from '../context/provider';
import { css } from '@emotion/css';

interface MovieDetails {
    Actors: string,
    Awards : string,
    Country: string,
    Director: string,
    Genre: string,
    Language: string,
    Metascore: string,
    Plot: string,
    Poster: string,
    Rated: string,
    Ratings: string,
    Released: string,
    Response: string,
    Runtime: string,
    Title: string,
    Type: string,
    Writer: string,
    Year: string,
    imdbID: string,
    imdbRating: string,
    imdbVotes: string,
    totalSeasons: string,
}

const MovieDetailPage = () => {
    
    const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null)
    const { isDarkMode, toggleTheme } = useThemeContext();
    const query = new URLSearchParams(window.location.search);
    const movieId = query.get('movieId')
    const getMovieDetails = async () => {
        
        console.log("movie id is => ", movieId)
        if(movieId){
            const response = await getMovieDescription(movieId);

            if(response.status === 200) {
                console.log("the movie details are => ", response.data);
                setMovieDetails(response.data);
            } else {
                console.log("something went wrong");
            }
        }
    }

    useEffect(()=>{
        getMovieDetails();
    },[])

    const greyBackground = css`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    ${
        isDarkMode ? `background-color: #111111;` : `background-color: #eaeaed;`
    }

    @media (min-height: 796px) {
        height: calc(100vh - 50px)
    }
    `

    const containerBox = css`
    background-color: white;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: max-content;
    @media (min-width: 769px) {
        width: 80%;
    }
    `

    return <>
        <div className={greyBackground}>
            <div className={containerBox}>
                {movieDetails ? <MovieDetailsCard movieId={movieId ? movieId : ""} title={movieDetails.Title} genre={movieDetails.Genre} imdbRating={movieDetails.imdbRating} cast={movieDetails.Actors} director={movieDetails.Director} poster={movieDetails.Poster} type={movieDetails.Type} year={movieDetails.Year}/>
                : <MovieDetailsSkeleton />
                }
            </div>
        </div>
    </>
}

export default MovieDetailPage;