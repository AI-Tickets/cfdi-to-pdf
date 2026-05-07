export { A as AbstractInvoiceData } from './types-D555aPUb.js';
export { A as AbstractPdfMakerBuilder } from './abstract_pdf_maker_builder-BKIa0uot.js';
export { C as CfdiData, R as RetencionesData } from './retenciones_data-BCSrah5f.js';
import '@nodecfdi/sat-micro-catalogs';
import 'pdfmake/interfaces.js';
import '@nodecfdi/cfdi-core/types';

declare const breakCharacters: (raw: string, separator?: string) => string;

declare const toCurrency: (initial: number, moneda?: string) => string;
declare const toNumber: (currency: number | string) => number;
declare const formatCurrency: (currency: number | string, currencyDisplay?: "symbol" | "code") => string;

declare const normalizeSpace: (value: string) => string;

export { breakCharacters, formatCurrency, normalizeSpace, toCurrency, toNumber };
