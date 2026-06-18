import { motion } from 'framer-motion';
import { achievements } from '../../data/portfolioData';

const iconMap = {
  '🎓': '🎓',
  '💼': '💼',
  '📊': '📊',
  '🤝': '🤝',
};

export default function AchievementsRibbon() {
  return (
    <section className="py-8">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
            className="glass-card p-5 text-center flex flex-col items-center gap-2"
          >
            <span className="text-2xl">{item.icon}</span>
            <p className="text-lg font-bold text-warm-900">{item.value}</p>
            <p className="text-xs text-warm-800/70 uppercase tracking-wide font-medium">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
