import Precio from ".//precio.js";
import Producto from ".//producto.js";

export default class ElementoPedido {
  /**
   *
   * @param {Producto} producto | Nombre del producto a comprar
   * @param {number} cantidad | Cantidad del producto a comprar
   */
  constructor(producto, cantidad) {
    this._producto = producto;
    this._cantidad = cantidad;
  }

  getDescripcion() {
    let x = this._cantidad * this._producto._precio._valor;
    return `${this._cantidad} X  ${this._producto._nombre}, $${x}`;
  }
}
