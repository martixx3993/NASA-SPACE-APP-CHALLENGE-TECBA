document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const slideText = document.querySelector('.slide-text');
    let currentSlide = 0;

    const texts = [
        "Texto para la imagen 1",
        "Texto para la imagen 2",
        "Texto para la imagen 3",
        "Texto para la imagen 4",
        "Texto para la imagen 5",
        "Texto para la imagen 6",
        "Texto para la imagen 7",
        "Texto para la imagen 8",
        "Texto para la imagen 9"
    ];

    function goToSlide(n) {
        slider.style.transform = `translateX(-${n * 100}%)`;
        updateText(n);
        currentSlide = n;
    }

    function updateText(n) {
        slideText.style.opacity = 0;
        setTimeout(() => {
            slideText.textContent = texts[n];
            slideText.style.opacity = 1;
        }, 300);
    }

    function nextSlide() {
        if (currentSlide >= slides.length - 1) {
            goToSlide(0);
        } else {
            goToSlide(currentSlide + 1);
        }
    }

    function prevSlide() {
        if (currentSlide <= 0) {
            goToSlide(slides.length - 1);
        } else {
            goToSlide(currentSlide - 1);
        }
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Inicializar el primer texto
    updateText(0);
});
// Aquí acaba el código del carrusel

// Videos PopUp
document.addEventListener('DOMContentLoaded', function() {
    const planetButtons = document.querySelectorAll('.planeta');
    const videoPopup = document.getElementById('video-popup');
    const planetVideo = document.getElementById('planet-video');
    const closeButton = document.querySelector('.close');

    // Inicialmente, ocultar el video popup
    videoPopup.style.display = 'none'; // Aseguramos que no se muestre al cargar la página

    // Función para abrir el video solo cuando se hace clic
    function openVideo(videoSrc) {
        planetVideo.src = videoSrc;
        videoPopup.style.display = 'flex';
        setTimeout(() => {
            videoPopup.classList.add('active');
        }, 10);
        planetVideo.load(); // Carga el video, pero no lo reproduce automáticamente
    }

    // Función para cerrar el video
    function closeVideo() {
        videoPopup.classList.remove('active');
        setTimeout(() => {
            videoPopup.style.display = 'none';
            planetVideo.pause();
            planetVideo.currentTime = 0;
            planetVideo.src = '';
        }, 300);
    }

    // Event listeners para los botones de planetas
    planetButtons.forEach(button => {
        button.addEventListener('click', () => {
            const videoSrc = button.getAttribute('data-video');
            openVideo(videoSrc);
        });
    });

    // Event listener para el botón de cierre
    closeButton.addEventListener('click', closeVideo);

    // Event listener para cerrar el popup al hacer clic fuera del video
    videoPopup.addEventListener('click', (event) => {
        if (event.target === videoPopup) {
            closeVideo();
        }
    });
});

// OJOS
document.addEventListener('DOMContentLoaded', function() {
    const paginaSelector = document.getElementById('pagina-selector');
    const paginaIframe = document.getElementById('pagina-iframe');

    paginaSelector.addEventListener('change', function() {
        paginaIframe.src = this.value;
    });
});

