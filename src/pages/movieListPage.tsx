import React, {useEffect, useState} from 'react';
import { getMovies } from "../actions/MovieListApis"
import MovieCard from "../components/movieCard/movieCard"
import { Link } from "react-router-dom";
import { css } from '@emotion/css';
import Pagination from '../components/pagination';
import SkeletonMovieCard from '../components/skeletonLoaderCard';
import { useThemeContext } from '../context/provider';
const MovieListPage = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();
  const containerBox = css`
    background-color: white;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 600px) {
        grid-template-columns: repeat(4, 1fr);
        height: max-content;
      }

    @media (min-width: 769px) {
      grid-template-columns: repeat(4, 1fr);
      height: height: calc(100vh - 60px);;
    }
  `

  const greyBackground = css`
    background-color: #eaeaed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto%;
    flex-direction: column;
    padding-bottom: 10px;

    @media (min-width: 600px) {
        grid-template-columns: repeat(4, 1fr);
        height: max-content;
      }

    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
      height: calc(100vh - 60px);;
    }
    
    ${
        isDarkMode ? `background-color: #111111;` : `background-color: #eaeaed;`
      }
  `

  const [movies, setMovies] = useState<null | Array<any>>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  const itemsPerPage = 4;

  const getMoviesData = async () => {
    const moviesResponse = await getMovies();
    if(moviesResponse.status === 200) {
        setMovies(moviesResponse.data.Search);

    } else{
        console.log("Something went wrong");
    }
  }

  useEffect(()=>{
    getMoviesData();
  }, [])

  console.log("movies state is => ", movies)

    return <div className={greyBackground}>
        <div className={css`
        text-align: center;
         font-size: 1.5rem;
         margin: 12%;
        // margin: 40vh;
        // width: 90%;
        ${
            isDarkMode ? `color: white;` : `color: black;`
          }

        @media (min-width: 769px) {
            font-size: 1.5rem;
            margin: 2%;
            width: 70%;
          }
        `}>This is the movie list page. Find below a list of movies. Click on the any movie to view description. Please scroll Below to find the movies.</div>
        <div className={containerBox}>
            { movies && movies.length > 0 ? 
            movies.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((movie: any, index: number) => {
                return <Link to={`/movieDetailPage?movieId=${movie.imdbID}`} 
                key={index}
                className={css`
                color: #0060B6;
                text-decoration: none;
                `}><MovieCard key={movie.imdbID} index={index} image={movie.Poster} movieName={movie.Title} movieType={movie.Type} movieYear={movie.Year}/></Link>
            }) :
            [1,1,1,1].slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((movie: any, index: number) => {
                return <SkeletonMovieCard key={index}/>
            }) }
        </div>
        {movies &&<Pagination totalItems={movies.length} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
    </div>
}

export default MovieListPage;