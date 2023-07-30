import React, {useEffect, useState} from 'react';
import { css } from '@emotion/css';
import { useThemeContext } from '../context/provider';

const AboutPage = () => {

    const { isDarkMode, toggleTheme } = useThemeContext();

    const containerBox = css`
    background-color: white;
    margin: 5%;
    width: 80%;
    display: flex;
    justify-content: start;
    align-items: center;
    @media (min-height: 780px) {
        height: calc(100vh - 50px);
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
    ${
        isDarkMode ? `background-color: #111111;` : `background-color: #eaeaed;`
    }
  `

  const liStyles = css`
  margin: 5% 0;
  font-size: 1.2rem;
  `


    return <div className={greyBackground}>
        <div className={css`
        text-align: center;
        margin-top: 30px;
        font-size: 1.5rem;
        ${
            isDarkMode ? `color: white;` : `color: #1c8fb4;`
          }
        `}>
            This is about page for the web app
        </div>
        <div className={containerBox}>
            <ul>
                <li className={liStyles}>This is a web-app created with React and typescript using mobile first responsive approach and uses use React Functional Component
(Hooks), React Context, React Router, and Axios</li>
                <li className={liStyles}>This web-app has lightHouse desktop score of Performance: 95, Accessibility: 94, Seo: 100</li>
                <li className={liStyles}>This web-app has the unit test written using react-testing-library</li>
                <li className={liStyles}>This web-app has the typescript implementation</li>
                <li className={liStyles}>This web-app has the Eslint implementation</li>
                <li className={liStyles}>This web-app has the Pagination implemented</li>
                <li className={liStyles}>This web-app has skeleton loader implementation</li>
                <li className={liStyles}>This web-app uses emotion/css</li>
            </ul>
        </div>
        </div>
}

export default AboutPage;