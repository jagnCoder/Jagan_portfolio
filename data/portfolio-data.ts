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

export type ResearchTopic = {
  title: string;
  summary: string;
  relatedTo: string[];
  intensity: "High" | "Medium" | "Exploratory";
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
  headline: "B.Tech Computer Science Student | Full-Stack Developer",
  subheadline: "As a Computer Science and Engineering student at AIET, Bhubaneswar, I am building a strong foundation in engineering principles, software development, and emerging technologies.",
  description:
    "I am a Computer Science and Engineering student passionate about full-stack development, cybersecurity, and real-world problem solving. My academic journey is complemented by hands-on projects, hackathon participation, and a growing interest in building secure, scalable, and user-friendly digital systems.",
  location: "Bhubaneswar, India",
  email: "jagnsuvhamohan@gmail.com",
  availability: "Open to SDE internships, frontend, backend, and full-stack opportunities",
  resumePath: "https://jagncoder.github.io/Portfolio/",
  social: [
    { label: "GitHub", href: "https://github.com/jagnCoder/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jagan-mohan-dash/" },
    { label: "Portfolio", href: "https://jagncoder.github.io/Portfolio/" }
  ]
};

export const navigation: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const stats: StatItem[] = [
  { label: "Programming Languages", value: "05+", detail: "Python, Java, C, JavaScript, TypeScript" },
  { label: "Projects Built", value: "06+", detail: "Neighborhood Helpboard, Portfolio, E-Learning, Flight System, Hotel System, Train Retrieval" },
  { label: "Core CS Focus", value: "05", detail: "DBMS, OOP, OS, Networks, Security" },
  { label: "CGPA", value: "8.5", detail: "B.Tech CSE student at AIET" }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    summary: "Core programming knowledge used across web, data, and system projects.",
    accent: "from-cyan-400/20 to-blue-500/10",
    items: ["Python", "Java", "C", "JavaScript", "TypeScript"]
  },
  {
    title: "Web Development",
    summary: "Responsive interfaces, structured frontends, and interactive user experiences.",
    accent: "from-violet-400/20 to-fuchsia-500/10",
    items: ["React", "Vite", "HTML5", "CSS3", "Responsive UI"]
  },
  {
    title: "Backend & Databases",
    summary: "Building practical solutions with database-driven logic and application flow.",
    accent: "from-emerald-400/20 to-teal-500/10",
    items: ["Node.js", "SQLite", "MySQL", "API Integration", "Database Design"]
  },
  {
    title: "Systems & Security",
    summary: "Computer networks, OS concepts, and security-first engineering mindset.",
    accent: "from-amber-400/20 to-orange-500/10",
    items: ["Operating Systems", "Computer Networks", "Security", "Git", "GitHub", "Networking"]
  }
];

export const projects: ProjectItem[] = [
  {
    slug: "neighborhood-helpboard",
    title: "Neighborhood Helpboard",
    subtitle: "TCP Client-Server App for Local Communication",
    overview:
      "A modular Python/C client-server application designed for local neighborhood communication and LAN accessibility.",
    problem:
      "Reliable local coordination was difficult in network-constrained or isolated local environments.",
    solution:
      "I built a modular TCP client-server system optimized for local communication, with secure onboarding workflows and live deployments on Render. The architecture supports multiple local nodes and efficient communication handling.",
    architecture: [
      "Client-server networking model",
      "Modular Python codebase",
      "LAN-focused communication flow"
    ],
    stack: ["Python", "C", "Networking", "TCP/IP"],
    impact: ["LAN accessibility for local communication", "Stable communication flow across local nodes"],
    links: [
      { label: "Live Demo", href: "https://neighbour-helpboard.onrender.com/" },
      { label: "Deployment", href: "https://neighborhood-chat-633872581280.us-west1.run.app/" }
    ],
    year: "2025/2026"
  },
  {
    slug: "portfolio-site",
    title: "Portfolio Site",
    subtitle: "Responsive React + Vite Portfolio",
    overview:
      "A personal portfolio site built with React and Vite, focused on responsive layout, project display, and polished UI/UX.",
    problem:
      "I needed a clean digital identity to showcase projects, skills, and technical direction in a modern, professional way.",
    solution:
      "I designed and built a responsive single-page portfolio with interactive cards, structured sections, and well-organized content presentation. It was published through GitHub Pages with a polished visual style.",
    architecture: [
      "Responsive front-end layout",
      "Section-based portfolio structure",
      "Professional UI/UX presentation"
    ],
    stack: ["React", "Vite", "JavaScript", "CSS3", "GitHub Pages"],
    impact: ["Professional personal branding", "Responsive user experience"],
    links: [
      { label: "Portfolio", href: "https://jagncoder.github.io/Portfolio/" },
      { label: "GitHub", href: "https://github.com/jagnCoder/" }
    ],
    year: "2025"
  },
  {
    slug: "elearning-platform",
    title: "E-Learning Platform",
    subtitle: "Structured Learning Platform with Guided Modules",
    overview:
      "An e-learning platform focused on structured modules and accessible explanations for learners.",
    problem:
      "Large educational content needed to be organized clearly so learners could navigate topics without confusion.",
    solution:
      "I developed a learning platform with structured modules, guided explanations, and clean front-end organization to improve clarity and usability.",
    architecture: [
      "Structured module flow",
      "Accessible front-end organization",
      "Guided learning presentation"
    ],
    stack: ["React", "Vite", "Node.js", "JavaScript", "CSS3"],
    impact: ["Clearer learning flow", "Improved front-end maintainability"],
    links: [
      { label: "GitHub", href: "https://github.com/jagnCoder/" }
    ],
    year: "2025/2026"
  },
  {
    slug: "flight-management-system",
    title: "Flight Management System",
    subtitle: "Console-Based Booking and Reservation App",
    overview:
      "A console-based application with passenger registration, booking, search, and cancellation logic using SQLite.",
    problem:
      "A simple but reliable flight booking workflow was required with data persistence and user operations.",
    solution:
      "I built a SQLite-backed console application to manage passenger registration, booking, search, and cancellations efficiently.",
    architecture: [
      "Console-based workflow",
      "SQLite data persistence",
      "Booking and cancellation operations"
    ],
    stack: ["Python", "SQLite", "Console App"],
    impact: ["Structured operational flow", "Reliable booking system"],
    links: [
      { label: "GitHub", href: "https://github.com/jagnCoder/" }
    ],
    year: "2024/2025"
  },
  {
    slug: "hotel-management-system",
    title: "Hotel Management System",
    subtitle: "Automated Room Booking and Billing System",
    overview:
      "An automated room booking and billing application designed for managing room availability and customer bookings.",
    problem:
      "Manual tracking of room availability and billing was inefficient and error-prone.",
    solution:
      "I created a system to automate room bookings, track availability, and manage billing operations in a streamlined workflow.",
    architecture: [
      "Booking workflow management",
      "Availability tracking",
      "Billing integration"
    ],
    stack: ["Java", "Python", "Database Logic"],
    impact: ["Faster booking handling", "Reduced manual management effort"],
    links: [
      { label: "GitHub", href: "https://github.com/jagnCoder/" }
    ],
    year: "2024"
  },
  {
    slug: "train-details-retrieval",
    title: "Train Details Retrieval",
    subtitle: "Database Search App for Train Information",
    overview:
      "A database-driven search application for retrieving and displaying train information quickly and clearly.",
    problem:
      "Handling train information lookup efficiently required searchable and structured data management.",
    solution:
      "I built a database search application that quickly retrieves and displays train details based on query input.",
    architecture: [
      "Database query layer",
      "Search and display workflow",
      "Structured data retrieval"
    ],
    stack: ["Database Search", "Python", "SQL"],
    impact: ["Fast retrieval of train details", "Better organized information access"],
    links: [
      { label: "GitHub", href: "https://github.com/jagnCoder/" }
    ],
    year: "2024"
  }
];

export const researchTopics: ResearchTopic[] = [
  {
    title: "Cybersecurity Fundamentals",
    summary: "Exploring network security, threat awareness, and secure software development practices to build safer digital systems.",
    relatedTo: ["Cybersecurity", "Networking", "Security Practices"],
    intensity: "High"
  },
  {
    title: "Data Analytics & Segmentation",
    summary: "Working with structured datasets to understand patterns, retention behavior, and customer-focused insights.",
    relatedTo: ["Data Analytics", "Business Intelligence", "User Retention"],
    intensity: "Medium"
  },
  {
    title: "Engineering Workflow & Problem Solving",
    summary: "Applying systematic thinking to build projects, troubleshoot bugs, and improve product quality under time constraints.",
    relatedTo: ["Software Design", "Debugging", "Product Thinking"],
    intensity: "High"
  }
];

export const experience: ExperienceItem[] = [
  {
    role: "Team Lead, Frontend Developer, Backend Developer, Prompt Engineer",
    organization: "Hackathons",
    period: "2024 - Present",
    location: "Bhubaneswar, India",
    description:
      "Took on multiple technical roles while leading teams in academic and hackathon environments, balancing product thinking, frontend implementation, backend logic, and AI-driven demos.",
    highlights: [
      "Led teams in multiple hackathons under strict deadlines",
      "Worked as Frontend Developer using React + Vite",
      "Built backend logic using Python + SQLite and handled prompt-driven AI demo flows",
      "Coordinated planning, delivery, and execution across team members"
    ]
  }
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Aryan Institute of Engineering and Technology, Bhubaneswar",
    period: "2023 – 2027 (Pursuing)",
    description: "Focused on core engineering principles and computer science fundamentals while building practical software solutions and developing strong technical skills. CGPA: 8.5"
  }
];

export const contact = {
  cta: "Let's Build Something Practical and Impactful",
  body: "I am actively looking for SDE internship opportunities, frontend/backend roles, and collaborative engineering projects. Feel free to reach out via email or connect on LinkedIn.",
  email: siteCopy.email
};
