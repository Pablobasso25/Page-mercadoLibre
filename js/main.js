
// Importaciones necesarias
/* import { productos } from "./modules/productos.js"; */
import { manejarRegistro } from "./modules/registro.js";
import { manejarLogin } from './modules/login.js';
import { restaurarSesion, actualizarNavbar, cerrarSesion } from "./modules/sesion.js";

// Lógica principal que espera al DOM
document.addEventListener("DOMContentLoaded", () => {
  manejarLogin();
  restaurarSesion(); // esta ya actualiza el navbar si restaura

  // Si no se restauró nada, actualizamos igual
  if (sessionStorage.getItem('usuarioActivo')) {
    actualizarNavbar();
  }

  manejarRegistro();

  const botonCerrarSesion = document.getElementById('btnCerrarSesion');
  if (botonCerrarSesion) {
    botonCerrarSesion.addEventListener('click', cerrarSesion);
  }

  const botonBuscar = document.getElementById("botonBuscar");
  const inputBuscador = document.getElementById("buscador");

  if (botonBuscar && inputBuscador) {
    botonBuscar.addEventListener("click", () => {
      const termino = inputBuscador.value.trim().toLowerCase();

      const productoEncontrado = productos.find(p =>
        p.nombre.toLowerCase().includes(termino)
      );

      if (productoEncontrado) {
        window.location.href = `./pages/detalle.html?id=${productoEncontrado.id}`;
      } else {
        alert("No se encontró ningún producto con ese nombre.");
      }
    });
  }
});