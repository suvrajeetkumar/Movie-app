import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { css } from "@emotion/css";


const MovieDetailsSkeleton = () => {
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

  const skeletonPlaceholdertxtHalf = css`
    background: linear-gradient(90deg, #e8e8e8 0px, #f8f8f8 40px, #e8e8e8 80px);
    background-size: 350px;
    width: 50%;
    height: 1.45rem;
    border-radius: 3px;
    margin-top: 1.5rem;
    animation: skeletonLoader 2.5s infinite;

    @keyframes skeletonLoader {
        0% {
          background-position: -100px;
        }
        40%,
        100% {
          background-position: 270px;
        }
      }
  `

  const skeletonPlaceholdertxtthreefourth = css`
    background: linear-gradient(90deg, #e8e8e8 0px, #f8f8f8 40px, #e8e8e8 80px);
    background-size: 350px;
    width: 70%;
    height: 1.45rem;
    border-radius: 3px;
    margin-top: 1.5rem;
    animation: skeletonLoader 2.5s infinite;

    @keyframes skeletonLoader {
        0% {
          background-position: -100px;
        }
        40%,
        100% {
          background-position: 270px;
        }
      }
    `

    const skeletonPlaceholderoneThird = css`
    background: linear-gradient(90deg, #e8e8e8 0px, #f8f8f8 40px, #e8e8e8 80px);
    background-size: 350px;
    width: 30%;
    height: 1.45rem;
    border-radius: 3px;
    margin-top: 1.5rem;
    animation: skeletonLoader 2.5s infinite;

    @keyframes skeletonLoader {
        0% {
          background-position: -100px;
        }
        40%,
        100% {
          background-position: 270px;
        }
      }
    `

  const skeletonImagePlaceholder = css`
    height: 100%;
    width: 100%;
    background: #e8e8e8;
    animation: skeleton-loading 1s linear infinite alternate;

    @keyframes skeleton-loading {
        0% {
            background-color: hsl(200, 20%, 70%);
        }

        100% {
            background-color: hsl(200, 20%, 95%);
        }
    }
  `

  const detailsCardStyles = css`
  border: 1px solid #ccc;
  padding: 10px;
  height: max-content;
  font-size: 0.75rem;
  width: 90%;
  margin: 10px;
  background-color: #fff;
  cursor: pointer;

  @media (min-width: 769px) {
      height: 95%;
      width: 50%;
      font-size: 1rem;
  }
`

  return (
    <div
      className={detailsCardStyles}
    >
      <div>
        <div className={css`
        text-align: center;
        `}>Movie Description</div>
      <div className={css`
        height: 370px;
        background-size: contain;
      `}>
        <div className={skeletonImagePlaceholder}/>
      </div>
      
        <div className={skeletonPlaceholdertxtHalf} />
        <div className={skeletonPlaceholdertxtthreefourth} />
        <div className={skeletonPlaceholderoneThird} />
        <div className={skeletonPlaceholderoneThird} />
        <div className={skeletonPlaceholdertxtthreefourth} />
        <div className={skeletonPlaceholdertxtHalf} />
        <div className={skeletonPlaceholderoneThird} />
      </div>
    </div>
  );
};

export default MovieDetailsSkeleton;
