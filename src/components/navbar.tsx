import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { css } from '@emotion/css';

interface NavbarProps {
  activeButton: string;
}

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("Movies");

  const [showNavbar, setShowNavbar] = useState(false);

  const navbarUl = document.querySelector(".navbar-nav");

  useEffect(() => {
    if (navbarUl) {
      navbarUl.classList.toggle("display");
    }
  }, [navbarUl]);

  const crossStyle = css`
        height: 20px;
        width: 20px;
  `

  const bars = css`
        display: block;
        height: 20px;
        width: 20px;
  `

  const crossImgStyle = css`
        height: 100%;
        width: 100%;
  `

  return (
    <nav
      style={{
        background: "lightblue",
        width: "100%",
      }}
    >
        
        <ul
          className={css`
            display: ${showNavbar ? "block" : "none"};
            position: fixed;
            margin: 0;
            top: 0;
            left: 0;
            background-color: black;
            z-index: 10;
            width: 100%;
            margni: 0;
            padding: 0;
            @media (min-width: 769px) {
                display: flex;
                justify-content: end;
                background-color: lightblue;
                height: auto;
                position: relative;
                margin: 0;
                list-style: none;
              }
          `}
        >
          <li>
            <Link to="/" className={css`
              border: none;
              text-decoration: none;
              height: 100%;
              color: ${activeButton === "Movies" ? "white" : "black"};
              background-color: ${activeButton === "Movies" ? "red" : "white"};
              &:hover {
                background-color: #d0d0d0;
              }
              
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 50px;

              @media (min-width: 769px) {
                width: 150px;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            `}
            onClick={() => {
                setActiveButton('Movies');
              }}
              >Movies</Link>
          </li>
          <li>
            <Link to="/myMovieListPage" 
            className={css`
            height: 100%;
            border: none;
            text-decoration: none;
            color: ${activeButton === "MyMovieList" ? "white" : "black"};
            background-color: ${activeButton === "MyMovieList" ? "red" : "white"};
            
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;

            &:hover {
              background-color: #d0d0d0;
            }
            @media (min-width: 769px) {
              width: 150px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `}
          onClick={() => {
              setActiveButton('MyMovieList');
            }}
            >MyMovieList</Link>
          </li>
          <li>
            <Link to="/about" 
            className={css`
            height: 100%;
            border: none;
            text-decoration: none;
            color: ${activeButton === "about" ? "white" : "black"};
            background-color: ${activeButton === "about" ? "red" : "white"};
            
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;

            &:hover {
              background-color: #d0d0d0;
            }
            @media (min-width: 769px) {
              width: 150px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `}
          onClick={() => {
              setActiveButton('about');
            }}
            >About Page</Link>
          </li>
        </ul>
        <button
          className={css`
            border: 1px solid;
            z-index: 20;
            border-radius: 5px;
            position: relative;
            textDecoration: none;
            padding: 10px 30px;
            color: black;
            background-color: ${showNavbar ? "red" : "#9494f3"};
            &:hover {
              background-color: #d0d0d0;
            }
            @media (min-width: 769px) {
                display: none;
              }
          `}
          onClick={() => {
            setShowNavbar(!showNavbar);
          }}
        >
         { showNavbar ? <div className={crossStyle} ><img className={crossImgStyle} src={process.env.PUBLIC_URL + '/close-icon.png'} /> </div> : <span className={bars}>
            &#9776;
          </span>}
        </button>
    </nav>
  );
};

export default Navbar;


