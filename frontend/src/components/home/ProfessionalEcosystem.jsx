import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { useEffect } from 'react';
import { personalInfo, githubStats } from '../../data/portfolioData';

/* Inline SVG brand icons */
const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function ProfessionalEcosystem() {
  useEffect(() => {
    // Dynamically load the LinkedIn badge script when component mounts
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-12 md:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-warm-900">
          Professional Ecosystem
        </h2>
        <p className="text-warm-800/70 mt-1 max-w-lg">
          Where I code and where I network. A live look into my activity and professional presence.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* GitHub Activity Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 flex flex-col gap-5"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GithubIcon size={24} />
              <div>
                <h3 className="font-semibold text-warm-900">GitHub Activity</h3>
                <p className="text-xs text-warm-800/60">{personalInfo.githubHandle}</p>
              </div>
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-accent-hover transition-colors"
            >
              Follow <ArrowRight size={12} />
            </a>
          </div>

          {/* Stats */}
          <p className="text-xs font-semibold text-warm-800 uppercase tracking-wide">
            {githubStats.commitsLastYear} contributions in the last year
          </p>

          {/* Placeholder Contribution Graph */}
          <div className="w-full h-24 bg-warm-100 rounded-lg flex items-center justify-center overflow-hidden">
            <div className="flex gap-[2px] flex-wrap p-3">
              {Array.from({ length: 52 * 5 }, (_, i) => {
                const intensity = Math.random();
                let bg = 'bg-warm-200/60';
                if (intensity > 0.75) bg = 'bg-green-500';
                else if (intensity > 0.5) bg = 'bg-green-400';
                else if (intensity > 0.3) bg = 'bg-green-300/70';
                return <div key={i} className={`w-[6px] h-[6px] rounded-[1px] ${bg}`} />;
              })}
            </div>
          </div>

          {/* Recent Repos */}
          <div className="flex flex-col gap-2 pt-1">
            {githubStats.recentRepos.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-sm text-warm-800 hover:text-accent transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                  {repo.name}
                </span>
                <span className="flex items-center gap-1 text-xs text-warm-800/60">
                  <Star size={12} /> {repo.stars}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* LinkedIn Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[330px_1fr] gap-6 items-start">
            {/* Official LinkedIn Badge */}
            <div
              className="badge-base LI-profile-badge w-full"
              data-locale="en_US"
              data-size="large"
              data-theme="light"
              data-type="VERTICAL"
              data-vanity="sidd-sharma22"
              data-version="v1"
            ></div>

            {/* Professional Snapshot */}
            <div className="flex flex-col gap-4 h-full justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 text-center">
                  <p className="text-2xl font-bold text-accent">500+</p>
                  <p className="text-xs uppercase tracking-wide text-warm-800/60">
                    Connections
                  </p>
                </div>

                <div className="glass-card p-4 text-center">
                  <p className="text-2xl font-bold text-accent">20k+</p>
                  <p className="text-xs uppercase tracking-wide text-warm-800/60">
                    Impressions
                  </p>
                </div>

                <div className="glass-card p-4 text-center">
                  <p className="text-xl font-bold text-accent">6+</p>
                  <p className="text-xs uppercase tracking-wide text-warm-800/60">
                    Projects
                  </p>
                </div>

                <div className="glass-card p-4 text-center">
                  <p className="text-xl font-bold text-accent">2</p>
                  <p className="text-xs uppercase tracking-wide text-warm-800/60">
                    Internship
                  </p>
                </div>

                <div className="glass-card p-4 text-center col-span-2">
                  <p className="font-semibold text-warm-900">IAENG Member</p>
                  <p className="text-xs text-warm-800/60 mt-1">
                    Open to Work • B.Tech CSE @ IIIT Kottayam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
