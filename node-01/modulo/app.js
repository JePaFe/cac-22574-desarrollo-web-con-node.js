const modulo = require("./module");
const cowsay = require("cowsay");

const suma = modulo.sumar(2, 3);

console.log(suma, modulo.numero);

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));
