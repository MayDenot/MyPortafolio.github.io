// Variables 
const btnBar = document.getElementById("btn");
const slideBar = document.getElementById("slidebar");

// Boton toggle de la barra de navegacion
btnBar.addEventListener('click', () => {
    slideBar.classList.toggle('desplegar');
})