function sleep(condicion, num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (condicion) {
        resolve("Pasaron 2 segundos " + num);
      } else {
        reject("Error...");
      }
    }, 2000);
  });
}

const espera = async (condicion) => {
  try {
    let response = await sleep(condicion, 1);
    console.log(response);

    response = await sleep(condicion, 2);
    console.log(response);

    response = await sleep(condicion, 3);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

console.log(1);
espera(true);
console.log(3);
