const handleSubmitCar = (event) => {
  event.preventDefault();

  const brand = document.querySelector("input[name='brand']");
  const model = document.querySelector("input[name='model']");

  const car = { brand: brand.value, model: model.value };

  const params = {
    method: "POST",
    body: JSON.stringify(car),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
};

const carForm = document.getElementById("car-form");
carForm.addEventListener("submit", handleSubmitCar);

console.log(typeof null);
