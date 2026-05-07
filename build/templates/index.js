import {
  CfdiData,
  RetencionesData,
  break_characters_default,
  formatCurrency,
  toCurrency,
  toNumber
} from "../chunk-L4UGAOOX.js";

// templates/abstract_generic_translator.ts
var AbstractGenericTraslator = class {
  genericSpace(spaces = 1) {
    const result = Array.from({ length: spaces });
    return {
      text: result.join("\n")
    };
  }
};

// templates/generic_cfdi_translator.ts
import { XmlNodes as XmlNodes2 } from "@nodecfdi/cfdi-core";

// templates/complements/donat11_complement.ts
var useDonat11Complement = (donat11, currentContent, primaryColor, bgGrayColor) => {
  currentContent.push({
    table: {
      widths: ["*", "*", "*"],
      body: [
        [
          {
            text: "Donatarias",
            style: ["tableSubtitleHeader"],
            color: primaryColor,
            colSpan: 3
          },
          "",
          ""
        ],
        [
          {
            fillColor: bgGrayColor,
            text: [
              { text: "Version: ", color: primaryColor, bold: true },
              {
                text: donat11.getAttribute("version")
              }
            ]
          },
          {
            fillColor: bgGrayColor,
            text: [
              { text: "No. Autorizaci\xF3n: ", color: primaryColor, bold: true },
              {
                text: donat11.getAttribute("noAutorizacion")
              }
            ],
            alignment: "center"
          },
          {
            fillColor: bgGrayColor,
            text: [
              { text: "Fecha Autorizaci\xF3n: ", color: primaryColor, bold: true },
              { text: donat11.getAttribute("fechaAutorizacion") }
            ],
            alignment: "right"
          }
        ],
        [
          {
            fillColor: bgGrayColor,
            text: [{ text: "Leyenda: ", color: primaryColor, bold: true }, { text: donat11.getAttribute("leyenda") }],
            colSpan: 3
          },
          "",
          ""
        ],
        [
          { fillColor: bgGrayColor, text: "", border: [false, false, false, true] },
          { fillColor: bgGrayColor, text: "", border: [false, false, false, true] },
          { fillColor: bgGrayColor, text: "", border: [false, false, false, true] }
        ]
      ]
    },
    layout: "tableLayout"
  });
};
var donat11_complement_default = useDonat11Complement;

// src/utils/nomina_tipos_deducciones.ts
var nominaTiposDeducciones = {
  "001": "Seguridad social",
  "002": "ISR",
  "003": "Aportaciones a retiro, cesant\xEDa en edad avanzada y vejez.",
  "004": "Otros",
  "005": "Aportaciones a Fondo de vivienda",
  "006": "Descuento por incapacidad",
  "007": "Pensi\xF3n alimenticia",
  "008": "Renta",
  "009": "Pr\xE9stamos provenientes del Fondo Nacional de la Vivienda para los Trabajadores",
  "010": "Pago por cr\xE9dito de vivienda",
  "011": "Pago de abonos INFONACOT",
  "012": "Anticipo de salarios",
  "013": "Pagos hechos con exceso al trabajador",
  "014": "Errores",
  "015": "P\xE9rdidas",
  "016": "Aver\xEDas",
  "017": "Adquisici\xF3n de art\xEDculos producidos por la empresa o establecimiento",
  "018": "Cuotas para la constituci\xF3n y fomento de sociedades cooperativas y de cajas de ahorro",
  "019": "Cuotas sindicales",
  "020": "Ausencia (Ausentismo)",
  "021": "Cuotas obrero patronales",
  "022": "Impuestos Locales",
  "023": "Aportaciones voluntarias",
  "024": "Ajuste en Gratificaci\xF3n Anual (Aguinaldo) Gravado",
  "025": "Ajuste en Gratificaci\xF3n Anual (Aguinaldo) Exento",
  "026": "Ajuste en Participaci\xF3n de los Trabajadores en las Utilidades PTU Gravado",
  "027": "Ajuste en Participaci\xF3n de los Trabajadores en las Utilidades PTU Exento",
  "028": "Ajuste en Reembolso de Gastos M\xE9dicos Dentales y Hospitalarios Exento",
  "029": "Ajuste en Fondo de ahorro Exento",
  "030": "Ajuste en Caja de ahorro Exento",
  "031": "Ajuste en contribuciones a cargo del trabajador pagadas por el patr\xF3n Exento",
  "032": "Ajuste en Premios por puntualidad Gravado",
  "033": "Ajuste en Prima de Seguro de vida Exento",
  "034": "Ajuste en Seguro de Gastos M\xE9dicos Mayores Exento",
  "035": "Ajuste en Cuotas Sindicales Pagadas por el Patr\xF3n Exento",
  "036": "Ajuste en Subsidios por incapacidad Exento",
  "037": "Ajuste en Becas para trabajadores y/o hijos Exento",
  "038": "Ajuste en horas extra Exento",
  "039": "Ajuste en Prima dominical Exento",
  "040": "Ajuste en Prima vacacional Gravado",
  "041": "Ajuste en Prima vacacional Exento",
  "042": "Ajuste en Prima por antig\xFCedad Gravado",
  "043": "Ajuste en Pagos por separaci\xF3n Gravado",
  "044": "Ajuste en Pagos por separaci\xF3n Exento",
  "045": "Ajuste en Seguro de retiro Exento",
  "046": "Ajuste en Indemnizaciones Gravado",
  "047": "Ajuste en Indemnizaciones Exento",
  "048": "Ajuste en Reembolso por funeral Exento",
  "049": "Ajuste en Cuotas de seguridad social pagadas por el patr\xF3n Exento",
  "050": "Ajuste en Aportaciones al sistema para el retiro Exento",
  "051": "Ajuste en Aportaciones a fondo de vivienda Exento",
  "052": "Ajuste en Ayuda por renta Exento",
  "053": "Ajuste en Ayuda art\xEDculos escolares Exento",
  "054": "Ajuste en Ayuda anteojos Exento",
  "055": "Ajuste en Ayuda transporte Exento",
  "056": "Ajuste en Ayuda gastos de funeral Exento",
  "057": "Ajuste en Otros ingresos por salarios Gravado",
  "058": "Ajuste en Otros ingresos por salarios Exento",
  "059": "Ajuste en Jubilaciones, pensiones o haberes de retiro en una exhibici\xF3n Gravado",
  "060": "Ajuste en Jubilaciones, pensiones o haberes de retiro en parcialidades Gravado",
  "061": "Ajuste en Jubilaciones, pensiones o haberes de retiro en una exhibici\xF3n Exento.",
  "062": "Ajuste en Jubilaciones, pensiones o haberes de retiro en parcialidades Exento.",
  "063": "Ajuste en Subsidio para el empleo (efectivamente entregado al trabajador).",
  "064": "Ajuste en Ingresos en acciones o t\xEDtulos valor que representan bienes Gravado",
  "065": "Ajuste en Ingresos en acciones o t\xEDtulos valor que representan bienes Exento",
  "066": "Ajuste en ingresos asimilados a salarios Gravados",
  "067": "Ajuste en Bonos, Despensas",
  "068": "Ajuste en sueldos y salarios",
  "069": "Ajuste en jubilaciones, pensiones o haberes de retiro",
  "070": "Ajuste en provisi\xF3n de pagos de pensi\xF3n en parcialidades derivado de Jubilaciones, Pensiones o Haberes de Retiro",
  "071": "Ajuste en pagos por separaci\xF3n acumulable",
  "072": "Ajuste en pagos por separaci\xF3n no acumulable",
  "073": "Ajuste al salario bruto por ISR de pagos por separaci\xF3n",
  "074": "Ajuste al subsidio causado",
  "075": "Ajuste en Vi\xE1ticos gravados",
  "076": "Ajuste a pagos asimilados a salarios gravados",
  "077": "Ajuste en Vi\xE1ticos exentos",
  "078": "Ajuste en Ingresos por acciones o t\xEDtulos valor que representan bienes - acumulable",
  "079": "Ajuste en Ingresos por acciones o t\xEDtulos valor que representan bienes - no acumulable",
  "080": "Ajuste en Subsidio Efectivamente Entregado que no correspond\xEDa (Aplica solo cuando haya transcurrido el ejercicio fiscal).",
  "081": "Ajuste en Cuotas obrero patronales",
  "082": "Ajuste en impuestos locales",
  "083": "Ajuste a pagos asimilados a salarios exentos",
  "084": "Ajuste a Pago por Servicios Profesionales",
  "085": "Ajuste a Pago a Consejeros",
  "086": "Ajuste a Pago Actividades Empresariales",
  "087": "Ajuste a Pagos a Otros Asimilados",
  "088": "Ajuste a Pagos por Honorarios a Personas Morales",
  "089": "Ajuste a Pagos por Rendimientos a Miembros de Cooperativas, Sociedades y Asociaciones Civiles",
  "090": "Ajuste a Ingresos Asimilados a Salarios Exentos",
  "091": "Reintegro por error en pagos asimilados",
  "092": "Reintegro por error en sueldos y salarios",
  "093": "Reintegro por error en jubilaciones",
  "094": "Reintegro por error en pagos por separaci\xF3n",
  "095": "Devoluci\xF3n de descuentos efectuados para el cr\xE9dito de vivienda",
  "098": "Pago de PTU",
  "099": "Otros"
};
var findTipoDeduccionTexto = (id) => {
  return nominaTiposDeducciones[id] ?? "";
};

// templates/sections/nomina12_deducciones_content.ts
var nomina12DeduccionesContent = (deducciones, primaryColor, bgGrayColor) => {
  const deduccionList = deducciones.searchNodes("nomina12:Deduccion");
  const headerCells = ["Tipo de deducci\xF3n", "Clave", "Concepto", "Importe"].map((cell) => ({
    text: cell,
    style: "tableHeader",
    fillColor: primaryColor,
    margin: [0, 3, 0, 3]
  }));
  const rows = [headerCells];
  let totalDeducciones = 0;
  for (const deduccion of deduccionList) {
    const importe = toNumber(deduccion.getAttribute("Importe"));
    totalDeducciones += importe;
    rows.push([
      { text: findTipoDeduccionTexto(deduccion.getAttribute("TipoDeduccion")), fillColor: bgGrayColor },
      { text: deduccion.getAttribute("Clave"), alignment: "center", fillColor: bgGrayColor },
      { text: deduccion.getAttribute("Concepto"), fillColor: bgGrayColor },
      { text: formatCurrency(deduccion.getAttribute("Importe")), alignment: "right", fillColor: bgGrayColor }
    ]);
  }
  rows.push([
    {
      text: "Total Deducciones",
      colSpan: 3,
      alignment: "right",
      bold: true,
      color: primaryColor,
      border: [false, true, false, false]
    },
    {},
    {},
    {
      text: formatCurrency(totalDeducciones),
      alignment: "right",
      bold: true,
      border: [false, true, false, false]
    }
  ]);
  const deduccionesTable = {
    table: {
      widths: ["*", "8%", "30%", "15%"],
      body: rows,
      dontBreakRows: true,
      headerRows: 1
    },
    layout: "conceptosLayout"
  };
  const totalRows = [
    [
      { text: "Total otras deducciones", style: "tableHeader", fillColor: primaryColor, alignment: "center" },
      { text: "Total impuestos retenidos", style: "tableHeader", fillColor: primaryColor, alignment: "center" }
    ],
    [
      {
        text: formatCurrency(deducciones.getAttribute("TotalOtrasDeducciones")),
        alignment: "right",
        fillColor: bgGrayColor
      },
      {
        text: formatCurrency(deducciones.getAttribute("TotalImpuestosRetenidos")),
        alignment: "right",
        fillColor: bgGrayColor
      }
    ]
  ];
  const totalsTable = {
    table: {
      widths: ["50%", "50%"],
      body: totalRows,
      dontBreakRows: true
    },
    layout: "tableLayout"
  };
  return [
    {
      stack: [{ text: "Deducciones", style: ["tableSubtitleHeader"], color: primaryColor }, deduccionesTable],
      unbreakable: true
    },
    {
      stack: [
        {
          text: "Total deducciones",
          style: ["tableSubtitleHeader"],
          color: primaryColor,
          margin: [0, 4, 0, 0]
        },
        totalsTable
      ],
      unbreakable: true
    }
  ];
};
var nomina12_deducciones_content_default = nomina12DeduccionesContent;

// templates/sections/nomina12_general_data_content.ts
var labelValue = (label, value, primaryColor) => ({
  text: [{ text: `${label}: `, color: primaryColor, bold: true }, { text: value }]
});
var nomina12GeneralDataContent = (nomina, comprobante, catalogs, primaryColor, bgGrayColor) => {
  const nominaEmisor = nomina.searchNode("nomina12:Emisor");
  const leftRows = [];
  const rightRows = [];
  if (nomina.hasAttribute("TipoNomina")) {
    leftRows.push([
      labelValue(
        "Tipo n\xF3mina",
        catalogs.nominaTiposNominas.findAndReturnTexto(nomina.getAttribute("TipoNomina")),
        primaryColor
      )
    ]);
  }
  if (nomina.hasAttribute("FechaPago")) {
    leftRows.push([labelValue("Fecha pago", nomina.getAttribute("FechaPago"), primaryColor)]);
  }
  if (nomina.hasAttribute("FechaInicialPago")) {
    leftRows.push([labelValue("Fecha inicial de pago", nomina.getAttribute("FechaInicialPago"), primaryColor)]);
  }
  if (nomina.hasAttribute("FechaFinalPago")) {
    leftRows.push([labelValue("Fecha final de pago", nomina.getAttribute("FechaFinalPago"), primaryColor)]);
  }
  if (nomina.hasAttribute("NumDiasPagados")) {
    leftRows.push([labelValue("No. de d\xEDas pagados", nomina.getAttribute("NumDiasPagados"), primaryColor)]);
  }
  if (comprobante.hasAttribute("FormaPago")) {
    rightRows.push([
      labelValue(
        "Forma de pago",
        catalogs.cfdi40FormasPago.findAndReturnTexto(comprobante.getAttribute("FormaPago")),
        primaryColor
      )
    ]);
  }
  if (comprobante.hasAttribute("MetodoPago")) {
    rightRows.push([
      labelValue(
        "M\xE9todo de pago",
        catalogs.cfdi40MetodosPago.findAndReturnTexto(comprobante.getAttribute("MetodoPago")),
        primaryColor
      )
    ]);
  }
  if (comprobante.hasAttribute("Moneda")) {
    rightRows.push([labelValue("Moneda", comprobante.getAttribute("Moneda"), primaryColor)]);
  }
  if (nominaEmisor?.hasAttribute("RegistroPatronal")) {
    rightRows.push([labelValue("Registro patronal", nominaEmisor.getAttribute("RegistroPatronal"), primaryColor)]);
  }
  if (nominaEmisor?.hasAttribute("RfcPatronOrigen")) {
    rightRows.push([labelValue("RFC Patr\xF3n Origen", nominaEmisor.getAttribute("RfcPatronOrigen"), primaryColor)]);
  }
  if (leftRows.length === 0) {
    leftRows.push([{}]);
  }
  if (rightRows.length === 0) {
    rightRows.push([{}]);
  }
  return {
    table: {
      widths: ["49.5%", "*", "49.5%"],
      body: [
        [
          { text: "Datos generales n\xF3mina", style: ["tableSubtitleHeader"], color: primaryColor },
          "",
          { text: "Datos de pago", style: ["tableSubtitleHeader"], color: primaryColor }
        ],
        [
          {
            fillColor: bgGrayColor,
            table: { widths: ["*"], body: leftRows },
            layout: "tableLayout",
            border: [false, false, false, true]
          },
          "",
          {
            fillColor: bgGrayColor,
            table: { widths: ["*"], body: rightRows },
            layout: "tableLayout",
            border: [false, false, false, true]
          }
        ]
      ]
    },
    layout: "tableLayout"
  };
};
var nomina12_general_data_content_default = nomina12GeneralDataContent;

// templates/sections/nomina12_otros_pagos_content.ts
var nomina12OtrosPagosContent = (otrosPagos, catalogs, primaryColor, bgGrayColor) => {
  const otroPagoList = otrosPagos.searchNodes("nomina12:OtroPago");
  const headerCells = ["Tipo otro pago", "Clave", "Concepto", "Importe"].map((cell) => ({
    text: cell,
    style: "tableHeader",
    fillColor: primaryColor,
    margin: [0, 3, 0, 3]
  }));
  const rows = [headerCells];
  let totalOtrosPagos = 0;
  let subsidioCausado;
  const compensaciones = [];
  for (const otroPago of otroPagoList) {
    const importe = toNumber(otroPago.getAttribute("Importe"));
    totalOtrosPagos += importe;
    rows.push([
      {
        text: catalogs.nominaTiposOtrosPagos.findAndReturnTexto(otroPago.getAttribute("TipoOtroPago")),
        fillColor: bgGrayColor
      },
      { text: otroPago.getAttribute("Clave"), alignment: "center", fillColor: bgGrayColor },
      { text: otroPago.getAttribute("Concepto"), fillColor: bgGrayColor },
      { text: formatCurrency(otroPago.getAttribute("Importe")), alignment: "right", fillColor: bgGrayColor }
    ]);
    const subsidio = otroPago.searchNode("nomina12:SubsidioAlEmpleo");
    if (subsidio?.hasAttribute("SubsidioCausado")) {
      subsidioCausado = subsidio.getAttribute("SubsidioCausado");
    }
    const compensacion = otroPago.searchNode("nomina12:CompensacionSaldosAFavor");
    if (compensacion) {
      compensaciones.push({
        saldoAFavor: compensacion.getAttribute("SaldoAFavor"),
        anio: compensacion.getAttribute("A\xF1o"),
        remanente: compensacion.getAttribute("RemanenteSalFav")
      });
    }
  }
  rows.push([
    {
      text: "Total Otros Pagos",
      colSpan: 3,
      alignment: "right",
      bold: true,
      color: primaryColor,
      border: [false, true, false, false]
    },
    {},
    {},
    {
      text: formatCurrency(totalOtrosPagos),
      alignment: "right",
      bold: true,
      border: [false, true, false, false]
    }
  ]);
  const otrosPagosTable = {
    table: {
      widths: ["*", "8%", "30%", "15%"],
      body: rows,
      dontBreakRows: true,
      headerRows: 1
    },
    layout: "conceptosLayout"
  };
  const blocks = [
    {
      stack: [{ text: "Otros pagos", style: ["tableSubtitleHeader"], color: primaryColor }, otrosPagosTable],
      unbreakable: true
    }
  ];
  if (subsidioCausado !== void 0) {
    const subsidioTable = {
      table: {
        widths: ["*"],
        body: [
          [{ text: "Subsidio causado", style: "tableHeader", fillColor: primaryColor, alignment: "center" }],
          [{ text: formatCurrency(subsidioCausado), alignment: "right", fillColor: bgGrayColor }]
        ],
        dontBreakRows: true
      },
      layout: "tableLayout"
    };
    blocks.push({
      stack: [
        {
          text: "Subsidio al empleo",
          style: ["tableSubtitleHeader"],
          color: primaryColor,
          margin: [0, 4, 0, 0]
        },
        subsidioTable
      ],
      unbreakable: true
    });
  }
  if (compensaciones.length > 0) {
    const compensacionRows = [
      [
        { text: "Saldo a favor", style: "tableHeader", fillColor: primaryColor, alignment: "center" },
        { text: "A\xF1o", style: "tableHeader", fillColor: primaryColor, alignment: "center" },
        { text: "Remanente saldo a favor", style: "tableHeader", fillColor: primaryColor, alignment: "center" }
      ],
      ...compensaciones.map((c) => [
        { text: formatCurrency(c.saldoAFavor), alignment: "right", fillColor: bgGrayColor },
        { text: c.anio, alignment: "center", fillColor: bgGrayColor },
        { text: formatCurrency(c.remanente), alignment: "right", fillColor: bgGrayColor }
      ])
    ];
    const compensacionTable = {
      table: {
        widths: ["*", "*", "*"],
        body: compensacionRows,
        dontBreakRows: true
      },
      layout: "tableLayout"
    };
    blocks.push({
      stack: [
        {
          text: "Compensaci\xF3n saldos a favor",
          style: ["tableSubtitleHeader"],
          color: primaryColor,
          margin: [0, 4, 0, 0]
        },
        compensacionTable
      ],
      unbreakable: true
    });
  }
  return blocks;
};
var nomina12_otros_pagos_content_default = nomina12OtrosPagosContent;

// templates/sections/nomina12_percepciones_content.ts
var nomina12PercepcionesContent = (percepciones, catalogs, primaryColor, bgGrayColor) => {
  const percepcionList = percepciones.searchNodes("nomina12:Percepcion");
  const headerCells = ["Tipo de percepci\xF3n", "Clave", "Concepto", "Importe gravado", "Importe exento"].map((cell) => ({
    text: cell,
    style: "tableHeader",
    fillColor: primaryColor,
    margin: [0, 3, 0, 3]
  }));
  const rows = [headerCells];
  for (const percepcion of percepcionList) {
    rows.push([
      {
        text: catalogs.nominaTiposPercepciones.findAndReturnTexto(percepcion.getAttribute("TipoPercepcion")),
        fillColor: bgGrayColor
      },
      { text: percepcion.getAttribute("Clave"), alignment: "center", fillColor: bgGrayColor },
      { text: percepcion.getAttribute("Concepto"), fillColor: bgGrayColor },
      { text: formatCurrency(percepcion.getAttribute("ImporteGravado")), alignment: "right", fillColor: bgGrayColor },
      { text: formatCurrency(percepcion.getAttribute("ImporteExento")), alignment: "right", fillColor: bgGrayColor }
    ]);
  }
  rows.push([
    {
      text: "Total Percepciones",
      colSpan: 3,
      alignment: "right",
      bold: true,
      color: primaryColor,
      border: [false, true, false, false]
    },
    {},
    {},
    {
      text: formatCurrency(percepciones.getAttribute("TotalGravado")),
      alignment: "right",
      bold: true,
      border: [false, true, false, false]
    },
    {
      text: formatCurrency(percepciones.getAttribute("TotalExento")),
      alignment: "right",
      bold: true,
      border: [false, true, false, false]
    }
  ]);
  const percepcionesTable = {
    table: {
      widths: ["*", "8%", "30%", "15%", "15%"],
      body: rows,
      dontBreakRows: true,
      headerRows: 1
    },
    layout: "conceptosLayout"
  };
  const totalRows = [
    [
      { text: "Total sueldos", style: "tableHeader", fillColor: primaryColor, alignment: "center" },
      { text: "Total separaci\xF3n indemnizaci\xF3n", style: "tableHeader", fillColor: primaryColor, alignment: "center" },
      { text: "Total jubilaci\xF3n pensi\xF3n retiro", style: "tableHeader", fillColor: primaryColor, alignment: "center" },
      { text: "Total gravado", style: "tableHeader", fillColor: primaryColor, alignment: "center" },
      { text: "Total exento", style: "tableHeader", fillColor: primaryColor, alignment: "center" }
    ],
    [
      { text: formatCurrency(percepciones.getAttribute("TotalSueldos")), alignment: "right", fillColor: bgGrayColor },
      {
        text: formatCurrency(percepciones.getAttribute("TotalSeparacionIndemnizacion")),
        alignment: "right",
        fillColor: bgGrayColor
      },
      {
        text: formatCurrency(percepciones.getAttribute("TotalJubilacionPensionRetiro")),
        alignment: "right",
        fillColor: bgGrayColor
      },
      { text: formatCurrency(percepciones.getAttribute("TotalGravado")), alignment: "right", fillColor: bgGrayColor },
      { text: formatCurrency(percepciones.getAttribute("TotalExento")), alignment: "right", fillColor: bgGrayColor }
    ]
  ];
  const totalsTable = {
    table: {
      widths: ["20%", "20%", "20%", "20%", "20%"],
      body: totalRows,
      dontBreakRows: true
    },
    layout: "tableLayout"
  };
  return [
    {
      stack: [{ text: "Percepciones", style: ["tableSubtitleHeader"], color: primaryColor }, percepcionesTable],
      unbreakable: true
    },
    {
      stack: [
        {
          text: "Total percepciones",
          style: ["tableSubtitleHeader"],
          color: primaryColor,
          margin: [0, 4, 0, 0]
        },
        totalsTable
      ],
      unbreakable: true
    }
  ];
};
var nomina12_percepciones_content_default = nomina12PercepcionesContent;

// templates/sections/nomina12_totales_content.ts
var nomina12TotalesContent = (nomina, comprobante, primaryColor, bgGrayColor) => {
  const totalRows = [
    [
      { text: "Total percepciones", style: "tableHeader", fillColor: primaryColor, alignment: "center" },
      { text: "Total otros pagos", style: "tableHeader", fillColor: primaryColor, alignment: "center" },
      { text: "Total deducciones", style: "tableHeader", fillColor: primaryColor, alignment: "center" }
    ],
    [
      {
        text: formatCurrency(nomina.getAttribute("TotalPercepciones")),
        alignment: "right",
        fillColor: bgGrayColor
      },
      {
        text: formatCurrency(nomina.getAttribute("TotalOtrosPagos")),
        alignment: "right",
        fillColor: bgGrayColor
      },
      {
        text: formatCurrency(nomina.getAttribute("TotalDeducciones")),
        alignment: "right",
        fillColor: bgGrayColor
      }
    ]
  ];
  const totalsTable = {
    table: {
      widths: ["33%", "33%", "*"],
      body: totalRows,
      dontBreakRows: true
    },
    layout: "tableLayout"
  };
  const importeNeto = {
    table: {
      widths: ["*", 120],
      body: [
        [
          {
            text: "IMPORTE NETO",
            alignment: "right",
            bold: true,
            color: primaryColor,
            fontSize: 12,
            margin: [0, 6, 8, 6]
          },
          {
            text: formatCurrency(comprobante.getAttribute("Total")),
            alignment: "right",
            bold: true,
            color: "white",
            fillColor: primaryColor,
            fontSize: 14,
            margin: [8, 6, 8, 6]
          }
        ]
      ]
    },
    layout: "tableLayout"
  };
  return [
    {
      stack: [
        { text: "Totales N\xF3mina", style: ["tableSubtitleHeader"], color: primaryColor },
        totalsTable,
        importeNeto
      ],
      unbreakable: true
    }
  ];
};
var nomina12_totales_content_default = nomina12TotalesContent;

// templates/complements/nomina12_complement.ts
var useNomina12GeneralData = (nomina, comprobante, currentContent, catalogs, primaryColor, bgGrayColor) => {
  currentContent.push(nomina12_general_data_content_default(nomina, comprobante, catalogs, primaryColor, bgGrayColor), "\n");
};
var useNomina12Complement = (nomina, comprobante, currentContent, catalogs, primaryColor, bgGrayColor) => {
  const percepciones = nomina.searchNode("nomina12:Percepciones");
  if (percepciones) {
    currentContent.push(...nomina12_percepciones_content_default(percepciones, catalogs, primaryColor, bgGrayColor), "\n");
  }
  const deducciones = nomina.searchNode("nomina12:Deducciones");
  if (deducciones) {
    currentContent.push(...nomina12_deducciones_content_default(deducciones, primaryColor, bgGrayColor), "\n");
  }
  const otrosPagos = nomina.searchNode("nomina12:OtrosPagos");
  if (otrosPagos) {
    currentContent.push(...nomina12_otros_pagos_content_default(otrosPagos, catalogs, primaryColor, bgGrayColor), "\n");
  }
  currentContent.push(...nomina12_totales_content_default(nomina, comprobante, primaryColor, bgGrayColor), "\n");
};
var nomina12_complement_default = useNomina12Complement;

// templates/complements/pago10_complement.ts
var fillDoctoRelacionados = (doctoRelacionados, primaryColor) => {
  const rowsDoctoRelacionados = [
    [
      {
        text: "Documentos Relacionados",
        colSpan: 8,
        style: ["tableSubtitleHeader"],
        color: primaryColor
      },
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  ];
  const headerCells = [
    "UUID",
    "M\xE9todo de Pago",
    "Moneda",
    "Tipo de Cambio",
    "Num. Parcialidad",
    "Importe Saldo Anterior",
    "Importe Pagado",
    "Importe Saldo Insoluto"
  ];
  const styledHeaderCells = headerCells.map((cell) => ({
    text: cell,
    style: "tableHeader",
    fillColor: primaryColor,
    margin: [0, 3, 0, 3]
  }));
  rowsDoctoRelacionados.push(styledHeaderCells);
  for (const doctoRelacionado of doctoRelacionados) {
    const values = [
      doctoRelacionado.getAttribute("IdDocumento"),
      doctoRelacionado.getAttribute("MetodoDePagoDR"),
      doctoRelacionado.getAttribute("MonedaDR"),
      doctoRelacionado.getAttribute("TipoCambioDR"),
      doctoRelacionado.getAttribute("NumParcialidad"),
      formatCurrency(doctoRelacionado.getAttribute("ImpSaldoAnt")),
      formatCurrency(doctoRelacionado.getAttribute("ImpPagado")),
      formatCurrency(doctoRelacionado.getAttribute("ImpSaldoInsoluto"))
    ];
    rowsDoctoRelacionados.push(
      values.map((cell) => {
        return {
          style: "tableSmall",
          text: cell,
          alignment: "center",
          border: [false, false, false, true]
        };
      })
    );
  }
  return {
    table: {
      widths: ["30%", "auto", "10%", "10%", "10%", "auto", "auto", "auto"],
      body: rowsDoctoRelacionados,
      dontBreakRows: true
    },
    layout: "conceptosLayout"
  };
};
var usePago10Complement = (pago10, currentContent, catalogs, primaryColor, bgGrayColor) => {
  const pagos = pago10.searchNodes("pago10:Pago");
  if (pagos.length > 0) {
    for (const pago of pagos) {
      const doctoRelacionados = pago.searchNodes("pago10:DoctoRelacionado");
      currentContent.push(
        {
          table: {
            widths: ["10%", "*", "10%", "*"],
            body: [
              [
                {
                  text: "Informaci\xF3n de Pago",
                  style: ["tableSubtitleHeader"],
                  color: primaryColor,
                  colSpan: 4
                },
                "",
                "",
                ""
              ],
              [
                {
                  style: "tableSmall",
                  text: "Fecha:",
                  color: primaryColor,
                  fillColor: bgGrayColor
                },
                {
                  style: "tableSmall",
                  text: pago.getAttribute("FechaPago"),
                  fillColor: bgGrayColor
                },
                {
                  style: "tableSmall",
                  text: "Forma Pago:",
                  color: primaryColor,
                  fillColor: bgGrayColor
                },
                {
                  style: "tableSmall",
                  text: catalogs.cfdi40FormasPago.findAndReturnTexto(pago.getAttribute("FormaDePagoP")),
                  fillColor: bgGrayColor
                }
              ],
              [
                {
                  style: "tableSmall",
                  text: "Moneda:",
                  color: primaryColor,
                  fillColor: bgGrayColor
                },
                { style: "tableSmall", text: pago.getAttribute("MonedaP"), fillColor: bgGrayColor },
                {
                  style: "tableSmall",
                  text: "Monto:",
                  color: primaryColor,
                  fillColor: bgGrayColor
                },
                {
                  style: "tableSmall",
                  text: formatCurrency(pago.getAttribute("Monto")),
                  fillColor: bgGrayColor
                }
              ],
              ...pago.hasAttribute("TipoCambioP") ? [
                [
                  {
                    style: "tableSmall",
                    text: "Tipo de Cambio:",
                    color: primaryColor,
                    fillColor: bgGrayColor
                  },
                  {
                    style: "tableSmall",
                    text: pago.getAttribute("TipoCambioP"),
                    fillColor: bgGrayColor
                  },
                  { style: "tableSmall", text: "", fillColor: bgGrayColor },
                  { style: "tableSmall", text: "", fillColor: bgGrayColor }
                ]
              ] : []
            ],
            dontBreakRows: true
          },
          layout: "tableLayout"
        },
        "\n",
        fillDoctoRelacionados(doctoRelacionados, primaryColor),
        "\n",
        "\n"
      );
    }
  }
};
var pago10_complement_default = usePago10Complement;

// templates/complements/pago20_complement.ts
var generateRelatedDocsContent = (doctoRelacionados, primaryColor) => {
  const relatedDocsCells = doctoRelacionados.map((doc) => {
    return [
      doc.getAttribute("IdDocumento"),
      `${doc.getAttribute("Serie")} ${doc.getAttribute("Folio")}`,
      doc.getAttribute("MonedaDR"),
      doc.getAttribute("EquivalenciaDR"),
      doc.getAttribute("NumParcialidad"),
      { text: formatCurrency(doc.getAttribute("ImpSaldoAnt")), alignment: "right" },
      { text: formatCurrency(doc.getAttribute("ImpPagado")), alignment: "right" },
      { text: formatCurrency(doc.getAttribute("ImpSaldoInsoluto")), alignment: "right" }
    ];
  });
  relatedDocsCells.unshift(
    [
      "UUID",
      "Serie | Folio",
      "Moneda",
      "Tipo de Cambio",
      "Num. Parcialidad",
      "Importe Saldo Anterior",
      "Importe Pagado",
      "Importe Saldo Insoluto"
    ].map((cell) => {
      return {
        text: cell,
        border: [false, false, false, true]
      };
    })
  );
  relatedDocsCells.unshift([
    {
      text: "DOCUMENTOS RELACIONADOS",
      color: primaryColor,
      colSpan: 8,
      alignment: "center",
      border: [false, false, false, true]
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ]);
  return relatedDocsCells;
};
var fillTableTotales = (totales, primaryColor, bgGrayColor) => {
  return {
    table: {
      widths: ["*", "*", "*", "*", "*", "*"],
      body: [
        [{ text: "Totales", color: primaryColor, bold: true, colSpan: 6 }, "", "", "", "", ""],
        [
          {
            table: {
              widths: ["*", "*", "*", "*"],
              body: [
                [
                  {
                    text: "Monto Total Pagos:",
                    color: primaryColor
                  },
                  {
                    text: formatCurrency(totales.getAttribute("MontoTotalPagos")),
                    alignment: "center"
                  },
                  {
                    text: "Traslados Base IVA Exento:",
                    color: primaryColor
                  },
                  {
                    text: formatCurrency(totales.getAttribute("TotalTrasladosBaseIVAExento")),
                    alignment: "center"
                  }
                ]
              ],
              dontBreakRows: true
            },
            layout: "tableLayout",
            colSpan: 6,
            fillColor: bgGrayColor
          },
          "",
          "",
          "",
          "",
          ""
        ],
        [
          {
            text: "Traslados Base IVA 16:",
            color: primaryColor,
            fillColor: bgGrayColor
          },
          {
            text: formatCurrency(totales.getAttribute("TotalTrasladosBaseIVA16")),
            alignment: "center",
            fillColor: bgGrayColor
          },
          {
            text: "Traslados Base IVA 8:",
            color: primaryColor,
            fillColor: bgGrayColor
          },
          {
            text: formatCurrency(totales.getAttribute("TotalTrasladosBaseIVA8")),
            alignment: "center",
            fillColor: bgGrayColor
          },
          {
            text: "Traslados Base IVA 0:",
            color: primaryColor,
            fillColor: bgGrayColor
          },
          {
            text: formatCurrency(totales.getAttribute("TotalTrasladosBaseIVA0")),
            alignment: "center",
            fillColor: bgGrayColor
          }
        ],
        [
          {
            text: "Traslados IVA 16:",
            color: primaryColor,
            fillColor: bgGrayColor
          },
          {
            text: formatCurrency(totales.getAttribute("TotalTrasladosImpuestoIVA16")),
            alignment: "center",
            fillColor: bgGrayColor
          },
          {
            text: "Traslados IVA 8",
            color: primaryColor,
            fillColor: bgGrayColor
          },
          {
            text: formatCurrency(totales.getAttribute("TotalTrasladosImpuestoIVA8")),
            alignment: "center",
            fillColor: bgGrayColor
          },
          {
            text: "Traslados IVA 0",
            color: primaryColor,
            fillColor: bgGrayColor
          },
          {
            text: formatCurrency(totales.getAttribute("TotalTrasladosImpuestoIVA0")),
            alignment: "center",
            fillColor: bgGrayColor
          }
        ],
        [
          {
            text: "Retenciones IVA",
            color: primaryColor,
            fillColor: bgGrayColor
          },
          {
            text: formatCurrency(totales.getAttribute("TotalRetencionesIVA")),
            alignment: "center",
            fillColor: bgGrayColor
          },
          {
            text: "Retenciones ISR",
            color: primaryColor,
            fillColor: bgGrayColor
          },
          {
            text: formatCurrency(totales.getAttribute("TotalRetencionesISR")),
            alignment: "center",
            fillColor: bgGrayColor
          },
          {
            text: "Retenciones IEPS",
            color: primaryColor,
            fillColor: bgGrayColor
          },
          {
            text: formatCurrency(totales.getAttribute("TotalRetencionesIEPS")),
            alignment: "center",
            fillColor: bgGrayColor
          }
        ]
      ],
      dontBreakRows: true
    },
    layout: "tableLayout",
    border: [false, false, false, true]
  };
};
var usePago20Complement = (pago20, currentContent, catalogs, primaryColor, bgGrayColor) => {
  const totales = pago20.searchNode("pago20:Totales");
  const pagos = pago20.searchNodes("pago20:Pago");
  if (pagos.length > 0 && totales !== void 0) {
    currentContent.push(
      {
        table: {
          widths: ["*"],
          body: [
            [
              {
                text: "Complemento pago",
                style: "tableSubtitleHeader",
                color: primaryColor,
                border: [false, true, false, false]
              }
            ],
            [
              {
                table: {
                  widths: ["*"],
                  body: pagos.flatMap((pago) => {
                    const doctoRelacionados = pago.searchNodes("pago20:DoctoRelacionado");
                    const tablePagosBody = [];
                    tablePagosBody.push(
                      [{ text: "", border: [false, true, false, false] }],
                      [
                        {
                          table: {
                            widths: ["12%", "16%", "12%", "*", "12%", "18%"],
                            body: [
                              [
                                { text: "Fecha pago:", color: primaryColor, alignment: "center" },
                                {
                                  text: pago.getAttribute("FechaPago"),
                                  alignment: "center"
                                },
                                {
                                  text: "Forma de pago:",
                                  color: primaryColor,
                                  alignment: "center"
                                },
                                {
                                  text: catalogs.cfdi40FormasPago.findAndReturnTexto(pago.getAttribute("FormaDePagoP")),
                                  alignment: "center"
                                },
                                { text: "Monto:", color: primaryColor, alignment: "center" },
                                {
                                  text: formatCurrency(pago.getAttribute("Monto")),
                                  alignment: "center"
                                }
                              ],
                              [
                                { text: "Moneda:", color: primaryColor, alignment: "center" },
                                { text: pago.getAttribute("MonedaP"), alignment: "center" },
                                { text: "Tipo cambio:", color: primaryColor, alignment: "center" },
                                { text: pago.getAttribute("TipoCambioP"), alignment: "center" },
                                {
                                  text: pago.hasAttribute("NumOperacion") ? "Num. Operaci\xF3n:" : "",
                                  color: primaryColor,
                                  alignment: "center"
                                },
                                {
                                  text: pago.hasAttribute("NumOperacion") ? pago.getAttribute("NumOperacion") : "",
                                  alignment: "center"
                                }
                              ],
                              ...pago.hasAttribute("NomBancoOrdExt") ? [
                                [
                                  {
                                    text: [
                                      { text: "Nombre Banco Ordenante: ", color: primaryColor },
                                      { text: pago.getAttribute("NomBancoOrdExt") }
                                    ],
                                    alignment: "center",
                                    colSpan: 6
                                  },
                                  "",
                                  "",
                                  "",
                                  "",
                                  ""
                                ]
                              ] : [],
                              ...pago.hasAttribute("TipoCadPago") ? [
                                [
                                  {
                                    table: {
                                      widths: ["*", "*"],
                                      body: [
                                        [
                                          {
                                            text: [
                                              {
                                                text: "Tipo cadena pago: ",
                                                color: primaryColor
                                              },
                                              {
                                                text: catalogs.pagosTiposCadenaPago.findAndReturnTexto(
                                                  pago.getAttribute("TipoCadPago")
                                                )
                                              }
                                            ]
                                          },
                                          {
                                            text: [
                                              { text: "Cadena pago", color: primaryColor },
                                              {
                                                text: break_characters_default(pago.getAttribute("CadPago"))
                                              }
                                            ]
                                          }
                                        ],
                                        [
                                          { text: "Certificado Pago", color: primaryColor },
                                          { text: "Sello Pago", color: primaryColor }
                                        ],
                                        [
                                          {
                                            text: break_characters_default(pago.getAttribute("CertPago"))
                                          },
                                          {
                                            text: break_characters_default(pago.getAttribute("SelloPago"))
                                          }
                                        ]
                                      ],
                                      dontBreaksRows: true
                                    },
                                    layout: "tableLayout",
                                    colSpan: 6
                                  },
                                  "",
                                  "",
                                  "",
                                  "",
                                  ""
                                ]
                              ] : [],
                              [
                                {
                                  style: "tableSmall",
                                  table: {
                                    widths: ["32%", "8%", "8%", "8%", "8%", "12%", "12%", "12%"],
                                    body: generateRelatedDocsContent(doctoRelacionados, primaryColor),
                                    dontBreakRows: true
                                  },
                                  layout: "conceptosLayout",
                                  fillColor: bgGrayColor,
                                  colSpan: 6
                                },
                                "",
                                "",
                                "",
                                "",
                                ""
                              ]
                            ]
                          },
                          layout: "tableLayout"
                        }
                      ],
                      [{ text: "", border: [false, false, false, true] }]
                    );
                    return tablePagosBody;
                  }),
                  dontBreakRows: true
                },
                layout: "conceptosLayout"
              }
            ],
            [fillTableTotales(totales, primaryColor, bgGrayColor)]
          ]
        },
        layout: "tableLayout"
      },
      "\n",
      "\n"
    );
  }
};
var pago20_complement_default = usePago20Complement;

// templates/sections/generic_cfdi_concepto_impuestos_content.ts
var generateImpuestosContentTable = (traslados, retenciones, catalogs, primaryColor, bgGrayColor) => {
  const impuestosTableBody = [];
  for (const traslado of traslados) {
    const baseCells = [];
    baseCells.push(
      { text: "Traslado:", color: primaryColor, bold: true },
      { text: catalogs.cfdi40Impuestos.findAndReturnTexto(traslado.getAttribute("Impuesto")) },
      { text: "Base:", color: primaryColor, bold: true },
      {
        text: formatCurrency(traslado.getAttribute("Base")),
        alignment: "right"
      }
    );
    const factor = traslado.getAttribute("TipoFactor");
    if (factor === "Exento") {
      baseCells.push({ text: "Factor:", color: primaryColor, bold: true }, { text: factor }, "", "");
    } else {
      const importe = traslado.getAttribute("Importe");
      baseCells.push(
        {
          text: "Tasa:",
          color: primaryColor,
          bold: true
        },
        {
          text: traslado.getAttribute("TasaOCuota")
        },
        {
          text: "Importe:",
          color: primaryColor,
          bold: true
        },
        {
          text: formatCurrency(importe === "" ? "0" : importe)
        }
      );
    }
    impuestosTableBody.push(baseCells);
  }
  for (const retencion of retenciones) {
    const baseCells = [];
    baseCells.push(
      { text: "Retenci\xF3n:", color: primaryColor, bold: true },
      {
        text: catalogs.cfdi40Impuestos.findAndReturnTexto(retencion.getAttribute("Impuesto"))
      },
      { text: "Base:", color: primaryColor, bold: true },
      {
        text: formatCurrency(retencion.getAttribute("Base")),
        alignment: "right"
      }
    );
    const factor = retencion.getAttribute("TipoFactor");
    if (factor === "Exento") {
      baseCells.push({ text: "Factor:", color: primaryColor, bold: true }, { text: factor }, "", "");
    } else {
      const importe = retencion.getAttribute("Importe");
      baseCells.push(
        {
          text: "Tasa:",
          color: primaryColor,
          bold: true
        },
        {
          text: retencion.getAttribute("TasaOCuota")
        },
        {
          text: "Importe:",
          color: primaryColor,
          bold: true
        },
        {
          text: formatCurrency(importe === "" ? "0" : importe)
        }
      );
      impuestosTableBody.push(baseCells);
    }
  }
  return {
    table: {
      widths: ["auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto"],
      body: impuestosTableBody
    },
    fillColor: bgGrayColor,
    layout: "conceptosLayout"
  };
};
var genericCfdiConceptoImpuestosContent = (concepto, catalogs, primaryColor, bgGrayColor) => {
  const impuestoConceptoTable = [];
  const predial = concepto.searchNode("cfdi:CuentaPredial");
  const codigoSat = concepto.getAttribute("ClaveProdServ");
  const objetoImp = concepto.getAttribute("ObjetoImp");
  const extraDetails = [
    "",
    {
      text: [
        { text: "Clave Producto/Servicio: ", color: primaryColor, bold: true },
        {
          text: codigoSat
        }
      ]
    },
    {
      text: objetoImp === "" ? "" : [
        { text: "Objeto Impuesto: ", color: primaryColor, bold: true },
        {
          text: catalogs.cfdi40ObjetosImpuestos.findAndReturnTexto(objetoImp)
        }
      ]
    },
    {
      text: predial === void 0 ? "" : [{ text: "Cuenta Predial: ", color: primaryColor, bold: true }, { text: predial.getAttribute("Numero") }]
    }
  ];
  impuestoConceptoTable.push(extraDetails);
  const traslados = concepto.searchNodes("cfdi:Impuestos", "cfdi:Traslados", "cfdi:Traslado");
  const retenciones = concepto.searchNodes("cfdi:Impuestos", "cfdi:Retenciones", "cfdi:Retencion");
  if (traslados.length > 0 || retenciones.length > 0) {
    impuestoConceptoTable.push([
      {
        ...generateImpuestosContentTable(traslados, retenciones, catalogs, primaryColor, bgGrayColor),
        colSpan: 4
      },
      "",
      "",
      ""
    ]);
  }
  return {
    table: {
      widths: ["*", "auto", "auto", "*"],
      body: impuestoConceptoTable
    },
    layout: "conceptosLayout"
  };
};
var generic_cfdi_concepto_impuestos_content_default = genericCfdiConceptoImpuestosContent;

// templates/sections/generic_cfdi_conceptos_contents.ts
var genericCfdiConceptosContent = (comprobante, catalogs, primaryColor, bgGrayColor) => {
  const conceptos = comprobante.searchNodes("cfdi:Conceptos", "cfdi:Concepto");
  const rowsConceptos = [];
  const headerCells = [
    "No. Identificaci\xF3n",
    "Clave Unidad",
    "Descripci\xF3n",
    "Valor Unitario",
    "Cantidad",
    { text: "Importe", alignment: "center" },
    "Descuento"
  ];
  const styledHeaderCells = headerCells.map((cell) => ({
    text: cell,
    style: "tableHeader",
    fillColor: primaryColor,
    margin: [0, 3, 0, 3]
  }));
  rowsConceptos.push(styledHeaderCells);
  for (const concepto of conceptos) {
    const id = concepto.getAttribute("NoIdentificacion");
    rowsConceptos.push([
      {
        table: {
          widths: ["11%", "10%", "*", "11%", "11%", "11%", "11%"],
          body: [
            [
              { text: id === "" ? "---" : id },
              { text: concepto.getAttribute("ClaveUnidad") },
              { text: concepto.getAttribute("Descripcion") },
              {
                text: formatCurrency(concepto.getAttribute("ValorUnitario")),
                alignment: "right"
              },
              { text: concepto.getAttribute("Cantidad"), alignment: "center" },
              { text: formatCurrency(concepto.getAttribute("Importe")), alignment: "right" },
              {
                text: formatCurrency(concepto.getAttribute("Descuento")),
                alignment: "right"
              }
            ],
            [
              {
                ...generic_cfdi_concepto_impuestos_content_default(concepto, catalogs, primaryColor, bgGrayColor),
                colSpan: 7
              }
            ]
          ]
        },
        layout: "conceptosLayout",
        colSpan: 7,
        border: [false, false, false, true]
      }
    ]);
  }
  return {
    table: {
      widths: ["11%", "10%", "*", "11%", "11%", "11%", "11%"],
      body: rowsConceptos,
      dontBreakRows: true,
      headerRows: 1
    },
    layout: "conceptosLayout"
  };
};
var generic_cfdi_conceptos_contents_default = genericCfdiConceptosContent;

// templates/sections/generic_cfdi_details_info_content.ts
var genericCfdiDetailsInfoContent = (comprobante, catalogs, primaryColor) => {
  const detailsInfo = [];
  const total = comprobante.getAttribute("Total");
  const moneda = comprobante.getAttribute("Moneda");
  detailsInfo.push([
    {
      text: ["Importe con letra: ", toCurrency(total === "" ? 0 : Number(total), moneda)],
      alignment: "center",
      colSpan: 4,
      style: ["tableSubtitleHeader"]
    },
    "",
    "",
    ""
  ]);
  const comprobanteInfo = [
    {
      text: [
        { text: "M\xE9todo de Pago: ", color: primaryColor, bold: true },
        {
          text: catalogs.cfdi40MetodosPago.findAndReturnEtiqueta(comprobante.getAttribute("MetodoPago"))
        }
      ],
      alignment: "center"
    },
    {
      text: [
        { text: "Forma de Pago: ", color: primaryColor, bold: true },
        {
          text: catalogs.cfdi40FormasPago.findAndReturnEtiqueta(comprobante.getAttribute("FormaPago"))
        }
      ],
      alignment: "center"
    }
  ];
  if (moneda === "MXN") {
    comprobanteInfo.push(
      {
        text: [{ text: "Moneda: ", color: primaryColor, bold: true }, { text: moneda }],
        colSpan: 2,
        alignment: "center"
      },
      ""
    );
  } else {
    comprobanteInfo.push(
      {
        text: [{ text: "Moneda: ", color: primaryColor, bold: true }, { text: moneda }],
        alignment: "center"
      },
      {
        text: [
          { text: "Tipo cambio: ", color: primaryColor, bold: true },
          { text: comprobante.getAttribute("TipoCambio") }
        ],
        alignment: "center"
      }
    );
  }
  detailsInfo.push(comprobanteInfo);
  return {
    table: {
      widths: ["38%", "38%", "12%", "12%"],
      body: detailsInfo,
      dontBreakRows: true
    },
    layout: "tableLayout"
  };
};
var generic_cfdi_details_info_content_default = genericCfdiDetailsInfoContent;

// templates/sections/generic_cfdi_informacion_global_content.ts
var genericCfdiInformacionGlobalContent = (informacionGlobal, catalogs, primaryColor, bgGrayColor) => {
  return {
    table: {
      widths: ["*", "*", "*"],
      body: [
        [
          {
            text: "Informaci\xF3n Global",
            style: ["tableSubtitleHeader"],
            color: primaryColor,
            colSpan: 3
          },
          "",
          ""
        ],
        [
          {
            fillColor: bgGrayColor,
            text: [
              { text: "Periodicidad: ", color: primaryColor, bold: true },
              {
                text: catalogs.cfdi40Periodicidades.findAndReturnEtiqueta(
                  informacionGlobal.getAttribute("Periodicidad")
                )
              }
            ]
          },
          {
            fillColor: bgGrayColor,
            text: [
              { text: "Meses: ", color: primaryColor, bold: true },
              {
                text: catalogs.cfdi40Meses.findAndReturnEtiqueta(informacionGlobal.getAttribute("Meses"))
              }
            ]
          },
          {
            fillColor: bgGrayColor,
            text: [{ text: "A\xF1o: ", color: primaryColor, bold: true }, { text: informacionGlobal.getAttribute("A\xF1o") }]
          }
        ],
        [
          { fillColor: bgGrayColor, text: "", border: [false, false, false, true] },
          { fillColor: bgGrayColor, text: "", border: [false, false, false, true] },
          { fillColor: bgGrayColor, text: "", border: [false, false, false, true] }
        ]
      ]
    },
    layout: "tableLayout"
  };
};
var generic_cfdi_informacion_global_content_default = genericCfdiInformacionGlobalContent;

// templates/sections/generic_cfdi_relacionados_content.ts
import { XmlNodes } from "@nodecfdi/cfdi-core";
var genericCfdiRelacionadosContent = (relacionados, catalogs, primaryColor, bgGrayColor) => {
  const relatedInfoAndImport = [];
  const pushElementFromRelatedNode = (relatedNode) => {
    const uuidsArray = relatedNode.searchNodes("cfdi:CfdiRelacionado").map((relacionado) => {
      return relacionado.getAttribute("UUID");
    });
    const tipoRelacion = catalogs.cfdi40TiposRelaciones.findAndReturnEtiqueta(relatedNode.getAttribute("TipoRelacion"));
    relatedInfoAndImport.push({ tipoRelacion, uuids: uuidsArray });
  };
  if (relacionados instanceof XmlNodes) {
    for (const relacionadosNode of relacionados) {
      pushElementFromRelatedNode(relacionadosNode);
    }
  } else {
    pushElementFromRelatedNode(relacionados);
  }
  return {
    table: {
      widths: ["auto", "5%", "*"],
      body: [
        [
          {
            text: "CFDI relacionados",
            colSpan: 3,
            alignment: "left",
            color: primaryColor,
            style: "tableSubtitleHeader"
          },
          "",
          ""
        ],
        [
          {
            text: "Tipo de relaci\xF3n",
            alignment: "left",
            fillColor: bgGrayColor,
            color: primaryColor,
            bold: true
          },
          {
            text: "",
            fillColor: bgGrayColor
          },
          {
            text: "UUID",
            alignment: "left",
            fillColor: bgGrayColor,
            color: primaryColor,
            bold: true
          }
        ],
        ...relatedInfoAndImport.map((related) => {
          return [
            {
              text: related.tipoRelacion,
              alignment: "left",
              fillColor: bgGrayColor
            },
            {
              text: "",
              fillColor: bgGrayColor
            },
            {
              text: related.uuids.join(" | "),
              alignment: "left",
              fillColor: bgGrayColor
            }
          ];
        }),
        [
          {
            text: "",
            colSpan: 3,
            border: [false, true, false, false]
          },
          "",
          ""
        ]
      ]
    },
    layout: "tableLayout"
  };
};
var generic_cfdi_relacionados_content_default = genericCfdiRelacionadosContent;

// templates/complements/implocal10_complement.ts
var useImplocal10Complement = (impLocal10, primaryColor, bgGrayColor, tableTotales, totalesContent) => {
  const totalesSubContent = [];
  const totalRetencionesLocales = impLocal10.getAttribute("TotaldeRetenciones");
  const totalTrasladosLocales = impLocal10.getAttribute("TotaldeTraslados");
  if (toNumber(totalTrasladosLocales) > 0) {
    tableTotales.push([
      { text: "Traslados Locales", alignment: "right" },
      { text: "$", color: primaryColor, alignment: "center" },
      { text: formatCurrency(totalTrasladosLocales, "code"), alignment: "right" }
    ]);
  }
  if (toNumber(totalRetencionesLocales) > 0) {
    tableTotales.push([
      { text: "Retenciones Locales", alignment: "right" },
      { text: "$", color: primaryColor, alignment: "center" },
      { text: `- ${formatCurrency(totalRetencionesLocales, "code")}`, alignment: "right" }
    ]);
  }
  const trasladosLocales = impLocal10.searchNodes("implocal:TrasladosLocales");
  const retencionesLocales = impLocal10.searchNodes("implocal:RetencionesLocales");
  const retencionesLocalesTable = {
    table: {
      widths: ["40%", "20%", "auto"],
      body: [
        [
          {
            text: "Impuestos Locales Retenidos",
            style: ["tableSubtitleHeader"],
            color: primaryColor,
            colSpan: 3
          },
          "",
          ""
        ],
        ...retencionesLocales.map((retencionLocal) => {
          return [
            {
              text: retencionLocal.getAttribute("ImpLocRetenido"),
              fillColor: bgGrayColor
            },
            {
              text: [
                {
                  text: "Tasa: "
                },
                {
                  text: `${(Number(retencionLocal.getAttribute("TasadeRetencion")) * 1).toString()} %`
                }
              ],
              fillColor: bgGrayColor
            },
            {
              text: [{ text: "Importe: " }, { text: formatCurrency(retencionLocal.getAttribute("Importe")) }],
              alignment: "right",
              fillColor: bgGrayColor
            }
          ];
        })
      ],
      dontBreakRows: true
    },
    layout: "tableLayout"
  };
  const trasladosLocalesTable = {
    table: {
      widths: ["40%", "20%", "auto"],
      body: [
        [
          {
            text: "Impuestos Locales Trasladados",
            style: ["tableSubtitleHeader"],
            color: primaryColor,
            colSpan: 3
          },
          "",
          ""
        ],
        ...trasladosLocales.map((trasladoLocal) => {
          return [
            {
              text: trasladoLocal.getAttribute("ImpLocTrasladado"),
              fillColor: bgGrayColor
            },
            {
              text: [
                {
                  text: "Tasa: "
                },
                {
                  text: `${(Number(trasladoLocal.getAttribute("TasadeTraslado")) * 1).toString()} %`
                }
              ],
              fillColor: bgGrayColor
            },
            {
              text: [{ text: "Importe: " }, { text: formatCurrency(trasladoLocal.getAttribute("Importe")) }],
              alignment: "right",
              fillColor: bgGrayColor
            }
          ];
        })
      ],
      dontBreakRows: true
    },
    layout: "tableLayout"
  };
  if (trasladosLocales.length === 0 && retencionesLocales.length === 0) {
    totalesSubContent.push("", "");
  }
  if (trasladosLocales.length === 0 && retencionesLocales.length > 0) {
    totalesSubContent.push(
      {
        ...retencionesLocalesTable,
        colSpan: 2
      },
      ""
    );
  }
  if (trasladosLocales.length > 0 && retencionesLocales.length === 0) {
    totalesSubContent.push(
      {
        ...trasladosLocalesTable,
        colSpan: 2
      },
      ""
    );
  }
  if (trasladosLocales.length > 0 && retencionesLocales.length > 0) {
    totalesSubContent.push(trasladosLocalesTable, retencionesLocalesTable);
  }
  totalesSubContent.push({
    table: {
      widths: ["*", "10%", "auto"],
      body: tableTotales,
      dontBreakRows: true
    },
    layout: "tableLayout"
  });
  totalesContent.push(totalesSubContent);
};
var implocal10_complement_default = useImplocal10Complement;

// templates/sections/generic_cfdi_totales_content.ts
var fillCfdiImpuestos = (comprobante, catalogs, primaryColor, bgGrayColor, totalesSubContent) => {
  const elementImpuestos = "cfdi:Impuestos";
  const traslados = comprobante.searchNodes(elementImpuestos, "cfdi:Traslados", "cfdi:Traslado").filter((value) => value.getAttribute("TipoFactor") !== "Exento" && toNumber(value.getAttribute("TasaOCuota")) > 0);
  const retenciones = comprobante.searchNodes(elementImpuestos, "cfdi:Retenciones", "cfdi:Retencion");
  const retencionesTable = {
    table: {
      widths: ["40%", "auto"],
      body: [
        [
          {
            text: "Impuestos Retenidos",
            style: ["tableSubtitleHeader"],
            color: primaryColor,
            colSpan: 2
          },
          ""
        ],
        ...retenciones.map((retencion) => {
          return [
            {
              text: catalogs.cfdi40Impuestos.findAndReturnTexto(retencion.getAttribute("Impuesto")),
              fillColor: bgGrayColor
            },
            {
              text: [{ text: "Importe: " }, { text: formatCurrency(retencion.getAttribute("Importe")) }],
              alignment: "right",
              fillColor: bgGrayColor
            }
          ];
        })
      ],
      dontBreakRows: true
    },
    layout: "tableLayout"
  };
  const trasladosTable = {
    table: {
      widths: ["10%", "15%", "20%", "18%", "auto"],
      body: [
        [
          {
            text: "Impuestos Trasladados",
            style: ["tableSubtitleHeader"],
            color: primaryColor,
            colSpan: 5
          },
          "",
          "",
          "",
          ""
        ],
        ...traslados.map((traslado) => {
          const isTasa = traslado.getAttribute("TipoFactor") === "Tasa";
          const tasaOCuota = traslado.getAttribute("TasaOCuota");
          return [
            {
              text: catalogs.cfdi40Impuestos.findAndReturnTexto(traslado.getAttribute("Impuesto")),
              fillColor: bgGrayColor
            },
            {
              text: traslado.getAttribute("TipoFactor"),
              alignment: "center",
              fillColor: bgGrayColor
            },
            {
              text: isTasa ? `${(Number(tasaOCuota) * 100).toString()} %` : tasaOCuota,
              alignment: "center",
              fillColor: bgGrayColor
            },
            { text: "Importe: ", alignment: "left", fillColor: bgGrayColor },
            {
              text: formatCurrency(traslado.getAttribute("Importe")),
              alignment: "right",
              fillColor: bgGrayColor
            }
          ];
        })
      ],
      dontBreakRows: true
    },
    layout: "tableLayout"
  };
  if (traslados.length === 0 && retenciones.length === 0) {
    totalesSubContent.push("", "");
  }
  if (traslados.length === 0 && retenciones.length > 0) {
    totalesSubContent.push(
      {
        ...retencionesTable,
        colSpan: 2
      },
      ""
    );
  }
  if (traslados.length > 0 && retenciones.length === 0) {
    totalesSubContent.push(
      {
        ...trasladosTable,
        colSpan: 2
      },
      ""
    );
  }
  if (traslados.length > 0 && retenciones.length > 0) {
    totalesSubContent.push(trasladosTable, retencionesTable);
  }
};
var genericCfdiTotalesContent = (comprobante, catalogs, primaryColor, bgGrayColor) => {
  const elementImpuestos = "cfdi:Impuestos";
  const totalesContent = [];
  const totalImpuestosTrasladados = comprobante.searchAttribute(elementImpuestos, "TotalImpuestosTrasladados");
  const totalImpuestosRetenidos = comprobante.searchAttribute(elementImpuestos, "TotalImpuestosRetenidos");
  const totalesSubContent = [];
  fillCfdiImpuestos(comprobante, catalogs, primaryColor, bgGrayColor, totalesSubContent);
  const tableTotales = [
    [
      { text: "Subtotal", alignment: "right" },
      { text: "$", color: primaryColor, alignment: "center", bold: true },
      {
        text: formatCurrency(comprobante.getAttribute("SubTotal"), "code"),
        alignment: "right"
      }
    ],
    [
      { text: "Descuento", alignment: "right" },
      { text: "$", color: primaryColor, alignment: "center", bold: true },
      {
        text: `- ${formatCurrency(comprobante.getAttribute("Descuento"), "code")}`,
        alignment: "right"
      }
    ],
    [
      { text: "Traslados", alignment: "right" },
      { text: "$", color: primaryColor, alignment: "center", bold: true },
      { text: formatCurrency(totalImpuestosTrasladados, "code"), alignment: "right" }
    ],
    [
      { text: "Retenciones", alignment: "right" },
      { text: "$", color: primaryColor, alignment: "center", bold: true },
      { text: `- ${formatCurrency(totalImpuestosRetenidos, "code")}`, alignment: "right" }
    ]
  ];
  const impLocal10 = comprobante.searchNode("cfdi:Complemento", "implocal:ImpuestosLocales");
  if (impLocal10) {
    totalesSubContent.push("");
    totalesContent.push(totalesSubContent);
    implocal10_complement_default(impLocal10, primaryColor, bgGrayColor, tableTotales, totalesContent);
  } else {
    totalesSubContent.push({
      table: {
        widths: ["*", "10%", "auto"],
        body: tableTotales,
        dontBreakRows: true
      },
      layout: "tableLayout"
    });
    totalesContent.push(totalesSubContent);
  }
  totalesContent.push([
    "",
    {
      style: "tableHeader",
      text: `Total ${comprobante.getAttribute("Moneda")} ${formatCurrency(comprobante.getAttribute("Total"))}`,
      alignment: "right",
      margin: [2, 5, 2, 2],
      fillColor: primaryColor,
      fontSize: 14,
      colSpan: 2
    },
    ""
  ]);
  return {
    table: {
      widths: ["38%", "28%", "34%"],
      body: totalesContent,
      dontBreakRows: true
    },
    layout: "tableLayout"
  };
};
var generic_cfdi_totales_content_default = genericCfdiTotalesContent;

// templates/sections/generic_emisor_content.ts
var genericEmisorContent = (data, catalogs, primaryColor, bgGrayColor) => {
  const emisor = data.emisor();
  const additionalEmisorData = [];
  let razonSocial = "";
  let rfc = "";
  let numCertificado = "";
  let regimenFiscal = "";
  let curp;
  if (data instanceof CfdiData) {
    razonSocial = emisor.getAttribute("Nombre");
    rfc = emisor.getAttribute("Rfc");
    numCertificado = data.comprobante().getAttribute("NoCertificado");
    regimenFiscal = emisor.getAttribute("RegimenFiscal");
  } else if (data instanceof RetencionesData) {
    const retVersion = data.retenciones().getAttribute("Version");
    razonSocial = emisor.getAttribute("NomDenRazSocE");
    rfc = emisor.getAttribute(retVersion === "1.0" ? "RFCEmisor" : "RfcE");
    numCertificado = data.retenciones().getAttribute("NumCert");
    regimenFiscal = emisor.getAttribute("RegimenFiscalE");
    curp = emisor.getAttribute("CURPE");
  }
  if (regimenFiscal !== "") {
    additionalEmisorData.push([
      {
        text: [
          { text: "Regimen Fiscal: ", color: primaryColor, bold: true },
          {
            text: catalogs.cfdi40RegimenesFiscales.findAndReturnEtiqueta(regimenFiscal)
          }
        ]
      }
    ]);
  }
  additionalEmisorData.push([
    {
      text: [{ text: "N\xFAmero de certificado: ", color: primaryColor, bold: true }, { text: numCertificado }]
    }
  ]);
  if (curp && curp !== "") {
    additionalEmisorData.push([
      {
        text: [{ text: "CURP: ", color: primaryColor, bold: true }, { text: curp }]
      }
    ]);
  }
  return {
    table: {
      widths: ["49.5%", "*", "49.5%"],
      body: [
        [
          { text: "Datos del emisor", style: ["tableSubtitleHeader"], color: primaryColor },
          "",
          { text: "Datos adicionales emisor", style: ["tableSubtitleHeader"], color: primaryColor }
        ],
        [
          {
            fillColor: bgGrayColor,
            table: {
              widths: ["*"],
              body: [
                [{ text: razonSocial, style: ["subHeader"], color: primaryColor }],
                [{ text: [{ text: "RFC: ", color: primaryColor, bold: true }, { text: rfc }] }]
              ]
            },
            layout: "tableLayout",
            border: [false, false, false, true]
          },
          "",
          {
            fillColor: bgGrayColor,
            table: {
              widths: ["*"],
              body: additionalEmisorData
            },
            layout: "tableLayout",
            border: [false, false, false, true]
          }
        ]
      ]
    },
    layout: "tableLayout"
  };
};
var generic_emisor_content_default = genericEmisorContent;

// templates/sections/generic_footer.ts
var genericFooter = (currentPage, pageCount, data) => {
  const uuid = data.timbreFiscalDigital().getAttribute("UUID");
  let version = "";
  if (data instanceof CfdiData) {
    version = data.comprobante().getAttribute("Version");
  } else if (data instanceof RetencionesData) {
    version = data.retenciones().getAttribute("Version");
  }
  return [
    {
      text: data.legendFooter().replace("{version}", version),
      style: { fontSize: 7 },
      alignment: "center"
    },
    {
      text: `UUID: ${uuid} - P\xE1gina ${currentPage} de ${pageCount}`,
      style: { fontSize: 7 },
      alignment: "center"
    }
  ];
};
var generic_footer_default = genericFooter;

// templates/sections/generic_receptor_content.ts
var genericCfdiReceptorContent = (data, primaryColor, catalogs, receptorData, additionalReceptorData) => {
  const receptor = data.receptor();
  receptorData.push(
    [{ text: receptor.getAttribute("Nombre"), style: ["subHeader"], color: primaryColor }],
    [
      {
        text: [{ text: "RFC: ", color: primaryColor, bold: true }, { text: receptor.getAttribute("Rfc") }]
      }
    ]
  );
  if (receptor.hasAttribute("RegimenFiscalReceptor")) {
    receptorData.push([
      {
        text: [
          { text: "R\xE9gimen fiscal: ", color: primaryColor, bold: true },
          {
            text: catalogs.cfdi40RegimenesFiscales.findAndReturnEtiqueta(
              receptor.getAttribute("RegimenFiscalReceptor")
            )
          }
        ]
      }
    ]);
  }
  if (receptor.hasAttribute("DomicilioFiscalReceptor")) {
    receptorData.push([
      {
        text: [
          { text: "Domicilio fiscal: ", color: primaryColor, bold: true },
          {
            text: receptor.getAttribute("DomicilioFiscalReceptor")
          }
        ]
      }
    ]);
  }
  additionalReceptorData.push([
    {
      text: [
        { text: "Uso del CFDI: ", color: primaryColor, bold: true },
        {
          text: catalogs.cfdi40UsosCfdi.findAndReturnTexto(receptor.getAttribute("UsoCFDI"))
        }
      ]
    }
  ]);
  if (data.comprobante().hasAttribute("Exportacion")) {
    additionalReceptorData.push([
      {
        text: [
          { text: "Exportaci\xF3n: ", color: primaryColor, bold: true },
          {
            text: catalogs.cfdi40Exportaciones.findAndReturnTexto(data.comprobante().getAttribute("Exportacion"))
          }
        ]
      }
    ]);
  }
  if (receptor.hasAttribute("ResidenciaFiscal")) {
    additionalReceptorData.push([
      {
        text: [
          { text: "Residencia Fiscal: ", color: primaryColor, bold: true },
          {
            text: receptor.getAttribute("ResidenciaFiscal")
          }
        ]
      }
    ]);
  }
  if (receptor.hasAttribute("NumRegIdTrib")) {
    additionalReceptorData.push([
      {
        text: [
          { text: "N\xFAmero Id Trib.: ", color: primaryColor, bold: true },
          {
            text: receptor.getAttribute("NumRegIdTrib")
          }
        ]
      }
    ]);
  }
};
var genericRetencionesReceptorContent = (data, primaryColor, receptorData, additionalReceptorData) => {
  const receptor = data.receptor();
  const version = data.retenciones().getAttribute("Version");
  const nacionalidad = receptor.getAttribute(version === "1.0" ? "Nacionalidad" : "NacionalidadR");
  const nacional = receptor.searchNode("retenciones:Nacional");
  const extranjero = receptor.searchNode("retenciones:Extranjero");
  receptorData.push(
    [
      {
        text: (nacional ? nacional.getAttribute("NomDenRazSocR") : extranjero?.getAttribute("NomDenRazSocR")) ?? "",
        style: ["subHeader"],
        color: primaryColor
      }
    ],
    [
      {
        text: [{ text: "Nacionalidad: ", color: primaryColor, bold: true }, { text: nacionalidad }]
      }
    ]
  );
  if (nacional) {
    receptorData.push([
      {
        text: [
          { text: "RFC Receptor: ", color: primaryColor, bold: true },
          { text: nacional.getAttribute(version === "1.0" ? "RFCRecep" : "RfcR") }
        ]
      }
    ]);
  }
  if (extranjero?.hasAttribute(version === "1.0" ? "NumRegIdTrib" : "NumRegIdTribR")) {
    additionalReceptorData.push([
      {
        text: [
          { text: "N\xFAmero Id Trib.: ", color: primaryColor, bold: true },
          { text: extranjero.getAttribute(version === "1.0" ? "NumRegIdTrib" : "NumRegIdTribR") }
        ]
      }
    ]);
  }
  if (nacional?.hasAttribute("DomicilioFiscalR")) {
    additionalReceptorData.push([
      {
        text: [
          { text: "Domicilio Fiscal: ", color: primaryColor, bold: true },
          { text: nacional.getAttribute("DomicilioFiscalR") }
        ]
      }
    ]);
  }
  if (nacional?.hasAttribute(version === "1.0" ? "CURPR" : "CurpR")) {
    additionalReceptorData.push([
      {
        text: [
          { text: "CURP: ", color: primaryColor, bold: true },
          { text: nacional.getAttribute(version === "1.0" ? "CURPR" : "CurpR") }
        ]
      }
    ]);
  }
};
var genericReceptorContent = (data, catalogs, primaryColor, bgGrayColor) => {
  const receptorData = [];
  const additionalReceptorData = [];
  if (data instanceof CfdiData) {
    genericCfdiReceptorContent(data, primaryColor, catalogs, receptorData, additionalReceptorData);
  } else if (data instanceof RetencionesData) {
    genericRetencionesReceptorContent(data, primaryColor, receptorData, additionalReceptorData);
  }
  if (receptorData.length === 0) {
    receptorData.push([{}]);
  }
  if (additionalReceptorData.length === 0) {
    additionalReceptorData.push([{}]);
  }
  return {
    table: {
      widths: ["49.5%", "*", "49.5%"],
      body: [
        [
          { text: "Datos del receptor", style: ["tableSubtitleHeader"], color: primaryColor },
          "",
          {
            text: "Datos adicionales receptor",
            style: ["tableSubtitleHeader"],
            color: primaryColor
          }
        ],
        [
          {
            fillColor: bgGrayColor,
            table: {
              widths: ["*"],
              body: receptorData
            },
            layout: "tableLayout",
            border: [false, false, false, true]
          },
          "",
          {
            fillColor: bgGrayColor,
            table: {
              widths: ["*"],
              body: additionalReceptorData
            },
            layout: "tableLayout",
            border: [false, false, false, true]
          }
        ]
      ]
    },
    layout: "tableLayout"
  };
};
var generic_receptor_content_default = genericReceptorContent;

// templates/sections/generic_stamp_content.ts
var genericStampContent = (tfd, tfdSourceString, qrUrl, primaryColor) => {
  const isVersion11 = tfd.hasAttribute("Version");
  return {
    table: {
      widths: ["53%", "47%"],
      body: [
        [{ text: "", border: [false, false, false, true], colSpan: 2 }, ""],
        [
          {
            style: "tableSat",
            table: {
              widths: ["34.5%", "0.5%", "27%", "38%"],
              body: [
                [
                  { qr: qrUrl, fit: 98, rowSpan: 4 },
                  "",
                  {
                    text: "Folio fiscal:",
                    style: "tableSatSub",
                    color: primaryColor,
                    marginLeft: 1,
                    border: [false, false, false, true]
                  },
                  {
                    text: tfd.getAttribute("UUID"),
                    alignment: "right",
                    border: [false, false, false, true]
                  }
                ],
                [
                  "",
                  "",
                  {
                    text: "RFC Prov. de Certificaci\xF3n:",
                    style: "tableSatSub",
                    color: primaryColor,
                    marginLeft: 1,
                    border: [false, false, false, true]
                  },
                  {
                    text: tfd.getAttribute("RfcProvCertif"),
                    alignment: "right",
                    border: [false, false, false, true]
                  }
                ],
                [
                  "",
                  "",
                  {
                    text: "Cadena original del Timbre",
                    marginLeft: 1,
                    colSpan: 2,
                    style: "tableSatSub",
                    color: primaryColor
                  },
                  ""
                ],
                [
                  "",
                  "",
                  {
                    text: break_characters_default(tfdSourceString),
                    marginLeft: 1,
                    colSpan: 2
                  },
                  ""
                ]
              ]
            },
            layout: "stampLayout"
          },
          {
            style: "tableSat",
            table: {
              widths: ["49.5%", "1%", "49.5%"],
              body: [
                [
                  { text: "N\xFAmero de certificado SAT", style: "tableSatSub", color: primaryColor },
                  "",
                  {
                    text: "Fecha y hora de certificaci\xF3n",
                    style: "tableSatSub",
                    color: primaryColor
                  }
                ],
                [
                  {
                    text: tfd.getAttribute(isVersion11 ? "NoCertificadoSAT" : "noCertificadoSAT"),
                    border: [false, false, false, true]
                  },
                  "",
                  { text: tfd.getAttribute("FechaTimbrado"), border: [false, false, false, true] }
                ],
                [
                  { text: "Sello digital del SAT", style: "tableSatSub", color: primaryColor },
                  "",
                  { text: "Sello digital del CFDI", style: "tableSatSub", color: primaryColor }
                ],
                [
                  {
                    text: break_characters_default(tfd.getAttribute(isVersion11 ? "SelloSAT" : "selloSAT"))
                  },
                  "",
                  {
                    text: break_characters_default(tfd.getAttribute(isVersion11 ? "SelloCFD" : "selloCFD"))
                  }
                ]
              ]
            },
            layout: "stampLayout"
          }
        ]
      ],
      dontBreakRows: true
    },
    layout: "tableLayout"
  };
};
var generic_stamp_content_default = genericStampContent;

// templates/sections/generic_top_content.ts
var genericTopContent = (data, catalogs, primaryColor) => {
  const logo = data.logo();
  const tfd = data.timbreFiscalDigital();
  const contentWidths = [];
  const bodyContent = [];
  let title = "";
  let sectionLogoMargin = [0, 4, 0, 4];
  let sectionLogoFit = [150, 60];
  if (data instanceof CfdiData) {
    contentWidths.push("10%", "*", "auto", "3%", "42%");
    const comprobante = data.comprobante();
    const version = comprobante.getAttribute("Version");
    const tipoComprobante = comprobante.getAttribute("TipoDeComprobante");
    title = `CFDI ${version} de ${catalogs.cfdi40TiposComprobantes.findAndReturnTexto(tipoComprobante)}`;
    bodyContent.push(
      [
        { text: "Serie", style: ["tableHeader"], color: primaryColor },
        { text: "Folio", style: ["tableHeader"], color: primaryColor },
        { text: "Lugar de emisi\xF3n", style: ["tableHeader"], color: primaryColor },
        "",
        { text: "Fecha y hora de emisi\xF3n", style: ["tableHeader"], color: primaryColor }
      ],
      [
        { text: comprobante.getAttribute("Serie") },
        { text: comprobante.getAttribute("Folio") },
        { text: comprobante.getAttribute("LugarExpedicion") },
        "",
        { text: comprobante.getAttribute("Fecha") }
      ],
      [
        { text: "Folio fiscal", style: ["tableHeader"], color: primaryColor, colSpan: 3 },
        "",
        "",
        "",
        { text: "Fecha y hora de certificaci\xF3n", style: ["tableHeader"], color: primaryColor }
      ],
      [{ text: tfd.getAttribute("UUID"), colSpan: 3 }, "", "", "", { text: tfd.getAttribute("FechaTimbrado") }]
    );
  } else if (data instanceof RetencionesData) {
    contentWidths.push("*", "3%", "42%");
    sectionLogoMargin = [0, 10, 0, 10];
    sectionLogoFit = [150, 70];
    const retenciones = data.retenciones();
    const version = retenciones.getAttribute("Version");
    const cveRetencion = retenciones.getAttribute("CveRetenc");
    title = `CFDI Retenciones e Informaci\xF3n de Pagos ${version}`;
    bodyContent.push(
      [
        { text: "Folio Interno", style: ["tableHeader"], color: primaryColor },
        "",
        { text: "Fecha y hora de emisi\xF3n", style: ["tableHeader"], color: primaryColor }
      ],
      [{ text: retenciones.getAttribute("FolioInt") }, "", { text: retenciones.getAttribute("FechaExp") }],
      [
        { text: "Folio fiscal", style: ["tableHeader"], color: primaryColor },
        "",
        { text: "Fecha y hora de certificaci\xF3n", style: ["tableHeader"], color: primaryColor }
      ],
      [{ text: tfd.getAttribute("UUID") }, "", { text: tfd.getAttribute("FechaTimbrado") }],
      [{ text: "Clave", style: ["tableHeader"], color: primaryColor, colSpan: 3 }, "", ""],
      [
        {
          text: catalogs.retenciones20ClavesRetencion.findAndReturnEtiqueta(cveRetencion),
          colSpan: 3
        },
        "",
        ""
      ]
    );
  }
  const logoSection = logo ? {
    rowSpan: 2,
    margin: sectionLogoMargin,
    image: logo,
    fit: sectionLogoFit,
    alignment: "center"
  } : {
    rowSpan: 2,
    margin: sectionLogoMargin,
    text: "",
    alignment: "center"
  };
  return {
    table: {
      widths: ["40%", "60%"],
      body: [
        [
          logoSection,
          {
            text: title,
            alignment: "center",
            style: ["header"],
            color: primaryColor,
            border: [false, false, false, true]
          }
        ],
        [
          "",
          {
            table: {
              widths: contentWidths,
              body: bodyContent
            },
            layout: "tableLayout"
          }
        ]
      ]
    },
    layout: "tableLayout"
  };
};
var generic_top_content_default = genericTopContent;

// templates/sections/nomina12_receptor_content.ts
var labelValue2 = (label, value, primaryColor) => ({
  text: [{ text: `${label}: `, color: primaryColor, bold: true }, { text: value }]
});
var nomina12ReceptorContent = (data, nominaReceptor, catalogs, primaryColor, bgGrayColor) => {
  const receptor = data.receptor();
  const comprobante = data.comprobante();
  const leftRows = [
    [{ text: receptor.getAttribute("Nombre"), style: ["subHeader"], color: primaryColor }],
    [labelValue2("RFC", receptor.getAttribute("Rfc"), primaryColor)]
  ];
  if (receptor.hasAttribute("RegimenFiscalReceptor")) {
    leftRows.push([
      labelValue2(
        "R\xE9gimen fiscal",
        catalogs.cfdi40RegimenesFiscales.findAndReturnEtiqueta(receptor.getAttribute("RegimenFiscalReceptor")),
        primaryColor
      )
    ]);
  }
  if (receptor.hasAttribute("DomicilioFiscalReceptor")) {
    leftRows.push([labelValue2("Domicilio fiscal", receptor.getAttribute("DomicilioFiscalReceptor"), primaryColor)]);
  }
  leftRows.push([
    labelValue2(
      "Uso del CFDI",
      catalogs.cfdi40UsosCfdi.findAndReturnTexto(receptor.getAttribute("UsoCFDI")),
      primaryColor
    )
  ]);
  if (comprobante.hasAttribute("Exportacion")) {
    leftRows.push([
      labelValue2(
        "Exportaci\xF3n",
        catalogs.cfdi40Exportaciones.findAndReturnTexto(comprobante.getAttribute("Exportacion")),
        primaryColor
      )
    ]);
  }
  if (nominaReceptor.hasAttribute("NumEmpleado")) {
    leftRows.push([labelValue2("No. Empleado", nominaReceptor.getAttribute("NumEmpleado"), primaryColor)]);
  }
  if (nominaReceptor.hasAttribute("Departamento")) {
    leftRows.push([labelValue2("Departamento", nominaReceptor.getAttribute("Departamento"), primaryColor)]);
  }
  if (nominaReceptor.hasAttribute("Puesto")) {
    leftRows.push([labelValue2("Puesto", nominaReceptor.getAttribute("Puesto"), primaryColor)]);
  }
  if (nominaReceptor.hasAttribute("RiesgoPuesto")) {
    leftRows.push([
      labelValue2(
        "Riesgo puesto",
        catalogs.nominaRiesgosPuestos.findAndReturnTexto(nominaReceptor.getAttribute("RiesgoPuesto")),
        primaryColor
      )
    ]);
  }
  const rightRows = [];
  if (nominaReceptor.hasAttribute("NumSeguridadSocial")) {
    rightRows.push([
      labelValue2("No. Seguridad Social", nominaReceptor.getAttribute("NumSeguridadSocial"), primaryColor)
    ]);
  }
  if (nominaReceptor.hasAttribute("Curp")) {
    rightRows.push([labelValue2("CURP", nominaReceptor.getAttribute("Curp"), primaryColor)]);
  }
  if (nominaReceptor.hasAttribute("FechaInicioRelLaboral")) {
    rightRows.push([
      labelValue2("Fecha inicio relaci\xF3n laboral", nominaReceptor.getAttribute("FechaInicioRelLaboral"), primaryColor)
    ]);
  }
  if (nominaReceptor.hasAttribute("Antig\xFCedad")) {
    rightRows.push([labelValue2("Antig\xFCedad", nominaReceptor.getAttribute("Antig\xFCedad"), primaryColor)]);
  }
  if (nominaReceptor.hasAttribute("TipoContrato")) {
    rightRows.push([
      labelValue2(
        "Tipo contrato",
        catalogs.nominaTiposContratos.findAndReturnTexto(nominaReceptor.getAttribute("TipoContrato")),
        primaryColor
      )
    ]);
  }
  if (nominaReceptor.hasAttribute("TipoRegimen")) {
    rightRows.push([
      labelValue2(
        "R\xE9gimen contrataci\xF3n",
        catalogs.nominaTiposRegimenes.findAndReturnTexto(nominaReceptor.getAttribute("TipoRegimen")),
        primaryColor
      )
    ]);
  }
  if (nominaReceptor.hasAttribute("TipoJornada")) {
    rightRows.push([
      labelValue2(
        "Tipo de jornada",
        catalogs.nominaTiposJornadas.findAndReturnTexto(nominaReceptor.getAttribute("TipoJornada")),
        primaryColor
      )
    ]);
  }
  if (nominaReceptor.hasAttribute("PeriodicidadPago")) {
    rightRows.push([
      labelValue2(
        "Periodicidad de pago",
        catalogs.nominaPeriodicidadesPagos.findAndReturnTexto(nominaReceptor.getAttribute("PeriodicidadPago")),
        primaryColor
      )
    ]);
  }
  if (nominaReceptor.hasAttribute("SalarioDiarioIntegrado")) {
    rightRows.push([labelValue2("Salario diario", nominaReceptor.getAttribute("SalarioDiarioIntegrado"), primaryColor)]);
  }
  if (nominaReceptor.hasAttribute("SalarioBaseCotApor")) {
    rightRows.push([labelValue2("Salario base", nominaReceptor.getAttribute("SalarioBaseCotApor"), primaryColor)]);
  }
  if (nominaReceptor.hasAttribute("Banco")) {
    rightRows.push([labelValue2("Banco", nominaReceptor.getAttribute("Banco"), primaryColor)]);
  }
  if (nominaReceptor.hasAttribute("CuentaBancaria")) {
    rightRows.push([labelValue2("Cuenta bancaria", nominaReceptor.getAttribute("CuentaBancaria"), primaryColor)]);
  }
  if (nominaReceptor.hasAttribute("ClaveEntFed")) {
    rightRows.push([
      labelValue2(
        "Clave Entidad Federativa",
        catalogs.nominaEstados.findAndReturnTexto(nominaReceptor.getAttribute("ClaveEntFed")),
        primaryColor
      )
    ]);
  }
  if (nominaReceptor.hasAttribute("Sindicalizado")) {
    rightRows.push([labelValue2("Sindicalizado", nominaReceptor.getAttribute("Sindicalizado"), primaryColor)]);
  }
  if (rightRows.length === 0) {
    rightRows.push([{}]);
  }
  return {
    table: {
      widths: ["49.5%", "*", "49.5%"],
      body: [
        [
          { text: "Datos del receptor", style: ["tableSubtitleHeader"], color: primaryColor },
          "",
          { text: "Datos adicionales receptor", style: ["tableSubtitleHeader"], color: primaryColor }
        ],
        [
          {
            fillColor: bgGrayColor,
            table: {
              widths: ["*"],
              body: leftRows
            },
            layout: "tableLayout",
            border: [false, false, false, true]
          },
          "",
          {
            fillColor: bgGrayColor,
            table: {
              widths: ["*"],
              body: rightRows
            },
            layout: "tableLayout",
            border: [false, false, false, true]
          }
        ]
      ]
    },
    layout: "tableLayout"
  };
};
var nomina12_receptor_content_default = nomina12ReceptorContent;

// templates/generic_cfdi_translator.ts
var GenericCfdiTranslator = class extends AbstractGenericTraslator {
  translate(data, documentOptions, catalogs, primaryColor, bgGrayColor) {
    const comprobante = data.comprobante();
    const nomina12 = comprobante.searchNode("cfdi:Complemento", "nomina12:Nomina");
    const isNomina = comprobante.getAttribute("TipoDeComprobante") === "N";
    const cfdiContent = [
      generic_top_content_default(data, catalogs, primaryColor),
      this.genericSpace(2),
      generic_emisor_content_default(data, catalogs, primaryColor, bgGrayColor),
      this.genericSpace(2),
      nomina12 === void 0 ? generic_receptor_content_default(data, catalogs, primaryColor, bgGrayColor) : nomina12_receptor_content_default(data, nomina12.searchNode("nomina12:Receptor"), catalogs, primaryColor, bgGrayColor),
      this.genericSpace(2)
    ];
    const globalInformation = comprobante.searchNode("cfdi:InformacionGlobal");
    if (globalInformation) {
      cfdiContent.push(
        generic_cfdi_informacion_global_content_default(globalInformation, catalogs, primaryColor, bgGrayColor),
        this.genericSpace(2)
      );
    }
    if (nomina12) {
      useNomina12GeneralData(nomina12, comprobante, cfdiContent, catalogs, primaryColor, bgGrayColor);
    }
    cfdiContent.push(
      generic_cfdi_conceptos_contents_default(comprobante, catalogs, primaryColor, bgGrayColor),
      this.genericSpace(2)
    );
    if (comprobante.getAttribute("TipoDeComprobante") !== "P" && !isNomina) {
      cfdiContent.push(
        generic_cfdi_totales_content_default(comprobante, catalogs, primaryColor, bgGrayColor),
        this.genericSpace(),
        generic_cfdi_details_info_content_default(comprobante, catalogs, primaryColor),
        this.genericSpace(2)
      );
    }
    const relacionados = comprobante.getAttribute("Version") === "3.3" ? comprobante.searchNode("cfdi:CfdiRelacionados") : comprobante.searchNodes("cfdi:CfdiRelacionados");
    if (relacionados !== void 0 && (relacionados instanceof XmlNodes2 && relacionados.length > 0 || !(relacionados instanceof XmlNodes2))) {
      cfdiContent.push(
        generic_cfdi_relacionados_content_default(relacionados, catalogs, primaryColor, bgGrayColor),
        this.genericSpace(2)
      );
    }
    const pago10 = comprobante.searchNode("cfdi:Complemento", "pago10:Pagos");
    if (pago10) {
      pago10_complement_default(pago10, cfdiContent, catalogs, primaryColor, bgGrayColor);
    }
    const pago20 = comprobante.searchNode("cfdi:Complemento", "pago20:Pagos");
    if (pago20) {
      pago20_complement_default(pago20, cfdiContent, catalogs, primaryColor, bgGrayColor);
    }
    const donat11 = comprobante.searchNode("cfdi:Complemento", "donat:Donatarias");
    if (donat11) {
      donat11_complement_default(donat11, cfdiContent, primaryColor, bgGrayColor);
    }
    if (nomina12) {
      nomina12_complement_default(nomina12, comprobante, cfdiContent, catalogs, primaryColor, bgGrayColor);
    }
    const additionalFields = data.additionalFields();
    if (additionalFields) {
      for (const element of additionalFields) {
        cfdiContent.push(
          {
            table: {
              widths: ["*"],
              body: [[{ text: element.title, style: ["tableSubtitleHeader"], color: primaryColor }], [element.value]]
            },
            layout: "tableLayout"
          },
          this.genericSpace()
        );
      }
    }
    cfdiContent.push(
      generic_stamp_content_default(data.timbreFiscalDigital(), data.tfdSourceString(), data.qrUrl(), primaryColor)
    );
    return {
      ...documentOptions,
      content: cfdiContent,
      footer: (currentPage, pageCount, _) => {
        return generic_footer_default(currentPage, pageCount, data);
      }
    };
  }
};

// templates/complements/plataformas_tecnologicas10_complement.ts
var impuestosTrasladadosPlataformasComplementTable = (servicio, primaryColor, bgGrayColor) => {
  const impuestosTableBody = [];
  const impuestosTrasladadosDelServicio = servicio.searchNode(
    "plataformasTecnologicas:ImpuestosTrasladadosdelServicio"
  );
  const contribucionGubernamental = servicio.searchNode("plataformasTecnologicas:ContribucionGubernamental");
  const comisionDelServicio = servicio.searchNode("plataformasTecnologicas:ComisionDelServicio");
  if (impuestosTrasladadosDelServicio) {
    impuestosTableBody.push([
      {
        table: {
          widths: ["auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "*"],
          body: [
            [
              {
                text: "Impuestos Trasladados del Servicio",
                colSpan: 10,
                alignment: "left",
                color: primaryColor
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {}
            ],
            [
              {
                text: "Impuesto base:",
                color: primaryColor
              },
              {
                text: formatCurrency(impuestosTrasladadosDelServicio.getAttribute("Base")),
                alignment: "left"
              },
              {
                text: "Impuesto",
                color: primaryColor
              },
              {
                text: impuestosTrasladadosDelServicio.getAttribute("Impuesto"),
                alignment: "left"
              },
              {
                text: "Tipo factor:",
                color: primaryColor
              },
              {
                text: impuestosTrasladadosDelServicio.getAttribute("TipoFactor"),
                alignment: "left"
              },
              {
                text: "Tasa o cuota:",
                color: primaryColor
              },
              {
                text: impuestosTrasladadosDelServicio.getAttribute("TasaCuota"),
                alignment: "left"
              },
              {
                text: "Importe",
                color: primaryColor
              },
              {
                text: formatCurrency(impuestosTrasladadosDelServicio.getAttribute("Importe")),
                alignment: "left"
              }
            ]
          ]
        },
        layout: "conceptosLayout",
        colSpan: 10,
        fillColor: bgGrayColor
      }
    ]);
  }
  if (comisionDelServicio !== void 0 || contribucionGubernamental !== void 0) {
    impuestosTableBody.push([
      {
        table: {
          widths: ["auto", "auto", "auto", "auto", "auto", "auto", "*", "auto", "auto", "auto"],
          body: [
            [
              {
                text: comisionDelServicio === void 0 ? "" : "Comisi\xF3n del Servicio",
                colSpan: 6,
                alignment: "left",
                color: primaryColor
              },
              {},
              {},
              {},
              {},
              {},
              {
                text: contribucionGubernamental === void 0 ? "" : "Contribuci\xF3n Gubernamental",
                colSpan: 4,
                alignment: "right",
                color: primaryColor
              },
              {},
              {},
              {}
            ],
            [
              {
                text: comisionDelServicio === void 0 ? "" : "Base:",
                color: primaryColor,
                alignment: "right"
              },
              {
                text: comisionDelServicio === void 0 ? "" : formatCurrency(comisionDelServicio.getAttribute("Base")) || "---",
                alignment: "left"
              },
              {
                text: comisionDelServicio === void 0 ? "" : "Porcentaje:",
                color: primaryColor,
                alignment: "right"
              },
              {
                text: comisionDelServicio === void 0 ? "" : comisionDelServicio.getAttribute("Porcentaje") || "---",
                alignment: "left"
              },
              {
                text: comisionDelServicio === void 0 ? "" : "Importe:",
                color: primaryColor,
                alignment: "right"
              },
              {
                text: comisionDelServicio === void 0 ? "" : formatCurrency(comisionDelServicio.getAttribute("Importe")),
                alignment: "left"
              },
              {
                text: contribucionGubernamental === void 0 ? "" : "Estado:",
                color: primaryColor,
                alignment: "right"
              },
              {
                text: contribucionGubernamental === void 0 ? "" : contribucionGubernamental.getAttribute("EntidadDondePagaLaContribucion"),
                alignment: "left"
              },
              {
                text: contribucionGubernamental === void 0 ? "" : "Importe:",
                color: primaryColor,
                alignment: "right"
              },
              {
                text: contribucionGubernamental === void 0 ? "" : formatCurrency(contribucionGubernamental.getAttribute("ImpContrib")),
                alignment: "left"
              }
            ]
          ]
        },
        layout: "conceptosLayout",
        colSpan: 10,
        fillColor: bgGrayColor
      }
    ]);
  }
  if (impuestosTrasladadosDelServicio !== void 0 || contribucionGubernamental !== void 0 || comisionDelServicio !== void 0) {
    impuestosTableBody.push([
      {
        text: "",
        color: primaryColor,
        colSpan: 10,
        border: [false, true, false, false]
      },
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]);
  }
  if (impuestosTableBody.length === 0) {
    return null;
  }
  return {
    table: {
      widths: ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
      body: impuestosTableBody
    },
    layout: "conceptosLayout"
  };
};
var usePlataformasTecnologicas10Complement = (plataformasTecnologicas, primaryColor, bgGrayColor) => {
  const bodyPlataformasTecnologicas = [];
  bodyPlataformasTecnologicas.push(
    [
      {
        text: "Servicio Mediante Plataformas Tecnol\xF3gicas",
        style: "tableSubtitleHeader",
        colSpan: 10,
        alignment: "left",
        color: primaryColor
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {}
    ],
    [
      {
        text: "Versi\xF3n",
        style: "tableHeader",
        fontSize: 6,
        alignment: "center",
        fillColor: primaryColor,
        margin: [0, 3, 0, 3]
      },
      {
        text: "Periodicidad",
        style: "tableHeader",
        fontSize: 6,
        alignment: "center",
        fillColor: primaryColor,
        margin: [0, 3, 0, 3]
      },
      {
        text: "N\xFAmero Servicios",
        fontSize: 5.5,
        style: "tableHeader",
        alignment: "center",
        fillColor: primaryColor,
        margin: [0, 3, 0, 3]
      },
      {
        text: "Subtotal Operaciones",
        style: "tableHeader",
        fontSize: 5.4,
        alignment: "center",
        fillColor: primaryColor,
        margin: [0, 3, 0, 3]
      },
      {
        text: "Total IVA",
        style: "tableHeader",
        fontSize: 6,
        alignment: "center",
        fillColor: primaryColor,
        margin: [0, 3, 0, 3]
      },
      {
        text: "Total IVA Retenido",
        style: "tableHeader",
        fontSize: 5.4,
        alignment: "center",
        fillColor: primaryColor,
        margin: [0, 3, 0, 3]
      },
      {
        text: "Total ISR Retenido",
        style: "tableHeader",
        fontSize: 5.4,
        alignment: "center",
        fillColor: primaryColor,
        margin: [0, 3, 0, 3]
      },
      {
        text: "Diferencia IVA",
        style: "tableHeader",
        fontSize: 6,
        alignment: "center",
        fillColor: primaryColor,
        margin: [0, 3, 0, 3]
      },
      {
        text: "Total Uso de Plataforma",
        style: "tableHeader",
        fontSize: 5.2,
        alignment: "center",
        fillColor: primaryColor,
        margin: [0, 3, 0, 3]
      },
      {
        text: "Total Contribuci\xF3n Gubernamental",
        style: "tableHeader",
        fontSize: 5.2,
        alignment: "center",
        fillColor: primaryColor,
        margin: [0, 3, 0, 3]
      }
    ],
    [
      { text: plataformasTecnologicas.getAttribute("Version"), alignment: "center" },
      { text: plataformasTecnologicas.getAttribute("Periodicidad"), alignment: "center" },
      { text: plataformasTecnologicas.getAttribute("NumServ"), alignment: "center" },
      {
        text: formatCurrency(plataformasTecnologicas.getAttribute("MonTotServSIVA")),
        alignment: "center"
      },
      {
        text: formatCurrency(plataformasTecnologicas.getAttribute("TotalIVATrasladado")),
        alignment: "center"
      },
      {
        text: formatCurrency(plataformasTecnologicas.getAttribute("TotalIVARetenido")),
        alignment: "center"
      },
      {
        text: formatCurrency(plataformasTecnologicas.getAttribute("TotalISRRetenido")),
        alignment: "center"
      },
      {
        text: formatCurrency(plataformasTecnologicas.getAttribute("DifIVAEntregadoPrestServ")),
        alignment: "center"
      },
      {
        text: formatCurrency(plataformasTecnologicas.getAttribute("MonTotalporUsoPlataforma")),
        alignment: "center"
      },
      {
        text: plataformasTecnologicas.getAttribute("MonTotalContribucionGubernamental") === "" ? "---" : formatCurrency(plataformasTecnologicas.getAttribute("MonTotalContribucionGubernamental")),
        alignment: "center"
      }
    ]
  );
  const servicios = plataformasTecnologicas.searchNodes(
    "plataformasTecnologicas:Servicios",
    "plataformasTecnologicas:DetallesDelServicio"
  );
  if (servicios.length > 0) {
    bodyPlataformasTecnologicas.push(
      [
        {
          text: "Detalles del Servicio",
          style: "tableSubtitleHeader",
          fontSize: 8,
          colSpan: 10,
          alignment: "left",
          color: primaryColor
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      [
        {
          text: "Forma de Pago",
          style: "tableHeader",
          alignment: "center",
          fillColor: primaryColor,
          margin: [0, 3, 0, 3]
        },
        {
          text: "Tipo de Servicio",
          style: "tableHeader",
          alignment: "center",
          fillColor: primaryColor,
          margin: [0, 3, 0, 3]
        },
        {
          text: "Subtipo de Servicio",
          style: "tableHeader",
          alignment: "center",
          fillColor: primaryColor,
          margin: [0, 3, 0, 3],
          colSpan: 2
        },
        {},
        {
          text: "RFC Tercero Autorizado",
          style: "tableHeader",
          alignment: "center",
          fillColor: primaryColor,
          margin: [0, 3, 0, 3],
          colSpan: 2
        },
        {},
        {
          text: "Fecha del Servicio",
          style: "tableHeader",
          alignment: "center",
          fillColor: primaryColor,
          margin: [0, 3, 0, 3],
          colSpan: 2
        },
        {},
        {
          text: "Precio Sin IVA",
          style: "tableHeader",
          alignment: "center",
          fillColor: primaryColor,
          margin: [0, 3, 0, 3],
          colSpan: 2
        },
        {}
      ]
    );
    for (const servicio of servicios) {
      const impuestosTable = impuestosTrasladadosPlataformasComplementTable(servicio, primaryColor, bgGrayColor);
      const impuestosContent = impuestosTable ? [{ ...impuestosTable, colSpan: 10 }] : [{ text: "", colSpan: 10 }];
      const formaPago = servicio.getAttribute("FormaPagoServ");
      const tipoServicio = servicio.getAttribute("TipoDeServ");
      const subTipServicio = servicio.getAttribute("SubTipServ");
      const rfcTerceroAut = servicio.getAttribute("RFCTerceroAutorizado");
      const fechaServicio = servicio.getAttribute("FechaServ");
      const precioSinIVA = servicio.getAttribute("PrecioServSinIVA");
      bodyPlataformasTecnologicas.push(
        [
          { text: formaPago, alignment: "center" },
          { text: tipoServicio, alignment: "center" },
          { text: subTipServicio || "---", alignment: "center", colSpan: 2 },
          {},
          { text: rfcTerceroAut || "---", alignment: "center", colSpan: 2 },
          {},
          { text: fechaServicio, alignment: "center", colSpan: 2 },
          {},
          { text: formatCurrency(precioSinIVA), alignment: "center", colSpan: 2 },
          {}
        ],
        [...impuestosContent]
      );
    }
  }
  return bodyPlataformasTecnologicas;
};
var plataformas_tecnologicas10_complement_default = usePlataformasTecnologicas10Complement;

// templates/sections/generic_retencion_periodo_content.ts
var genericRetencionPeriodoContent = (periodo, isVersionOne, catalogs, primaryColor, bgGrayColor) => {
  return {
    table: {
      widths: ["*", "*", "*"],
      body: [
        [{ text: "Periodo", style: ["tableSubtitleHeader"], color: primaryColor, colSpan: 3 }, "", ""],
        [
          {
            text: [
              { text: "Mes Inicial: ", color: primaryColor },
              {
                text: catalogs.retenciones20Periodos.findAndReturnEtiqueta(periodo.getAttribute("MesIni"))
              }
            ],
            alignment: "center",
            fillColor: bgGrayColor
          },
          {
            text: [
              { text: "Mes Final: ", color: primaryColor },
              {
                text: catalogs.retenciones20Periodos.findAndReturnEtiqueta(periodo.getAttribute("MesFin"))
              }
            ],
            alignment: "center",
            fillColor: bgGrayColor
          },
          {
            text: [
              { text: "Ejercicio: ", color: primaryColor },
              { text: periodo.getAttribute(isVersionOne ? "Ejerc" : "Ejercicio") }
            ],
            alignment: "center",
            fillColor: bgGrayColor
          }
        ],
        [
          { fillColor: bgGrayColor, text: "", border: [false, false, false, true] },
          { fillColor: bgGrayColor, text: "", border: [false, false, false, true] },
          { fillColor: bgGrayColor, text: "", border: [false, false, false, true] }
        ]
      ],
      dontBreakRows: true
    },
    layout: "tableLayout"
  };
};
var generic_retencion_periodo_content_default = genericRetencionPeriodoContent;

// templates/sections/generic_retencion_totales_content.ts
var genericRetencionTotalesContent = (totales, isVersionOne, catalogs, primaryColor, bgGrayColor) => {
  const retencionTotalesContent = [];
  const tableTotalesBody = [
    [
      {
        text: "Totales (montos)",
        style: ["tableSubtitleHeader"],
        color: primaryColor,
        colSpan: 4
      },
      "",
      "",
      ""
    ],
    [
      {
        text: [
          { text: "Total operaci\xF3n: ", color: primaryColor },
          {
            text: formatCurrency(totales.getAttribute(isVersionOne ? "montoTotOperacion" : "MontoTotOperacion"))
          }
        ],
        alignment: "center",
        fillColor: bgGrayColor
      },
      {
        text: [
          { text: "Total gravado: ", color: primaryColor },
          {
            text: formatCurrency(totales.getAttribute(isVersionOne ? "montoTotGrav" : "MontoTotGrav"))
          }
        ],
        alignment: "center",
        fillColor: bgGrayColor
      },
      {
        text: [
          { text: "Total exento: ", color: primaryColor },
          {
            text: formatCurrency(totales.getAttribute(isVersionOne ? "montoTotExent" : "MontoTotExent"))
          }
        ],
        alignment: "center",
        fillColor: bgGrayColor
      },
      {
        text: [
          { text: "Total retenido: ", color: primaryColor },
          {
            text: formatCurrency(totales.getAttribute(isVersionOne ? "montoTotRet" : "MontoTotRet"))
          }
        ],
        alignment: "center",
        fillColor: bgGrayColor
      }
    ]
  ];
  const utilidadBimestral = totales.getAttribute("UtilidadBimestral");
  const isrCorrespondiente = totales.getAttribute("ISRCorrespondiente");
  if (!isVersionOne && (utilidadBimestral !== "" || isrCorrespondiente !== "")) {
    tableTotalesBody.push([
      {
        text: [
          { text: "Utilidad Bimestral: ", color: primaryColor },
          {
            text: formatCurrency(totales.getAttribute("UtilidadBimestral"))
          }
        ],
        alignment: "center",
        fillColor: bgGrayColor
      },
      {
        text: [
          { text: "ISR Correspondiente: ", color: primaryColor },
          {
            text: formatCurrency(totales.getAttribute("ISRCorrespondiente"))
          }
        ],
        alignment: "center",
        fillColor: bgGrayColor
      },
      "",
      ""
    ]);
  }
  tableTotalesBody.push([
    {
      text: "",
      color: primaryColor,
      colSpan: 4,
      border: [false, true, false, false]
    },
    "",
    "",
    ""
  ]);
  retencionTotalesContent.push({
    table: {
      widths: ["*", "*", "*", "*"],
      body: tableTotalesBody,
      dontBreakRows: true
    },
    layout: "tableLayout"
  });
  const impuestosRetenidos = totales.searchNodes("retenciones:ImpRetenidos");
  if (impuestosRetenidos.length > 0) {
    retencionTotalesContent.push(
      { text: "\n" },
      {
        table: {
          widths: ["20%", "20%", "*", "*"],
          body: [
            [
              {
                text: "Impuestos Retenidos",
                style: ["tableSubtitleHeader"],
                color: primaryColor,
                colSpan: 4
              },
              "",
              "",
              ""
            ],
            [
              {
                text: "Impuesto",
                style: "tableHeader",
                alignment: "center",
                fillColor: primaryColor,
                margin: [0, 3, 0, 3]
              },
              {
                text: "Base",
                style: "tableHeader",
                alignment: "center",
                fillColor: primaryColor,
                margin: [0, 3, 0, 3]
              },
              {
                text: "Tipo Pago",
                style: "tableHeader",
                alignment: "center",
                fillColor: primaryColor,
                margin: [0, 3, 0, 3]
              },
              {
                text: "Monto",
                style: "tableHeader",
                alignment: "center",
                fillColor: primaryColor,
                margin: [0, 3, 0, 3]
              }
            ],
            ...impuestosRetenidos.map((impRetenido) => {
              const baseRet = impRetenido.getAttribute("BaseRet");
              let impuesto = impRetenido.getAttribute(isVersionOne ? "Impuesto" : "ImpuestoRet");
              const tipoPago = impRetenido.getAttribute("TipoPagoRet");
              const monto = impRetenido.getAttribute(isVersionOne ? "montoRet" : "MontoRet");
              if (isVersionOne && impuesto.length < 3) {
                impuesto = `0${impuesto}`;
              }
              return [
                {
                  text: impuesto === "" ? "---" : catalogs.cfdi40Impuestos.findAndReturnTexto(impuesto),
                  alignment: "center"
                },
                {
                  text: baseRet === "" ? "---" : formatCurrency(baseRet),
                  alignment: "center"
                },
                {
                  text: isVersionOne ? tipoPago : catalogs.retenciones20TiposPago.findAndReturnTexto(tipoPago),
                  alignment: "center"
                },
                {
                  text: formatCurrency(monto),
                  alignment: "center"
                }
              ];
            })
          ],
          dontBreakRows: true,
          headerRows: 1
        },
        layout: "conceptosLayout"
      }
    );
  }
  return retencionTotalesContent;
};
var generic_retencion_totales_content_default = genericRetencionTotalesContent;

// templates/generic_retenciones_translator.ts
var GenericRetencionesTranslator = class extends AbstractGenericTraslator {
  translate(data, documentOptions, catalogs, primaryColor, bgGrayColor) {
    const retencionesContent = [
      generic_top_content_default(data, catalogs, primaryColor),
      this.genericSpace(2),
      generic_emisor_content_default(data, catalogs, primaryColor, bgGrayColor),
      this.genericSpace(2),
      generic_receptor_content_default(data, catalogs, primaryColor, bgGrayColor),
      this.genericSpace(2)
    ];
    const isVersionOne = data.retenciones().getAttribute("Version") === "1.0";
    retencionesContent.push(
      generic_retencion_periodo_content_default(data.periodo(), isVersionOne, catalogs, primaryColor, bgGrayColor),
      this.genericSpace(2),
      ...generic_retencion_totales_content_default(data.totales(), isVersionOne, catalogs, primaryColor, bgGrayColor),
      this.genericSpace(2)
    );
    const plataformasTecnologicas = data.retenciones().searchNode("retenciones:Complemento", "plataformasTecnologicas:ServiciosPlataformasTecnologicas");
    if (plataformasTecnologicas) {
      const plataformasTable = plataformas_tecnologicas10_complement_default(
        plataformasTecnologicas,
        primaryColor,
        bgGrayColor
      );
      if (plataformasTable) {
        retencionesContent.push(
          {
            table: {
              widths: ["10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%"],
              body: plataformasTable
            },
            layout: "tableLayout"
          },
          this.genericSpace(2)
        );
      }
    }
    const additionalFields = data.additionalFields();
    if (additionalFields) {
      for (const element of additionalFields) {
        retencionesContent.push(
          {
            table: {
              widths: ["*"],
              body: [[{ text: element.title, style: ["tableSubtitleHeader"], color: primaryColor }], [element.value]]
            },
            layout: "tableLayout"
          },
          this.genericSpace()
        );
      }
    }
    retencionesContent.push(
      generic_stamp_content_default(data.timbreFiscalDigital(), data.tfdSourceString(), data.qrUrl(), primaryColor)
    );
    return {
      ...documentOptions,
      content: retencionesContent,
      footer: (currentPage, pageCount, _) => {
        return generic_footer_default(currentPage, pageCount, data);
      }
    };
  }
};
export {
  AbstractGenericTraslator,
  GenericCfdiTranslator,
  GenericRetencionesTranslator
};
