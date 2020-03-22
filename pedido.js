import ElementoPedido from ".//elemento_pedido.js";
import Producto from ".//producto.js";
import Precio from ".//precio.js";
import Tiempo from ".//tiempo.js";
import Fecha from ".//fecha.js";
import Cliente from "./cliente.js";
import Direccion from "./direccion.js";

export default class Pedido {
  /**
   *
   * @param {Fecha} fecha | Fecha en que se realizo el pedido
   * @param {Tiempo} hora | Hora en la que se efectuó el pedido
   * @param {Cliente} cliente | Datos del cliente
   */
  constructor({ numeroPedido, fecha, hora, cliente }) {
    this._numeroPedido = numeroPedido;
    this._fecha = fecha;
    this._hora = hora;
    this._cliente = cliente;
    this._elementosPedidos = new Array();
  }

  getResumen() {
    return `${this._numeroPedido}, ${this._fecha.getFecha()} ${this._hora.getFormato12()} - ${this.getNumeroElementos()} elementos con ${this.getProductos()} productos - total: ${this.getCostoTotal()}  `
  }

  getNumeroPedido() {
    return this._numeroPedido;
  }

  esIgualA(pedido) {
    if (pedido.getNumeroPedido() === this._numeroPedido) {
      return true;
    }
    return false;
  }

  getNumeroElementos() {
    return this._elementosPedidos.length
  }

  getProductos() {
    let x = 0;
    this._elementosPedidos.forEach(elemento => {
      x = elemento._cantidad + x
    })

    return (x)
  }

  getCostoTotal() {
    let x = 0;
    this._elementosPedidos.forEach(elemento => {
      x = (elemento._cantidad * elemento._producto._precio._valor) + x
    });

    let z = new Precio(x)
    return z.getPrecio();
  }


  agregarElemento(elemento) {
    this._elementosPedidos.push(elemento);
  }

  listarElementos() {
    this._elementosPedidos.forEach((elemento, i) => {
      console.log(`${i} - ${elemento.getDescripcion()}`)
    });
  }

}

