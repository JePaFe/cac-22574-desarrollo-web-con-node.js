const enlace = document.querySelector('a');

// enlace.style.fontSize = '2em';

enlace.addEventListener('click', event => {
    event.preventDefault();

    // const respuesta = confirm('¿Esta seguro?');

    // if (respuesta == true) {
    // if (respuesta) {
    if (confirm('¿Esta seguro?')) {
        window.location = enlace.href
    }
});