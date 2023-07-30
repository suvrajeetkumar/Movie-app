import React, { useState } from "react";
import PropTypes from 'prop-types';
import { css } from "@emotion/css";

interface MovieCardProps {
  image: string;
  index: number;
  movieName: string;
  movieType: string;
  movieYear: string;
}

const MovieCard = ({ image, index, movieName, movieType, movieYear } : MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

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
        {<img src={image} alt={movieName} className={css`
        height: 100%;
        width: 100%;
      `} />}
      </div>
      <div>
        <h3>{movieName}</h3>
        <p>Type: {movieType}</p>
        <p>{movieYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;
