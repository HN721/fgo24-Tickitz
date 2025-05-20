export function store(data) {
  const getItem = JSON.parse(localStorage.getItem("data") || "[]");
  getItem.push(data);
  const setItem = localStorage.setItem("data", JSON.stringify(getItem));
  return setItem;
}
