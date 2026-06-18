import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredProjects } from '../data/portfolioData';
import { projectDetails, allProjectTags } from '../data/projectDetails';
import ProjectFilterBar from '../components/projects/ProjectFilterBar';
import GitHubSidebar from '../components/projects/GitHubSidebar';
import ProjectCard from '../components/ProjectCard';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function Projects() {
  const [activeTag, setActiveTag] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let projects = [...featuredProjects];

    // Filter by tag
    if (activeTag !== 'All') {
      projects = projects.filter((p) => p.tags.includes(activeTag));
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      projects = projects.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.tagline.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query))
      );
    }

    return projects;
  }, [activeTag, searchQuery, sortOrder]);

  // Pick the first project as the "hero" featured showcase
  const heroProject = filteredProjects[0];
  const otherProjects = filteredProjects.slice(1);

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-warm-900">
            Project Catalog
          </h1>
          <p className="text-warm-800/70 mt-2 max-w-xl">
            Exploring the intersection of full-stack development, systems programming, and applied ML. A collection of real-world projects and production-ready applications.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-warm-800/60">
          <Star size={14} className="text-accent" />
          <span>{featuredProjects.length} Total Projects • 2024–2028</span>
        </div>
      </motion.div>

      {/* Two-Column Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Filter Bar */}
          <ProjectFilterBar
            tags={allProjectTags}
            activeTag={activeTag}
            onTagChange={setActiveTag}
            sortOrder={sortOrder}
            onSortChange={setSortOrder}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* Featured Showcases Label */}
          <div className="flex items-center gap-4 my-6">
            <div className="h-px bg-warm-200 flex-1" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-warm-800/50 font-semibold">
              Featured Showcases
            </span>
            <div className="h-px bg-warm-200 flex-1" />
          </div>

          {filteredProjects.length === 0 && (
            <div className="glass-card p-12 text-center text-warm-800/60">
              <p className="text-lg font-medium">No projects match your filter.</p>
              <p className="text-sm mt-1">Try selecting a different tag or clearing the search.</p>
            </div>
          )}

          {/* Hero Featured Card (first project — large) */}
          {heroProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card overflow-hidden mb-6 group"
            >
              <div className="relative w-full h-56 md:h-72 bg-warm-200 overflow-hidden">
                {heroProject.image ? (
                  <img src={heroProject.image} alt={heroProject.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-warm-800/40 text-lg font-medium">
                    Project Screenshot
                  </div>
                )}
                <span className="absolute top-4 right-4 px-3 py-1 text-[10px] font-bold uppercase tracking-wide bg-accent text-white rounded-full shadow-sm">
                  Featured
                </span>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  {heroProject.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 text-[10px] font-medium bg-white/50 border border-warm-200 text-warm-800 rounded-md">
                      {tag}
                    </span>
                  ))}
                  <span className="ml-auto flex items-center gap-1 text-xs text-warm-800/50">
                    <Star size={12} /> 12
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-warm-900 mb-2">
                  {heroProject.title}
                </h2>
                <p className="text-sm text-warm-800/70 mb-4 max-w-2xl">
                  {heroProject.tagline}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-warm-800/50">
                    <Clock size={12} /> {projectDetails[heroProject.slug]?.date || '2025'}
                  </span>
                  <Link
                    to={`/projects/${heroProject.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                  >
                    Full View <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other Featured Cards (2-column grid) */}
          {otherProjects.length > 0 && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            >
              {otherProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Sidebar (desktop only) */}
        <div className="hidden lg:block w-72 flex-shrink-0">
          <GitHubSidebar />
        </div>
      </div>
    </motion.div>
  );
}
