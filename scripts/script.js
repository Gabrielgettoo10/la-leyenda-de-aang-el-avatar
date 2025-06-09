// Variable para almacenar el personaje seleccionado por el jugador
let personajeJugadorSeleccionado = null;

// Referencia al contenedor de los personajes
const seccionPersonajes = document.getElementById('personajesSeleccion');

// Selecciona todos los botones que representan personajes
const botonesPersonaje = document.querySelectorAll('.personaje');

// Referencias a los botones de acción
const btnConfirmar = document.getElementById('btnConfirmar');
const btnCombate = document.getElementById('btnCombate');

// Agregar evento click a cada botón de personaje
botonesPersonaje.forEach(boton => {
    boton.addEventListener('click', () => {
        // Quitar selección previa
        botonesPersonaje.forEach(b => b.classList.remove('seleccionado'));
        // Agregar selección al botón clickeado
        boton.classList.add('seleccionado');
        // Guardar el personaje seleccionado
        personajeJugadorSeleccionado = boton.dataset.nombre;
        // Habilitar botón de confirmar
        btnConfirmar.disabled = false;
        console.log('Personaje seleccionado:', personajeJugadorSeleccionado);
    });
});

// Función para seleccionar enemigo aleatorio
function seleccionarEnemigo() {
    const personajes = ['Aang', 'Katara', 'Toph', 'Zuko'];
    const indiceAleatorio = Math.floor(Math.random() * personajes.length);
    const enemigoSeleccionado = personajes[indiceAleatorio];
    
    // Evitar que el enemigo sea el mismo que el personaje del jugador
    if (enemigoSeleccionado === personajeJugadorSeleccionado) {
        return seleccionarEnemigo();
    }
    
    console.log('Enemigo seleccionado:', enemigoSeleccionado);
    return enemigoSeleccionado;
}

// Evento para el botón de confirmar selección
btnConfirmar.addEventListener('click', () => {
    if (personajeJugadorSeleccionado) {
        alert(`¡Has confirmado a ${personajeJugadorSeleccionado}!`);
        btnCombate.disabled = false;
        btnConfirmar.disabled = true;
    } else {
        alert("Por favor, selecciona un personaje primero.");
    }
});

// Evento para el botón de combate
btnCombate.addEventListener('click', () => {
    if (personajeJugadorSeleccionado) {
        const enemigo = seleccionarEnemigo();
        alert(`¡Prepárate para el combate!\nTú: ${personajeJugadorSeleccionado}\nEnemigo: ${enemigo}`);
        console.log(`Iniciando combate: ${personajeJugadorSeleccionado} vs ${enemigo}`);
    } else {
        alert("Error: Debes seleccionar un personaje primero.");
    }
});

// Evento que se ejecuta cuando la página termina de cargar
window.addEventListener('load', () => {
    console.log("Página de selección de personaje cargada.");
    // Asegurarse de que los botones estén deshabilitados al inicio
    btnConfirmar.disabled = true;
    btnCombate.disabled = true;
});
