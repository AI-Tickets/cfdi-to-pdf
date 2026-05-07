import { SatCatalog } from '@nodecfdi/sat-micro-catalogs';
import { TDocumentDefinitions } from 'pdfmake/interfaces.js';
import { XmlNodeInterface } from '@nodecfdi/cfdi-core/types';

declare abstract class AbstractInvoiceData {
    protected _emisor: XmlNodeInterface;
    protected _receptor: XmlNodeInterface;
    protected _timbreFiscalDigital: XmlNodeInterface;
    protected _qrUrl: string;
    protected _tfdSourceString: string;
    protected _logo: string | undefined;
    protected _additionalFields: {
        title: string;
        value: string;
    }[] | undefined;
    protected _legendFooter: string;
    emisor(): XmlNodeInterface;
    receptor(): XmlNodeInterface;
    timbreFiscalDigital(): XmlNodeInterface;
    qrUrl(): string;
    tfdSourceString(): string;
    logo(): string | undefined;
    additionalFields(): {
        title: string;
        value: string;
    }[] | undefined;
    buildTfdSource(): void;
    buildUrlQr(node: XmlNodeInterface): void;
    private createTfdSourceString1_0;
    private createTfdSourceString1_1;
    setLegendFooter(legendFooter: string): void;
    legendFooter(): string;
}

type DocumentOptions = Omit<TDocumentDefinitions, 'content' | 'footer'>;
interface CatalogsData {
    cfdi40Impuestos: SatCatalog;
    cfdi40ObjetosImpuestos: SatCatalog;
    cfdi40UsosCfdi: SatCatalog;
    cfdi40RegimenesFiscales: SatCatalog;
    cfdi40TiposRelaciones: SatCatalog;
    cfdi40Meses: SatCatalog;
    cfdi40Periodicidades: SatCatalog;
    cfdi40Exportaciones: SatCatalog;
    cfdi40MetodosPago: SatCatalog;
    cfdi40FormasPago: SatCatalog;
    cfdi40TiposComprobantes: SatCatalog;
    pagosTiposCadenaPago: SatCatalog;
    retenciones20ClavesRetencion: SatCatalog;
    retenciones20Periodicidades: SatCatalog;
    retenciones20Periodos: SatCatalog;
    retenciones20TiposPago: SatCatalog;
    nominaTiposNominas: SatCatalog;
    nominaTiposPercepciones: SatCatalog;
    nominaTiposOtrosPagos: SatCatalog;
    nominaTiposContratos: SatCatalog;
    nominaTiposJornadas: SatCatalog;
    nominaTiposRegimenes: SatCatalog;
    nominaPeriodicidadesPagos: SatCatalog;
    nominaRiesgosPuestos: SatCatalog;
    nominaEstados: SatCatalog;
}
type DocumentTranslatorInterface<T extends AbstractInvoiceData> = {
    translate(data: T, documentDefinitionsOptions: DocumentOptions, catalogs: CatalogsData, primaryColor: string, bgGrayColor: string): TDocumentDefinitions;
};

export { AbstractInvoiceData as A, type CatalogsData as C, type DocumentTranslatorInterface as D, type DocumentOptions as a };
