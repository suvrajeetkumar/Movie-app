import React from 'react';
import { useThemeContext } from '../context/provider';
import { css } from '@emotion/css';

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  const themeButton = css`
    position: fixed;
    bottom: 5%;
    left: 1%;
    background: #767ccb;
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    color: white;
    height: 30px;
  `

  const themeButtonImg = css`
    height: 100%;
    width: 100%;
  `

  return (
    <button onClick={toggleTheme} className={themeButton}>
        <img className={themeButtonImg} src={!isDarkMode ? `${process.env.PUBLIC_URL}/moon.png` : `${process.env.PUBLIC_URL}/sunny.png`} />
    </button>
  );
};

export default ThemeToggleButton;
