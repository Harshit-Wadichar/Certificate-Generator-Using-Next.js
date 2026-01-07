import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generateCertificatePDF = async (element: HTMLElement, fileName: string): Promise<void> => {
  try {
    // Force a specific width for the capture to ensure consistent layout regardless of screen size
    // A4 landscape at 96 DPI is approx 1123x794 pixels. We use a higher scale for quality.
    const canvas = await html2canvas(element, {
      scale: 3, // Higher scale for better quality
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: 1200, // Force desktop width interpretation
    });

    const imgData = canvas.toDataURL('image/png');

    // A4 Landscape: 297mm x 210mm
    const pdf = new jsPDF('landscape', 'mm', 'a4');

    const pageWidth = pdf.internal.pageSize.getWidth(); // 297
    const pageHeight = pdf.internal.pageSize.getHeight(); // 210

    // Fill the page (with small safe margin if needed, or full bleed)
    // Here we try to fit it nicely.
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Center vertically if aspect ratio differs slightly
    const y = (pageHeight - imgHeight) / 2;

    pdf.addImage(imgData, 'PNG', 0, y, imgWidth, imgHeight);
    pdf.save(fileName);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate PDF certificate');
  }
};