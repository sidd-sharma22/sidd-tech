import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HeroSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left Column */}
        <motion.div
          className="flex-1 space-y-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Class Badge */}
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wide uppercase bg-accent/10 text-accent rounded-full"
          >
            {personalInfo.classOf}
          </motion.span>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold leading-tight text-warm-900"
          >
            Hi, I'm{' '}
            <span className="text-accent">{personalInfo.name}</span>.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl font-medium text-warm-800"
          >
            {personalInfo.headline}
          </motion.p>

          {/* Elevator Pitch */}
          <motion.p
            variants={fadeUp}
            className="text-base text-warm-800/80 max-w-lg leading-relaxed"
          >
            {personalInfo.pitch}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
            <a
              href={personalInfo.resumeFile}
              download
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-full transition-all shadow-md hover:shadow-lg"
            >
              <Download size={16} />
              Download Resume
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-warm-900 glass-button hover:text-accent"
            >
              Let's Connect
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 pt-2 text-sm text-warm-800/70"
          >
            <span className="text-lg">👥</span>
            <span>Endorsed by <strong className="text-warm-900">15+ Peers & Mentors</strong></span>
          </motion.div>
        </motion.div>

        {/* Right Column — Headshot */}
        <motion.div
          className="flex-shrink-0 relative"
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
        >
          <div className="w-64 h-72 md:w-80 md:h-96 rounded-2xl overflow-hidden glass-card">
            {/* Placeholder for headshot — replace src with actual image */}
            <div className="w-full h-full bg-gradient-to-br from-warm-200 to-warm-300 flex items-center justify-center text-warm-800 text-6xl">
              👨‍💻
            </div>
          </div>
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="absolute -bottom-4 -right-4 glass px-4 py-2 flex items-center gap-2 text-sm font-medium text-warm-900 shadow-lg"
          >
            <span className="text-accent">🏆</span>
            <span>Top 4% JEE Mains</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
