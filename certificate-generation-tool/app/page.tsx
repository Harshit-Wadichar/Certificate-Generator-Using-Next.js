'use client';

import { useState } from 'react';
import CertificateForm from '../components/CertificateForm';
import CertificatePreview from '../components/CertificatePreview';
import { generateCertificatePDF } from '../lib/pdfGenerator';

export default function Home() {
  const [recipientName, setRecipientName] = useState('');
  const [selectedLayout, setSelectedLayout] = useState<'classic' | 'modern'>('classic');
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleGeneratePreview = (name: string, layout: 'classic' | 'modern') => {
    setRecipientName(name);
    setSelectedLayout(layout);
    setShowPreview(true);

    // wait a tick for the preview to render, then scroll to it
    setTimeout(() => {
      const previewEl = document.getElementById('certificate-preview');
      if (previewEl) {
        previewEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  };

  const handleDownloadPDF = async () => {
    if (!recipientName) return;

    setIsLoading(true);
    try {
      const certificateElement = document.getElementById('certificate-template');
      if (certificateElement) {
        // We use the layout name in the file name
        const fileName = `Certificate_${selectedLayout}_${recipientName.replace(/\s+/g, '_')}.pdf`;
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
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 selection:bg-blue-100 selection:text-blue-900">
      <header className="max-w-3xl text-center mb-12 space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tight">
          Certificate Generation System
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Create professional, verifiable certificates for Aiking Solution candidates in seconds.
        </p>
      </header>

      <div className="w-full max-w-5xl flex flex-col items-center gap-12">
        {/* Form Section */}
        <div className="w-full flex justify-center">
          <CertificateForm 
            onGenerate={handleGeneratePreview} 
            isLoading={isLoading}
          />
        </div>

        {/* Preview Section */}
        {showPreview && (
          <div id="certificate-preview" className="w-full animate-in fade-in zoom-in-95 duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-gray-200 flex-1"></div>
              <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Preview Generated</span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>
            
            <CertificatePreview
              name={recipientName}
              layout={selectedLayout}
              onDownload={handleDownloadPDF}
              isLoading={isLoading}
            />
          </div>
        )}
      </div>
    </main>
  );
}
