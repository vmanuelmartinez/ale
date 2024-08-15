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
        noBtn.style.left = `${Math.max(0, x)}px`;
        noBtn.style.top = `${Math.max(0, y)}px`;
    }

    // Función para manejar el clic y el toque
    function manejarInteraccion(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto en móviles
        moverNoBtn();
    }

    // Eventos para el botón "NO"
    noBtn.addEventListener('click', manejarInteraccion);
    noBtn.addEventListener('touchstart', manejarInteraccion); // Para dispositivos móviles

    // Evento para el botón "SÍ"
    yesBtn.addEventListener('click', () => {
        container.style.display = 'none';  // Oculta el contenedor de botones
        mensaje.style.display = 'block';   // Muestra el mensaje
        musica.play();                     // Reproduce la música
    });
});
