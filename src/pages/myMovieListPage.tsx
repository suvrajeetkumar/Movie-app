import React, {useEffect, useState} from 'react';
import MovieCard from '../components/movieCard';
import { css } from '@emotion/css';
import { Link } from "react-router-dom";
import Pagination from '../components/pagination'
import SkeletonMovieCard from '../components/skeletonLoaderCard';

const MyMovieListPage = () => {

    const [savedMovies, setSavedMovies] = useState<null | Array<any>>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 4;

    const containerBox = css`
    background-color: white;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 769px) {
        grid-template-columns: repeat(4, 1fr);
      }
  `

  const greyBackground = css`
    background-color: #eaeaed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto%;
    flex-direction: column;
  `

  useEffect(()=>{

    if(localStorage.getItem("savedMovies")) {
        const stringifiedItem = localStorage.getItem("savedMovies");
        const savedMoviesObj = JSON.parse(stringifiedItem ? stringifiedItem : "{}");
        const savedMoviesArray = Object.values(savedMoviesObj);
        console.log("savedMoviesArray => ", savedMoviesArray);
        setSavedMovies(savedMoviesArray)
    } else {
        setSavedMovies([]); 
    }

  }, [])


    return <div className={greyBackground}>
        <div className={css`
        text-align: center;
        margin: 10px;
        `}>This is My saved movies page</div>
        {savedMovies && savedMovies.length === 0 && <div className={css`padding: 10px; font-weight: 700;`}>You donot have any movies saved. You can click on any movie from movies tab and save a movie.</div>}
        <div className={containerBox}>
            { savedMovies && savedMovies.length > 0 ? savedMovies.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((movie: any, index: number) => {
                return <Link to={`/movieDetailPage?movieId=${movie.id}`} 
                className={css`
                color: #0060B6;
                text-decoration: none;
                `}><MovieCard key={movie.id} index={index} image={movie.poster} movieName={movie.title} movieType={movie.type} movieYear={movie.year}/></Link>
            }) : savedMovies && savedMovies.length === 0 ? null : [1,1,1,1].slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((movie: any, index: number) => {
                return <SkeletonMovieCard key={index}/>
            }) }
        </div>
        {savedMovies &&<Pagination totalItems={savedMovies.length} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
    </div>
}

export default MyMovieListPage;