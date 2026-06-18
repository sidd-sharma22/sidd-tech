import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Clock, User, Tag, Layers } from 'lucide-react';
import { projectDetails } from '../data/projectDetails';

const GithubIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectDetails[slug];

  if (!project) {
    return (
      <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="py-20 text-center">
        <h1 className="text-3xl font-bold text-warm-900 mb-4">Project Not Found</h1>
        <p className="text-warm-800/60 mb-6">The project you're looking for doesn't exist.</p>
        <Link to="/projects" className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Back Link */}
      <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-warm-800/60 hover:text-accent transition-colors mb-6">
        <ArrowLeft size={14} /> Back to projects
      </Link>

      {/* Project Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl md:text-4xl font-bold text-warm-900 mb-2">{project.title}</h1>
        <p className="text-warm-800/70 text-lg mb-5 max-w-2xl">{project.tagline}</p>
        <div className="flex flex-wrap gap-3 mb-8">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-full transition-colors shadow-sm"
            >
              <GithubIcon size={16} /> View Source
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-warm-900 glass-button hover:text-accent"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </motion.div>

      {/* Hero Screenshot Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-card overflow-hidden mb-10"
      >
        <div className="w-full h-64 md:h-96 bg-gradient-to-br from-warm-200 to-warm-300 flex items-center justify-center text-warm-800/40 text-lg font-medium">
          Project Hero Screenshot
        </div>
      </motion.div>

      {/* Quick Facts Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        <div className="glass-card p-4 text-center">
          <User size={16} className="mx-auto mb-1.5 text-accent" />
          <p className="text-[10px] uppercase tracking-wider text-warm-800/50 font-medium">Role</p>
          <p className="text-sm font-semibold text-warm-900 mt-0.5">{project.role}</p>
        </div>
        <div className="glass-card p-4 text-center">
          <Clock size={16} className="mx-auto mb-1.5 text-accent" />
          <p className="text-[10px] uppercase tracking-wider text-warm-800/50 font-medium">Timeline</p>
          <p className="text-sm font-semibold text-warm-900 mt-0.5">{project.timeline}</p>
        </div>
        <div className="glass-card p-4 text-center">
          <Tag size={16} className="mx-auto mb-1.5 text-accent" />
          <p className="text-[10px] uppercase tracking-wider text-warm-800/50 font-medium">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-1 mt-1">
            {project.techStack.slice(0, 3).map((t, i) => (
              <span key={i} className="px-1.5 py-0.5 text-[9px] font-medium bg-white/50 border border-warm-200 text-warm-800 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="glass-card p-4 text-center">
          <Layers size={16} className="mx-auto mb-1.5 text-accent" />
          <p className="text-[10px] uppercase tracking-wider text-warm-800/50 font-medium">Category</p>
          <p className="text-sm font-semibold text-warm-900 mt-0.5">{project.category}</p>
        </div>
      </motion.div>

      {/* Problem / Solution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <div className="space-y-3">
          <span className="text-[10px] uppercase tracking-[0.15em] text-red-500/80 font-bold flex items-center gap-1.5">
            🔴 The Problem
          </span>
          <h3 className="text-xl font-bold text-warm-900">{project.problem.heading}</h3>
          <p className="text-sm text-warm-800/70 leading-relaxed">{project.problem.description}</p>
        </div>
        <div className="space-y-3">
          <span className="text-[10px] uppercase tracking-[0.15em] text-green-600/80 font-bold flex items-center gap-1.5">
            🟢 The Solution
          </span>
          <h3 className="text-xl font-bold text-warm-900">{project.solution.heading}</h3>
          <p className="text-sm text-warm-800/70 leading-relaxed">{project.solution.description}</p>
        </div>
      </motion.div>

      {/* System Architecture */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card p-6 md:p-8 mb-12"
      >
        <h3 className="text-lg font-bold text-warm-900 mb-1">System Architecture</h3>
        <p className="text-sm text-warm-800/60 mb-6">{project.architecture.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Architecture Diagram Placeholder */}
          <div className="bg-warm-100 rounded-xl h-48 flex items-center justify-center text-warm-800/30 text-sm font-medium">
            Architecture Diagram
          </div>
          {/* Key Technical Decisions */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-warm-900 flex items-center gap-2">
              🔑 Key Technical Decisions
            </h4>
            {project.architecture.decisions.map((d, idx) => (
              <div key={idx} className="pl-4 border-l-2 border-accent/30">
                <p className="text-xs text-warm-800/70 italic leading-relaxed">"{d}"</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Technical Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-warm-900">Technical Breakdown</h3>
          <p className="text-sm text-warm-800/60 mt-1">Deep dive into the specialized technologies utilized.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {project.technicalBreakdown.map((section, idx) => (
            <div key={idx} className="glass-card p-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">{section.icon}</span>
                <h4 className="text-sm font-semibold text-warm-900">{section.title}</h4>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2 text-xs text-warm-800/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Project Walkthrough */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h3 className="text-xl font-bold text-warm-900 mb-1">Project Walkthrough</h3>
        <p className="text-sm text-warm-800/60 mb-6">Visual breakdown of key platform features.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.walkthroughScreens.map((screen, idx) => (
            <div key={idx} className="glass-card overflow-hidden">
              <div className="w-full h-48 bg-warm-100 flex items-center justify-center text-warm-800/30 text-sm font-medium">
                {screen.title} Screenshot
              </div>
              <div className="p-5">
                <h4 className="text-sm font-semibold text-warm-900 mb-1">{screen.title}</h4>
                <p className="text-xs text-warm-800/60 leading-relaxed">{screen.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Results & Impact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-warm-900">Results & Impact</h3>
          {project.results.quote && (
            <p className="text-sm text-warm-800/60 mt-3 max-w-xl mx-auto italic leading-relaxed">
              {project.results.quote}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {project.results.metrics.map((m, idx) => (
            <div key={idx} className="glass-card p-6 text-center space-y-2">
              <p className="text-3xl font-bold text-accent">{m.value}</p>
              <p className="text-xs uppercase tracking-wider text-warm-800/50 font-semibold">{m.label}</p>
              <p className="text-[11px] text-warm-800/60 leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass p-8 md:p-10 text-center space-y-4 mb-8"
        style={{ background: 'linear-gradient(135deg, rgba(229,141,87,0.08) 0%, rgba(255,255,255,0.5) 100%)' }}
      >
        <h3 className="text-xl font-bold text-warm-900">Interested in the tech?</h3>
        <p className="text-sm text-warm-800/60 max-w-lg mx-auto">
          This project is part of my continuous exploration into full-stack development. I'm currently looking for internships and entry-level SDE roles starting Summer 2026.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-full transition-colors shadow-md"
          >
            Discuss this project
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-warm-900 glass-button hover:text-accent"
          >
            View more projects <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
