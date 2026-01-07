import { useState } from 'react';

interface CertificateFormProps {
  onGenerate: (name: string, layout: 'classic' | 'modern') => void;
  isLoading: boolean;
}

export default function CertificateForm({ onGenerate, isLoading }: CertificateFormProps) {
  const [name, setName] = useState('');
  const [layout, setLayout] = useState<'classic' | 'modern'>('classic');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onGenerate(name.trim(), layout);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transition-all hover:shadow-2xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center tracking-tight">
        Create Certificate
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
            Recipient's Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: John Doe"
            required
            minLength={2}
            maxLength={50}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 bg-gray-50 hover:bg-white text-gray-800 placeholder-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Certificate Style
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setLayout('classic')}
              className={`p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-2 ${
                layout === 'classic'
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 text-gray-600'
              }`}
            >
              <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center">
                <span className="font-serif font-bold">C</span>
              </div>
              <span className="font-medium">Classic</span>
            </button>
            
            <button
              type="button"
              onClick={() => setLayout('modern')}
              className={`p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-2 ${
                layout === 'modern'
                  ? 'border-purple-600 bg-purple-50 text-purple-700'
                  : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50 text-gray-600'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-current opacity-20"></div>
              <span className="font-medium">Modern</span>
            </button>
          </div>
        </div>
        
        <button 
          type="submit" 
          disabled={isLoading || !name.trim()}
          className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </span>
          ) : 'Generate Certificate'}
        </button>
      </form>
    </div>
  );
}