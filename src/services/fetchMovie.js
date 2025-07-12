// fetchMovie.js
const getData = async () => {
  const url = "http://localhost:8888/movie/now-showing";
  const res = await fetch(url);
  const result = await res.json();
  console.log(result);
  return result.results;
};

const getPage = async (page = 1, sort = "popular") => {
  const url = `http://localhost:8888/movie`;
  const res = await fetch(url);
  const json = await res.json();
  console.log(json.results);
  return json.results;
};

async function getMoviebyId(id) {
  const fetching = await fetch(`http://localhost:8888/movie/detail/${id}`);

  const res = await fetching.json();
  console.log(res.results);
  return res.results;
}

export { getPage, getData, getMoviebyId };
