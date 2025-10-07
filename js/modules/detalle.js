





// Este script se ejecuta en detallesDelProducto.html
// Su objetivo es mostrar dinámicamente los datos del producto en el DOM

// 1. Leemos los productos guardados en localStorage
const productos = JSON.parse(localStorage.getItem("datos")) || [];

// 2. Obtenemos el ID del producto desde la URL (ej: detallesDelProducto.html?id=3)
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id")) || productos.at(-1)?.id; // Si no hay ID, muestra el último

// 3. Buscamos el producto correspondiente
const producto = productos.find(p => p.id === id);

// 4. Si no se encuentra, mostramos un mensaje de error
if (!producto) {
  document.body.innerHTML = "<h2 class='text-center text-danger'>Producto no encontrado</h2>";
  throw new Error("Producto no encontrado");
}

// 5. Inyectamos los datos en el DOM usando los IDs definidos en el HTML
document.querySelector("#imagen1Producto").src = producto.imagen1;
document.querySelector("#imagen2Producto").src = producto.imagen2;
document.querySelector("#imagen3Producto").src = producto.imagen3;

document.querySelector("#nombreProducto").textContent = producto.nombre;
document.querySelector("#opinionesProducto").textContent = producto.opiniones;
document.querySelector("#precioOriginalProducto").textContent = `$${producto.precioOriginal}`;
document.querySelector("#precioDescProducto").textContent = `$${producto.precioDesProducto}`;
document.querySelector("#descuentoProducto").textContent = producto.descuentoProducto;
document.querySelector("#vendedorProducto").textContent = producto.vendedorProducto;
document.querySelector("#cantVentasProducto").textContent = producto.cantidadVentas;

// 6. fecha de entrega
document.querySelector("#entregaProducto").textContent = "15 y 20 de octubre";