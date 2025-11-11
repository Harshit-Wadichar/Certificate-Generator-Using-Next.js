import '../styles/CertificatePreview.css';

interface CertificatePreviewProps {
  name: string;
  onDownload: () => void;
  isLoading: boolean;
}

export default function CertificatePreview({ name, onDownload, isLoading }: CertificatePreviewProps) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="preview-container">
      <div className="preview-header">
        <div>
          <h3 className="preview-title">Certificate Preview</h3>
          <p className="preview-sub">How it will appear when downloaded / printed</p>
        </div>
        
      </div>

      {/* Certificate area (this is captured to PDF) */}
      <div id="certificate-template" className="certificate-template" role="region" aria-label="Certificate preview">
        <div className="certificate-inner">
          {/* Top bar with logo + title */}
          <div className="cert-top">
            <div className="brand">
              {/* replace this SVG with your real logo if available */}
              <svg className="brand-mark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <defs>
                  <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#4f46e5" />
                    <stop offset="1" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="url(#g1)"/>
                <text x="50%" y="56%" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="40" fill="#fff">A</text>
              </svg>
              <div className="brand-info">
                <div className="brand-name">Aiking Solution</div>
                <div className="brand-small">Professional Certification</div>
              </div>
            </div>

            <h1 className="cert-title">Certificate of Completion</h1>
          </div>

          {/* Body / recipient details */}
          <div className="cert-body">
            <p className="presented-to">This is to certify that</p>

            <h2 className="recipient-name">{name || <span className="placeholder">Recipient Name</span>}</h2>

            <p className="completion-text">
              has successfully completed the required course of study and demonstrated outstanding commitment and proficiency
              in the field of Advanced Web Development.
            </p>
          </div>

          {/* Footer: date, signatures and seal */}
          <div className="cert-footer">
            <div className="date-and-seal">
              <div className="date-block">
                <div className="date-label">Date of Completion</div>
                <div className="date-value">{currentDate}</div>
              </div>

              <div className="seal-wrap" aria-hidden>
                {/* crisp SVG seal for print */}
              
              </div>
            </div>

            <div className="signatures">
              <div className="signature">
                <div className="sig-line" />
                <div className="sig-title">Director of Education</div>
                <div className="sig-org">Aiking Solution</div>
              </div>

              <div className="signature">
                <div className="sig-line" />
                <div className="sig-title">Chief Executive Officer</div>
                <div className="sig-org">Aiking Solution</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* small footer controls (duplicate download for convenience on long pages) */}
      <div className="preview-footer-actions">
        <button
          onClick={onDownload}
          disabled={isLoading}
          className={`download-btn small ${isLoading ? 'loading' : ''}`}
        >
          {isLoading ? 'Generating...' : 'Download PDF'}
        </button>
      </div>
    </div>
  );
}
