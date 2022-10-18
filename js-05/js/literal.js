const user = {
    nombre: 'Juan',
    edad: 33,
    admin: true,
    "fecha actual": 2022,
    saludar() {
        console.log('Hola ' + this.nombre);
    }
}

user.saludar();

// user = 123;
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.getOwnPropertyDescriptor(user, 'nombre'));

// user.apellido = 'Perez';
// user.nombre = 'Juan Pablo';

// console.log(user.hasOwnProperty('apellido'));

// console.log(user.edad);
// console.log(user['edad']);

// user['fecha actual'] = 2021;

// console.log(user['fecha actual']);

// for (const key in user) {
//     // console.log(key, user[key]);
//     // console.log(key);
//     // console.log('Key: ' + key + ', tiene el valor: ' + user[key]);
//     console.log(`Key: ${key}, tiene el valor: ${user[key]}`);
// }

