// src/utils/normalize_space.ts
var normalizeSpace = (value) => {
  return value.replaceAll(/\s+/g, " ").trim();
};
var normalize_space_default = normalizeSpace;

// src/abstract_invoice_data.ts
import { getParser, MIME_TYPE, nodeToXmlString } from "@nodecfdi/cfdi-core";
import { DiscoverExtractor } from "@nodecfdi/cfdi-expresiones";
var AbstractInvoiceData = class {
  _logo;
  _additionalFields;
  emisor() {
    return this._emisor;
  }
  receptor() {
    return this._receptor;
  }
  timbreFiscalDigital() {
    return this._timbreFiscalDigital;
  }
  qrUrl() {
    return this._qrUrl;
  }
  tfdSourceString() {
    return this._tfdSourceString;
  }
  logo() {
    return this._logo;
  }
  additionalFields() {
    return this._additionalFields;
  }
  buildTfdSource() {
    const tfd = this.timbreFiscalDigital();
    if (tfd.hasAttribute("Version")) {
      this.createTfdSourceString1_1();
    } else {
      this.createTfdSourceString1_0();
    }
  }
  buildUrlQr(node) {
    const rawString = nodeToXmlString(node, true);
    const document = getParser().parseFromString(rawString, MIME_TYPE.XML_TEXT);
    try {
      this._qrUrl = new DiscoverExtractor().extract(document);
    } catch {
    }
  }
  createTfdSourceString1_0() {
    const tfd = this.timbreFiscalDigital();
    let finalSource = "";
    finalSource = `${finalSource}|${normalize_space_default(tfd.getAttribute("version"))}`;
    finalSource = `${finalSource}|${normalize_space_default(tfd.getAttribute("UUID"))}`;
    finalSource = `${finalSource}|${normalize_space_default(tfd.getAttribute("FechaTimbrado"))}`;
    finalSource = `${finalSource}|${normalize_space_default(tfd.getAttribute("selloCFD"))}`;
    finalSource = `${finalSource}|${normalize_space_default(tfd.getAttribute("noCertificadoSAT"))}`;
    this._tfdSourceString = `|${finalSource}||`;
  }
  createTfdSourceString1_1() {
    const tfd = this.timbreFiscalDigital();
    let finalSource = "";
    finalSource = `${finalSource}|${normalize_space_default(tfd.getAttribute("Version"))}`;
    finalSource = `${finalSource}|${normalize_space_default(tfd.getAttribute("UUID"))}`;
    finalSource = `${finalSource}|${normalize_space_default(tfd.getAttribute("FechaTimbrado"))}`;
    finalSource = `${finalSource}|${normalize_space_default(tfd.getAttribute("RfcProvCertif"))}`;
    if (tfd.hasAttribute("Leyenda")) {
      finalSource = `${finalSource}|${normalize_space_default(tfd.getAttribute("Leyenda"))}`;
    }
    finalSource = `${finalSource}|${normalize_space_default(tfd.getAttribute("SelloCFD"))}`;
    finalSource = `${finalSource}|${normalize_space_default(tfd.getAttribute("NoCertificadoSAT"))}`;
    this._tfdSourceString = `|${finalSource}||`;
  }
  setLegendFooter(legendFooter) {
    this._legendFooter = legendFooter;
  }
  legendFooter() {
    return this._legendFooter;
  }
};

// src/cfdi_data.ts
var CfdiData = class extends AbstractInvoiceData {
  _comprobante;
  _address;
  constructor(comprobante, qrUrl, tfdSourceString, logo, address, additionalFields) {
    super();
    const emisor = comprobante.searchNode("cfdi:Emisor");
    if (!emisor) {
      throw new Error("El CFDI no contiene nodo emisor");
    }
    const receptor = comprobante.searchNode("cfdi:Receptor");
    if (!receptor) {
      throw new Error("El CFDI no contiene nodo receptor");
    }
    const timbreFiscalDigital = comprobante.searchNode("cfdi:Complemento", "tfd:TimbreFiscalDigital");
    if (!timbreFiscalDigital) {
      throw new Error("El CFDI no contiene complemento de timbre fiscal digital");
    }
    this._comprobante = comprobante;
    this._emisor = emisor;
    this._receptor = receptor;
    this._timbreFiscalDigital = timbreFiscalDigital;
    this._qrUrl = qrUrl ?? "";
    this._tfdSourceString = tfdSourceString ?? "";
    this._logo = logo;
    this._address = address;
    this._additionalFields = additionalFields;
    if (this._qrUrl.trim().length === 0) {
      this.buildUrlQr(this._comprobante);
    }
    if (this._tfdSourceString.trim().length === 0) {
      this.buildTfdSource();
    }
    this._legendFooter = "Este documento es una representaci\xF3n impresa de un Comprobante Fiscal Digital a trav\xE9s de Internet versi\xF3n {version}";
  }
  comprobante() {
    return this._comprobante;
  }
  address() {
    return this._address;
  }
};

// src/retenciones_data.ts
var RetencionesData = class extends AbstractInvoiceData {
  _retenciones;
  _periodo;
  _totales;
  constructor(retenciones, qrUrl, tfdSourceString, logo, additionalFields) {
    super();
    const emisor = retenciones.searchNode("retenciones:Emisor");
    if (!emisor) {
      throw new Error("La factura de retenciones no contiene nodo emisor");
    }
    const receptor = retenciones.searchNode("retenciones:Receptor");
    if (!receptor) {
      throw new Error("La factura de retenciones no contiene nodo receptor");
    }
    const periodo = retenciones.searchNode("retenciones:Periodo");
    if (!periodo) {
      throw new Error("La factura de retenciones no contiene nodo periodo");
    }
    const totales = retenciones.searchNode("retenciones:Totales");
    if (!totales) {
      throw new Error("La factura de retenciones no contiene nodo totales");
    }
    const timbreFiscalDigital = retenciones.searchNode("retenciones:Complemento", "tfd:TimbreFiscalDigital");
    if (!timbreFiscalDigital) {
      throw new Error("La factura de retenciones no contiene complemento de timbre fiscal digital");
    }
    this._retenciones = retenciones;
    this._emisor = emisor;
    this._receptor = receptor;
    this._periodo = periodo;
    this._totales = totales;
    this._timbreFiscalDigital = timbreFiscalDigital;
    this._qrUrl = qrUrl ?? "";
    this._tfdSourceString = tfdSourceString ?? "";
    this._logo = logo;
    this._additionalFields = additionalFields;
    if (this._qrUrl.trim().length === 0) {
      this.buildUrlQr(this._retenciones);
    }
    if (this._tfdSourceString.trim().length === 0) {
      this.buildTfdSource();
    }
    this._legendFooter = "Este documento es una representaci\xF3n impresa de un Comprobante Fiscal Digital por Internet que ampara Retenciones e Informaci\xF3n de Pagos versi\xF3n {version}";
  }
  retenciones() {
    return this._retenciones;
  }
  periodo() {
    return this._periodo;
  }
  totales() {
    return this._totales;
  }
};

// src/utils/break_characters.ts
var breakCharacters = (raw, separator = "\u200B") => {
  return [...new Intl.Segmenter().segment(raw)].map((segment) => segment.segment).join(separator);
};
var break_characters_default = breakCharacters;

// src/utils/currency.ts
var getGroupToCurrency = (rawGroup) => {
  let group = rawGroup;
  const basics = [
    "cero",
    "un",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
    "diez",
    "once",
    "doce",
    "trece",
    "catorce",
    "quince"
  ];
  const teens = ["", "dieci", "veinti", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
  const hundreds = [
    "",
    "ciento",
    "doscientos",
    "trescientos",
    "cuatrocientos",
    "quinientos",
    "seiscientos",
    "setecientos",
    "ochocientos",
    "novecientos"
  ];
  let temporalCurrency = "";
  if (group.length === 3) {
    switch (Number.parseInt(group, 10)) {
      case 100: {
        return "cien ";
      }
      case 0: {
        return "";
      }
      default: {
        temporalCurrency += `${hundreds[Number.parseInt(group[0], 10)]} `;
      }
    }
    group = group.slice(1, 3);
  }
  if (Number.parseInt(group, 10) <= 15) {
    if (group === "00") {
      return temporalCurrency;
    }
    temporalCurrency += `${basics[Number.parseInt(group, 10)]} `;
  } else {
    const zeroAtTheEnd = group[1] === "0";
    if (Number.parseInt(group, 10) === 20) {
      return `${temporalCurrency}veinte `;
    }
    temporalCurrency += `${teens[Number.parseInt(group[0], 10)] + (Number.parseInt(group[0], 10) >= 3 && !zeroAtTheEnd ? " y " : "") + (zeroAtTheEnd ? "" : basics[Number.parseInt(group[1], 10)])} `;
  }
  return temporalCurrency;
};
var evaluateThousandsOfMillions = (integers, numberToCurrency) => {
  const group = integers.slice(0, Math.max(0, integers.length - 9));
  let fixedNumberToCurrency = numberToCurrency;
  switch (Number.parseInt(group, 10)) {
    /* istanbul ignore next */
    case 0: {
      break;
    }
    case 1: {
      fixedNumberToCurrency += "mil ";
      break;
    }
    default: {
      fixedNumberToCurrency += `${getGroupToCurrency(group)}mil `;
    }
  }
  return {
    numberToCurrency: fixedNumberToCurrency,
    integers: integers.slice(-9)
  };
};
var evaluateMillions = (integers, numberToCurrency, thousandsOfMillions) => {
  let fixedNumberToCurrency = numberToCurrency;
  const group = integers.slice(0, Math.max(0, integers.length - 6));
  fixedNumberToCurrency += getGroupToCurrency(group);
  fixedNumberToCurrency += !thousandsOfMillions && Number.parseInt(group, 10) === 1 ? "mill\xF3n " : "millones ";
  return {
    numberToCurrency: fixedNumberToCurrency,
    integers: integers.slice(-6)
  };
};
var toCurrency = (initial, moneda = "MXN") => {
  const number = initial.toFixed(2);
  let integers = number.slice(0, Math.max(0, number.indexOf(".")));
  const decimals = number.slice(number.indexOf(".") + 1);
  const monedaName = moneda === "MXN" ? "M.N." : moneda;
  let numberToCurrency = "";
  let noThousands = false;
  let noHundreds = false;
  let thousandsOfMillions = false;
  if (integers.length > 12) {
    throw new Error("El n\xFAmero es demasiado grande.");
  }
  if (integers.length === 12 || integers.length === 11 || integers.length === 10) {
    thousandsOfMillions = true;
    const result = evaluateThousandsOfMillions(integers, numberToCurrency);
    integers = result.integers;
    numberToCurrency = result.numberToCurrency;
  }
  if (integers.length === 9 || integers.length === 8 || integers.length === 7) {
    const result = evaluateMillions(integers, numberToCurrency, thousandsOfMillions);
    integers = result.integers;
    numberToCurrency = result.numberToCurrency;
  }
  if (integers.length === 6 || integers.length === 5 || integers.length === 4) {
    const group = integers.slice(0, Math.max(0, integers.length - 3));
    noThousands = Number.parseInt(group, 10) === 0;
    switch (Number.parseInt(group, 10)) {
      case 0: {
        break;
      }
      case 1: {
        numberToCurrency += "mil ";
        break;
      }
      default: {
        numberToCurrency += `${getGroupToCurrency(group)}mil `;
      }
    }
    integers = integers.slice(-3);
  }
  noHundreds = Number.parseInt(integers, 10) === 0;
  numberToCurrency += getGroupToCurrency(integers);
  numberToCurrency += `${(noThousands && noHundreds ? "de " : "") + (numberToCurrency === "un " ? "peso " : "pesos ") + decimals}/100 ${monedaName}`;
  return numberToCurrency.toUpperCase();
};
var toNumber = (currency) => {
  let fixedCurrency = currency;
  if (typeof fixedCurrency === "string") {
    fixedCurrency = Number(fixedCurrency);
  }
  return Number.isNaN(fixedCurrency) ? 0 : fixedCurrency;
};
var formatCurrency = (currency, currencyDisplay = "symbol") => {
  const number = toNumber(currency);
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay
  }).format(number).replace("USD", "").trim();
};

export {
  normalize_space_default,
  AbstractInvoiceData,
  CfdiData,
  RetencionesData,
  break_characters_default,
  toCurrency,
  toNumber,
  formatCurrency
};
