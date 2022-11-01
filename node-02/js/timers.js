// function saludar() {
//   console.log("Hola");
// }

// const saludar = function () {
//   console.log("Hola");
// };

// const saludar = () => {
//   console.log("Hola");
// };

// const saludar = () => console.log("Hola");

// setTimeout(saludar, 1000);

// setTimeout(() => console.log("Hola"), 1000);

const bucle = setInterval(() => console.log("Hola"), 500);

setTimeout(() => clearInterval(bucle), 2000);
