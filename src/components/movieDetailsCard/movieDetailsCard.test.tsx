import React from "react";
import { render, screen } from "@testing-library/react";
import MovieDetailsCard from "./movieDetailsCard";

describe("MovieDetailsCard", () => {
  it("should render the component with the correct props", () => {
    const movieId = "123456";
    const title = "The Shawshank Redemption";
    const genre = "Drama";
    const imdbRating = "9.3";
    const cast = "Tim Robbins, Morgan Freeman";
    const director = "Frank Darabont";
    const poster = "https://example.com/image.jpg";
    const type = "Movie";
    const year = "1994";

    const { getByAltText, getByText } = render(<MovieDetailsCard movieId={movieId} title={title} genre={genre} imdbRating={imdbRating} cast={cast} director={director} poster={poster} type={type} year={year} />);

    const movieCard = screen.getByAltText(title);
    expect(movieCard).toBeInTheDocument();

    expect(screen.getByText(/The Shawshank Redemption/i)).toBeInTheDocument();
    expect(screen.getByText(/Drama/i)).toBeInTheDocument();
    expect(screen.getByText(/Tim Robbins, Morgan Freeman/i)).toBeInTheDocument();
    expect(screen.getByText(/Frank Darabont/i)).toBeInTheDocument();

  });

  it("should render the saved movie correctly", () => {
    const movieId = "123456";
    const title = "The Shawshank Redemption";
    const genre = "Drama";
    const imdbRating = "9.3";
    const cast = "Tim Robbins, Morgan Freeman";
    const director = "Frank Darabont";
    const poster = "https://example.com/image.jpg";
    const type = "Movie";
    const year = "1994";

    localStorage.setItem("savedMovies", JSON.stringify({
      [movieId]: {
        id: movieId,
        title: title,
        genre: genre,
        imdbRating: imdbRating,
        cast: cast,
        director: director,
        poster: poster,
        type: type,
        year: year,
      },
    }));

    const { getByAltText, getByText } = render(<MovieDetailsCard movieId={movieId} title={title} genre={genre} imdbRating={imdbRating} cast={cast} director={director} poster={poster} type={type} year={year} />);

    const movieCard = screen.getByAltText(title);
    expect(movieCard).toBeInTheDocument();

    const savedMovieText = screen.getByText("you have Saved this Movie");
    expect(savedMovieText).toBeInTheDocument();
  });
});
