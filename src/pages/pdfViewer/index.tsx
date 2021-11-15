import React, { useState } from 'react';
import { Document, Page, PDFPageProxy } from 'react-pdf';
import samplePDF from '/home/moin_11/ReactProjects/LearningNextjs/cv-builder/public/Booking Reference.pdf';
function PDFViewer(): JSX.Element {
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  return (
    <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
}
