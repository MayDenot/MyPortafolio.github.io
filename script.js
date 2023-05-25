// Variables 
const btnBar = document.getElementById("btn");
const header = document.getElementById("header");

// Boton toggle de la barra de navegacion
btnBar.addEventListener('click', () => {
    header.classList.toggle('desplegar');
})