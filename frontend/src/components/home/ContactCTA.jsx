import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function ContactCTA() {
  return (
    <section className="py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="glass p-10 md:p-14 text-center md:text-left md:flex md:items-center md:justify-between gap-8"
        style={{
          background: 'linear-gradient(135deg, rgba(229,141,87,0.08) 0%, rgba(255,255,255,0.5) 100%)',
        }}
      >
        <div className="space-y-3 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-warm-900">
            Ready to build something{' '}
            <span className="text-accent">remarkable</span>?
          </h2>
          <p className="text-warm-800/70">
            {personalInfo.availability}. Let's discuss how my skills can contribute to your team's success.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-6 md:mt-0 justify-center md:justify-end">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-full transition-all shadow-md hover:shadow-lg"
          >
            Contact Me <ArrowRight size={16} />
          </Link>
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-warm-900 glass-button hover:text-accent"
          >
            View Resume
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
