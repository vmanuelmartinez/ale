document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const musica = document.getElementById('musica');
    const mensaje = document.getElementById('mensaje');
    const container = document.querySelector('.container');

    // Función para mover el botón "NO" a una ubicación aleatoria
    function moverNoBtn() {
        const ancho = window.innerWidth;
        const alto = window.innerHeight;
        const x = Math.random() * (ancho - noBtn.offsetWidth);
        const y = Math.random() * (alto - noBtn.offsetHeight);
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }

    // Función para manejar el clic y el toque
    function manejarClick() {
        moverNoBtn();
    }

    // Eventos para el botón "NO"
    noBtn.addEventListener('click', manejarClick);
    noBtn.addEventListener('touchstart', manejarClick); // Para dispositivos móviles

    // Evento para el botón "SÍ"
    yesBtn.addEventListener('click', () => {
        container.style.display = 'none';  // Oculta el contenedor de botones
        mensaje.style.display = 'block';   // Muestra el mensaje
        musica.play();                     // Reproduce la música
    });
});
