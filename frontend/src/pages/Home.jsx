import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import AchievementsRibbon from '../components/home/AchievementsRibbon';
import SkillsSection from '../components/home/SkillsSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ProfessionalEcosystem from '../components/home/ProfessionalEcosystem';
import EducationExperience from '../components/home/EducationExperience';
import ContactCTA from '../components/home/ContactCTA';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HeroSection />
      <AchievementsRibbon />
      <SkillsSection />
      <FeaturedProjects />
      <ProfessionalEcosystem />
      <EducationExperience />
      <ContactCTA />
    </motion.div>
  );
}
