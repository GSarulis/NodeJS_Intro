fetch("http://localhost:8080/")
  .then((resp) => resp.json())
  .then((response) => {
    console.log(response);
    const ul = document.createElement("ul");

    response.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} ${user.surname} ${user.age}`;
      ul.append(li); //
    });

    document.body.append(ul);
  })
  .catch((error) => console.error(error));
