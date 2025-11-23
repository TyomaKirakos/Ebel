// Инициализация слайдера
document.addEventListener('DOMContentLoaded', function() {
    const slider = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        autoplay: 4000,
        hoverpause: true,
        animationDuration: 800,
        animationTimingFunc: 'ease-in-out',
        gap: 0,
        rewind: true,
        rewindDuration: 600,
        peek: {
            before: 0,
            after: 0
        },
        breakpoints: {
            768: {
                perView: 1,
                autoplay: 5000
            },
            480: {
                perView: 1,
                autoplay: 6000
            }
        }
    });

    // Добавляем обработчики событий для улучшения UX
    slider.on('mount.before', function() {
        console.log('Слайдер инициализируется...');
    });

    slider.on('mount.after', function() {
        console.log('Слайдер готов к работе!');
        // Добавляем анимацию появления
        document.querySelector('.glide').style.opacity = '0';
        document.querySelector('.glide').style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            document.querySelector('.glide').style.opacity = '1';
        }, 100);
    });

    slider.on('run', function() {
        // Обновляем активные индикаторы
        updateBullets();
    });

    // Функция для обновления индикаторов
    function updateBullets() {
        const bullets = document.querySelectorAll('.glide__bullet');
        const activeIndex = slider.index;
        
        bullets.forEach((bullet, index) => {
            if (index === activeIndex) {
                bullet.classList.add('glide__bullet--active');
            } else {
                bullet.classList.remove('glide__bullet--active');
            }
        });
    }

    // Запускаем слайдер
    slider.mount();
    
    // Инициализируем индикаторы
    updateBullets();
});