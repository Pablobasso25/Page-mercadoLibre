
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


