import { Link } from 'react-router-dom';
import { ArrowRight, Activity } from 'lucide-react';

/* Inline SVG brand icon */
const GithubIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export default function ProjectCard({ project }) {
  // Expected project shape: { slug, title, tagline, tags: [], metric: '', image: '', repo: '' }
  return (
    <div className="glass-card overflow-hidden flex flex-col h-full group">
      {/* Thumbnail */}
      <div className="w-full h-48 bg-warm-200 overflow-hidden relative">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-warm-800 font-medium">
            No Image Provided
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-warm-900 mb-1">{project.title}</h3>
        <p className="text-sm text-warm-800 mb-4 flex-1">{project.tagline}</p>
        
        {/* Metric */}
        {project.metric && (
          <div className="flex items-center gap-2 text-xs font-medium text-accent mb-4">
            <Activity size={14} />
            {project.metric}
          </div>
        )}

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="px-2 py-1 text-xs font-medium bg-white/50 border border-warm-200 text-warm-800 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-auto">
          <Link 
            to={`/projects/${project.slug}`} 
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-full transition-colors shadow-sm"
          >
            View Details <ArrowRight size={16} />
          </Link>
          {project.repo && (
            <a 
              href={project.repo} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 text-warm-800 hover:text-warm-900 glass-button"
              aria-label="View Repository"
            >
              <GithubIcon size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
