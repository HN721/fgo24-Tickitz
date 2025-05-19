const TMDB_API_URL =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";
const TMDB_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmVhOGUwYjY1MGIyMDJkMTRlYmI1MjI5ZGQwZmRmOSIsIm5iZiI6MTc0NzM3Njk3NC42OTUwMDAyLCJzdWIiOiI2ODI2ZGI0ZTkxMTY1ZjYzYmE2ZWZjODAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UVz4N682u9la2B2SkINIeIYfKNJm8lvWBUzLCrs-3Wo",
  },
};
async function searchingMovie(query) {
  const response = await fetch(
    `${TMDB_API_URL}&query=${encodeURIComponent(query)}`,
    TMDB_OPTIONS
  );
  const data = await response.json();
  return data;
}
export { searchingMovie };
