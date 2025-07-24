import type { CourseOutline } from "../types/index";

export const courseOutlines: CourseOutline[] = [
  {
    title: "MERN Stack Developer",
    duration: "16 Weeks",
    level: "Beginner",
    mode: "onsite",
    objective:
      "Equip learners with complete MERN stack skills (MongoDB, Express, React, Node) + real-world deployment + freelancing readiness.",
    learningOutcomes: [
      "Build dynamic, data-driven full-stack web applications",
      "Understand RESTful APIs, MongoDB schemas, authentication, and deployment",
      "Integrate modern tools like Tailwind, GitHub, Vercel, and Postman",
      "Freelance-ready with portfolio, proposal writing, and real-world workflows",
    ],
    roadmap: [
      {
        week: "Week 1: Web Development Fundamentals",
        topics: [
          "What is full-stack? Overview of MERN",
          "HTML + CSS crash course",
          "How the web works: HTTP, frontend/backend",
          "JavaScript basics (variables, loops, conditions, functions)",
          "Basics of GIT",
        ],
        logicFocus: "Programming foundations",
      },
      {
        week: "Week 2: Tailwind CSS + UI Design",
        topics: [
          "Setting up Tailwind in React",
          "Utility-first CSS",
          "Responsive design",
          "Components: cards, buttons, navbars",
        ],
        logicFocus: "Clean UI with structure",
        softSkills: "Visual hierarchy and UI polish",
      },
      {
        week: "Week 3: JavaScript Deep Dive",
        topics: [
          "Arrays, Objects, Loops, Conditions",
          "Functions, Scope, Hoisting",
          "DOM Manipulation",
          "Event handling & simple UI interactivity",
        ],
        logicFocus: "Building logic with JS",
        softSkills: "Problem-solving mindset",
      },
      {
        week: "Week 4: Introduction to React",
        topics: [
          "Why React? SPA",
          "JSX, Components, Props",
          "Lists and Keys",
          "Folder structure and setup",
        ],
        logicFocus: "Component-based thinking",
        softSkills: "Reusability & design structure",
      },
      {
        week: "Week 5: React State + Events",
        topics: [
          "useState and dynamic interfaces",
          "Controlled components (forms)",
          "Conditional rendering",
          "Handling events (clicks, inputs, etc.)",
        ],
        logicFocus: "UI state logic",
        softSkills: "Interaction design thinking",
      },
      {
        week: "Week 6: React useEffect + Side Effects",
        topics: [
          "useEffect usage",
          "Fetching data from public APIs",
          "Local storage",
          "Cleanup functions",
        ],
        logicFocus: "Async flow, side effect handling",
        softSkills: "State synchronization",
      },
      {
        week: "Week 7: Routing & Page Management",
        topics: [
          "React Router basics",
          "Nested Routes, Params",
          "Navigation Menus",
          "Dynamic Routes (e.g. /product/:id)",
        ],
        logicFocus: "State ↔ URL mapping",
        softSkills: "Navigation flow planning",
      },
      {
        week: "Week 8: Node.js + Express Intro",
        topics: [
          "Intro to backend, Node, npm",
          "Express.js basics",
          "Routes, Controllers, Middleware",
          "Postman for API testing",
        ],
        logicFocus: "Request → Response pipeline",
        softSkills: "Clear backend structuring",
      },
      {
        week: "Week 9: MongoDB + Mongoose",
        topics: [
          "What is NoSQL?",
          "MongoDB Atlas setup",
          "Mongoose Schemas",
          "Creating and connecting models",
        ],
        logicFocus: "Schema → Data design",
        softSkills: "Data relationships",
      },
      {
        week: "Week 10: Building Full CRUD API",
        topics: [
          "RESTful APIs (GET, POST, PUT, DELETE)",
          "Handling errors and validations",
          "Async/Await and try/catch",
          "CORS, JSON",
        ],
        logicFocus: "Full data lifecycle",
        softSkills: "Modular backend",
      },
      {
        week: "Week 11: Connecting Frontend to Backend",
        topics: [
          "Fetching data from your own API",
          "Axios vs fetch",
          "React forms → Node → MongoDB",
          "Displaying backend data in frontend",
        ],
        logicFocus: "End-to-end data flow",
      },
      {
        week: "Week 12: Authentication System (JWT)",
        topics: [
          "Register/Login forms",
          "Hashing passwords with bcrypt",
          "JWT creation, verification",
          "Protecting routes",
        ],
        logicFocus: "Auth + session flow",
        softSkills: "Security awareness",
      },
      {
        week: "Week 13: Dashboard & Role-based Auth",
        topics: [
          "Admin vs normal users",
          "Conditional rendering based on roles",
          "Dashboard pages",
          "CRUD for admin only",
        ],
        logicFocus: "Role logic & access control",
        softSkills: "Permission-based systems",
      },
      {
        week: "Week 14: File Uploads & Cloud Storage",
        topics: [
          "Uploading images with Multer",
          "Cloudinary or Firebase setup",
          "Saving image links in DB",
          "Displaying uploaded media",
        ],
        logicFocus: "Binary handling + frontend sync",
        softSkills: "Media + UX handling",
      },
      {
        week: "Week 15: Final Project Week (Full MERN App)",
        topics: [
          "Choose One:",
          "- Blog App (Auth + Posts + Comments)",
          "- E-commerce Store (Auth + Cart + Checkout)",
          "- Dashboard App (Admin + Users + CRUD)",
          "Tech: React, Tailwind, Node, MongoDB, JWT, Cloudinary",
        ],
        softSkills: "Project planning, clean code, code walkthrough prep",
      },
      {
        week: "Week 16: Deployment & Freelancing",
        topics: [
          "Git basics + GitHub projects",
          "Hosting frontend on Vercel",
          "Hosting backend on Render or Railway",
          "Fiverr/Upwork basics, proposal writing",
          "Personal portfolio setup",
        ],
        logicFocus: "Final launch skills",
        softSkills: "Presentation, professionalism, income skills",
      },
    ],
  },

  {
    title: "Frontend Development",
    duration: "8 Weeks",
    level: "Beginner",
    mode: "onsite + online",
    objective:
      "To build a strong foundation in frontend web development by mastering core web technologies: HTML, CSS, JavaScript, and Tailwind CSS, enabling students to create responsive, interactive, and beautiful websites.",
    learningOutcomes: [
      "Build fully responsive and accessible websites",
      "Understand core frontend languages: HTML, CSS, and JavaScript",
      "Use Tailwind CSS for rapid UI development",
      "Make websites interactive with DOM & JS",
      "Deploy projects and showcase on GitHub",
    ],
    roadmap: [
      {
        week: "Week 1: Introduction to Web & HTML Essentials",
        topics: [
          "How the Web Works (Browsers, Hosting, HTTP)",
          "HTML Tags & Structure",
          "Text, Images, Links, Lists, Tables",
          "Forms & Input Elements",
          "Semantic HTML",
        ],
        logicFocus: "Structuring content logically and semantically",
        softSkills: "Visual Breakdown, Attention to Structure",
      },
      {
        week: "Week 2: CSS Basics – Styling the Web",
        topics: [
          "Inline, Internal, and External CSS",
          "CSS Selectors, Properties, and Values",
          "Colors, Units, Borders, Padding, Margin",
          "Typography and Basic Layout Styling",
          "Box Model",
        ],
        logicFocus: "Visual layering and box-based design",
        softSkills: "UI Sensibility, Eye for Design Details",
      },
      {
        week: "Week 3: CSS Layouts – Flexbox",
        topics: [
          "display, position, and layout flow",
          "Flexbox fundamentals: main & cross axis",
          "Display properties",
          "Layout challenges and practice",
        ],
        logicFocus: "Designing fluid, responsive page structures",
        softSkills: "Design Thinking, Responsive Planning",
      },
      {
        week: "Week 4: Responsive Design & Media Queries",
        topics: [
          "Viewport, % and em units, rem, vh, vw",
          "Mobile-first vs Desktop-first approaches",
          "Media Queries",
          "Hiding/showing content, breakpoints",
        ],
        logicFocus: "Making layouts adapt across devices",
        softSkills: "Mobile Usability, Accessibility Awareness",
      },
      {
        week: "Week 5: Tailwind CSS – Utility-First Styling",
        topics: [
          "Why Tailwind?",
          "Setup with CDN or Project",
          "Utility classes: spacing, colors, layout, fonts",
          "Responsive Design with Tailwind",
          "Reusable Components",
        ],
        logicFocus: "Rapid UI development through utilities",
        softSkills: "UI Reusability, Class Management",
      },
      {
        week: "Week 6: JavaScript Fundamentals",
        topics: [
          "What is Programming Language?",
          "History of JS",
          "Variables & Data Types",
          "Operators and Expressions",
          "Conditions (if, else, switch)",
          "Loops (for, while)",
          "Functions and Parameters",
        ],
        logicFocus: "Problem-solving with conditions and repetition",
        softSkills: "Logical Reasoning, Debugging Basics",
      },
      {
        week: "Week 7: DOM Manipulation & Events",
        topics: [
          "Selecting Elements (querySelector, getElementById)",
          "Updating content dynamically",
          "Handling Events (click, submit, keyup)",
          "Real-time Interactions (like toggling menus)",
        ],
        logicFocus: "Making websites interactive using logic",
        softSkills: "Event Flow Understanding, Code Planning",
      },
      {
        week: "Week 8: Final Project Week – Build a Complete Website",
        topics: [
          "Choose your own project:",
          "- Portfolio Website",
          "- Ecommerce Landing Page",
          "- Blog UI",
          "- Todo List App",
          "Combine HTML + CSS + Tailwind + JS",
          "Focus on responsiveness, interactivity, and design",
          "Final Presentation + Code Walkthrough",
        ],
        logicFocus: "Bringing structure, design, and interaction together",
        softSkills: "Project Thinking, Clean Code, UI Polishing",
      },
    ],
  },

  {
    title: "Software Testing (Manual + Basics of Automation)",
    duration: "8 Weeks",
    level: "Beginner to Intermediate",
    mode: "onsite + online",
    objective:
      "Confident in manual testing, automation basics, tools, and industry workflow.",
    learningOutcomes: [
      "Confident in writing and executing manual tests",
      "Familiar with test planning, documentation, and reporting",
      "Hands-on with industry tools like Jira and GitHub",
      "Capable of automating UI tests using modern tools",
      "Ready to contribute to real-world QA teams",
    ],
    roadmap: [
      {
        week: "Week 1: Introduction to Software Testing",
        topics: [
          "What is Software Testing? Why Testing Matters",
          "Types of Testing (Functional vs Non-functional)",
          "SDLC vs STLC",
          "Testing Principles & QA Mindset",
        ],
        logicFocus:
          "Understanding quality lifecycle and thinking like a tester",
        softSkills: "Analytical Thinking, Attention to Detail",
      },
      {
        week: "Week 2: Manual Testing Techniques & Test Artifacts",
        topics: [
          "Test Case vs Test Scenario vs Bug Report",
          "Writing Good Test Cases",
          "Testing Techniques: BVA, EP, Decision Tables",
          "Positive vs Negative Testing",
        ],
        logicFocus: "Designing effective manual test scenarios",
        softSkills: "Pseudocode Thinking, Logical Reasoning",
      },
      {
        week: "Week 3: Test Planning & Documentation",
        topics: [
          "Test Plan, Test Strategy, and Test Summary",
          "Traceability Matrix",
          "Test Coverage & Prioritization",
          "Defect Life Cycle",
        ],
        logicFocus: "Structuring and documenting quality assurance",
        softSkills: "Documentation Clarity, Strategic Planning",
      },
      {
        week: "Week 4: Bug Reporting & Tools",
        topics: [
          "How to write clear & reproducible bug reports",
          "Severity vs Priority",
          "Hands-on with Jira, TestRail, or Bugzilla",
          "Exploratory Testing & Session-based Testing",
        ],
        logicFocus: "Systematic issue reporting and tracking",
        softSkills: "Communication, Critical Thinking",
      },
      {
        week: "Week 5: Automation Testing Fundamentals",
        topics: [
          "Why & When to Automate",
          "Manual vs Automated Testing",
          "Introduction to Automation Flow",
          "Choosing the Right Tool",
        ],
        logicFocus: "Automation decision-making logic",
        softSkills: "Problem-Solving, Tool Selection",
      },
      {
        week: "Week 6: Maestro",
        topics: [
          "Tool Setup (Selenium, Maestro)",
          "Locators: XPath, CSS Selectors",
          "Writing Basic Test Scripts",
          "Running and Validating Tests",
        ],
        logicFocus: "Writing logic-based automation scripts",
        softSkills: "Debugging, Script Planning",
      },
      {
        week: "Week 7: Automation Frameworks & Test Suites",
        topics: [
          "Folder Structure & Framework Setup",
          "Test Runner (e.g., Jest, Mocha, PyTest)",
          "Assertions, Hooks, Fixtures",
          "Organizing & Reusing Code",
        ],
        logicFocus: "Building reusable and scalable test automation logic",
        softSkills: "Clean Code Practices, Reusability Mindset",
      },
      {
        week: "Week 8: CI/CD Integration, Git & Final Project",
        topics: [
          "Git & GitHub for Version Control",
          "Running Tests in GitHub Actions / Jenkins",
          "Final Project: Test a real-world web app (Manual + Automation)",
          "Code Review, Report Submission & Presentation",
        ],
        logicFocus: "Testing as part of development lifecycle",
        softSkills: "Team Collaboration, Presentation Skills",
      },
    ],
  },
];
