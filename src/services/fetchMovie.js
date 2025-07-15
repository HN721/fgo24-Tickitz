// fetchMovie.js
const getData = async () => {
  const url = "http://146.190.102.54:9203/movie/now-showing";
  const res = await fetch(url);
  const result = await res.json();
  console.log(result);
  return result.results;
};

const getPage = async () => {
  const url = `http://146.190.102.54:9203/movie`;
  const res = await fetch(url);
  const json = await res.json();
  console.log(json.results);
  return json.results;
};

async function getMoviebyId(id) {
  const fetching = await fetch(`http://146.190.102.54:9203/movie/detail/${id}`);

  const res = await fetching.json();
  console.log(res.results);
  return res.results;
}

export { getPage, getData, getMoviebyId };
