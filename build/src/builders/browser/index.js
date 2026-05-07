import {
  AbstractPdfMakerBuilder
} from "../../../chunk-3HDQYZ3Y.js";

// src/builders/browser/pdf_maker_builder.ts
import pdfMake from "pdfmake/build/pdfmake.js";
var PdfMakerBuilder = class extends AbstractPdfMakerBuilder {
  _overrideFonts;
  _overrideVFS;
  constructor(documentTranslator, documentOptions, catalogs, overrideFonts, overrideVFS, options) {
    super();
    this._documentTranslator = documentTranslator;
    this._catalogs = catalogs;
    this._overrideFonts = overrideFonts;
    this._overrideVFS = overrideVFS;
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
    const builderPdf = await this.buildPdf(data);
    return new Promise((resolve, reject) => {
      try {
        builderPdf.getBuffer((pdfBuffer) => {
          resolve(pdfBuffer.toString("binary"));
        }, this._options);
      } catch (error) {
        reject(error);
      }
    });
  }
  async buildBase64(data) {
    const builderPdf = await this.buildPdf(data);
    return new Promise((resolve, reject) => {
      try {
        builderPdf.getBase64((pdfBase64) => {
          resolve(pdfBase64);
        }, this._options);
      } catch (error) {
        reject(error);
      }
    });
  }
  async buildPdf(data) {
    const vfsFonts = await import("pdfmake/build/vfs_fonts.js");
    const vfs = "default" in vfsFonts ? vfsFonts.default : vfsFonts;
    this._overrideVFS = this._overrideVFS ?? vfs;
    const catalogs = this._catalogs ?? await this.defaultCatalogs();
    const pdfTemplate = this._documentTranslator.translate(
      data,
      this._documentOptions,
      catalogs,
      this._primaryColor,
      this._bgGrayColor
    );
    return pdfMake.createPdf(pdfTemplate, this.layouts(), this._overrideFonts, this._overrideVFS);
  }
  defaultStyle() {
    return {
      fontSize: 8
    };
  }
};
export {
  PdfMakerBuilder
};
