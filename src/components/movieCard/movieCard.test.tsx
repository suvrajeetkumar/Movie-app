import React from "react";
import { render, screen, getByAltText } from "@testing-library/react";
import { fireEvent, waitFor } from "@testing-library/dom";
import MovieCard from "./movieCard";

describe("MovieCard", () => {
  it("should render the component with the correct props", () => {
    const image = "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg";
    const index = 1;
    const movieName = "The Shawshank Redemption";
    const movieType = "Drama";
    const movieYear = "1994";

    render(<MovieCard image={image} index={index} movieName={movieName} movieType={movieType} movieYear={movieYear} />);

    
    expect(screen.getByText(/The Shawshank Redemption/i)).toBeInTheDocument();
    expect(screen.getByText(/Drama/i)).toBeInTheDocument();
    expect(screen.getByText("1994")).toBeInTheDocument();
  });

  it("should change the background color when hovered", () => {
    const image = "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg";
    const index = 1;
    const movieName = "The Shawshank Redemption";
    const movieType = "Drama";
    const movieYear = "1994";

    const { getByAltText } = render(<MovieCard image={image} index={index} movieName={movieName} movieType={movieType} movieYear={movieYear} />);

    const movieCard = getByAltText(movieName);
    fireEvent.mouseOver(movieCard);
    waitFor(() => {
      expect(movieCard.style.backgroundColor).toMatch("rgb(238, 238, 238)");
    });
  });
});
