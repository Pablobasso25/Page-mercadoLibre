import { productos } from "./modules/productos.js";

function obtenerIdDesdeURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"));
}

function mostrarDetalle() {
  const id = obtenerIdDesdeURL();
  const producto = productos.find(p => p.id === id);
  const contenedor = document.querySelector(".row");

  if (!producto || !contenedor) {
    contenedor.innerHTML = "<p class='text-danger'>Producto no encontrado.</p>";
    return;
  }

  contenedor.innerHTML = `
    <div class="col-12 col-lg-6">
      <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid rounded border">
    </div>
    <div class="col-12 col-lg-6 mt-4 mt-lg-0">
      <h2 class="fw-bold">${producto.nombre}</h2>
      <h3 class="text-success fw-bold">$${producto.precio.toLocaleString()}</h3>
      <span class="badge bg-success">10% OFF</span>
      <p class="text-success mt-3"><i class="bi bi-check-circle-fill"></i> Stock disponible</p>
      <div class="d-grid gap-2 mb-4">
        <button class="btn btn-primary btn-lg">Comprar ahora</button>
        <button class="btn btn-outline-primary btn-lg">Agregar al carrito</button>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", mostrarDetalle);