const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = document.querySelector("input[name=name]");
  const surInput = document.querySelector("input[name=surname]");
  const ageInput = document.querySelector("input[name=age]");

  //   console.log(nameInput.value, surInput.value, ageInput.value);

  const personObject = {
    name: nameInput.value,
    surname: surInput.value,
    age: ageInput.value,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personObject),
  };

  fetch("http://localhost:8080/", options)
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(error));
});
