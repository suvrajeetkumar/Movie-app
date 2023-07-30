import axios from "axios";
const BASE_URL = "https://www.omdbapi.com/";
const API_KEY = "d1d308ab";

export const getMovies = async () => {
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=batman&type=series`);
  return response;
};

export const getMovieDescription = async (movieId: string) => {
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${movieId}`);
  return response;
}
