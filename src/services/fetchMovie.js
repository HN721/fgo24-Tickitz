// fetchMovie.js
const getData = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=id-ID&page=1";
  const res = await fetch(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmVhOGUwYjY1MGIyMDJkMTRlYmI1MjI5ZGQwZmRmOSIsIm5iZiI6MS43NDczNzY5NzQ2OTUwMDAyZSs5LCJzdWIiOiI2ODI2ZGI0ZTkxMTY1ZjYzYmE2ZWZjODAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mkvT_xl9oudBglodsiCpSbAargmqBFgIB938jB8pz_Y",
    },
  });
  const result = await res.json();
  return result.results;
};

const getPage = async (page = 1, sort = "popular") => {
  const url = `https://api.themoviedb.org/3/movie/${sort}?page=${page}`;
  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmVhOGUwYjY1MGIyMDJkMTRlYmI1MjI5ZGQwZmRmOSIsIm5iZiI6MS43NDczNzY5NzQ2OTUwMDAyZSs5LCJzdWIiOiI2ODI2ZGI0ZTkxMTY1ZjYzYmE2ZWZjODAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mkvT_xl9oudBglodsiCpSbAargmqBFgIB938jB8pz_Y",
    },
  });
  const json = await res.json();
  console.log(json.results);
  return json.results;
};

async function getMoviebyId(id) {
  const fetching = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmVhOGUwYjY1MGIyMDJkMTRlYmI1MjI5ZGQwZmRmOSIsIm5iZiI6MS43NDczNzY5NzQ2OTUwMDAyZSs5LCJzdWIiOiI2ODI2ZGI0ZTkxMTY1ZjYzYmE2ZWZjODAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mkvT_xl9oudBglodsiCpSbAargmqBFgIB938jB8pz_Y",
      },
    }
  );

  const res = await fetching.json();
  return res;
}
export async function getMovieCredits(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmVhOGUwYjY1MGIyMDJkMTRlYmI1MjI5ZGQwZmRmOSIsIm5iZiI6MS43NDczNzY5NzQ2OTUwMDAyZSs5LCJzdWIiOiI2ODI2ZGI0ZTkxMTY1ZjYzYmE2ZWZjODAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mkvT_xl9oudBglodsiCpSbAargmqBFgIB938jB8pz_Y",
      },
    }
  );

  return await response.json();
}
export { getPage, getData, getMoviebyId };
