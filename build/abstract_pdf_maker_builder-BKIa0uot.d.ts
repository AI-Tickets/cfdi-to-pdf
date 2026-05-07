import { BufferOptions, Margins, Style, StyleDictionary, CustomTableLayout } from 'pdfmake/interfaces.js';
import { A as AbstractInvoiceData, D as DocumentTranslatorInterface, C as CatalogsData, a as DocumentOptions } from './types-D555aPUb.js';

declare class AbstractPdfMakerBuilder<T extends AbstractInvoiceData> {
    protected _documentTranslator: DocumentTranslatorInterface<T>;
    protected _catalogs?: CatalogsData;
    protected _documentOptions: DocumentOptions;
    protected _options?: BufferOptions;
    protected _primaryColor: string;
    protected _bgGrayColor: string;
    protected _defaultPageMargins: Margins;
    setPrimaryColor(color: string): void;
    setBgGrayColor(color: string): void;
    defaultStyle(): Style;
    defaultDictionaryStyles(): StyleDictionary;
    protected defaultCatalogs(): Promise<CatalogsData>;
    layouts(): Record<string, CustomTableLayout>;
}

export { AbstractPdfMakerBuilder as A };
