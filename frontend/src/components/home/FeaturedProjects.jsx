import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { featuredProjects } from '../../data/portfolioData';
import ProjectCard from '../ProjectCard';

export default function FeaturedProjects() {
  return (
    <section className="py-12 md:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-10"
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-warm-900">
            Featured Projects
          </h2>
          <p className="text-warm-800/70 mt-1 max-w-lg">
            Hand-picked projects that demonstrate my ability to solve real-world problems through code.
          </p>
        </div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover transition-colors whitespace-nowrap"
        >
          Browse All Projects <ArrowRight size={14} />
        </Link>
      </motion.div>

      {/* Project Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={project.slug}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
