import { productos } from "./modules/productos.js";
import { manejarRegistro } from "./modules/registro.js";
import { manejarLogin } from './modules/login.js';
import { actualizarNavbar, cerrarSesion } from "./modules/sesion.js";

manejarLogin();


document.addEventListener("DOMContentLoaded", manejarRegistro);
document.getElementById('btnCerrarSesion').addEventListener('click', cerrarSesion);


const botonBuscar = document.getElementById("botonBuscar");
const inputBuscador = document.getElementById("buscador");

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