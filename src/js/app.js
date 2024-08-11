document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('no');

    if (!button) {
        console.error('El botón con id "no" no se encontró.');
        return;
    }

    function moveButtonRandomly() {
        // Asegúrate de que el botón puede moverse correctamente
        button.style.position = 'absolute'; // Necesario para mover el botón
        button.style.left = `${Math.random() * (window.innerWidth - button.offsetWidth)}px`; 
        button.style.top = `${Math.random() * (window.innerHeight - button.offsetHeight)}px`;
    }

    button.addEventListener('click', moveButtonRandomly);
});
