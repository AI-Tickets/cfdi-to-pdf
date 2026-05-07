import pdfMake from 'pdfmake/build/pdfmake.js';
import { TFontDictionary, BufferOptions, Style } from 'pdfmake/interfaces.js';
import { A as AbstractInvoiceData, D as DocumentTranslatorInterface, a as DocumentOptions, C as CatalogsData } from '../../../types-D555aPUb.js';
import { A as AbstractPdfMakerBuilder } from '../../../abstract_pdf_maker_builder-BKIa0uot.js';
import '@nodecfdi/sat-micro-catalogs';
import '@nodecfdi/cfdi-core/types';

declare class PdfMakerBuilder<T extends AbstractInvoiceData> extends AbstractPdfMakerBuilder<T> {
    private readonly _overrideFonts?;
    private _overrideVFS?;
    constructor(documentTranslator: DocumentTranslatorInterface<T>, documentOptions?: DocumentOptions, catalogs?: CatalogsData, overrideFonts?: TFontDictionary, overrideVFS?: Record<string, string>, options?: BufferOptions);
    buildRaw(data: T): Promise<string>;
    buildBase64(data: T): Promise<string>;
    protected buildPdf(data: T): Promise<pdfMake.TCreatedPdf>;
    defaultStyle(): Style;
}

export { PdfMakerBuilder };
