// Lista simulada de productos
/* export const productos = [
  { id: 1, nombre: "Celular Samsung", precio: 120000, categoria: "Electronics", imagen: "../media/celular.jpg" },
  { id: 2, nombre: "Zapatillas Nike", precio: 85000, categoria: "Fashion", imagen: "../media/zapatillas.jpg" },
  { id: 3, nombre: "Notebook Lenovo", precio: 350000, categoria: "Computers", imagen: "../media/notebook.jpg" },
  { id: 4, nombre: "Auriculares JBL", precio: 45000, categoria: "Audio", imagen: "../media/auriculares.jpg" }
];
 */

/* export function renderizarProductos(lista, contenedor) {
  contenedor.innerHTML = "";

  lista.forEach(prod => {
    const card = document.createElement("div");
    card.className = "producto-card bg-white col-6 col-md-4 col-lg-3 p-3";

    const img = document.createElement("img");
    img.src = prod.imagen;
    img.alt = prod.nombre;
    img.className = "img-fluid mb-2";

    const nombre = document.createElement("h5");
    nombre.textContent = prod.nombre;

    const precio = document.createElement("p");
    precio.textContent = `$${prod.precio.toLocaleString()}`;
    precio.className = "text-success fw-bold";

    const boton = document.createElement("button");
    boton.textContent = "Ver más";
    boton.className = "btn btn-outline-primary w-100";

    boton.addEventListener("click", () => {
    window.location.href = `./pages/detalle.html?id=${prod.id}`;

    });



    card.append(img, nombre, precio, boton);
    contenedor.appendChild(card);
  });
} */

export class Producto {
  constructor (
    id,
    imagen1, 
    imagen2, 
    imagen3, 
    nombre, 
    opiniones, 
    precioOriginal,
    precioDesProducto,
    descuentoProducto,
    vendedorProducto,
    cantidadVentas
  ){

    this.id = id,
    this.imagen1 = imagen1,
    this.imagen2 = imagen2,
    this.imagen3 = imagen3,
    this.nombre = nombre,
    this.opiniones =opiniones,
    this.precioOriginal = precioOriginal,
    this.precioDesProducto = precioDesProducto,
    this.descuentoProducto =descuentoProducto,
    this.vendedorProducto =vendedorProducto,
    this.cantidadVentas =cantidadVentas
  }
}