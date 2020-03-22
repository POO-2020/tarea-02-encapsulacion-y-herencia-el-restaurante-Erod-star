export default class Fecha {
  /**
   *
   * @param {number} dia |Valor 1...32
   * @param {number} mes |Valor 1...12
   * @param {number} año |Año de la fecha
   */

  constructor(dia, mes, año) {
    this._fecha = new Date(año, mes - 1, dia);
    this._diaSemana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado"
    ];
    this._mes = [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic"
    ];
  }

  getAños() {
    let x = Date.now() - this._fecha;
    let z = 1000 * 60 * 60 * 24 * 365;
    let fechaActual = Math.trunc(x / z);
    return `${fechaActual}`;
  }

  getMeses() {
    // PREGUNTAR AL PROFE
    let x = Date.now() - this._fecha;
    let z = 1000 * 60 * 60 * 24 * 7 * 4;
    let fechaActual = Math.trunc(x / z);
    return `${fechaActual}`;
  }

  getSemanas() {
    let x = Date.now() - this._fecha;
    let z = 1000 * 60 * 60 * 24 * 7;
    let fechaActual = Math.trunc(x / z);
    return `${fechaActual}`;
  }

  getDias() {
    let x = Date.now() - this._fecha;
    let z = 1000 * 60 * 60 * 24;
    let fechaActual = Math.trunc(x / z);
    return `${fechaActual}`;
  }

  getFecha() {
    return `${this._fecha.getDate()}/${
      this._mes[this._fecha.getMonth()]
      }/${this._fecha.getFullYear()}`;
  }
  getDiaFecha() {
    return `${this._diaSemana[this._fecha.getDay()]}`;
  }
}
