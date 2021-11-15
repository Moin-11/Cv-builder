import React, { useState } from 'react';
import { Document, Page, PDFPageProxy } from 'react-pdf';

interface Pdf {
  pdf: File;
}

export default function Test({
  samplePDF,
}: any | null | undefined): JSX.Element {
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  if (samplePDF === null) {
    console.log('null');
  }

  if (samplePDF == undefined) {
    console.log('undefined');
  }

  return (
    <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
}
