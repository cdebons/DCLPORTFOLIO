// script.js
const galleryImages = document.querySelectorAll('.image-grid-4x6 img');
const imageGrid3 = document.querySelectorAll('.image-grid-3 img');
const imageGrid2 = document.querySelectorAll('.image-grid-2 img');
const imagecont = document.querySelectorAll('.image-container img');
const imagecont2 = document.querySelectorAll('.image-container_2 img');
const modal = document.getElementById('modal');
const modalImage = document.querySelector('.modal-img');
const closeBtn = document.getElementById('close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;

function openModal(index, images) {
    modalImage.src = images[index].src;
    currentIndex = index;
    modal.style.display = 'flex';

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImage.src = images[currentIndex].src;
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        modalImage.src = images[currentIndex].src;
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            modalImage.src = images[currentIndex].src;
        } else if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % images.length;
            modalImage.src = images[currentIndex].src;
        } else if (event.key === 'Escape') {
            closeModal();
        }
    });
}

function closeModal() {
    modal.style.display = 'none';
}

galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        openModal(index, galleryImages); 
    });
});

imageGrid3.forEach((image, index) => {
    image.addEventListener('click', () => {
        openModal(index, imageGrid3); 
    });
});

imageGrid2.forEach((image, index) => {
    image.addEventListener('click', () => {
        openModal(index, imageGrid2); 
    });
});

imagecont.forEach((image, index) => {
    image.addEventListener('click', () => {
        openModal(index, imagecont); 
    });
});

imagecont2.forEach((image, index) => {
    image.addEventListener('click', () => {
        openModal(index, imagecont2); 
    });
});

closeBtn.addEventListener('click', () => {
    closeModal();
});

