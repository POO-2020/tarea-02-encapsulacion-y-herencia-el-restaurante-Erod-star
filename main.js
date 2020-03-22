import Pedido from "./pedido.js";
import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Cliente from "./cliente.js";
import Direccion from "./direccion.js";
import ElementoPedido from "./elemento_pedido.js";
import Producto from "./producto.js";
import Precio from "./precio.js";

export default class Main {
    constructor() {

        let datosPedido1 = {
            numeroPedido: 1,
            fecha: new Fecha(22, 1, 2001),
            hora: new Tiempo(5, 23, 'PM'),
            cliente: new Cliente(
                'Edson',
                new Direccion(
                    'Paseo de Azaleaz',
                    246,
                    'Jardines de Bugambilias',
                    28978,
                    'Colima',
                    'Villa de Alvarez'),
                3121135597)
        }

        this._pedido1 = new Pedido(datosPedido1);
    }

    agregarElementoPedido() {
        let elem1 = new ElementoPedido(new Producto('Pizza de  champiñones', new Precio(45.5)), 2);
        let elem2 = new ElementoPedido(new Producto('Doritos negros', new Precio(12.5)), 4);
        this._pedido1.agregarElemento(elem1);
        this._pedido1.agregarElemento(elem2);
        this._pedido1.listarElementos();
    }

    testPedido() {
        console.log(this._pedido1.getResumen());
    }
}

let app = new Main();
app.agregarElementoPedido();
app.testPedido();