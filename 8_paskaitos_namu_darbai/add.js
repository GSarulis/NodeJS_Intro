document.forms.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("input[name=name]");
  const age = Number(document.querySelector("input[name=age]"));
  const type = document.querySelector("#selected option:checked").value;

  console.log(type);

  fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name, age, type }),
  })
    .then((resp) => resp.json())
    .then((data) => console.log(data));
});
