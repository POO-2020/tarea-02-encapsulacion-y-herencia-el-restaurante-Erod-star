import Precio from "./precio.js";

export default class Producto {
  /**
   *
   * @param {string} nombre | Nombre del producto a comprar
   * @param {Precio} precio | Valor del producto a comprar
   */
  constructor(nombre, precio) {
    this._nombre = nombre;
    this._precio = precio;
  }

  getDescription() {
    return `${this._nombre} ${"$" + new Intl.NumberFormat("en-US").format(this._precio)}`;
  }
}
