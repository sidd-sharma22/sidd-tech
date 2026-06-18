// Centralized data for the entire portfolio — easy to update later
export const personalInfo = {
  name: 'Siddharth',
  fullName: 'Siddharth Sharma',
  degree: 'B.Tech Computer Science & Engineering',
  college: 'IIIT Kottayam',
  graduationYear: 2028,
  classOf: 'Class of 2028',
  cgpa: '7.69/10',
  schoolPercentage: '94%',
  headline: 'Aspiring Software Engineer & Full-Stack Developer',
  pitch:
    'B.Tech CSE student passionate about building scalable web applications and solving complex algorithmic challenges. Currently focusing on Next.js, Cloud Architecture, and AI integration.',
  email: 'siddharthsharma2219@gmail.com',
  github: 'https://github.com/sidd-sharma22',
  githubHandle: '@sidd-sharma22',
  linkedin: 'https://linkedin.com/in/sidd-sharma22',
  linkedinHandle: 'sidd-sharma22',
  availability: 'Open for internships & SDE roles — available from July 2026',
  resumeFile: '/Sidd-Resume.pdf',
};

export const achievements = [
  { label: 'Academic Standing', value: 'GPA: 7.69/10', icon: '🎓' },
  { label: 'Featured Projects', value: '3 Portfolio Pieces', icon: '💼' },
  { label: 'Contributions', value: '500+ Commits/Year', icon: '📊' },
  { label: 'Skill Endorsements', value: '20+ on LinkedIn', icon: '🤝' },
];

export const skillCategories = [
  {
    title: 'Frontend Development',
    icon: '🖥️',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux Toolkit'],
  },
  {
    title: 'Backend & Database',
    icon: '🗄️',
    skills: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['AWS S3, EC2', 'Docker', 'Vercel', 'Firebase', 'Git/GitHub'],
  },
  {
    title: 'Core Computer Science',
    icon: '🧠',
    skills: ['Data Structures', 'Algorithms', 'DBMS', 'OS', 'OOPs'],
  },
];

export const featuredProjects = [
  {
    slug: 'khatu-shyam-trading',
    title: 'Khatu Shyam Trading Co.',
    tagline:
      'A full-stack B2B e-commerce platform for a wholesale trading company with real-time inventory and order management.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    metric: '10k+ requests/day',
    image: '',
    repo: 'https://github.com/sidd-sharma22/khatu-shyam-trading',
  },
  {
    slug: 'studyhub',
    title: 'StudyHub',
    tagline:
      'An interactive learning platform for students built with React and GraphQL during the DecodeLabs internship.',
    tags: ['React.js', 'GraphQL', 'Node.js', 'Framer Motion'],
    metric: 'Used by 500+ students',
    image: '',
    repo: 'https://github.com/sidd-sharma22/studyhub',
  },
  {
    slug: 'file-compression-cli',
    title: 'File Compression CLI',
    tagline:
      'A high-performance command-line tool implementing Huffman coding for lossless file compression in C++.',
    tags: ['C++', 'Huffman Coding', 'Data Structures'],
    metric: '60% avg compression ratio',
    image: '',
    repo: 'https://github.com/sidd-sharma22/file-compression-cli',
  },
];

export const education = [
  {
    institution: 'Indian Institute of Information Technology, Kottayam',
    degree: 'B.Tech in Computer Science & Engineering',
    period: '2024 – 2028 (Expected)',
    grade: 'CGPA: 7.69/10',
    highlights: [
      'Specialization in AI & ML',
      'Active member of CodeChef Chapter',
    ],
  },
  {
    institution: 'Govt. Excellence H.S. School, Gwalior',
    degree: 'Higher Secondary (CBSE)',
    period: '2022 – 2024',
    grade: 'Percentage: 94%',
    highlights: ['PCM Stream', 'School Topper in Computer Science'],
  },
];

export const experience = [
  {
    role: 'Research Intern',
    company: 'ABV-IIITM Gwalior',
    period: 'May 2025 – July 2025',
    active: false,
    bullets: [
      'Worked on applied ML research for predictive modelling in healthcare datasets.',
      'Built data pipelines using Python, Pandas, and Scikit-learn.',
      'Co-authored an internal research report presented to the faculty panel.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'DecodeLabs',
    period: 'Summer 2025',
    active: false,
    bullets: [
      'Selected for a competitive 8-week internship program focused on building client-side dashboards using React and GraphQL.',
      'Developed the StudyHub platform serving 500+ students.',
    ],
  },
];

export const githubStats = {
  totalRepos: 15,
  totalStars: 28,
  commitsLastYear: 520,
  topLanguage: 'JavaScript',
  recentRepos: [
    { name: 'khatu-shyam-trading', stars: 12, url: 'https://github.com/sidd-sharma22/khatu-shyam-trading' },
    { name: 'file-compression-cli', stars: 8, url: 'https://github.com/sidd-sharma22/file-compression-cli' },
    { name: 'studyhub', stars: 5, url: 'https://github.com/sidd-sharma22/studyhub' },
  ],
};

export const memberships = [
  {
    organization: 'Chitrachaya (Photography & Videography Club)',
    role: 'Sublead',
    description: 'Leading creative initiatives, organizing workshops, and managing media coverage for college events.',
  },
  {
    organization: 'International Association of Engineers (IAENG)',
    role: 'Member',
    description: 'Member ID: 568889. Active participant in global engineering discussions and networking.',
  }
];
