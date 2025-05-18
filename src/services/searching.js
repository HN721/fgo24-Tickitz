// src/services/tmdbService.js

import axios from "axios";

const API_KEY = "YOUR_TMDB_API_KEY"; // Ganti dengan API key TMDb kamu
const BASE_URL = "https://api.themoviedb.org/3";

/**
 * Search movies by name
 * @param {string} query - The name of the movie to search
 * @returns {Promise<Array>} List of matching movies
 */
export const searchMoviesByName = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error searching movies by name:", error);
    throw error;
  }
};
