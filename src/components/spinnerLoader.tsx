import React from 'react';
import { css } from '@emotion/css';

const Spinner = () => {

    const loader = css`
        display: flex;
        height: 50vh;
        justify-content: center;
        align-items: center;
    `

    const spinner = css`
        height: 10vh;
        width: 10vh;
        border: 6px solid rgba(0, 174, 239, 0.2);
        border-top-color: rgba(0, 174, 239, 0.8);
        border-radius: 100%;
        animation: rotation 0.6s infinite linear 0.25s;

        @keyframes rotation {
            from {
              opacity: 1;
              transform: rotate(0deg);
            }
            to {
              opacity: 1;
              transform: rotate(359deg);
            }
        }
    `

    return <div className={loader}>
            <div className={spinner}></div>
          </div>
}

export default Spinner;