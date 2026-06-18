// Rich case-study data for each featured project's detail page
export const projectDetails = {
  'khatu-shyam-trading': {
    title: 'Khatu Shyam Trading Co.',
    tagline:
      'A full-stack B2B e-commerce platform for a wholesale trading company with real-time inventory and order management.',
    date: 'Jan 2025',
    role: 'Solo Developer',
    timeline: 'Nov 2024 — Feb 2025 (4 Mos)',
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    category: 'Full-Stack Web App',
    repo: 'https://github.com/sidd-sharma22/khatu-shyam-trading',
    liveDemo: '',
    featured: true,
    problem: {
      heading: 'Manual order tracking at scale.',
      description:
        'Khatu Shyam Trading Co., a wholesale distributor, relied on phone calls and paper ledgers to manage 200+ daily orders from retail partners. This caused frequent inventory mismatches, delayed invoices, and lost revenue during peak seasons.',
    },
    solution: {
      heading: 'A centralized digital storefront.',
      description:
        'I designed and built a Next.js-powered B2B portal where retailers can browse live inventory, place orders, and track delivery status in real time. An admin dashboard gives the trading company full control over stock levels, pricing, and order fulfillment with Prisma ORM backed by PostgreSQL.',
    },
    architecture: {
      description: 'A multi-layered Next.js application with server-side rendering, API routes, and a PostgreSQL database managed through Prisma ORM.',
      decisions: [
        'Adopted Next.js App Router for hybrid SSR/SSG, cutting initial load time by 40%.',
        'Used Prisma for type-safe database queries, reducing ORM-related bugs to near zero.',
        'Implemented optimistic UI updates for cart operations, improving perceived speed.',
      ],
    },
    technicalBreakdown: [
      {
        title: 'Frontend & UI',
        icon: '🖥️',
        items: [
          'Next.js 14 with App Router for server-side rendering',
          'Tailwind CSS for responsive, utility-first styling',
          'React Hook Form for validated order inputs',
          'Framer Motion for page transitions',
        ],
      },
      {
        title: 'Backend & Data',
        icon: '🗄️',
        items: [
          'Next.js API routes for RESTful endpoints',
          'Prisma ORM with PostgreSQL for relational data',
          'NextAuth.js for role-based authentication',
          'Redis caching layer for frequently-accessed inventory',
        ],
      },
      {
        title: 'DevOps & Infra',
        icon: '☁️',
        items: [
          'Deployed on Vercel with serverless functions',
          'PostgreSQL hosted on Supabase',
          'GitHub Actions for CI/CD pipeline',
          'Sentry for error monitoring',
        ],
      },
    ],
    walkthroughTabs: ['Product Catalog', 'Admin Dashboard'],
    walkthroughScreens: [
      {
        tab: 'Product Catalog',
        title: 'Live Inventory Browser',
        caption: 'Retailers browse categorized products with real-time stock levels, pricing tiers, and one-click ordering.',
      },
      {
        tab: 'Admin Dashboard',
        title: 'Order Management Console',
        caption: 'The admin panel provides complete visibility into pending, processing, and fulfilled orders with bulk actions.',
      },
    ],
    results: {
      quote: '"The platform eliminated 90% of our manual order-entry errors and cut invoice processing from 3 days to real-time."',
      metrics: [
        { value: '10k+', label: 'Requests/Day', description: 'Sustained daily API request volume from retail partners.' },
        { value: '90%', label: 'Error Reduction', description: 'Reduction in manual order-entry mistakes after deployment.' },
        { value: '3x', label: 'Faster Invoicing', description: 'Invoice generation time reduced from days to real-time.' },
      ],
    },
  },

  'studyhub': {
    title: 'StudyHub',
    tagline:
      'An interactive learning platform for students built with React and GraphQL during the DecodeLabs internship.',
    date: 'Summer 2025',
    role: 'Frontend Lead',
    timeline: 'Jun 2025 — Aug 2025 (8 Weeks)',
    techStack: ['React.js', 'GraphQL', 'Node.js', 'Framer Motion'],
    category: 'EdTech Platform',
    repo: 'https://github.com/sidd-sharma22/studyhub',
    liveDemo: '',
    featured: true,
    problem: {
      heading: 'Fragmented study resources.',
      description:
        'Students at partnered institutions were spread across multiple platforms—Google Drive, WhatsApp groups, and email threads—to share notes, assignments, and study materials. This led to outdated content, duplicated effort, and poor collaboration.',
    },
    solution: {
      heading: 'One hub for all learning resources.',
      description:
        'StudyHub provides a centralized, searchable platform where students and educators can upload, organize, and discuss course materials. Built with React on the frontend and a GraphQL API, it features real-time collaboration, smart search, and a clean, distraction-free reading experience.',
    },
    architecture: {
      description: 'A React SPA communicating with a Node.js/Express backend through a GraphQL API layer, with real-time updates via subscriptions.',
      decisions: [
        'Chose GraphQL over REST to reduce over-fetching and allow flexible client queries.',
        'Implemented Apollo Client cache for offline-capable resource browsing.',
        'Used Framer Motion for page transitions to create a polished user experience.',
      ],
    },
    technicalBreakdown: [
      {
        title: 'Frontend & UX',
        icon: '🖥️',
        items: [
          'React 18 with functional components and hooks',
          'Apollo Client for GraphQL state management',
          'Framer Motion for smooth micro-interactions',
          'Responsive design for mobile-first access',
        ],
      },
      {
        title: 'Backend & API',
        icon: '🗄️',
        items: [
          'Node.js with Express server',
          'Apollo Server for GraphQL schema & resolvers',
          'MongoDB for document storage of resources',
          'JWT-based authentication flow',
        ],
      },
      {
        title: 'Collaboration',
        icon: '🤝',
        items: [
          'GraphQL subscriptions for real-time updates',
          'Comment threads on shared resources',
          'Role-based access (student, educator, admin)',
          'File upload with cloud storage integration',
        ],
      },
    ],
    walkthroughTabs: ['Resource Feed', 'Course View'],
    walkthroughScreens: [
      {
        tab: 'Resource Feed',
        title: 'Smart Resource Discovery',
        caption: 'Students browse a curated feed of notes, assignments, and study guides with tag-based filtering and full-text search.',
      },
      {
        tab: 'Course View',
        title: 'Organized Course Materials',
        caption: 'Each course has a dedicated space with structured modules, discussions, and downloadable attachments.',
      },
    ],
    results: {
      quote: '"StudyHub became the go-to platform for our pilot batch, reducing time spent hunting for resources by over 60%."',
      metrics: [
        { value: '500+', label: 'Active Students', description: 'Students onboarded during the 8-week pilot program.' },
        { value: '60%', label: 'Time Saved', description: 'Reduction in time spent searching for study resources.' },
        { value: '1.2k', label: 'Resources Shared', description: 'Notes, assignments, and guides uploaded by the community.' },
      ],
    },
  },

  'file-compression-cli': {
    title: 'File Compression CLI',
    tagline:
      'A high-performance command-line tool implementing Huffman coding for lossless file compression in C++.',
    date: 'Oct 2024',
    role: 'Solo Developer',
    timeline: 'Sep 2024 — Nov 2024 (3 Mos)',
    techStack: ['C++', 'Huffman Coding', 'Data Structures'],
    category: 'Systems Programming',
    repo: 'https://github.com/sidd-sharma22/file-compression-cli',
    liveDemo: '',
    featured: true,
    problem: {
      heading: 'Inefficient file storage and transfer.',
      description:
        'Large text-based log files and data exports from academic projects consumed significant storage and took too long to transfer over slow campus networks. Standard zip utilities were opaque and offered no educational value for understanding compression algorithms.',
    },
    solution: {
      heading: 'A transparent compression engine.',
      description:
        'I built a command-line tool in C++ that implements Huffman coding from scratch. It constructs optimal prefix-free codes based on character frequencies, compresses files into a compact binary format, and supports full decompression with integrity checks. The tool also provides verbose mode to visualize the Huffman tree and coding table.',
    },
    architecture: {
      description: 'A modular C++ application with separate components for frequency analysis, tree construction, encoding, and decoding, all orchestrated through a CLI interface.',
      decisions: [
        'Implemented a priority queue with a custom comparator for optimal tree construction.',
        'Used bitwise operations for compact binary output, minimizing padding overhead.',
        'Added a file header format storing the Huffman table for self-contained decompression.',
      ],
    },
    technicalBreakdown: [
      {
        title: 'Core Algorithm',
        icon: '🧠',
        items: [
          'Huffman tree construction via min-heap priority queue',
          'Optimal prefix-free variable-length coding',
          'Bitwise I/O for compact binary serialization',
          'File header with embedded decoding table',
        ],
      },
      {
        title: 'CLI & I/O',
        icon: '⌨️',
        items: [
          'POSIX-compatible CLI argument parsing',
          'Streaming file I/O for large file support',
          'Progress bar for long compression operations',
          'Verbose mode with tree visualization',
        ],
      },
      {
        title: 'Testing & Quality',
        icon: '✅',
        items: [
          'Round-trip compression/decompression integrity tests',
          'Benchmarked against gzip on standard corpora',
          'Memory-safe implementation with RAII principles',
          'Makefile-based build system',
        ],
      },
    ],
    walkthroughTabs: ['Compression', 'Decompression'],
    walkthroughScreens: [
      {
        tab: 'Compression',
        title: 'File Compression Flow',
        caption: 'The CLI reads an input file, builds the Huffman tree, and outputs a compressed binary file with progress tracking.',
      },
      {
        tab: 'Decompression',
        title: 'File Decompression Flow',
        caption: 'Decompression reads the embedded Huffman table from the file header and reconstructs the original content losslessly.',
      },
    ],
    results: {
      quote: '"A hands-on deep dive into compression algorithms that reinforced my understanding of greedy algorithms and bit-level programming."',
      metrics: [
        { value: '60%', label: 'Avg Compression', description: 'Average compression ratio achieved on text-heavy files.' },
        { value: '< 1s', label: 'Speed (10MB)', description: 'Compression time for a 10MB text file on standard hardware.' },
        { value: '100%', label: 'Lossless', description: 'Perfect round-trip fidelity verified across all test cases.' },
      ],
    },
  },
};

// Extract all unique tech tags across all projects for the filter bar
export const allProjectTags = (() => {
  const tags = new Set();
  Object.values(projectDetails).forEach((p) => {
    p.techStack.forEach((t) => tags.add(t));
  });
  return ['All', ...Array.from(tags)];
})();
