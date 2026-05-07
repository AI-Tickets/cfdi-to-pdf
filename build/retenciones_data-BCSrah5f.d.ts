import { XmlNodeInterface } from '@nodecfdi/cfdi-core/types';
import { A as AbstractInvoiceData } from './types-D555aPUb.js';

declare class CfdiData extends AbstractInvoiceData {
    private readonly _comprobante;
    private readonly _address;
    constructor(comprobante: XmlNodeInterface, qrUrl?: string | null, tfdSourceString?: string | null, logo?: string, address?: string, additionalFields?: {
        title: string;
        value: string;
    }[]);
    comprobante(): XmlNodeInterface;
    address(): string | undefined;
}

declare class RetencionesData extends AbstractInvoiceData {
    private readonly _retenciones;
    private readonly _periodo;
    private readonly _totales;
    constructor(retenciones: XmlNodeInterface, qrUrl?: string | null, tfdSourceString?: string | null, logo?: string, additionalFields?: {
        title: string;
        value: string;
    }[]);
    retenciones(): XmlNodeInterface;
    periodo(): XmlNodeInterface;
    totales(): XmlNodeInterface;
}

export { CfdiData as C, RetencionesData as R };
