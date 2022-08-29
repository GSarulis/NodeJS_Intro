fetch("http://localhost:3001/cars")
  .then((resp) => resp.json())
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.error(error));
