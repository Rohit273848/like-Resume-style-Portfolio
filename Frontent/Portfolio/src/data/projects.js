export const projects = [
  {
    id: 1,
    title: "AI-Powered Resume Screen & ATS Analyzer",
    problem: "Recruiters and hiring managers spend an average of 6-10 seconds per resume, leading to hiring bottlenecks and missed candidates.",
    solution: "Designed a microservice application that parses PDF resumes using Python NLP tools, comparing semantic skills against target job descriptions via the Gemini API to produce compatibility scores.",
    architecture: "[PDF Resume] ──> [Express API] ──> [Python NLP Parser] ──> [Gemini API] ──> [Skills Gap Metrics]",
    keyFeatures: [
      "Gemini API semantic matching engine for deep context matching",
      "Concurrently-locked PDF parser built with Python (NumPy, Pandas)",
      "Interactive comparison dashboard highlighting critical skill gaps",
      "High-throughput RESTful endpoints handling multi-file processing"
    ],
    technologies: ["Node.js", "Express.js", "Python", "Gemini API", "MongoDB", "REST APIs"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "project-ai-resume.webp"
  },
  {
    id: 2,
    title: "AI Powered Customer Support Platform (Support Desk)",
    problem:
      "Traditional customer support systems struggle with ticket management, tenant isolation, role-based access, and scalable workflow automation for multiple organizations.",
    solution:
      "Built a scalable multi-tenant SaaS customer support platform using Node.js, Express.js, and MongoDB with secure authentication, role-based access control, and optimized ticket management workflows.",
    architecture:
      "[Client] ──> [React Frontend] ──> [Express APIs] ──> [JWT Authentication] ──> [MongoDB Database]",
    keyFeatures: [
      "Developed 25+ RESTful APIs for ticketing and customer support workflows",
      "Optimized MongoDB queries using indexing, reducing data retrieval latency by 35%",
      "Implemented JWT authentication and Role-Based Access Control (RBAC)",
      "Designed secure multi-tenant architecture ensuring complete tenant data isolation",
      "Scalable SaaS platform supporting enterprise customer support operations"
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "RBAC",
      "REST API",
      "Git",
      "GitHub"
    ],
    githubUrl: "YOUR_GITHUB_LINK",
    liveUrl: "YOUR_LIVE_LINK",
    image: "support-desk.webp"
  },
  {
    id: 3,
    title: "QuickMind – AI Powered Search Engine",
    problem:
      "Users need fast, context-aware search and summarization systems capable of understanding natural language queries and retrieving relevant information intelligently.",
    solution:
      "Developed a full-stack AI search platform integrating OpenAI APIs, vector embeddings, Retrieval-Augmented Generation (RAG), and LangChain-powered AI agents for intelligent search and summarization.",
    architecture:
      "[User Query] ──> [React Frontend] ──> [AI Search API] ──> [Vector Database] ──> [RAG Pipeline] ──> [OpenAI Models]",
    keyFeatures: [
      "Real-time AI summarization and interactive chat experience",
      "Integrated OpenAI APIs with vector embeddings and RAG architecture",
      "Built autonomous AI agents using LangChain workflows",
      "Implemented Redux Toolkit for efficient state management",
      "Secure authentication, encrypted cookies, and CORS protection",
      "Markdown rendering and responsive modern user interface"
    ],
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "OpenAI API",
      "LangChain",
      "RAG",
      "MongoDB",
      "JWT",
      "GitHub"
    ],
    githubUrl: "YOUR_GITHUB_LINK",
    liveUrl: "YOUR_LIVE_LINK",
    image: "quickmind-ai.webp"
  }
];
