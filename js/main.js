'use strict';

//Variabili
const images = ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg", "./img/04.jpg", "./img/05.jpg"];
const itemsContainer = document.querySelector(".ms_items");
const prev = document.querySelector('.ms_prev');
const next = document.querySelector('.ms_next');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
let autoplayInterval;

let currentImage = 0;

//Creazione della slide principale
for (let i = 0; i < images.length; i++) {
    //slide
    const item = document.createElement("div");
    item.classList.add("ms_item");

    if (i === currentImage) {
        item.classList.add("ms_active");
    }

    //img
    const img = document.createElement("img");
    img.src = `${images[i]}`;
    img.alt = `Image ${i}`;
    item.appendChild(img);
    itemsContainer.appendChild(item);
}

//Crezaione delle thumbnails
const thumbnailsContainer = document.querySelector(".ms_thumbnails");

for (let i = 0; i < images.length; i++) {
    const thumbnail = document.createElement("div");
    thumbnail.classList.add("ms_thumbnail");

    if (i === currentImage) {
        thumbnail.classList.add("ms_active_thumbnail");
    }

    const thumbnailImg = document.createElement("img");
    thumbnailImg.src = `${images[i]}`;
    thumbnailImg.alt = `Thumbnail ${i}`;
    thumbnail.appendChild(thumbnailImg);
    thumbnailsContainer.appendChild(thumbnail);
}


//Gestione dei pulsanti
const allItems = document.querySelectorAll(".ms_item");
const allThumbnails = document.querySelectorAll(".ms_thumbnail");

prev.addEventListener('click', function () {

    allItems[currentImage].classList.remove('ms_active');
    allThumbnails[currentImage].classList.remove('ms_active_thumbnail');

    if (currentImage > 0) {
        currentImage--;
    }
    else {
        currentImage = images.length - 1
    }

    allItems[currentImage].classList.add('ms_active');
    allThumbnails[currentImage].classList.add('ms_active_thumbnail');

})

next.addEventListener('click', function () {

    allItems[currentImage].classList.remove('ms_active');
    allThumbnails[currentImage].classList.remove('ms_active_thumbnail');

    if (currentImage < images.length - 1) {
        currentImage++;
    }
    else {
        currentImage = 0
    }

    allItems[currentImage].classList.add('ms_active');
    allThumbnails[currentImage].classList.add('ms_active_thumbnail');

})

// Bonus 3
for (let i = 0; i < allThumbnails.length; i++) {
    const currentThumbnail = allThumbnails[i];

    currentThumbnail.addEventListener('click', function () {
        let clickedThumbnail = i;

        const activeThumbnail = document.querySelector('.ms_active_thumbnail');

        if (activeThumbnail) {
            activeThumbnail.classList.remove('ms_active_thumbnail');
        }

        currentThumbnail.classList.add('ms_active_thumbnail');
        currentImage = clickedThumbnail;

        for (let indiceItem = 0; indiceItem < allItems.length; indiceItem++) {
            if (indiceItem === currentImage) {
                allItems[indiceItem].classList.add('ms_active');
            } else {
                allItems[indiceItem].classList.remove('ms_active');
            }
        }
    });
}

// Funzione per cambiare l'immagine
function changeImage() {
    allItems[currentImage].classList.remove('ms_active');
    allThumbnails[currentImage].classList.remove('ms_active_thumbnail');

    if (currentImage < images.length - 1) {
        currentImage++;
    } else {
        currentImage = 0;
    }

    allItems[currentImage].classList.add('ms_active');
    allThumbnails[currentImage].classList.add('ms_active_thumbnail');
}

// Funzione per avviare l'autoplay
function startAutoplay() {
    autoplayInterval = setInterval(changeImage, 3_000); // Cambia immagine ogni 3 secondi
}

// Funzione per interrompere l'autoplay
function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Aggiungi eventi per i bottoni Start e Stop
startBtn.addEventListener('click', startAutoplay);
stopBtn.addEventListener('click', stopAutoplay);

// Avvia l'autoplay all'inizio
startAutoplay();