const getData = fetch("https://jsonplaceholder.typicode.com/todos/1");
getData
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
