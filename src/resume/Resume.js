import React, { useState } from 'react'
import { Document, Page } from 'react-pdf'
import AryamanResume from './Aryaman_Dhingra_Resume.pdf'
import pdfToBase64 from 'pdf-to-base64';


export default function Resume() {
    const [base64, setBase64] = useState(null);
    const [loaded, setLoaded] = useState(false);
    pdfToBase64(AryamanResume)
        .then((res) => {
            setBase64(res);
        })
        .then(() => {
            setLoaded(true)
        })
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    const reader = new FileReader()
    return (
        <div>
            {loaded ? (
                <Document
                    file={`data:application/pdf;base64,${base64}`}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={console.error}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            ) : "loading"
            }
        </div>
    )
}


