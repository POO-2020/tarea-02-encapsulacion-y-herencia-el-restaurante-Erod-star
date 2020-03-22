import Pedido from "./pedido.js";
import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Cliente from "./cliente.js";
import Direccion from "./direccion.js";
import ElementoPedido from "./elemento_pedido.js";
import Producto from "./producto.js";
import Precio from "./precio.js";
import ClienteFrecuente from "./cliente_frecuente.js";
import Restaurante from "./restaurante.js";

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

        let datosPedido2 = {
            numeroPedido: 2,
            fecha: new Fecha(23, 5, 2019),
            hora: new Tiempo(1, 33, 'PM'),
            cliente: new Cliente(
                'Yolanda',
                new Direccion(
                    'Atlanta',
                    346,
                    'Hacienda del Carmen',
                    48373,
                    'Colima',
                    'Villa de Alvarez'),
                3121235532)
        }

        let datosPedido3 = {
            numeroPedido: 1,
            fecha: new Fecha(22, 1, 2001),
            hora: new Tiempo(5, 23, 'PM'),
            cliente: new Cliente(
                'Oswaldo',
                new Direccion(
                    'Paso de Reforma',
                    245,
                    'Jardines de las Lomas',
                    28935,
                    'Colima',
                    'Villa de Alvarez'),
                3121135597)
        }

        let datosPedido4 = {
            numeroPedido: 4,
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
        this._pedido2 = new Pedido(datosPedido2);
        this._pedido3 = new Pedido(datosPedido3);
        this._pedido4 = new Pedido(datosPedido4);


        let datosClienteFrecuente = {
            numeroCliente: 124,
            fechaRegistro: new Fecha(12, 3, 2020),
            nombre: 'Edson Saitama',
            direccion: new Direccion(
                'Vía Lactea',
                24,
                'Lomas del Cielo',
                38958,
                'Colima',
                'Villa de Alvarez'
            ),
            telefono: 3121145555
        }

        this._clienteFrecuente1 = new ClienteFrecuente(datosClienteFrecuente);

        let datosRestaurante = {
            nombre: 'D H',
            telefono: 3180112,
            direccion: 'Nicasio Carbajal #248'
        }

        this._restaurante = new Restaurante(datosRestaurante);
    }

    testClienteFrecuente() {
        console.log(this._clienteFrecuente1.getPerfil());
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

    testRestaurante() {
        console.log("------------------ Test Productos ------------------");

        let producto1 = new Producto('Pepsi', 20);
        let producto2 = new Producto('Pizza Individual', 50);
        let producto3 = new Producto('Doritos Negros', 13);

        this._restaurante.registrarProducto(producto1);
        this._restaurante.registrarProducto(producto2);
        this._restaurante.registrarProducto(producto3);

        this._restaurante.listarProductos();

        console.log("------------------ Test Pedidos ------------------");
        console.log(this._restaurante.registrarPedido(this._pedido1));
        console.log(this._restaurante.registrarPedido(this._pedido2));
        console.log(this._restaurante.registrarPedido(this._pedido3));

        this._restaurante.listarPedidos();

        // Profe, aquí traté de usar "null" en lugar de "undefined", pero al ponerlo me dejaba en "false" los demás 
        // pedidos, desconozco el porque pasa esto :/
        console.log(this._restaurante.buscarPedido(this._pedido2));
        console.log(this._restaurante.buscarPedido(this._pedido4));

        console.log(this._restaurante.modificarPedido(this._pedido1, this._pedido3));
        this._restaurante.listarPedidos();

        console.log(this._restaurante.eliminarPedido(this._pedido1));
        console.log(this._restaurante.eliminarPedido(this._pedido3));

        this._restaurante.listarPedidos();
    }
}

let app = new Main();
app.agregarElementoPedido();
app.testPedido();
app.testRestaurante();