// Модальное окно для просмотра изображений
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.getElementById('modalClose');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');

    const allImages = document.querySelectorAll('.gallery__image');
    
    let currentImageIndex = 0;
    
    // Функция открытия модального окна
    function openModal(index) {
        currentImageIndex = index;
        modalImage.src = allImages[index].src;
        modalImage.alt = allImages[index].alt;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Функция закрытия модального окна
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Функция показа следующего изображения
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % allImages.length;
        modalImage.src = allImages[currentImageIndex].src;
        modalImage.alt = allImages[currentImageIndex].alt;
    }
    
    // Функция показа предыдущего изображения
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
        modalImage.src = allImages[currentImageIndex].src;
        modalImage.alt = allImages[currentImageIndex].alt;
    }
    
    // Добавляем обработчики кликов на изображения в галерее
        allImages.forEach((image, index) => {
        image.addEventListener('click', function() {
            openModal(index);
        });
    });
    
    // Обработчики для кнопок модального окна
    modalClose.addEventListener('click', closeModal);
    modalPrev.addEventListener('click', showPrevImage);
    modalNext.addEventListener('click', showNextImage);
    
    // Закрытие модального окна при клике вне изображения
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Навигация с помощью клавиатуры
    document.addEventListener('keydown', function(event) {
        if (modal.classList.contains('active')) {
            if (event.key === 'Escape') {
                closeModal();
            } else if (event.key === 'ArrowLeft') {
                showPrevImage();
            } else if (event.key === 'ArrowRight') {
                showNextImage();
            }
        }
    });
});