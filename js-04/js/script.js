// const numeros = [4, 9, 'tres', 7, 87, true, [1, 2, 3]];
const numeros = [4, 9, 3, 7, 3, 87]; // Elementos = 5
//               0  1  2  3  4       Indices

// const nums = [4, 7, 3];
// const union = numeros.concat(nums);

// console.log(numeros[3]);
// console.log(numeros.at(-1));

// console.log(numeros.length);
// console.log(numeros[numeros.length-1]);

// numeros[5] = 88;
// numeros[numeros.length] = 88;
// numeros.push(88);
// numeros.unshift(-1);

// let num = numeros.pop();
// let num = numeros.shift();

// let texto = numeros.join(', ');
// document.write(texto);
// let nums = texto.split(', ');

// nombre;apellido;dni;admin
// let dato = 'Juan;Perez;9865432;false';
// const usuario = dato.split(';');
// let nombre_apellido = usuario.slice(0, 2);

// [4, 9, 3, 7, 87]
// console.log(numeros.sort( (a, b) => a - b ));
// console.log(nombres.sort().reverse());

const nombres = ['Juan', 'Maria', 'Pedro', 'Ana'];

// nombres.forEach( item => console.log('Nombre: ' + item) );

// const names = nombres;
// const names = nombres.map( item => item );
// console.log(names);

// [4, 9, 3, 7, 3, 87]
const nums = numeros.filter( num => num == 3 );
console.log(nums);

const num = numeros.find( num => num > 4 );
console.log(num);