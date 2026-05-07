import {
  AbstractPdfMakerBuilder
} from "../../../chunk-3HDQYZ3Y.js";

// src/builders/node/pdf_maker_builder.ts
import { createWriteStream } from "fs";
import { buffer } from "stream/consumers";
import PdfPrinter from "pdfmake";
var PdfMakerBuilder = class extends AbstractPdfMakerBuilder {
  _pdfPrinter;
  constructor(documentTranslator, documentOptions, catalogs, overrideFontDictionary, options) {
    super();
    this._documentTranslator = documentTranslator;
    this._catalogs = catalogs;
    const fonts = overrideFontDictionary ?? this.defaultFontDictionary();
    this._pdfPrinter = new PdfPrinter(fonts);
    this._documentOptions = {
      ...documentOptions,
      defaultStyle: {
        ...this.defaultStyle(),
        ...documentOptions?.defaultStyle
      },
      styles: {
        ...this.defaultDictionaryStyles(),
        ...documentOptions?.styles
      },
      pageMargins: documentOptions?.pageMargins ?? this._defaultPageMargins
    };
    this._options = options;
  }
  async buildRaw(data) {
    const pdfDoc = await this.buildPdf(data);
    pdfDoc.end();
    const pdfBuffer = await buffer(pdfDoc);
    return pdfBuffer.toString("binary");
  }
  async buildBase64(data) {
    const pdfDoc = await this.buildPdf(data);
    pdfDoc.end();
    const pdfBuffer = await buffer(pdfDoc);
    return pdfBuffer.toString("base64");
  }
  async build(data, destination) {
    const pdfDoc = await this.buildPdf(data);
    return new Promise((resolve, reject) => {
      const fileWriteStream = createWriteStream(destination);
      fileWriteStream.on("error", (error) => {
        fileWriteStream.end();
        reject(error);
      });
      pdfDoc.pipe(fileWriteStream);
      pdfDoc.on("end", () => {
        resolve();
      });
      pdfDoc.on("error", (error) => {
        reject(error);
      });
      pdfDoc.end();
    });
  }
  async buildStream(data) {
    return await this.buildPdf(data);
  }
  async buildPdf(data) {
    const catalogs = this._catalogs ?? await this.defaultCatalogs();
    const pdfTemplate = this._documentTranslator.translate(
      data,
      this._documentOptions,
      catalogs,
      this._primaryColor,
      this._bgGrayColor
    );
    return this._pdfPrinter.createPdfKitDocument(pdfTemplate, {
      ...this._options,
      tableLayouts: this.layouts()
    });
  }
  defaultFontDictionary() {
    return {
      Courier: {
        normal: "Courier",
        bold: "Courier-Bold",
        italics: "Courier-Oblique",
        bolditalics: "Courier-BoldOblique"
      },
      Helvetica: {
        normal: "Helvetica",
        bold: "Helvetica-Bold",
        italics: "Helvetica-Oblique",
        bolditalics: "Helvetica-BoldOblique"
      },
      Times: {
        normal: "Times-Roman",
        bold: "Times-Bold",
        italics: "Times-Italic",
        bolditalics: "Times-BoldItalic"
      },
      Symbol: {
        normal: "Symbol"
      },
      ZapfDingbats: {
        normal: "ZapfDingbats"
      }
    };
  }
};
export {
  PdfMakerBuilder
};
