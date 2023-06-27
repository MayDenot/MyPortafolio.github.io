
const btnBar = document.getElementById("btn");
const slideBar = document.getElementById("slidebar");

btnBar.addEventListener('click', () => {
    slideBar.classList.toggle('desplegar');
})

const blight = document.querySelector('#switch');
const body = document.querySelector('body');

blight.addEventListener('click', (e) => {
    body.classList.toggle('lightmode');
});
