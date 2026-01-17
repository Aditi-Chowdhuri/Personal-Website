export type NavItem = { id: string; label: string };

export type Project = {
  name: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
};

export type Paper = {
  title: string;
  venue: string;
  doi: string;
  href: string;
};

export type Leadership = {
  org: string;
  role: string;
  bullets: string[];
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export type ExperienceItem = {
  title: string;
  company: string;
  timeframe: string;
  location: string;
  bullets: string[];
};

export type EducationItem = {
  degree: string;
  timeframe: string;
  school: string;
  gpa: string;
  coursework: string[];
  honors: string[];
};

export const profile = {
  name: "Aditi Chowdhuri",
  phone: "+1 (917) 337-7109",
  email: "anc2207@columbia.edu",
  linkedin: "https://www.linkedin.com/in/aditi-chowdhuri/",
  github: "https://github.com/Aditi-Chowdhuri",
  googleScholar: "https://scholar.google.com/citations?user=IFqewkgAAAAJ&hl=en&oi=ao",
  resumeFile: "Aditi_CV.pdf"
};

export const nav: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "awards", label: "Awards" },
  { id: "activities", label: "Extra-Curricular" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" }
];

export const about: string[] = [
  "I am a Computer Science graduate student at Columbia University with a strong background in software engineering, machine learning, and web development. With professional experience at Bank of America and other organizations, I've developed expertise in creating efficient AI solutions, optimizing application performance, and building user-centric interfaces.",
  "My research focuses on federated learning, AI security, and enhancing LLMs. I'm passionate about developing innovative solutions that combine cutting-edge technology with practical applications."
];

export const skills: SkillGroup[] = [
  {
    group: "Programming Languages",
    items: ["Python", "Java", "C", "C++", "C#", "JavaScript", "TypeScript"]
  },
  {
    group: "Front-End",
    items: ["ReactJS", "Angular", "HTML5", "CSS3", "TailwindCSS", "D3.js", "Bootstrap", "JSX", "Next.JS"]
  },
  {
    group: "Back-End",
    items: ["Node.js", "Express.js", "Firebase", "MongoDB", "FastAPI", "Flask", ".Net", "SQL"]
  },
  {
    group: "Tools",
    items: ["Git", "Docker", "Figma", "GCP", "AWS (S3, EC2, RDS, SQS, SNS)", "Photoshop", "Firestore", "Jira", "Kubernetes", "Jenkins"]
  }
];

export const experience: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "Okada & Company",
    timeframe: "Sep 2025 – Dec 2025",
    location: "New York, US",
    bullets: [
      "Engineered a scalable real-estate platform in React, integrating modules for property management, broker collaboration, and workflow automation across 1K+ active listings",
      "Designed distributed intelligent agents to automate broker-client workflows: prioritized high-volume email streams, scheduled property showings via shared calendars, and generated automated follow-ups",
      "Consolidated property, space, and inquiry data into a centralized dashboard, reducing manual input and increasing broker operational efficiency by 20%",
      "Optimized system usability with responsive UIs and real-time task automation (kanban pipelines + voice-driven commands), and transformed the platform into a Progressive Web App (PWA) to enable offline access and mobile-first engagement"
    ]
  },
  {
    title: "Front-End Developer (Columbia Build Lab)",
    company: "Remod",
    timeframe: "Jun 2025 – Dec 2025",
    location: "New York, US",
    bullets: [
      "Delivered a production-grade Next.js landing page for Remod’s AI remodeling platform home-viz.com, improving performance and user conversion across devices",
      "Built secure multi-role onboarding flows with Supabase authentication and PostgreSQL, ensuring reliable user management at scale",
      "Automated contractor data ingestion with a Python and Google Maps API pipeline, expanding location coverage by 40% and accelerating onboarding capacity",
      "Augmented NYC contractor database by scraping and classifying inventory from contractor websites (material, use case, color) and implemented CLIP-based image detection to link rendered design outputs with local inventory"
    ]
  },
  {
    title: "Teaching Assistant II",
    company: "Columbia University",
    timeframe: "Sep 2024 – Dec 2025",
    location: "New York, US",
    bullets: [
      "Teaching assistant for COMS 4111 (Introduction to Databases), COMS 4223 (Networks, Crowds, and the Web), and COMS 4705 (Natural Language Processing); supported lectures, assignments, and exams for 100+ students",
      "Led office hours, review sessions, and project mentorship, providing individualized guidance to strengthen student understanding and performance"
    ]
  },
  {
    title: "Research Intern",
    company: "ARISE Lab, Columbia University",
    timeframe: "Sep 2024 – Dec 2024",
    location: "New York, US",
    bullets: [
      "Curated and expanded the PrimeVal dataset to benchmark large language models in vulnerable code translation scenarios, enabling standardized and reproducible evaluation pipelines",
      "Designed C-to-Rust translation workflows using LLMs to study automated migration toward memory-safe languages and assess security vulnerabilities",
      "Conducted experiments on semantic understanding and reliability of LLM-based code translation, contributing to research on AI-assisted secure software development"
    ]
  },
  {
    title: "Software Engineer",
    company: "Bank of America",
    timeframe: "Jun 2022 – Jul 2024",
    location: "Mumbai, IN",
    bullets: [
      "Scaled front-end development of CORA, a client onboarding and risk assessment portal in Angular, improving usability and driving a 30% increase in adoption",
      "Engineered backend services in .NET to enable secure, cross-unit client communication workflows deployed enterprise-wide",
      "Automated regulatory and operational reporting with Autosys job scheduling, reducing manual workloads by 40%+",
      "Designed NLP-powered pipelines to extract and structure client email data for hedging strategies, cutting processing time by 25%"
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Tata Consultancy Services",
    timeframe: "Jul 2021 – Oct 2021",
    location: "Mumbai, IN",
    bullets: [
      "Built and maintained scalable microservices with Spring Boot and Java, enhancing reliability and modularity of enterprise applications",
      "Implemented data persistence and optimization strategies in MySQL and PostgreSQL, improving query performance and system responsiveness",
      "Refactored core application logic, reducing runtime by 10% and increasing overall throughput"
    ]
  },
  {
    title: "Web Developer Intern",
    company: "Trikon Technologies",
    timeframe: "Aug 2020 – Dec 2020",
    location: "Noida, IN",
    bullets: [
      "Rebuilt company website with ReactJS and Firebase, leading to a 35% faster load time and a 20% increase in mobile session duration",
      "Strengthened user interactivity by integrating NodeJS REST APIs, improving information fetch speed by 30%"
    ]
  }
];

export const education: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science",
    timeframe: "2024 - 2025",
    school: "Columbia University, New York, NY",
    gpa: "CGPA: 3.89/4.0",
    coursework: [
      "Advanced Software Engineering",
      "Analysis of Algorithms",
      "User Interface Design",
      "Programming Language and Translators",
      "Advanced Database Systems"
    ],
    honors: [
      "Teaching Assistant II for 4111 (Introduction to Databases), 4223 (Networks, Crowds, and the Web), 4705 (Natural Language Processing), and 2132 (Intermediate Computing in Python)"
    ]
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    timeframe: "2018 - 2022",
    school: "Vellore Institute of Technology (VIT), Vellore, India",
    gpa: "CGPA: 3.99/4.0",
    coursework: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Data Visualization",
      "Machine Learning",
      "Internet and Web Programming"
    ],
    honors: ["Special Achievers and Achievers 2021"]
  }
];

export const projects: Project[] = [
  {
    name: "Foodgasm",
    description:
      "Developed an AI-powered recipe platform using computer vision to detect fridge ingredients and LLMs for personalized recipe suggestions. Built with React.js, FastAPI, Microsoft Phi 3.5 Vision Instruct, and AI-driven calorie estimation for a seamless and intelligent user experience.",
    tags: ["React.js", "FastAPI", "Computer Vision", "LLMs"]
  },
  {
    name: "Tutor AI",
    description:
      "Developed an AI-based posture correction system using PoseNet, TensorFlow, and JavaScript to provide real-time feedback for physically demanding tasks. Integrated machine learning to analyze body alignment and offer personalized corrections. Used React.js for the user interface, ensuring a seamless and interactive learning experience.",
    tags: ["React.js", "PoseNet", "TensorFlow", "JavaScript"]
  },
  {
    name: "Baby Shield",
    description:
      "Created a monitoring system to prevent SIDS (Sudden Infant Death Syndrome) in newborns using TensorFlow and IoT devices.",
    tags: ["TensorFlow", "IoT"]
  },
  {
    name: "Justice",
    description:
      "Built a safety device and app with a Taser, hidden camera, and SOS functionality for emergency situations.",
    tags: ["Hardware", "Mobile App", "Safety"]
  },
  {
    name: "Visual Hertz",
   description:
      "Developed a platform to assist auditory-impaired students in classrooms through visual cues and real-time captioning.",
    tags: ["Accessibility", "Real-time Captioning"]
  },
  {
    name: "COVID-19 Tracker",
    description:
      "Created a real-time tracking website for SARS-CoV-2 virus progression using ReactJS and Firebase with interactive visualizations.",
    tags: ["React.js", "Firebase", "Data Viz"]
  },
  {
    name: "Memory++",
    description:
      "Designed an app to help dementia patients with to-do lists and reminders using machine learning for personalized recommendations.",
    tags: ["Machine Learning", "Product Design"]
  }
];

export const papers: Paper[] = [
  {
    title: "Temporal Weighted Averaging for Asynchronous Federated Learning",
    venue: "Computational Intelligence and Neuroscience 2021, Hindawi",
    doi: "10.1155/2021/5844728",
    href: "https://doi.org/10.1155/2021/5844728"
  },
  {
    title: "Progressive Search Personalization and Privacy Protection Using Federated Learning",
    venue: "Expert Systems, Wiley",
    doi: "10.1111/exsy.13318",
    href: "https://doi.org/10.1111/exsy.13318"
  },
  {
    title: "Suraksha: The Ultimate Self-Defense Kit for Women",
    venue: "International Journal Of Engineering Research & Technology (IJERT), Volume 12, Issue 02 (February 2023)",
    doi: "10.17577/IJERTV12IS020039",
    href: "https://www.ijert.org/suraksha-the-ultimate-self-defense-kit-for-women"
  }
];

export const awards: string[] = [
  "UNIHack 2020: Overall 2nd place (50 teams)",
  "Women Techies 2019: Winner 1st place",
  "yuHacks 2021: Best use of Google Cloud (50 teams)",
  "WiCS 2021: Overall 2nd Prize and Best use of Hardware (100 teams)",
  "SheHacks 2021: Overall 1st Prize and Best use of Hardware (70 teams)"
];

export const activities: string[] = [
  "Blogging on Medium (examples: Introducing Firestore for Web-Apps and Firestore-Storing, Deleting, and Querying Data)",
  "Reviewing IEEE papers, providing feedback to authors and editors"
];

export const leadership: Leadership[] = [
  {
    org: "roboVITics (Official robotics club of VIT)",
    role: "Event Organizer and Web Dev Head",
    bullets: ["Led the Web Development team and orchestrated a successful international hackathon"]
  }
];