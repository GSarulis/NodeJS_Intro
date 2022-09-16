const fetchCars = function () {
  fetch("http://localhost:3000/cars")
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(error));
};

fetchCars();
