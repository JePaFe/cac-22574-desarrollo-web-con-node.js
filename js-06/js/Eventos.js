function saludar() {
    alert('Hola');
}

const parrafo = document.querySelector('p');

// parrafo.onclick = saludar;
// parrafo.addEventListener('click', saludar);

// parrafo.addEventListener('click', () => {
//     alert('Hola');
// });

// document.addEventListener('keypress', event => {
//     console.log(event, event.target);
// });

const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const nombre = document.querySelector('#nombre');

    if (nombre.value == '') {
        // console.log('Los campos son obligatorios');

        // const span = document.createElement('span');
        // span.textContent = 'Los campos son obligatorios';
        // form.appendChild(span);

        const span = document.querySelector('#error_nombre')
        span.textContent = 'Los campos son obligatorios';
    } else {
        event.target.submit();
    }
});