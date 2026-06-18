import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { education, experience } from '../../data/portfolioData';

export default function EducationExperience() {
  return (
    <section className="py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🎓</span>
            <h2 className="text-2xl font-bold text-warm-900">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="glass-card p-5 space-y-2">
                <div className="flex items-start gap-3">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-warm-900 text-sm leading-snug">
                      {edu.institution}
                    </h3>
                    <p className="text-accent text-xs font-medium mt-0.5">
                      {edu.degree}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 ml-5 text-xs text-warm-800/60">
                  <span>📅 {edu.period}</span>
                  <span className="font-semibold text-warm-900">{edu.grade}</span>
                </div>
                <ul className="ml-5 space-y-1">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="text-xs text-warm-800/70 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-warm-800/40" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover transition-colors mt-4"
          >
            View Full Career History <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Experience Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">💼</span>
            <h2 className="text-2xl font-bold text-warm-900">Experience</h2>
          </div>

          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="glass-card p-5 space-y-2">
                <div className="flex items-start gap-3">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-warm-900 text-sm">
                        {exp.role}
                      </h3>
                      {exp.active && (
                        <span className="px-2 py-0.5 text-[10px] font-bold bg-green-100 text-green-700 rounded-full">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-accent text-xs font-medium mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <p className="ml-5 text-xs text-warm-800/60">📅 {exp.period}</p>
                <ul className="ml-5 space-y-1">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="text-xs text-warm-800/70 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-warm-800/40 mt-1.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover transition-colors mt-4"
          >
            More About My Journey <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
