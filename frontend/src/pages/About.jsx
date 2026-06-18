import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code2, 
  Briefcase, 
  Award, 
  Download, 
  CheckCircle2, 
  Mail
} from 'lucide-react';
import { 
  personalInfo, 
  experience, 
  education, 
  skillCategories, 
  memberships,
  githubStats
} from '../data/portfolioData';

// Reusable animated container
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 max-w-5xl mx-auto space-y-24 text-warm-900">
      
      {/* 1. Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column */}
        <FadeIn className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full mb-6 tracking-wide">
            {personalInfo.headline}
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            About <span className="text-accent">{personalInfo.name}.</span>
          </h1>
          <div className="text-warm-800/80 leading-relaxed space-y-4 text-lg">
            <p>
              I am a B.Tech Computer Science student at university, specializing in <strong>Artificial Intelligence and Full-Stack Engineering</strong>. My journey began with a curiosity for how data flows through the web, which evolved into a passion for building scalable systems and solving complex algorithmic challenges.
            </p>
            <p>
              Currently, I am focused on mastering <strong>modern web architectures</strong> and exploring the intersection of <strong>Machine Learning and Web Development</strong>. When I'm not coding, you'll find me organizing events with our university clubs or exploring new tech stacks.
            </p>
          </div>
        </FadeIn>

        {/* Right Column: Quick Stats */}
        <FadeIn delay={0.2} className="lg:col-span-5 w-full">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-warm-200/60">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-warm-100">
              <CheckCircle2 size={20} className="text-accent" />
              <h3 className="font-bold text-warm-900">Quick Stats</h3>
            </div>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <div>
                <p className="text-3xl font-extrabold text-warm-900 mb-1">{githubStats.totalRepos}+</p>
                <p className="text-xs font-bold text-warm-800/50 uppercase tracking-widest">Projects Built</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-warm-900 mb-1">{githubStats.commitsLastYear}+</p>
                <p className="text-xs font-bold text-warm-800/50 uppercase tracking-widest">GitHub Commits</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-warm-900 mb-1">7.69/10</p>
                <p className="text-xs font-bold text-warm-800/50 uppercase tracking-widest">Course CGPA</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-warm-900 mb-1">2</p>
                <p className="text-xs font-bold text-warm-800/50 uppercase tracking-widest">Internships</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 2. Education Section */}
      <section>
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-accent/10 rounded-xl text-accent">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-warm-200/60 h-full flex flex-col hover:border-warm-300 transition-colors">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold">{edu.institution}</h3>
                  <div className="text-xs font-semibold bg-warm-100 text-warm-800 px-3 py-1 rounded-full whitespace-nowrap">
                    {edu.period}
                  </div>
                </div>
                
                <p className="text-accent font-semibold text-sm mb-3">{edu.degree}</p>
                
                <div className="flex items-center gap-4 text-xs font-semibold text-warm-800/60 mb-6">
                  <span className="flex items-center gap-1">📍 India</span>
                  <span className="flex items-center gap-1">🏆 {edu.grade}</span>
                </div>

                <div className="mt-auto pt-6 border-t border-warm-100">
                  <p className="text-xs font-bold text-warm-800/50 uppercase tracking-widest mb-3">Key Highlights</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, hIdx) => (
                      <span key={hIdx} className="text-xs font-medium bg-warm-50 text-warm-900 border border-warm-200/60 px-3 py-1.5 rounded-md">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 3. Technical Skills Matrix */}
      <section>
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-accent/10 rounded-xl text-accent">
              <Code2 size={24} />
            </div>
            <h2 className="text-2xl font-bold">Technical Skills Matrix</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="bg-white rounded-2xl p-6 shadow-sm border border-warm-200/60 hover:border-warm-300 transition-colors">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-warm-100">
                <span className="text-xl">{category.icon}</span>
                <h3 className="font-bold text-warm-900">{category.title}</h3>
              </div>
              
              <ul className="space-y-4">
                {category.skills.map((skill, sIdx) => {
                  // Determine dummy proficiency purely for visual aesthetics matching Visily
                  let proficiency = "Proficient";
                  let bgClass = "bg-warm-100 text-warm-700";
                  if (sIdx === 0 || sIdx === 2) {
                    proficiency = "Expert";
                    bgClass = "bg-accent text-white";
                  }

                  return (
                    <li key={sIdx} className="flex justify-between items-center group">
                      <span className="text-sm font-medium text-warm-800/80 group-hover:text-warm-900 transition-colors">{skill}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${bgClass}`}>
                        {proficiency}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. Professional Experience */}
      <section>
        <FadeIn>
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2.5 bg-accent/10 rounded-xl text-accent">
              <Briefcase size={24} />
            </div>
            <h2 className="text-2xl font-bold">Professional Experience</h2>
          </div>
        </FadeIn>

        <div className="relative pl-6 md:pl-10">
          {/* Vertical line connecting nodes */}
          <div className="absolute left-[9px] md:left-[17px] top-4 bottom-0 w-px bg-warm-200" />

          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-6 md:-left-10 top-1.5 w-5 h-5 rounded-full bg-white border-4 border-accent shadow-sm z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-warm-900">{exp.role}</h3>
                  <div className="text-xs font-semibold text-warm-800/60 bg-white px-3 py-1 rounded-full border border-warm-200/60 w-fit flex items-center gap-2">
                    <span className="w-2 h-2 rounded-sm bg-warm-200"></span>
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-accent font-semibold mb-5">{exp.company}</p>

                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-warm-800/80 text-sm md:text-base leading-relaxed">
                      <CheckCircle2 size={18} className="text-accent/80 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Memberships & Recognition */}
      <section>
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-accent/10 rounded-xl text-accent">
              <Award size={24} />
            </div>
            <h2 className="text-2xl font-bold">Certificates & Recognition</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {memberships.map((membership, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-warm-200/60 hover:border-warm-300 transition-colors h-full flex gap-4">
                <div className="mt-1 text-warm-400">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-warm-900 mb-1">{membership.organization}</h3>
                  <p className="text-accent text-sm font-semibold mb-2">{membership.role}</p>
                  <p className="text-xs text-warm-800/70 leading-relaxed uppercase tracking-wide font-medium">
                    {membership.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 6. Call to Action (CTA) bottom block */}
      <section>
        <FadeIn>
          <div className="bg-accent/5 rounded-3xl p-10 md:p-16 text-center border border-accent/10 relative overflow-hidden">
            {/* Background decorative blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            
            <div className="mx-auto bg-accent text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent/30 relative z-10">
              <Download size={24} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-warm-900 mb-4 relative z-10">
              Ready to collaborate?
            </h2>
            
            <p className="text-warm-800/70 max-w-lg mx-auto mb-10 relative z-10">
              Download my comprehensive resume for a detailed look at my technical journey, or let's connect to discuss your next big project.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a 
                href={personalInfo.resumeFile} 
                download
                className="flex items-center justify-center gap-2 bg-accent text-white px-8 py-3.5 rounded-xl font-semibold shadow-md shadow-accent/20 hover:bg-accent-hover hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                <Download size={18} />
                Download Full CV
              </a>
              <a 
                href="/contact" 
                className="flex items-center justify-center gap-2 bg-white text-warm-900 border border-warm-200 px-8 py-3.5 rounded-xl font-semibold hover:bg-warm-50 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                Let's Talk
                <span className="text-lg">→</span>
              </a>
            </div>
            
            <p className="text-[10px] uppercase tracking-widest text-warm-400 mt-12 relative z-10 font-bold">
              UPDATED RECENTLY • PDF FORMAT
            </p>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
