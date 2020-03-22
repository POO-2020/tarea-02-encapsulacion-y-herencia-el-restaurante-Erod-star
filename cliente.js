import Direccion from ".//direccion.js";

export default class Cliente {
    /**
     * 
     * @param {string} nombre | Nombre del cliente
     * @param {Direccion} direccion | Dirección del cliente
     * @param {number} telefono | Teléfono del cliente
     */
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    getPerfil() {
        return `${this._nombre}, 
        \n${this._direccion.getFormatoCorto()}, 
        \nTeléfono: ${this._telefono}`;
    }
}
