const form = document.querySelector('.form-contacto');

form.addEventListener('submit', event => {
    event.preventDefault();

    const provincia = document.querySelector('#provincia');
    console.log(provincia.value)

    const mensaje = document.querySelector('.mensaje');
    mensaje.textContent = 'Provincia: ' + provincia.value;

    // const edad = document.querySelector('#edad');
    // const edad_numero = Number(edad.value);
    // console.log(edad_numero + 2);
});

// const nombre = document.querySelector('#nombre');

// nombre.addEventListener('keypress', () => {
//     console.log(nombre.value);
// });

// document.querySelector('button:nth-child(2)');
// document.querySelector('[type="button"]');

// const boton = document.querySelector('#btn-procesar');

// boton.addEventListener('click', () => {
//     const edad = document.querySelector('#edad');
//     const edad_numero = Number(edad.value);
//     console.log(edad_numero + 2);
// });