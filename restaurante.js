import ElementoPedido from ".//elemento_pedido.js";
import Producto from ".//producto.js";
import Precio from ".//precio.js";
import Tiempo from ".//tiempo.js";
import Fecha from ".//fecha.js";
import Cliente from "./cliente.js";
import Direccion from "./direccion.js";

export default class Restaurante {
    /**
     * 
     * @param {string} nombre | Nombre del restaurante
     * @param {string} telefono | Teléfono del restaurante
     * @param {string} direccion |Dirección del restaurante
     */
    constructor(nombre, telefono, direccion) {
        this._nombre = nombre;
        this._telefono = telefono;
        this._direccion = direccion;
        this._productos = new Array();
        this._pedidos = new Array();
    }

    registrarProducto(producto) {
        this._productos.push(producto.getDescription());
    }

    listarProductos() {
        this._productos.forEach((producto, i) => {
            console.log(`${i} - ${producto}`)
        });
    }

    registrarPedido(pedido) {
        this._pedidos.push(pedido);
    }

    listarPedidos() {
        this._pedidos.forEach((pedido, i) => {
            console.log(`${i} - ${pedido.getResumen()}`)
        })
    }

    buscarPedido() {

    }

    eliminarPedido() {

    }

    modificarPedido() {

    }
}