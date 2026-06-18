import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';

export default function SkillsSection() {
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
            Technical Proficiency
          </h2>
          <p className="text-warm-800/70 mt-1 max-w-lg">
            A comprehensive overview of my tech stack and tools I use to build robust software.
          </p>
        </div>
        <Link
          to="/about"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover transition-colors whitespace-nowrap"
        >
          View Detailed Matrix <ArrowRight size={14} />
        </Link>
      </motion.div>

      {/* Skill Category Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
            }}
            className="glass-card p-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="text-sm font-semibold text-warm-900 uppercase tracking-wide">
                {cat.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 text-xs font-medium bg-white/60 border border-warm-200 text-warm-800 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
