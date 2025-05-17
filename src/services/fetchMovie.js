const url =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
async function getData() {
  const res = await fetch(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmVhOGUwYjY1MGIyMDJkMTRlYmI1MjI5ZGQwZmRmOSIsIm5iZiI6MS43NDczNzY5NzQ2OTUwMDAyZSs5LCJzdWIiOiI2ODI2ZGI0ZTkxMTY1ZjYzYmE2ZWZjODAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mkvT_xl9oudBglodsiCpSbAargmqBFgIB938jB8pz_Y",
    },
  });
  const result = await res.json();
  return result.results;
}

export default getData;
