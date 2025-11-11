'use client';

import { useState } from 'react';
import CertificateForm from '../components/CertificateForm';
import CertificatePreview from '../components/CertificatePreview';
import { generateCertificatePDF } from '../lib/pdfGenerator';
import '../styles/home.css'; // ← import the external CSS

export default function Home() {
  const [recipientName, setRecipientName] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleGeneratePreview = (name: string) => {
    setRecipientName(name);
    setShowPreview(true);

    // wait a tick for the preview to render, then scroll to it
    // short timeout is fine for client-rendered content
    setTimeout(() => {
      const previewEl = document.getElementById('certificate-preview');
      if (previewEl) {
        previewEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 120);
  };

  const handleDownloadPDF = async () => {
    if (!recipientName) return;

    setIsLoading(true);
    try {
      const certificateElement = document.getElementById('certificate-template');
      if (certificateElement) {
        const fileName = `Certificate_${recipientName.replace(/\s+/g, '_')}.pdf`;
        await generateCertificatePDF(certificateElement, fileName);
      }
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="main-container">
      <header className="header">
        <h1>Certificate Generation System</h1>
        <p className="subtitle">Aiking Solution — Professional Certification Platform</p>
      </header>

      <div className="content">
        {/* Form (top) */}
        <div className="form-wrapper">
          <CertificateForm 
            onGenerate={handleGeneratePreview} 
            isLoading={isLoading}
          />
        </div>

        {/* Preview (below form) */}
        {showPreview && (
          <div id="certificate-preview" className="preview-wrapper">
            <CertificatePreview
              name={recipientName}
              onDownload={handleDownloadPDF}
              isLoading={isLoading}
            />
          </div>
        )}
      </div>
    </main>
  );
}
