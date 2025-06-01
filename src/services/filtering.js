const url =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmVhOGUwYjY1MGIyMDJkMTRlYmI1MjI5ZGQwZmRmOSIsIm5iZiI6MTc0NzM3Njk3NC42OTUwMDAyLCJzdWIiOiI2ODI2ZGI0ZTkxMTY1ZjYzYmE2ZWZjODAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UVz4N682u9la2B2SkINIeIYfKNJm8lvWBUzLCrs-3Wo",
  },
};
export async function filterByGenre(query) {
  const res = await fetch(`${url}${query}`, options);
  const result = await res.json();
  return result;
}
function filterByNewest() {}
function filterByLatest() {}
