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
const fetchData = (url) => {
  return fetch(url).then((response) => response.json());
};

// Function to display the time taken for Promise.all and Promise.any in the table
const displayTimeTaken = (apiIndex, timeTakenAll, timeTakenAny) => {
  const outputAll = document.getElementById(`output-all${apiIndex}`);
  const outputAny = document.getElementById(`output-any${apiIndex}`);
  outputAll.innerText = `${timeTakenAll} ms`;
  outputAny.innerText = `${timeTakenAny} ms`;
};

// Function to fetch data from multiple APIs using Promise.all and Promise.any
const fetchDataFromApis = async () => {
  const promises = urls.map((url) => fetchData(url));

  // Measure time taken for Promise.all
  const startTimeAll = performance.now();
  const resultsAll = await Promise.all(promises);
  const endTimeAll = performance.now();
  const timeTakenAll = endTimeAll - startTimeAll;

  // Measure time taken for Promise.any
  const startTimeAny = performance.now();
  const resultAny = await Promise.any(promises);
  const endTimeAny = performance.now();
  const timeTakenAny = endTimeAny - startTimeAny;

  // Display the time taken for each method in the table
  for (let i = 0; i < urls.length; i++) {
    displayTimeTaken(i + 1, timeTakenAll, timeTakenAny);
  }
};

// Call the fetchDataFromApis function to fetch data from the APIs and display the time taken
fetchDataFromApis();