// function User(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.admin = false;

//     this.saludar = function() {
//         console.log('Hola ' + this.nombre);
//     }
// }

// User.prototype.setAdmin = function() {
//     this.admin = true;
// }

class User {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.admin = false;
    }

    saludar() {
        console.log('Hola ' + this.nombre);
    }

    setAdmin() {
        this.admin = true;
    }
}

const juan = new User('Juan', 33);
const maria = new User('Maria', 23);

const usuarios = [juan];

usuarios.push(maria);

