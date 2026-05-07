import { TFontDictionary, BufferOptions } from 'pdfmake/interfaces.js';
import { A as AbstractInvoiceData, D as DocumentTranslatorInterface, a as DocumentOptions, C as CatalogsData } from '../../../types-D555aPUb.js';
import { A as AbstractPdfMakerBuilder } from '../../../abstract_pdf_maker_builder-BKIa0uot.js';
import '@nodecfdi/sat-micro-catalogs';
import '@nodecfdi/cfdi-core/types';

declare class PdfMakerBuilder<T extends AbstractInvoiceData> extends AbstractPdfMakerBuilder<T> {
    private readonly _pdfPrinter;
    constructor(documentTranslator: DocumentTranslatorInterface<T>, documentOptions?: DocumentOptions, catalogs?: CatalogsData, overrideFontDictionary?: TFontDictionary, options?: BufferOptions);
    buildRaw(data: T): Promise<string>;
    buildBase64(data: T): Promise<string>;
    build(data: T, destination: string): Promise<void>;
    buildStream(data: T): Promise<NodeJS.ReadableStream>;
    protected buildPdf(data: T): Promise<PDFKit.PDFDocument>;
    defaultFontDictionary(): TFontDictionary;
}

export { PdfMakerBuilder };
