import { Content, TDocumentDefinitions } from 'pdfmake/interfaces.js';
import { C as CfdiData, R as RetencionesData } from '../retenciones_data-BCSrah5f.js';
import { D as DocumentTranslatorInterface, a as DocumentOptions, C as CatalogsData } from '../types-D555aPUb.js';
import '@nodecfdi/cfdi-core/types';
import '@nodecfdi/sat-micro-catalogs';

declare class AbstractGenericTraslator {
    protected genericSpace(spaces?: number): Content;
}

declare class GenericCfdiTranslator extends AbstractGenericTraslator implements DocumentTranslatorInterface<CfdiData> {
    translate(data: CfdiData, documentOptions: DocumentOptions, catalogs: CatalogsData, primaryColor: string, bgGrayColor: string): TDocumentDefinitions;
}

declare class GenericRetencionesTranslator extends AbstractGenericTraslator implements DocumentTranslatorInterface<RetencionesData> {
    translate(data: RetencionesData, documentOptions: DocumentOptions, catalogs: CatalogsData, primaryColor: string, bgGrayColor: string): TDocumentDefinitions;
}

export { AbstractGenericTraslator, GenericCfdiTranslator, GenericRetencionesTranslator };
