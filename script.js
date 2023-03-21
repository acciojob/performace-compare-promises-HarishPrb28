// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
function fetchData(url) {
  return fetch(url).then((response) => response.json());
}

// Use Promise.all() to fetch data from all APIs and measure the time taken
const startAll = performance.now();
Promise.all(apiUrls.map(fetchData))
  .then((results) => {
    const endAll = performance.now();
    const timeTakenAll = (endAll - startAll) / 1000;
    document.getElementById("output-all").innerText = timeTakenAll.toFixed(3);
  })
  .catch((error) => {
    console.error(error);
  });

// Use Promise.any() to fetch data from APIs and measure the time taken
const startAny = performance.now();
Promise.any(apiUrls.map(fetchData))
  .then((result) => {
    const endAny = performance.now();
    const timeTakenAny = (endAny - startAny) / 1000;
    document.getElementById("output-any").innerText = timeTakenAny.toFixed(3);
  })
  .catch((error) => {
    console.error(error);
  });