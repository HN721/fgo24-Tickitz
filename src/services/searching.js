/**
 * Fetching API Movie
 * @param {string} query String for searching by title
 * @param {Object | Array} result result must object or array
 * @returns
 */

async function SearchingMovie(query) {
  const res = await fetch(
    `https://www.omdbapi.com/?t=${query}&apikey=e469d3d7`
  );
  const result = await res.json();
  return result;
}

export default SearchingMovie;
