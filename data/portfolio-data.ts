export type NavItem = {
  label: string;
  href: string;
};

export type StatItem = {
  label: string;
  value: string;
  detail: string;
};

export type SkillGroup = {
  title: string;
  summary: string;
  accent: string;
  items: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectItem = {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  stack: string[];
  impact: string[];
  links: ProjectLink[];
  year: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  date: string;
};

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  description: string;
};

export type SiteCopy = {
  name: string;
  headline: string;
  subheadline: string;
  description: string;
  location: string;
  email: string;
  availability: string;
  resumePath: string;
  social: ProjectLink[];
};

export const siteCopy: SiteCopy = {
  name: "Jagan Mohan Dash",
  headline: "Full-Stack Developer | B.Tech Computer Science Student",
  subheadline: "Specializing in designing Backend Systems and RESTful APIs using Python, with expertise in modern Frontend technologies like React.js and Node.js.",
  description:
    "I am a Computer Science student at AIET, Bhubaneswar, dedicated to engineering practical, user-centric software solutions. My focus lies in full-stack development, leveraging a diverse toolkit from low-level networking to modern web frameworks.",
  location: "Bhubaneswar, India",
  email: "jaganmohandash1@gmail.com",
  availability: "Open to Full-Stack, Backend, Web Development, and Software Engineering opportunities.",
  resumePath: "/assets/Jagan Mohan Dash_Resume.pdf",
  social: [
    { label: "GitHub", href: "https://github.com/jagnCoder" },
    { label: "LinkedIn", href: "https://linkedin.com/in/jagan-mohan-dash" },
    { label: "Website", href: "https://jagan-mohan-dash.netlify.app/" },
    { label:"email", href:"mailto:jaganmohandash1@gmail.com"}
  ]
};

export const navigation: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#experience" },
  { label: "Certifications", href: "#certifications" }
];

export const stats: StatItem[] = [
  { label: "Programming Languages", value: "07", detail: "Python, Java, SQL, HTML, CSS, JavaScript, C" },
  { label: "Technical Projects", value: "05", detail: "Chat App, Task Dashboard, KYC Portal, Web Games, Portfolio" },
  { label: "Core CS Focus", value: "05", detail: "DSA, DBMS, OS, Networking, Cybersecurity" },
  { label: "Education Status", value: "2027", detail: "Expected Graduation Year" }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    summary: "Strong foundation in multiple languages for versatile problem solving.",
    accent: "from-cyan-400/20 to-blue-500/10",
    items: ["Python", "Java", "SQL", "HTML/CSS", "JavaScript", "C"]
  },
  {
    title: "Frameworks & Tools",
    summary: "Modern web technologies and developer tools for efficient delivery.",
    accent: "from-violet-400/20 to-fuchsia-500/10",
    items: ["React.js", "Node.js", "Express.js", "FastAPI", "REST APIs", "TCP Socket", "GitHub", "Postman", "Docker"]
  },
  {
    title: "Databases",
    summary: "Relational and NoSQL database management for robust data persistence.",
    accent: "from-emerald-400/20 to-teal-500/10",
    items: ["PostgreSQL", "MongoDB", "SQLite", "Supabase", "MySQL"]
  },
  {
    title: "Core Concepts",
    summary: "Fundamental computer science knowledge ensuring sound engineering.",
    accent: "from-amber-400/20 to-orange-500/10",
    items: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "CyberSecurity Concepts"]
  }
];

export const projects: ProjectItem[] = [
  {
    slug: "neighborhood-community-chat",
    title: "Neighborhood Community Chat",
    subtitle: "Real-time Communication Platform",
    overview:
      "A full-stack community communication platform utilizing low-level TCP Sockets for real-time data exchange.",
    problem:
      "The need for high-performance, real-time local communication with reliable data persistence.",
    solution:
      "Built a python http module based backend for RESTful routing and integrated PostgreSQL/SQLite for session management and query routing, containerized with Docker.",
    architecture: [
      "TCP Sockets for real-time exchange",
      "TCP-HTTP and RESTful routing",
      "Dockerized containerization"
    ],
    stack: ["Python", "TCP Sockets", "PostgreSQL","supabase", "SQLite", "Docker"],
    impact: ["Enabled real-time community interaction", "Achieved robust data persistence and session management"],
    links: [
      { label: "GitHub", href: "https://github.com/jagnCoder/Neighbour-HelpBoard-" },
      { label: "live-website", href: "https://neighbour-helpboard.onrender.com/" }
    ],
    year: "2026"
  },
  {
    slug: "standalone-web-games",
    title: "Standalone Interactive Web Games",
    subtitle: "Vanilla JS Game Suite",
    overview:
      "A collection of interactive web mini-applications including an RGB color guessing engine and a precision reaction timer.",
    problem:
      "Optimizing client-side performance for complex game logic using vanilla technologies.",
    solution:
      "Programmed advanced DOM manipulation and core frontend state management for seamless cross-device compatibility.",
    architecture: [
      "Vanilla JS state management",
      "Advanced DOM manipulation",
      "Responsive layout"
    ],
    stack: ["JavaScript (ES6+)", "HTML5", "CSS3"],
    impact: ["High client-side performance", "Smooth interactivity and cross-device support"],
    links: [
      { label: "GitHub", href: "https://github.com/jagnCoder/jagn-color-game-HTML-TS" }
    ],
    year: "2025"
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio Website",
    subtitle: "Professional Showcasing Platform",
    overview:
      "A responsive personal portfolio website designed to showcase technical projects, skills, and professional presence.",
    problem:
      "Creating a clean, accessible digital presence with modular sections for diverse content types.",
    solution:
      "Designed an accessible user interface with modular sections using modern web standards.",
    architecture: [
      "Modular section design",
      "Clean UI architecture",
      "Responsive layout"
    ],
    stack: ["HTML5", "CSS3", "JavaScript"],
    impact: ["Professional online presence", "Highly accessible interface"],
    links: [
      { label: "Website", href: "https://jagan-mohan-dash.netlify.app/" }
    ],
    year: "2026"
  },
  {
    slug: "color-guessing-game",
    title: "Color Guessing Game",
    subtitle: "Interactive Web-Based Game",
    overview:
      "A browser-based color guessing game that challenges users to identify colors through visual matching, improving color recognition and engagement through interactive gameplay.",
    problem:
      "Creating an engaging and responsive game experience using only client-side technologies while maintaining simplicity and accessibility.",
    solution:
      "Developed a lightweight frontend application using HTML, CSS, and TypeScript with interactive game logic, dynamic color generation, score tracking, and responsive design.",
    architecture: [
      "Client-side game logic",
      "Dynamic color generation",
      "Responsive user interface"
    ],
    stack: ["HTML5", "CSS3", "TypeScript", "JavaScript"],
    impact: [
      "Improved user engagement through interactive gameplay",
      "Demonstrated frontend development and TypeScript fundamentals"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/jagnCoder/jagn-color-game-HTML-TS"
      }
    ],
    year: "2026"
  },
  {
    slug: "java-kyc-portal",
    title: "Java KYC Verification Portal",
    subtitle: "Secure User Verification System",
    overview:
      "A secure user verification system utilizing enterprise-grade Java and MySQL relational database.",
    problem:
      "Securely managing user verification workflows and ensuring data persistence and secure connections.",
    solution:
      "Developed core backend validation logic and integrated MySQL via JDBC to execute secure database connections and queries.",
    architecture: [
      "Enterprise Java workflows",
      "JDBC Database integration",
      "Secure validation logic"
    ],
    stack: ["Java", "JDBC", "MySQL", "OOP"],
    impact: ["Automated secure verification", "Ensured 100% data persistence via JDBC"],
    links: [
      { label: "GitHub", href: "https://github.com/jagnCoder/Java-FullStack-KYC-System" }
    ],
    year: "2026"
  }
];

export const certifications: CertificationItem[] = [
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "September 2026"
  },
  {
    title: "Getting Started with Git and GitHub",
    issuer: "IBM",
    date: "May 2026"
  },
  {
    title: "Certificate of Completion — Node.js",
    issuer: "Unstop",
    date: "May 2026"
  },
  {
    title: "Computer Networks and Network Security",
    issuer: "IBM",
    date: "April 2025"
  }
];

export const experience: ExperienceItem[] = [
  {
    role: "Full-Stack Development & Academic Distinction",
    organization: "AIET, Bhubaneswar",
    period: "2023 – Present",
    location: "Bhubaneswar, India",
    description:
      "Maintaining an 8.5 CGPA in Computer Science & Engineering while actively building end-to-end software solutions, from low-level network protocols to production-grade cloud architectures.",
    highlights: [
      "Participated in multiple hackathons, securing 3rd Place in the College Hackathon and competing in the Smart India Hackathon",
      "Architected & deployed full-stack builds spanning real-time TCP sockets, AI web engines, and cloud systems",
      "Earned professional credentials including the IBM Cybersecurity Professional Certificate & Google Cloud Generative AI Certification",
      "Applying academic engineering principles to build end-to-end software solutions, with a focus on Python backends and React frontends."
    ]
  }
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Aryan Institute of Engineering and Technology (AIET)",
    period: "Expected 2027",
    description: "Focusing on core engineering principles and computer science fundamentals. Specialized in Full-Stack development and systems engineering."
  }
];

export const contact = {
  cta: "Let's Engineer Something Meaningful",
  body: "I am actively seeking opportunities to apply my full-stack and backend skills to real-world challenges. Feel free to connect for collaborations or opportunities.",
  email: siteCopy.email
};
