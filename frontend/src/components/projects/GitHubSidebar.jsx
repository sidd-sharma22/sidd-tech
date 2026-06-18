import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalInfo, githubStats } from '../../data/portfolioData';

const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export default function GitHubSidebar() {
  const langColors = {
    JavaScript: '#F7DF1E',
    Python: '#3776AB',
    'C++': '#00599C',
    TypeScript: '#3178C6',
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      {/* GitHub Insights Card */}
      <div className="glass-card p-5 space-y-5">
        <div className="flex items-center gap-2 text-warm-900 font-semibold text-sm">
          <GithubIcon size={18} />
          GitHub Insights
        </div>

        {/* Big Stats */}
        <div className="flex gap-6">
          <div>
            <p className="text-2xl font-bold text-warm-900">{githubStats.commitsLastYear}+</p>
            <p className="text-[10px] uppercase tracking-wider text-warm-800/50 font-medium">Commits</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-warm-900">{githubStats.totalRepos}</p>
            <p className="text-[10px] uppercase tracking-wider text-warm-800/50 font-medium">Repos</p>
          </div>
        </div>

        {/* Heatmap Placeholder */}
        <div>
          <p className="text-[10px] uppercase tracking-wider text-warm-800/50 font-medium mb-2">
            Commits Heatmap (Last 12 Weeks)
          </p>
          <div className="flex gap-1">
            {Array.from({ length: 12 }, (_, i) => {
              const height = 20 + Math.floor(Math.random() * 60);
              return (
                <div
                  key={i}
                  className="flex-1 bg-accent/30 rounded-sm"
                  style={{ height: `${height}%`, minHeight: `${height * 0.6}px` }}
                />
              );
            })}
          </div>
        </div>

        {/* Language Distribution */}
        <div>
          <p className="text-[10px] uppercase tracking-wider text-warm-800/50 font-medium mb-3">
            Language Distribution
          </p>
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-8 border-accent/20 relative flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center text-white text-[10px] font-bold">
                JS 55%
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-3">
            {Object.entries(langColors).map(([lang, color]) => (
              <span key={lang} className="flex items-center gap-1 text-[10px] text-warm-800/60">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                {lang}
              </span>
            ))}
          </div>
        </div>

        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-warm-800 glass-button hover:text-accent transition-colors"
        >
          Follow on GitHub <ArrowRight size={12} />
        </a>
      </div>

      {/* Quick Links Card */}
      <div className="glass-card p-5 space-y-4">
        <p className="text-sm font-semibold text-warm-900 flex items-center gap-2">
          🔗 Quick Links
        </p>
        <div>
          <p className="text-xs font-medium text-warm-800 mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {['Docker', 'AWS', 'FastAPI', 'PostgreSQL', 'Redis', 'MongoDB'].map((t) => (
              <span key={t} className="px-2 py-1 text-[10px] font-medium bg-white/50 border border-warm-200 text-warm-800 rounded-md">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-medium text-warm-800 mb-2">Research Interests</p>
          <div className="flex flex-wrap gap-1.5">
            {['Applied ML', 'Cloud Architecture', 'Systems Design'].map((t) => (
              <span key={t} className="px-2 py-1 text-[10px] font-medium bg-white/50 border border-warm-200 text-warm-800 rounded-md">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Card */}
      <div className="glass-card p-6 text-center space-y-3" style={{ background: 'linear-gradient(135deg, rgba(229,141,87,0.08) 0%, rgba(255,255,255,0.5) 100%)' }}>
        <span className="text-3xl">💻</span>
        <h3 className="text-sm font-bold text-warm-900">Need a developer?</h3>
        <p className="text-[11px] text-warm-800/60">
          Currently open for Summer 2026 internships and freelance research projects.
        </p>
        <Link
          to="/contact"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-accent hover:bg-accent-hover rounded-full transition-colors shadow-sm"
        >
          Get in Touch
        </Link>
      </div>
    </motion.aside>
  );
}
