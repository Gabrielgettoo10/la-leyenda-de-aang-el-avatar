// Variables globales
let personajeJugadorSeleccionado = null;

// Elementos del DOM
const seccionPersonajes = document.getElementById('personajesSeleccion');
const botonesPersonaje = document.querySelectorAll('.personaje'); // Si usaste <button>
// Si usaste <div class="personaje">: const botonesPersonaje = document.querySelectorAll('.personaje[role="button"]');
const btnConfirmar = document.getElementById('btnConfirmar');
const btnCombate = document.getElementById('btnCombate');

// Event Listeners para los personajes
botonesPersonaje.forEach(boton => {
  boton.addEventListener('click', () => {
    // Primero, quitar la clase 'seleccionado' de cualquier otro personaje
    botonesPersonaje.forEach(btn => btn.classList.remove('seleccionado'));
    // Luego, añadirla al clickeado
    boton.classList.add('seleccionado');

    personajeJugadorSeleccionado = boton.dataset.nombre; // Obtener nombre del data-attribute
    console.log("Personaje elegido:", personajeJugadorSeleccionado);
    btnConfirmar.disabled = false; // Habilitar botón de confirmar
    // Opcionalmente, podrías deshabilitar el botón de combate aquí si "Confirmar" es un paso intermedio
    // btnCombate.disabled = true;
  });

  // Para accesibilidad si usaste divs en lugar de botones:
  // boton.addEventListener('keydown', (event) => {
  //   if (event.key === 'Enter' || event.key === ' ') {
  //     event.preventDefault(); // Prevenir scroll con la barra espaciadora
  //     boton.click(); // Simular click
  //   }
  // });
});

// Event Listener para el botón Confirmar
btnConfirmar.addEventListener('click', () => {
  if (personajeJugadorSeleccionado) {
    alert(`Has confirmado a ${personajeJugadorSeleccionado}!`);
    // Aquí podrías, por ejemplo, mostrar al enemigo o más detalles del personaje
    btnCombate.disabled = false; // Habilitar botón de iniciar combate
    btnConfirmar.disabled = true; // Deshabilitar confirmar una vez hecho
    // Opcional: Deshabilitar la selección de personajes
    // botonesPersonaje.forEach(boton => boton.disabled = true);
  } else {
    alert("Por favor, selecciona un personaje primero.");
  }
});

// Event Listener para el botón Iniciar Combate
btnCombate.addEventListener('click', () => {
  if (personajeJugadorSeleccionado) {
    alert(`¡Combate iniciado con ${personajeJugadorSeleccionado}!`);
    // Aquí iría la lógica para pasar a la pantalla de combate
    // Por ejemplo: window.location.href = 'combate.html';
  } else {
    // Esto no debería pasar si el botón está bien deshabilitado
    alert("Error: Ningún personaje seleccionado para el combate.");
  }
});

// Inicialización (opcional, por si quieres un estado inicial específico)
window.addEventListener('load', () => {
  // Podrías poner aquí cualquier lógica que necesites al cargar la página
  console.log("Página de selección de personaje cargada.");
});

// Funciones que tenías (puedes adaptarlas o integrarlas)
// function seleccionarPersonajeJugador(nombre) { /* ... ya integrado arriba ... */ }
// function confirmarSeleccion() { /* ... ya integrado arriba ... */ }
// function iniciarCombate() { /* ... ya integrado arriba ... */ }