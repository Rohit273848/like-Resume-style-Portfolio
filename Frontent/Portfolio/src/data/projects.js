export const projects = [
  {
    id: 1,
    title: "AI-Powered Resume Screen & ATS Analyzer",
    problem: "Recruiters and hiring managers spend an average of 6-10 seconds per resume, leading to hiring bottlenecks and missed candidates.",
    solution: "Designed a microservice application that parses PDF resumes using Gemini API and python NLP tools, comparing semantic skills against target job descriptions to produce a compatibility score.",
    keyFeatures: [
      "Gemini API semantic matching engine",
      "PDF parsing using Python (NumPy, Pandas)",
      "Interactive dashboard with visual skill gaps report",
      "RESTful API parsing endpoints with concurrency locks"
    ],
    technologies: ["Node.js", "Express.js", "Python", "Gemini API", "MongoDB", "REST APIs"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "project-ai-resume.webp"
  },
  {
    id: 2,
    title: "Distributed Task Scheduler & Queue System",
    problem: "Monolithic applications often choke when running heavy CPU tasks (like report generation or image sizing) synchronously on the main thread.",
    solution: "Developed an asynchronous job queue using Node.js and Redis, decoupling task producers from background worker threads.",
    keyFeatures: [
      "Horizontal scaling of multiple worker processes",
      "Job retry management with exponential backoff configurations",
      "Priority-based queue scheduling logic",
      "Real-time event tracking using WebSockets"
    ],
    technologies: ["Node.js", "Express.js", "Redis", "MongoDB", "Docker", "Git"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "project-task-queue.webp"
  },
  {
    id: 3,
    title: "High-Performance Bookstore REST API",
    problem: "Inventory mismatch and slow read queries during concurrent order placement spikes.",
    solution: "Designed a clean-architecture REST API integrating MongoDB indexing, optimistic locking, and memory caching structures.",
    keyFeatures: [
      "Database read optimization yielding sub-50ms API response time",
      "Concurrency conflict safety using transactional operations",
      "Robust input validation and centralized error handling middleware",
      "Load tested with 10,000 requests using k6"
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Git", "GitHub"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "project-bookstore-api.webp"
  }
];
