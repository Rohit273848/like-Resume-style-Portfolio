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
    title: "Distributed Task Scheduler & Queue System",
    problem: "Monolithic web applications choke when running heavy computational workloads (like report generation or PDF rendering) synchronously on the main thread.",
    solution: "Developed a decoupled, asynchronous queue worker system using Node.js and Redis, dividing publishers from background processor nodes.",
    architecture: "[Task Request] ──> [Express Gateway] ──> [Redis Queue] ──> [BullMQ Worker Nodes] ──> [Central DB]",
    keyFeatures: [
      "Horizontal scaling capability with independent Node.js worker pools",
      "Robust retry mechanics featuring configurable exponential backoff strategies",
      "Dynamic priority-based processing logic for business-critical jobs",
      "Real-time progress reporting using custom WebSocket connections"
    ],
    technologies: ["Node.js", "Express.js", "Redis", "MongoDB", "Docker", "Git"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "project-task-queue.webp"
  },
  {
    id: 3,
    title: "High-Performance Bookstore REST API",
    problem: "Inventory mismatch bottlenecks and query latencies during high-frequency concurrent checkout events.",
    solution: "Designed a clean-architecture REST API integrating MongoDB indexing, memory caching mechanisms, and schema optimistic locking operations.",
    architecture: "[HTTP Request] ──> [Express Controller] ──> [Redis Cache] ──> [MongoDB Transactions]",
    keyFeatures: [
      "Sub-50ms query response time via strategic Mongo query indexation",
      "Race condition mitigation utilizing schema version controls",
      "Centralized logging middleware with automated sanitization filters",
      "Load tested with 10k concurrent simulated users using k6 scripting"
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Git", "GitHub"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "project-bookstore-api.webp"
  }
];
