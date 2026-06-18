import { motion } from 'framer-motion';
import { 
  Calendar, 
  Mail, 
  MapPin, 
  Clock, 
  Paperclip, 
  Send,
  FileText
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Custom SVG Icons
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

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In the future, integrate with the backend endpoint here
    alert("Form submission is currently UI-only. Please use direct email to contact me!");
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-6 max-w-6xl mx-auto text-warm-900">
      
      {/* 1. Header Section */}
      <FadeIn className="mb-12 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Get in Touch
        </h1>
        <p className="text-warm-800/80 text-lg leading-relaxed">
          Looking for a driven B.Tech CSE student for your next cohort? I'm currently seeking internship opportunities for 2026 and am eager to contribute to innovative teams. Let's discuss how my skills align with your goals.
        </p>
      </FadeIn>

      {/* 2. Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column (Info & Links) */}
        <FadeIn delay={0.1} className="lg:col-span-5 space-y-10">
          
          {/* Availability Banner */}
          <div className="glass-card bg-accent/5 p-6 flex items-start gap-4">
            <div className="mt-1 p-2 bg-accent/10 rounded-xl">
              <Calendar size={24} className="text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-warm-900 mb-1">Current Availability</h3>
              <p className="text-sm font-medium leading-relaxed text-warm-800/80">
                Open for Software Engineering Internships starting <strong>July 2026</strong>.
              </p>
            </div>
          </div>

          {/* Alternative Methods */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-warm-900">Alternative Methods</h3>
            <div className="space-y-4">
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="flex items-center gap-4 p-4 glass-card hover:border-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-warm-900 text-sm">Email Me</h4>
                  <p className="text-xs text-warm-800/60 font-medium">{personalInfo.email}</p>
                </div>
              </a>

              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 glass-card hover:border-[#0077B5] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#0077B5]/10 flex items-center justify-center text-[#0077B5] group-hover:bg-[#0077B5] group-hover:text-white transition-colors">
                  <LinkedinIcon size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-warm-900 text-sm">LinkedIn DM</h4>
                  <p className="text-xs text-warm-800/60 font-medium">Professional Inquiries Only</p>
                </div>
              </a>

              <a 
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 glass-card hover:border-warm-900 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-warm-200 flex items-center justify-center text-warm-900 group-hover:bg-warm-900 group-hover:text-white transition-colors">
                  <GithubIcon size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-warm-900 text-sm">GitHub Profile</h4>
                  <p className="text-xs text-warm-800/60 font-medium">Review my Codebase</p>
                </div>
              </a>
            </div>
          </div>

          <hr className="border-warm-200" />

          {/* Location & Response Time */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-warm-100 flex items-center justify-center text-warm-600 shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-warm-800/50 uppercase tracking-widest mb-1">Location</p>
                <p className="font-bold text-warm-900 text-sm">Bengaluru, India (Open to Remote)</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-warm-100 flex items-center justify-center text-warm-600 shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-warm-800/50 uppercase tracking-widest mb-1">Response Time</p>
                <p className="font-bold text-warm-900 text-sm">Within 24-48 Hours</p>
              </div>
            </div>
          </div>

        </FadeIn>

        {/* Right Column (Form Card) */}
        <FadeIn delay={0.2} className="lg:col-span-7">
          <div className="glass-card p-8 md:p-10 border border-warm-200/50 shadow-sm relative overflow-hidden">
            {/* Background Blob Effect */}
            <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-2xl font-bold mb-2 relative z-10 text-warm-900">Send a Message</h2>
            <p className="text-warm-800/70 text-sm font-medium mb-8 relative z-10">
              Have a specific role or project in mind? Fill out the form below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-warm-800">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-md focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-sm shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-warm-800">Work Email</label>
                  <input 
                    type="email" 
                    placeholder="recruiter@company.com"
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-md focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-sm shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-warm-800">Subject</label>
                <input 
                  type="text" 
                  placeholder="Opportunity for 2026 Internship"
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-md focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-sm shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-warm-800">Message</label>
                <textarea 
                  rows="5"
                  placeholder="Hi Siddharth, we saw your portfolio and are interested in..."
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-md focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-sm resize-none shadow-sm"
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-warm-800">Attach Job Spec or Resume (Optional)</label>
                <div className="w-full border-2 border-dashed border-accent/30 rounded-2xl bg-white/30 backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center hover:bg-accent/5 transition-colors cursor-pointer group shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-warm-500 mb-3 group-hover:text-accent transition-colors">
                    <Paperclip size={18} />
                  </div>
                  <p className="text-sm font-bold text-warm-900 mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs font-medium text-warm-800/60">PDF, DOCX (Max 5MB)</p>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-accent text-white px-6 py-4 rounded-full font-bold text-base shadow-md hover:bg-accent-hover transition-colors"
                >
                  <Send size={18} />
                  Send Message
                </button>
                <p className="text-center text-[10px] text-warm-800/50 leading-relaxed max-w-md mx-auto">
                  By submitting this form, you agree to Siddharth processing your information solely for professional communication purposes.
                </p>
              </div>

            </form>
          </div>
        </FadeIn>

      </div>

      {/* 3. Bottom CTA Block */}
      <FadeIn delay={0.3} className="mt-20">
        <div className="glass-card bg-accent/5 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-accent/10 relative overflow-hidden">
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-2xl transform -translate-y-1/2 pointer-events-none" />
          
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/60 text-accent flex items-center justify-center shrink-0 shadow-sm border border-white">
              <FileText size={28} />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-warm-900 mb-2">Need my full credentials?</h2>
              <p className="text-warm-800/80 font-medium text-sm md:text-base">
                Download the latest PDF version of my technical resume.
              </p>
            </div>
          </div>
          <a 
            href="/resume" 
            className="relative z-10 flex items-center justify-center gap-2 bg-accent text-white px-8 py-3.5 rounded-full font-semibold shadow-md hover:bg-accent-hover hover:-translate-y-0.5 transition-all w-full md:w-auto whitespace-nowrap"
          >
            <Paperclip size={18} />
            View Full Resume
          </a>
        </div>
      </FadeIn>

    </div>
  );
}
