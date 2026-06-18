import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Printer, 
  Mail,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Custom SVG Icons (since they are missing from this version of lucide-react)
const GithubIcon = ({ size = 20, className = "" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// Reusable animated container
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Resume() {
  const handlePrint = () => {
    // Open the PDF in a new tab and trigger print
    const printWindow = window.open(personalInfo.resumeFile, '_blank');
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 relative text-warm-900">
      
      {/* Social Sidebar (Sticky on Desktop) */}
      <div className="hidden md:flex flex-col gap-4 sticky top-32 h-fit z-10">
        <a 
          href={personalInfo.linkedin} 
          target="_blank" 
          rel="noreferrer"
          className="w-10 h-10 rounded-full bg-white border border-warm-200 flex items-center justify-center text-warm-600 hover:text-accent hover:border-accent hover:shadow-md transition-all"
        >
          <LinkedinIcon size={18} />
        </a>
        <a 
          href={personalInfo.github} 
          target="_blank" 
          rel="noreferrer"
          className="w-10 h-10 rounded-full bg-white border border-warm-200 flex items-center justify-center text-warm-600 hover:text-accent hover:border-accent hover:shadow-md transition-all"
        >
          <GithubIcon size={18} />
        </a>
        <a 
          href={`mailto:${personalInfo.email}`}
          className="w-10 h-10 rounded-full bg-white border border-warm-200 flex items-center justify-center text-warm-600 hover:text-accent hover:border-accent hover:shadow-md transition-all"
        >
          <Mail size={18} />
        </a>
      </div>

      <div className="flex-1 space-y-8 w-full max-w-4xl mx-auto">
        
        {/* 1. Top Action Header */}
        <FadeIn>
          <div className="glass-card p-4 md:p-6 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center shadow-md shadow-accent/20 shrink-0">
                <FileText size={24} />
              </div>
              <div>
                <h1 className="text-xl font-extrabold text-warm-900">Official Resume</h1>
                <p className="text-sm font-medium text-warm-800/60">
                  Sidd-Resume.pdf &bull; PDF Format &bull; Last Updated: 2026
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a 
                href={personalInfo.resumeFile} 
                download
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full font-semibold shadow-md shadow-accent/20 hover:bg-accent-hover transition-colors text-sm"
              >
                <Download size={16} />
                Download PDF
              </a>
              <button 
                onClick={handlePrint}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 glass-card text-warm-800 border border-warm-200 px-5 py-2.5 rounded-full font-semibold hover:bg-warm-50 transition-colors text-sm"
              >
                <Printer size={16} />
                Print
              </button>
            </div>
          </div>
        </FadeIn>

        {/* 2. Resume Preview Container (The PDF Embed) */}
        <FadeIn delay={0.1}>
          <div className="glass-card shadow-lg overflow-hidden relative">
            {/* Top accent bar to mimic paper styling */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-accent z-10" />
            
            <div className="w-full h-[800px] md:h-[1100px] pt-2 relative bg-warm-50/50">
              {/* The actual raw PDF embed */}
              <object 
                data={personalInfo.resumeFile} 
                type="application/pdf" 
                className="w-full h-full"
              >
                {/* Fallback if browser doesn't support PDF embedding */}
                <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
                  <FileText size={48} className="text-warm-300" />
                  <p className="text-warm-800/80 font-medium">
                    Your browser does not support embedded PDFs.
                  </p>
                  <a 
                    href={personalInfo.resumeFile} 
                    download
                    className="flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-accent-hover transition-colors"
                  >
                    <Download size={18} />
                    Download PDF instead
                  </a>
                </div>
              </object>
            </div>
          </div>
        </FadeIn>

        {/* 3. Bottom Call-to-Action (CTA) */}
        <FadeIn delay={0.2}>
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center border-2 border-dashed border-warm-200/80">
            <h2 className="text-2xl md:text-3xl font-extrabold text-warm-900 mb-3">
              Like what you see?
            </h2>
            <p className="text-warm-800/70 max-w-lg mx-auto mb-8 font-medium">
              I'm currently looking for 2026 Internships and junior developer roles. Let's discuss how I can contribute to your team.
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <a 
                href="/contact" 
                className="flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-semibold shadow-md shadow-accent/20 hover:bg-accent-hover hover:-translate-y-0.5 transition-all text-sm md:text-base"
              >
                Get In Touch
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 glass-card text-warm-800 border border-warm-200 px-6 py-3 rounded-full font-semibold hover:bg-warm-50 hover:-translate-y-0.5 transition-all text-sm md:text-base"
              >
                <LinkedinIcon size={18} className="text-[#0077B5]" />
                LinkedIn Profile
              </a>
              <a 
                href="/projects" 
                className="flex items-center gap-2 glass-card text-warm-800 border border-warm-200 px-6 py-3 rounded-full font-semibold hover:bg-warm-50 hover:-translate-y-0.5 transition-all text-sm md:text-base"
              >
                Explore Projects
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
