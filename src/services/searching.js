import axios from "axios";

export const searchingMovie = async (query) => {
  const res = await axios.get(`http://localhost:8888/movie?search=${query}`);
  return res.data;
};
export const filterByGenre = async (genreId) => {
  const res = await axios.get(`http://localhost:8888/movie?genre=${genreId}`);
  return res.data;
};
export const getAllGenres = async () => {
  const res = await fetch("http://localhost:8888/movie/genre");
  const data = await res.json();
  return data;
};
