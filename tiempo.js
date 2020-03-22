export default class Tiempo {
  /**
   *
   * @param {number} hora | Número de la hora en que se encuentra 1 - 12
   * @param {number} minutos | Número de minutos a los que se encuentra 0 - 59
   * @param {string} periodo | El periodo en el que se encuentra (AM ó PM)
   */
  constructor(hora, minutos, periodo = "") {
    this._hora = hora;
    this._minutos = minutos;
    this._periodo = periodo;
    this._horaFormato24 = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      "00"
    ];
  }

  getFormato12() {
    if (this._hora > 12) {
      return "El valor de la hora no es correcto, ingresa un número del 1 al 12";
    } else if (this._minutos > 59) {
      return "El valor de minutos agregado es incorrecto, ingresa un número del 0 al 59";
    } else {
      if (this._periodo == "AM" || this._periodo == "am") {
        return `${this._hora}:${this._minutos} ${this._periodo}`;
      } else {
        return `${this._hora}:${this._minutos} ${this._periodo}`;
      }
    }
  }

  getFormato24() {
    if (this._hora > 12) {
      return "El valor de la hora no es correcto, ingresa un número del 1 al 12";
    } else if (this._minutos > 59) {
      return "El valor de minutos agregado es incorrecto, ingresa un número del 0 al 59";
    } else {
      if (this._periodo == "AM" || this._periodo == "am") {
        return `${this._horaFormato24[this._hora]}:${this._minutos}`;
      } else {
        return `${this._horaFormato24[this._hora + 12]}:${this._minutos}`;
      }
    }
  }
}
