/**
 * Fetching API Movie
 * @param {string} query
 * @returns
 */

async function getMovie(query) {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=b18c38ae&s=${query}`
  );
  const result = await res.json();
  return result;
}

export default getMovie;
