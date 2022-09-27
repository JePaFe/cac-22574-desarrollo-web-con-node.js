for (let i = 0; i < 3; i++) { // i = 0
    // console.log(i);
}

// let num = 0;

// num = num + 1;
// num += 1;
// num++;

// console.log(num);

for (let i = 2; i <= 10; i += 2) {
    // console.log(i);
}

// --- while

let contador = 0;
let numero

do {
    numero = prompt('Ingrese un numero: ');

    if (numero == 1) {
        contador++;
    } else {
        contador = 0;
    }

    if (contador >= 2) {
        break;
    }
    
    console.log(numero);
} while (numero != 0);