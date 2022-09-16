const duomenis = [{ id: 1, userFirstName: "Apple", userLastName: "asd" }];

fetch("http://localhost:8080/new", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(duomenis),
});
