/* import { productos } from "./modules/productos.js";

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

document.addEventListener("DOMContentLoaded", mostrarDetalle); */



// funciones para cargar el producto

import {Producto} from './productos.js';

//variable global para almacenar los datos
let datos = [];

// Capturo el cuerpo de la tabla
const cuerpoTabla = document.querySelector('#cuerpo-tabla');
// capturo modal desde bootstrap (via javascript)
const myModal = new bootstrap.Modal(document.getElementById('modalProducto'))

// 1- función para mostrar el modal 
window.mostrarModal = (id) => {

    document.querySelector('#formModal').setAttribute('data-id', id);

    const producto = datos.find((item) => item.id === id);  
    document.querySelector('#nombreModal').value = producto.nombre;
    document.querySelector('#opinionesModal').value = producto.opiniones;
    document.querySelector('#precioOriginalModal').value = producto.precioOriginal;
    document.querySelector('#precioDescModal').value = producto.precioDesProducto;
    document.querySelector('#descuentoProductoModal').value = producto.descuentoProducto;
    document.querySelector('#nombreVendedorModal').value = producto.vendedorProducto;
    document.querySelector('#cantidadVentasModal').value = producto.cantidadVentas;
    document.querySelector('#imagen1ProductoModal').value = producto.imagen1;
    document.querySelector('#imagen2ProductoModal').value = producto.imagen2;
    document.querySelector('#imagen3ProductoModal').value = producto.imagen3;
    myModal.show()
}

// 2- Función asincrónica para obtener los datos del archivo JSON
const iniciar = async () => {
  const datosCargados = await fetchData();
  datos = datosCargados || [];
  cargarTabla();
};

iniciar();

// 3- Función para cargar la tabla con los datos actuales
const cargarTabla = () => {
  cuerpoTabla.innerHTML = ''; // Limpia la tabla antes de renderizar

  datos.forEach((item) => {
    const fila = document.createElement('tr');

    // Celdas de contenido
    const nombre = document.createElement('td');
    nombre.textContent = item.nombre;

    const precio = document.createElement('td');
    precio.textContent = `$${item.precioOriginal}`;

    const descuento = document.createElement('td');
    descuento.textContent = item.descuentoProducto;

    const vendedor = document.createElement('td');
    vendedor.textContent = item.vendedorProducto;

    // Celda de botones
    const filaBtn = document.createElement('td');
    const contenedorBtn = document.createElement('div');
    contenedorBtn.className = 'd-flex gap-2';

    // Botón editar
    const btnEditar = document.createElement('button');
    btnEditar.className = 'btn btn-warning btn-sm me-2 btn-editar';
    btnEditar.setAttribute('type', 'button');
    const iconoEditar = document.createElement('i');
    iconoEditar.className = 'bi bi-pencil';
    btnEditar.appendChild(iconoEditar);
    btnEditar.addEventListener("click", () => mostrarModal(item.id));

    // Botón eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.className = 'btn btn-danger btn-sm me-2 btn-borrar';
    btnEliminar.setAttribute('type', 'button');
    const iconoEliminar = document.createElement('i');
    iconoEliminar.className = 'bi bi-trash';
    btnEliminar.appendChild(iconoEliminar);
    btnEliminar.addEventListener("click", () => borrarGift(item.id));

    // Ensamblo botones
    contenedorBtn.appendChild(btnEditar);
    contenedorBtn.appendChild(btnEliminar);
    filaBtn.appendChild(contenedorBtn);

    // Ensamblo fila completa
    fila.appendChild(nombre);
    fila.appendChild(precio);
    fila.appendChild(descuento);
    fila.appendChild(vendedor);
    fila.appendChild(filaBtn);

    cuerpoTabla.appendChild(fila);
  });
};


// 4- Función para agregar un nuevo gift
const agregarProducto = (event) => {
  event.preventDefault();

  const id = datos.at(-1)?.id + 1 || 1; // Si el array está vacío, arranca en 1

  // Capturo los valores del formulario
  const nombre= document.querySelector('#nombreAdmin').value;
  const opiniones = document.querySelector('#opinionesAdmin').value;
  const precioOriginal = document.querySelector('#precioOriginalAdmin').value;
  const precioDesProducto = document.querySelector('#precioDescAdmin').value;
  const descuentoProducto = document.querySelector('#descuentoProductoAdmin').value;
  const vendedorProducto = document.querySelector('#nombreVendedorAdmin').value;
  const cantidadVentas = document.querySelector('#cantidadVentasAdmin').value;
  const imagen1 = document.querySelector('#imagen1ProductoAdmin').value;
  const imagen2 = document.querySelector('#imagen2ProductoAdmin').value;
  const imagen3 = document.querySelector('#imagen3ProductoAdmin').value;

  // Agrego el nuevo objeto al array
  datos.push(new Producto(id, nombre, opiniones, precioOriginal, precioDesProducto, descuentoProducto, vendedorProducto, cantidadVentas, imagen1, imagen2, imagen3));

  // Limpio el formulario y actualizo la tabla
  document.querySelector('#formProducto').reset();

  localStorage.setItem("datos", JSON.stringify(datos));
  cargarTabla();
};














// Evento para agregar nuevos productos
document.querySelector('#formProducto').addEventListener('submit', agregarProducto);