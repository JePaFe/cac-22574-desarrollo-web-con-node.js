const saludo = function(mensaje, accion) {
    accion(mensaje);
}

const log = function (mensaje) {
    console.log(mensaje);
}

saludo('Hola', console.log);
saludo('Hola', alert);
saludo('Hola', log);

// saludo('Hola', function(dato) {
//     console.log(dato);
// });

saludo('Hola', dato => console.log(dato) );