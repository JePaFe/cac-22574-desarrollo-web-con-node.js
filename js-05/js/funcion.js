// const user = {
//     nombre: 'Juan',
//     edad: 33,
//     admin: true,
//     saludar() {
//         console.log('Hola ' + this.nombre);
//     }
// }

// user.saludar();

function User(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.admin = false;

    this.saludar = function() {
        console.log('Hola ' + this.nombre);
    }
}

User.prototype.setAdmin = function() {
    this.admin = true;
}

const user = new User('Juan', 33);
const user2 = new User('Maria', 23);

// user.saludar();