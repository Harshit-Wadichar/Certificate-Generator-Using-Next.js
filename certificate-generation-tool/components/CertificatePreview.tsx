import Image from 'next/image';

interface CertificatePreviewProps {
  name: string;
  onDownload: () => void;
  isLoading: boolean;
  layout: 'classic' | 'modern';
}

export default function CertificatePreview({ name, onDownload, isLoading, layout }: CertificatePreviewProps) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-gray-800">Certificate Preview</h3>
        <p className="text-gray-500">How it will appear when downloaded / printed</p>
      </div>

      <div className="relative w-full overflow-hidden shadow-2xl rounded-sm">
        {/* Certificate Container - 1.414 aspect ratio (A4 landscapeish) */}
        <div 
          id="certificate-template" 
          className="relative bg-white w-full aspect-[1.414] min-w-[800px] text-gray-900 overflow-hidden"
        >
          {/* CLASSIC LAYOUT */}
          {layout === 'classic' && (
            <div className="absolute inset-0 p-12 flex flex-col items-center justify-between border-[20px] border-double border-gray-200">
              <div className="absolute inset-4 border border-gray-300 pointer-events-none"></div>
              
              {/* Header */}
              <div className="w-full text-center space-y-6">
                <div className="flex flex-col items-center justify-center gap-2">
                   {/* Logo Placeholder */}
                   <div className="w-16 h-16 relative">
                     <Image src="/logo.png" alt="Logo" width={64} height={64} className="object-contain" />
                   </div>
                   <div className="text-center">
                     <div className="text-lg font-bold uppercase tracking-widest font-serif text-gray-700">Aiking Solution</div>
                     <div className="text-xs tracking-wider text-gray-500 uppercase">Professional Certification</div>
                   </div>
                </div>
                <h1 className="text-5xl font-serif font-bold text-gray-900 tracking-tight">Certificate of Completion</h1>
              </div>

              {/* Body */}
              <div className="w-full text-center flex-1 flex flex-col justify-center py-8">
                <p className="text-xl font-serif italic text-gray-600 mb-4">This is to certify that</p>
                <h2 className="text-6xl font-serif font-bold text-blue-900 mb-6 border-b-2 border-gray-200 inline-block px-12 pb-2 mx-auto min-w-[400px]">
                  {name || "Recipient Name"}
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-serif">
                  has successfully completed the required course of study and demonstrated outstanding commitment and proficiency
                  in the field of <span className="font-bold">Advanced Web Development</span>.
                </p>
              </div>

              {/* Footer */}
              <div className="w-full flex justify-between items-end px-12 pb-4">
                <div className="text-center space-y-2">
                  <div className="text-lg font-serif border-b border-gray-400 px-8 pb-1 mb-2">{currentDate}</div>
                  <div className="text-sm uppercase tracking-wider text-gray-500 font-serif">Date of Completion</div>
                </div>

                {/* Seal */}
                <div className="w-32 h-32 rounded-full border-4 border-yellow-600/30 flex items-center justify-center relative">
                   <div className="absolute inset-1 border-2 border-yellow-600/20 rounded-full border-dashed"></div>
                   <div className="text-center text-yellow-700 font-serif font-bold text-xs uppercase tracking-widest rotate-[-10deg]">
                     Official<br/>Seal
                   </div>
                </div>

                <div className="flex gap-16">
                   <div className="text-center space-y-2">
                      <div className="w-48 border-b border-gray-400 mb-2"></div>
                      <div className="font-bold font-serif text-gray-800">Director of Education</div>
                      <div className="text-xs text-gray-500">Aiking Solution</div>
                   </div>
                   <div className="text-center space-y-2">
                      <div className="w-48 border-b border-gray-400 mb-2"></div>
                      <div className="font-bold font-serif text-gray-800">Chief Executive Officer</div>
                      <div className="text-xs text-gray-500">Aiking Solution</div>
                   </div>
                </div>
              </div>
            </div>
          )}

          {/* MODERN LAYOUT */}
          {layout === 'modern' && (
            <div className="absolute inset-0 flex">
              {/* Left Sidebar */}
              <div className="w-1/4 bg-gray-900 text-white flex flex-col p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600/20 to-purple-600/20 z-0"></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                     <Image src="/logo.png" alt="Logo" width={48} height={48} className="brightness-0 invert opacity-80" />
                     <div className="text-xl font-bold tracking-tight">AIKING<br/>SOLUTION</div>
                  </div>
                  <div className="text-sm opacity-60 leading-relaxed">
                    Excellence in Technology<br/>
                    Professional Certification<br/>
                    Program 2024
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 bg-white p-12 flex flex-col justify-between relative">
                 {/* Decorative background element */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50 via-purple-50 to-white rounded-bl-full opacity-50"></div>

                 <div className="relative z-10 w-full h-full flex flex-col">
                    <div className="flex justify-between items-start mb-16">
                      <h1 className="text-5xl font-black text-gray-900 tracking-tighter leading-none">
                        Certificate<br/>of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Completion</span>
                      </h1>
                      <div className="text-right">
                         <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Date Issued</div>
                         <div className="text-xl font-medium text-gray-900">{currentDate}</div>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center space-y-8">
                       <p className="text-2xl text-gray-500 font-light">Presented to</p>
                       <h2 className="text-6xl font-bold text-gray-900 tracking-tight">
                         {name || "Recipient Name"}
                       </h2>
                       <p className="text-xl text-gray-600 leading-relaxed font-light max-w-2xl">
                         For successfully completing the <span className="font-medium text-gray-900">Advanced Web Development</span> course, 
                         demonstrating exceptional skill and dedication.
                       </p>
                    </div>

                    <div className="flex justify-between items-end mt-12 pt-12 border-t border-gray-100">
                       <div className="space-y-1">
                          <Image src="/signature.png" alt="Signature" width={120} height={40} className="opacity-0 h-10 w-auto" /> {/* Placeholder invisible if no img */}
                          <div className="h-10 border-b-2 border-gray-900 w-48 mb-2"></div>
                          <div className="font-bold text-gray-900 uppercase text-sm tracking-wide">Instructor</div>
                       </div>
                       
                       <div className="space-y-1">
                          <div className="h-10 border-b-2 border-gray-900 w-48 mb-2"></div>
                          <div className="font-bold text-gray-900 uppercase text-sm tracking-wide">Director</div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onDownload}
          disabled={isLoading}
          className={`
            px-8 py-3 rounded-full font-semibold text-lg shadow-lg transform transition-all duration-200
            ${isLoading 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-gray-900 text-white hover:bg-black hover:scale-105 hover:shadow-xl active:scale-95'
            }
          `}
        >
          {isLoading ? 'Generating PDF...' : 'Download PDF'}
        </button>
      </div>
    </div>
  );
}
