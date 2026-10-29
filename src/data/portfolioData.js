export const personalInfo = {
  name: "Mohammad Ameer Siddiqui",
  handle: "@mdcreator",
  headline: "Systems Builder • ECE-VLSI • 3D & Spatial Engineer",
  subheading:
    "Engineering at the intersection of silicon, distributed cloud backends, and real-time interactive 3D spaces. B.Tech ECE-VLSI at NIT Patna.",
  location: "Bihta Campus, NIT Patna, India",
  status: "Available for High-Impact Systems & SDE Roles",
  emails: {
    primary: "mdcreator.2.0@gmail.com",
    academic: "mohmmads.ug25.ec@nitp.ac.in",
  },
  socials: {
    github: "https://github.com/mdcreator-2",
    linkedin: "https://www.linkedin.com/in/mdcreator/",
    leetcode: "https://leetcode.com/u/mdcreator/",
  },
  stats: [
    { label: "JEE Main", value: "98.05%tile" },
    { label: "SIH 2026", value: "National Finalist" },
    { label: "LeetCode Solved", value: "140+ DSA" },
    { label: "Published 3D Title", value: "Amazon Store" },
  ],
};

export const flagshipProjects = [
  {
    id: "lookout-grid",
    title: "LookoutGrid",
    badge: "SIH 2026 National Round",
    tagline: "IoT Edge-to-Cloud AI Hazard Prediction Platform",
    description:
      "Engineered a production-grade 3-layer edge-to-cloud IoT infrastructure (ESP32 → Raspberry Pi → Cloud) for real-time hazard forecasting (floods, AQI, wildfires). Features TimescaleDB hypertables for time-series streams, MQTT topic hierarchy, 40+ REST API endpoints with JWT/RBAC, and sub-50ms live WebSocket dashboards.",
    architecture: "Edge Sensor Array -> MQTT Broker -> FastAPI Ingestion -> TimescaleDB Hypertables -> WebSocket Stream",
    tags: ["FastAPI", "TimescaleDB", "PostgreSQL", "MQTT", "Docker Compose", "WebSockets", "IoT"],
    github: "https://github.com/mdcreator-2/lookout-grid",
    demo: null,
    metrics: [
      { label: "Latency", value: "< 50ms Telemetry" },
      { label: "Endpoints", value: "40+ Documented APIs" },
      { label: "Pipeline", value: "3-Tier Edge-to-Cloud" },
    ],
    featured: true,
  },
  {
    id: "astomverse-vr",
    title: "Astomverse VR Engine",
    badge: "SDE Internship (2025–2026)",
    tagline: "Immersive 3D Spatial Ed-Tech Platform",
    description:
      "Engineered core interactive systems for immersive Virtual Reality educational modules. Optimized 3D draw-call batches and shaders to sustain pinned 60+ FPS stereoscopic rendering, authored interactive physics experiments, and built spatial UI paradigms for VR classrooms.",
    architecture: "Three.js / WebGL / Unity -> WebXR Bridge -> Spatial Canvas -> Physics Solver",
    tags: ["Three.js", "Unity 3D", "C#", "WebGL", "Spatial UI", "VR Optimization"],
    github: null,
    demo: null,
    metrics: [
      { label: "Target FPS", value: "Locked 60+ FPS" },
      { label: "Domain", value: "Immersive VR Ed-Tech" },
      { label: "Stack", value: "3D Spatial Computing" },
    ],
    featured: true,
  },
  {
    id: "mccs-platform",
    title: "MCCS MUN Platform",
    badge: "Live Production",
    tagline: "Model United Nations & Simulation Conference Engine",
    description:
      "Official conference platform engineered for Model Conferences and Committee Simulation (Expresso Club, NIT Patna). Features dynamic committee allocation matrices with instant client-side filtering, digitized delegate rulebook viewers, and an interactive cinema photo theater.",
    architecture: "React 18 -> Vite -> Tailwind CSS -> Framer Motion -> Vercel Edge",
    tags: ["React 18", "Vite", "Tailwind CSS", "Framer Motion", "React Router v6"],
    github: "https://github.com/mdcreator-2/mccs-website",
    demo: "https://mccs-nitp.vercel.app/",
    metrics: [
      { label: "Deployment", value: "Live Vercel Edge" },
      { label: "Committees", value: "UNSC & AIPPM" },
      { label: "Experience", value: "Cinema Mode Gallery" },
    ],
    featured: true,
  },
  {
    id: "moments-ai",
    title: "Moments AI Pipeline",
    badge: "Distributed Systems",
    tagline: "Automated AI Video Highlight Extraction & Publishing",
    description:
      "Architected an end-to-end asynchronous media processing engine. Ingests long-form video, coordinates AssemblyAI transcription, executes Qwen AI semantic highlight ranking, and orchestrates OpenCV/FFmpeg face-tracking smart crops for dynamic vertical aspect ratios.",
    architecture: "FastAPI Ingestion -> Redis Task Queue -> AssemblyAI + Qwen LLM -> FFmpeg Dynamic Crop",
    tags: ["Python", "FastAPI", "Redis Queue", "AssemblyAI", "Qwen AI", "FFmpeg", "OpenCV"],
    github: "https://github.com/mdcreator-2/Moments",
    demo: null,
    metrics: [
      { label: "Processing", value: "Async Redis Queue" },
      { label: "Computer Vision", value: "Mediapipe Face Tracking" },
      { label: "Automation", value: "End-to-End Pipeline" },
    ],
    featured: false,
  },
  {
    id: "starwars-io",
    title: "Starwars.io 3D",
    badge: "Class 9 Milestone",
    tagline: "Commercial 3D Real-Time Strategy Space Game",
    description:
      "Solo engineered and published during the pandemic lockdown in Class 9. Programmed custom Finite State Machine (FSM) AI pathfinding for tactical enemy fleets, authored 3D models in Blender, and deployed multiplayer servers on Google Cloud Platform virtual machines.",
    architecture: "Unity 3D Engine -> C# OOP State Machines -> Blender Geometry -> GCP VM Hosting",
    tags: ["Unity 3D", "C# OOP", "Blender", "GCP VMs", "Game AI Pathfinding"],
    github: null,
    demo: "https://www.amazon.in/Starwars-io-3D-Conquer-Space-Strategy/dp/B09B6BV7XF",
    metrics: [
      { label: "Store", value: "Amazon Appstore" },
      { label: "Timeline", value: "Class 9 Solo Build" },
      { label: "AI Engine", value: "Custom FSM Pathfinding" },
    ],
    featured: false,
  },
  {
    id: "ee-vlsi-portal",
    title: "EE-VLSI Branch Infrastructure",
    badge: "Academic Infrastructure",
    tagline: "Enterprise Layered Department Platform",
    description:
      "Academic and student resource platform built with strict layered enterprise architecture (Repository → Service → Router). Features Role-Based Access Control (RBAC), Alembic migration versioning, PostgreSQL connection pooling, and Docker Compose deployment.",
    architecture: "FastAPI Routers -> Service Layer -> Repository Pattern -> PostgreSQL + Alembic",
    tags: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Docker Compose", "RBAC"],
    github: "https://github.com/mdcreator-2/EE-VLSI",
    demo: null,
    metrics: [
      { label: "Architecture", value: "Strict Layered Pattern" },
      { label: "Database", value: "Alembic Versioned" },
      { label: "Security", value: "JWT + RBAC Guards" },
    ],
    featured: false,
  },
];

export const skillCategories = [
  {
    category: "Hardware & Silicon",
    icon: "Cpu",
    skills: [
      { name: "C / C++", level: "Core Systems" },
      { name: "Signals & Systems", level: "Frequency & Transforms" },
      { name: "Digital Electronics", level: "Logic Design" },
      { name: "VLSI Fundamentals", level: "Semiconductor Theory" },
      { name: "ESP32 / Microcontrollers", level: "Edge Embedded" },
      { name: "MQTT & Serial I/O", level: "Telemetry Protocol" },
    ],
  },
  {
    category: "Backend & Systems",
    icon: "Server",
    skills: [
      { name: "Python / FastAPI", level: "Async Architecture" },
      { name: "PostgreSQL & TimescaleDB", level: "Time-series & Hypertables" },
      { name: "Redis", level: "Queue & Cache" },
      { name: "Docker & Docker Compose", level: "Container Orchestration" },
      { name: "REST & WebSockets", level: "Real-time Protocol" },
      { name: "GCP & Linux VM Admin", level: "Infrastructure & DNS" },
    ],
  },
  {
    category: "3D, WebGL & Frontend",
    icon: "Boxes",
    skills: [
      { name: "Three.js & WebGL", level: "Shaders & Scene Graphs" },
      { name: "React 18 / 19 & Next.js", level: "Client Architecture" },
      { name: "GSAP & ScrollTrigger", level: "Cinematic Choreography" },
      { name: "Tailwind CSS", level: "Design Tokens & Utility" },
      { name: "Framer Motion", level: "Micro-physics Spring" },
      { name: "Blender & Unity 3D", level: "Modeling & Real-time Game" },
    ],
  },
  {
    category: "Algorithms & Leadership",
    icon: "GitBranch",
    skills: [
      { name: "140+ LeetCode DSA", level: "Algorithmic Problem Solving" },
      { name: "SIH Team Leadership", level: "Led Team of 6 to Finals" },
      { name: "Hackslash Tech Club", level: "DSA & Flutter Teams" },
      { name: "Git & Clean Commits", level: "1st Place Intra-NITP Hack" },
    ],
  },
];

export const chronicleMilestones = [
  {
    year: "2026",
    title: "Team Leader, Smart India Hackathon (SIH)",
    role: "National Round Selection",
    description:
      "Led team of 6 engineers through internal college screenings to qualify for the national round. Architected the full edge-to-cloud backend for LookoutGrid.",
  },
  {
    year: "2025–2026",
    title: "SDE Intern @ Astomverse",
    role: "Immersive VR Engineering",
    description:
      "Engineered 3D spatial features, interactive learning laboratories, and performance profiling for stereoscopic VR hardware.",
  },
  {
    year: "2025",
    title: "Admitted to NIT Patna (B.Tech ECE-VLSI)",
    role: "JEE Main: 98.05 Percentile",
    description:
      "Secured 98.05 percentile in JEE Main Session 2. Joined NIT Patna's prestigious Electronics and VLSI department at Bihta campus.",
  },
  {
    year: "2025",
    title: "1st Place — Git & GitHub Event",
    role: "Intra-College Champion",
    description:
      "Won 1st place in the college-wide Git mastery competition during the first semester, demonstrating deep version control workflows.",
  },
  {
    year: "2021",
    title: "Published Starwars.io 3D on Amazon Store",
    role: "Solo 3D Game Engineer (Class 9)",
    description:
      "Designed, 3D modeled, and programmed a complete real-time tactical space game with enemy AI and published it to the Amazon Appstore.",
  },
  {
    year: "2020",
    title: "First Lines of Code on Mobile",
    role: "Self-Taught Beginnings",
    description:
      "Learned HTML/CSS syntax on a mobile phone during lockdown hardships before securing access to a family laptop and mastering programming.",
  },
];
