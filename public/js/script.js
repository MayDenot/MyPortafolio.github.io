
const btnBar = document.getElementById("btn");
const slideBar = document.getElementById("slidebar");

btnBar.addEventListener('click', () => {
    slideBar.classList.toggle('desplegar');
});

const blight = document.querySelector('#switch');
const body = document.querySelector('body');

blight.addEventListener('click', (e) => {
    body.classList.toggle('lightmode');
});

const btnDescription = document.querySelectorAll(".btn-description");
const cardBody = document.querySelector(".card-body");
const btnsClose = document.querySelectorAll(".btn-close");
const fullImg = document.querySelectorAll(".full-img");

document.querySelectorAll('.btn-description').forEach((cardBody, index) => {
    cardBody.addEventListener('click', () => {
        fullImg[index].style.display = "flex";
    });

    window.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
            fullImg[index].style.display = "none";
        }
    });

    for(let i = 0; i < btnsClose.length; i++) {
        btnsClose[i].addEventListener('click', () => {
            fullImg[index].style.display = "none";
        })
    }
});