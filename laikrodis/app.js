function getTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();

  console.log(seconds, minutes);
}

getTime();
