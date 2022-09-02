"USE STRICT";

const make = document.querySelector("form");
make.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("input[name=text]").value;
  const age = document.querySelector("#selected2").value;
  const type = document.querySelector("#selected option:checked").value;

  console.log(name, age, type);

  fetch("http://localhost:3000/pets", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name, age, type }),
  })
    .then((resp) => resp.json())
    .then((data) => console.log(data));
});
