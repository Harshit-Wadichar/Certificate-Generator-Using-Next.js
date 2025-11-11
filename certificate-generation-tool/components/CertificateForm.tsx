import { useState } from 'react';
import '../styles/CertificateForm.css';


interface CertificateFormProps {
  onGenerate: (name: string) => void;
  isLoading: boolean;
}

export default function CertificateForm({ onGenerate, isLoading }: CertificateFormProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onGenerate(name.trim());
    }
  };

  return (
    <div className="form-container">
      <h2>Generate Certificate</h2>
      <form onSubmit={handleSubmit} className="certificate-form">
        <div className="form-group">
          <label htmlFor="name">Recipient Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter recipient's full name"
            required
            minLength={2}
            maxLength={50}
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isLoading || !name.trim()}
          className="generate-btn"
        >
          {isLoading ? 'Generating...' : 'Generate Certificate'}
        </button>
      </form>
    </div>
  );
}