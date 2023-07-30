import React, { useState } from "react";
import PropTypes from 'prop-types';
import { css } from "@emotion/css";



const SkeletonMovieCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const skeletonPlaceholder = css`
    background: linear-gradient(90deg, #e8e8e8 0px, #f8f8f8 40px, #e8e8e8 80px);
    background-size: 350px;
    width: 100%;
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

  return (
    <div
      className={css`
        border: 1px solid #ccc;
        padding: 10px;
        height: 520px;
        margin: 10px;
        background-color: #fff;
        cursor: pointer;

        /* Hover styles */
        &:hover {
          background-color: #eee;
        }
      `}
    >
      <div className={css`
        height: 370px;
        background-size: contain;
      `}>
        {<div className={skeletonImagePlaceholder} > </div>}
      </div>
      <div>
        <div className={skeletonPlaceholder} />
        <div className={skeletonPlaceholder} />
        <div className={skeletonPlaceholder} />
      </div>
    </div>
  );
};

export default SkeletonMovieCard;
