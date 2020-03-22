export default class Precio {
  /**
   *
   * @param {number} valor | Valor del artículo
   */
  constructor(valor) {
    this._valor = valor;
  }

  getPrecio() {
    return "$" + new Intl.NumberFormat("en-US").format(this._valor);
  }
}
