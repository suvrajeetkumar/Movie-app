import React, { useState, useEffect } from "react";
import { css } from "@emotion/css";

interface PaginationProps {
    totalItems: number;
    currentPage: number;
    itemsPerPage: number;
    setCurrentPage: any
}

const Pagination = ({ totalItems, currentPage, itemsPerPage, setCurrentPage }: PaginationProps) => {
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    setPageCount(Math.ceil(totalItems / itemsPerPage));
  }, [totalItems, itemsPerPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const UlStyles = css`
    text-decoration: none;
    display: flex;
    justify-content: center;
    margin: 20px;
    padding: 0;
  `

  const liStyles = css`
    background-color: lightblue;
    padding: 5px 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin-left: 5px;
  `

  const activePage = css`
    background-color: lightblue;
    padding: 5px 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background-color: darkblue;
    color: white;
    margin-left: 5px;
  `

  const linkTagStyle = css`
    text-decoration: none;
  `

  const activeLinkTagStyle = css`
    text-decoration: none;
    color: white;
  `

  return (
    <div>
      <ul className={UlStyles}>
        {pageCount > 1 ? Array(pageCount).fill("").map((_, index) => (
          <li
            key={index}
            className={currentPage === index + 1 ? activePage : liStyles}
          >
            <a href="#" className={currentPage === index + 1 ? activeLinkTagStyle : linkTagStyle} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </a>
          </li>
        )) : null}
      </ul>
    </div>
  );
};

export default Pagination;
