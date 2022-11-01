function sleep(condicion) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (condicion) {
        resolve("Pasaron 2 segundos");
      } else {
        reject("Error...");
      }
    }, 2000);
  });
}

function saludar() {
  console.log("Hola");
}

console.log(1);

sleep(true)
  .then((response) => {
    console.log(response);
    return sleep(false);
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.log(error))
  .finally(saludar);

console.log(3);
