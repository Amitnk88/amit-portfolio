// Single source of truth for portfolio content — edit here to update the site.

export const profile = {
  name: "Amit B Naik",
  role: "Aspiring Software Engineer",
  tagline: "Python | Full-Stack | AI/ML | Generative AI",
  headline: "Building practical AI-powered applications with Python, Java, and modern AI technologies",
  location: "Bengaluru, Karnataka, India",
  email: "amitn8996@gmail.com",
  phone: "+91 8904340847",
  github: "https://github.com/amitnk88",
  linkedin: "https://linkedin.com/in/amitbnaik",
  resumeUrl: "/AmitBNaik_Resume.pdf",
  summary:
    "Computer Science & Engineering graduate (VTU) with hands-on experience building REST APIs, Android applications, and AI/ML systems, including Retrieval-Augmented Generation (RAG) pipelines and semantic search. Proficient in Python, Java, and Kotlin, with practical experience across the full SDLC using Git and Agile workflows. Targeting Software Engineer, Full-Stack, and Android Developer roles.",
};

export const skills = [
  {
    category: "Languages",
    items: ["Python", "Java", "Kotlin", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks & APIs",
    items: [
      "Flask",
      "Node.js",
      "REST APIs",
      "JWT Authentication",
      "Jetpack Compose",
      "Android SDK",
    ],
  },
  {
    category: "AI / ML",
    items: [
      "Generative AI",
      "RAG Pipelines",
      "TensorFlow",
      "FLAN-T5",
      "Mistral",
      "FAISS",
      "Machine Learning Fundamentals",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "SQLite", "FAISS (Vector Search)"],
  },
  {
    category: "Core CS & Practice",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "SDLC",
      "Agile Methodology",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Android Studio", "VS Code"],
  },
];

export type Project = {
  slug: string;
  name: string;
  featured?: boolean;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "fraud-lens",
    name: "Fraud Lens",
    featured: true,
    tagline: "Machine learning fraud detection application",
    description:
      "An end-to-end machine learning application that analyzes transaction data and identifies potentially suspicious transactions through data preprocessing, classification, model evaluation, and an interactive interface.",
    highlights: [
      "Cleaned and engineered features from raw transaction data",
      "Trained and evaluated classification models to flag suspicious activity",
      "Interactive Streamlit interface for exploring predictions",
    ],
    stack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Streamlit",
      "Data Visualization",
      "Git",
    ],
    github: "TODO: ADD URL",
  },
  {
    slug: "ai-business-advisor",
    name: "AI Business Advisor",
    tagline: "Intelligent startup guidance system",
    description:
      "Architected a Retrieval-Augmented Generation (RAG) pipeline combining FLAN-T5 and Mistral LLMs to retrieve and synthesize context-aware business insights from structured knowledge data.",
    highlights: [
      "RAG pipeline combining FLAN-T5 and Mistral for context-aware answers",
      "Flask + MongoDB backend with FAISS-powered vector/semantic search",
      "Reduced query response latency and improved retrieval relevance",
    ],
    stack: ["Python", "Flask", "TensorFlow", "FLAN-T5", "Mistral", "FAISS", "RAG", "MongoDB"],
    github: "TODO: ADD URL",
  },
  {
    slug: "namma-platform",
    name: "Namma-Platform",
    tagline: "Kannada-first Android railway assistant",
    description:
      "Built an offline-first Android assistant backed by structured SQLite data, delivering accurate, low-latency train information without network dependency.",
    highlights: [
      "Offline-first architecture using structured SQLite data",
      "Integrated Kannada Text-to-Speech for accessibility",
      "Accessibility-first design for rural, elderly, and visually impaired users",
    ],
    stack: ["Kotlin", "Java", "Android Studio", "Jetpack Compose", "SQLite", "Text-to-Speech"],
    github: "TODO: ADD URL",
  },
  {
    slug: "adventure-tourism-booking",
    name: "Adventure Tourism Booking System",
    tagline: "Full-stack booking platform",
    description:
      "Developed a full-stack booking platform on a MySQL-backed relational schema, enabling secure authentication, real-time booking tracking, and automated reporting.",
    highlights: [
      "RESTful APIs with JWT-based authentication",
      "Role-Based Access Control (RBAC) across multiple user roles",
      "Real-time booking tracking and automated reporting",
    ],
    stack: ["Python", "Flask", "MySQL", "REST APIs", "JWT Auth", "HTML", "CSS", "JavaScript"],
    github: "TODO: ADD URL",
  },
];

export const experience = [
  {
    org: "Mindmatrix, Bengaluru",
    role: "Android App Developer (Gen AI-Assisted Development)",
    duration: "Feb 2026 – May 2026",
    points: [
      "Used generative AI tools to accelerate code generation, feature prototyping, and technical documentation, cutting development turnaround time across the SDLC.",
      "Built and optimized native Android applications in Java and Kotlin using GenAI-assisted development and structured debugging, improving code quality and reducing defect rate.",
      "Designed responsive, accessible UIs following Material Design guidelines; integrated REST APIs and tuned local data storage for improved app performance.",
    ],
    stack: ["Java", "Kotlin", "Android SDK", "REST APIs", "Material Design"],
  },
  {
    org: "SystemTron",
    role: "Generative AI & Machine Learning Intern",
    duration: "Feb 2026 – March 2026",
    points: [
      "Developed and implemented Generative AI and Machine Learning solutions using Python, integrating AI models and data-processing techniques to solve practical problems.",
      "Applied machine learning workflows including data preprocessing, model training, evaluation, and prediction while gaining hands-on experience with AI/ML development and deployment concepts.",
    ],
    stack: ["Python", "Machine Learning", "Data Preprocessing", "Model Evaluation"],
  },
];

export const education = {
  degree: "B.E. — Computer Science & Engineering",
  duration: "2022 – 2026",
  institution: "Anjuman Institute of Technology and Management, Bhatkal",
  detail: "VTU Affiliated | CGPA: 7.5",
};

export const certifications = [
  { name: "Microsoft Certified: Fabric Data Engineer Associate", issuer: "Microsoft", url: "TODO: ADD URL" },
  { name: "Agentic AI Certified Foundations Associate", issuer: "Oracle University", url: "TODO: ADD URL" },
  { name: "AI Fluency: Framework & Foundations", issuer: "Anthropic", url: "TODO: ADD URL" },
  { name: "Career Essentials in Generative AI", issuer: "Microsoft and LinkedIn (LinkedIn Learning)", url: "TODO: ADD URL" },
  { name: "Tata GenAI Powered Data Analytics Job Simulation", issuer: "Forage", url: "TODO: ADD URL" },
  { name: "Java Full Stack Development Certification", issuer: "QSpider", url: "TODO: ADD URL" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco", url: "TODO: ADD URL" },
  { name: "Python Complete Course for Python Beginners", issuer: "Udemy", url: "TODO: ADD URL" },
];
