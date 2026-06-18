import { Link } from 'react-router-dom';
import { Mail, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

/* Inline SVG brand icons */
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

export default function Footer() {
  return (
    <footer className="w-full border-t border-warm-200 mt-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">

          {/* Left Column: Branding & Info */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <Code2 size={24} className="text-accent group-hover:-rotate-12 transition-transform duration-300" />
              <span className="text-xl font-bold tracking-tight text-warm-900">
                Siddharth
              </span>
            </Link>
            <p className="text-sm text-warm-800/80 leading-relaxed max-w-xs font-medium">
              B.Tech CSE Student (2028). Aspiring Software Engineer building meaningful digital experiences.
            </p>
            <div className="flex items-center gap-4">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-warm-200 flex items-center justify-center text-warm-800 hover:text-white hover:bg-warm-900 hover:border-warm-900 transition-all">
                <GithubIcon size={18} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-warm-200 flex items-center justify-center text-warm-800 hover:text-white hover:bg-[#0077B5] hover:border-[#0077B5] transition-all">
                <LinkedinIcon size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="w-10 h-10 rounded-full border border-warm-200 flex items-center justify-center text-warm-800 hover:text-white hover:bg-accent hover:border-accent transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Middle Column: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-warm-900 tracking-wider uppercase mb-6">Navigation</h4>
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-sm font-medium text-warm-800/80 hover:text-accent transition-colors w-fit">Home</Link>
              <Link to="/projects" className="text-sm font-medium text-warm-800/80 hover:text-accent transition-colors w-fit">Projects</Link>
              <Link to="/about" className="text-sm font-medium text-warm-800/80 hover:text-accent transition-colors w-fit">About</Link>
              <Link to="/resume" className="text-sm font-medium text-warm-800/80 hover:text-accent transition-colors w-fit">Resume</Link>
              <Link to="/contact" className="text-sm font-medium text-warm-800/80 hover:text-accent transition-colors w-fit">Contact</Link>
            </nav>
          </div>

          {/* Right Column: CTA */}
          <div>
            <h4 className="text-xs font-bold text-warm-900 tracking-wider uppercase mb-6">Get In Touch</h4>
            <p className="text-sm text-warm-800/80 mb-6 font-medium">
              Open for 2026 Internships & SDE roles.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-full border border-warm-200 text-warm-900 font-bold text-sm hover:border-accent hover:text-accent transition-all bg-white"
            >
              Hire Me
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-warm-200 flex flex-col md:flex-row items-center justify-between gap-4 relative">
          {/* Left-aligned Copyright */}
          <div className="text-sm text-warm-800/60 font-medium text-center md:text-left">
            © {new Date().getFullYear()} Siddharth. All rights reserved.
          </div>

          {/* Right aligned text - using margin-left auto to push it to the right */}
          <div className="text-sm text-warm-800/60 font-medium ml-auto">
            Built with React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}
