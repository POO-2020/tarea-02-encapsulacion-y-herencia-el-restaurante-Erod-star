export default class Direccion {
  /**
   *
   * @param {string} calle | Calle donde vive el cliente
   * @param {number} numeroExterior | Número exterior de la casa del cliente
   * @param {number} numeroInterior | Número interior de la cas del cliente
   * @param {string} colonia | Nombre de la colonia donde vive el cliente
   * @param {number} codigoPostal | Código postal del cliente
   * @param {string} ciudad | Nombre de la ciudad donde vive el cliente
   * @param {string} municipio | Nombre del municipio donde vive el cliente
   */
  constructor(
    calle,
    numeroExterior,
    colonia,
    codigoPostal,
    ciudad,
    municipio,
    numeroInterior = ""
  ) {
    this._calle = calle;
    this._numeroExterior = numeroExterior;
    this._numeroInterior = numeroInterior;
    this._colonia = colonia;
    this._codigoPostal = codigoPostal;
    this._ciudad = ciudad;
    this._municipio = municipio;
  }

  getFormatoCorto() {
    return `${this._calle} #${this._numeroExterior}`;
  }

  getFormatoExtendido() {
    return `${this._calle} #${this._numeroExterior}, ${"#" +
      this._numeroInterior +
      ","} Col. ${this._colonia},;
        Código Postal: ${this._codigoPostal}, ${this._ciudad}, ${this._municipio}`;
  }
}
