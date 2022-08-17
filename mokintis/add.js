const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // const name = document.querySelector("input[name=name]");
  const favoriteColor = document.querySelector("#color option:checked");

  console.log(favoriteColor);
});
