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
      <h3>Certificate Preview</h3>
      
      <div id="certificate-template" className="certificate-template">
        <div className="certificate-border">
          <div className="certificate-content">
            <div className="certificate-header">
              <h1>CERTIFICATE OF COMPLETION</h1>
              <div className="decoration-line"></div>
            </div>
            
            <div className="certificate-body">
              <p className="presented-to">This is to certify that</p>
              <h2 className="recipient-name">{name}</h2>
              <p className="completion-text">
                has successfully completed the required course of study 
                and demonstrated outstanding commitment and proficiency 
                in the field of Advanced Web Development.
              </p>
            </div>
            
            <div className="certificate-footer">
              <div className="date-section">
                <p>Date of Completion</p>
                <p className="date-value">{currentDate}</p>
              </div>
              
              <div className="signatures">
                <div className="signature">
                  <div className="signature-line"></div>
                  <p>Director of Education</p>
                  <p>Aiking Solution</p>
                </div>
                
                <div className="signature">
                  <div className="signature-line"></div>
                  <p>Chief Executive Officer</p>
                  <p>Aiking Solution</p>
                </div>
              </div>
            </div>
            
            <div className="certificate-seal">
              <div className="seal">
                <span>AS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={onDownload}
        disabled={isLoading}
        className="download-btn"
      >
        {isLoading ? 'Generating PDF...' : 'Download PDF Certificate'}
      </button>
    </div>
  );
}