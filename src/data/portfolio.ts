import type { StaticImageData } from "next/image";

import innologicLogo from "../../specs/logo/innologic-Logo.svg";
import kbzBankLogo from "../../specs/logo/kbz-bank-logo.svg";
import qhrmLogo from "../../specs/logo/qhrm_h_logo.svg";

export type Project = {
  title: string;
  description: string;
  tags: string[];
};

export type CaseStudy = {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  theme: "violet" | "emerald" | "amber" | "sky";
  metrics: {
    label: string;
    value: string;
  }[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type TechnicalSkillIcon =
  | "server"
  | "layout"
  | "database"
  | "architecture"
  | "terminal"
  | "spark";

export type TechnicalSkillRow = {
  title: string;
  description: string;
  icon: TechnicalSkillIcon;
  themeColor: string;
  glowColor: string;
  skills: string[];
};

export type Experience = {
  role: string;
  company: string;
  logo: StaticImageData;
  location: string;
  date: string;
  summary: string;
  bullets: string[];
  techTags: string[];
};

export type CoreStrength = {
  title: string;
  description: string;
  icon: "experience" | "backend" | "frontend" | "databaseProduction";
  decorativeIcons: DecorativeStrengthIcon[];
};

export type DecorativeStrengthIcon =
  | "briefcase"
  | "calendar"
  | "code"
  | "bug"
  | "check"
  | "users"
  | "csharp"
  | "dotnet"
  | "server"
  | "api"
  | "shield"
  | "database"
  | "mssql"
  | "react"
  | "next"
  | "typescript"
  | "tailwind"
  | "components"
  | "postgres"
  | "docker"
  | "cloud"
  | "azure"
  | "terminal"
  | "activity";

export const coreStrengths: CoreStrength[] = [
  {
    title: "3+ Years Experience",
    description:
      "Real business application development and production support.",
    icon: "experience",
    decorativeIcons: ["briefcase", "calendar", "code", "bug", "check"],
  },
  {
    title: "Backend Development",
    description:
      "ASP.NET Core, C#, REST APIs, JWT, RBAC, Clean Architecture, and API design.",
    icon: "backend",
    decorativeIcons: ["csharp", "dotnet", "server", "api", "shield"],
  },
  {
    title: "Frontend Development",
    description:
      "React, Next.js, TypeScript, Tailwind CSS, responsive UI, and reusable components.",
    icon: "frontend",
    decorativeIcons: ["react", "next", "typescript", "tailwind", "components"],
  },
  {
    title: "Database & Production",
    description:
      "SQL Server, PostgreSQL, EF Core, stored procedures, Docker, logging, deployment, and debugging.",
    icon: "databaseProduction",
    decorativeIcons: ["mssql", "postgres", "docker", "azure", "terminal"],
  },
];

export const projects: Project[] = [
  {
    title: "Product Analytics Dashboard",
    description:
      "A focused reporting interface with reusable chart panels, quick filters, and clean loading states.",
    tags: ["Next.js", "TypeScript", "UI Systems"],
  },
  {
    title: "Creative Studio Site",
    description:
      "A responsive portfolio experience with motion-led transitions and polished editorial layouts.",
    tags: ["React", "Tailwind CSS", "GSAP"],
  },
  {
    title: "Commerce Toolkit",
    description:
      "Composable storefront components for product discovery, cart flows, and campaign pages.",
    tags: ["Frontend", "Performance", "Accessibility"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    eyebrow: "01 - SaaS Analytics",
    title: "Executive Reporting Hub",
    description:
      "A focused analytics workspace for weekly growth reviews, built around fast filters, clean metric cards, and chart panels that stay readable in long sessions.",
    tags: ["Next.js", "Charts", "Dashboard UX"],
    theme: "violet",
    metrics: [
      { label: "load time", value: "1.2s" },
      { label: "views", value: "8" },
    ],
  },
  {
    eyebrow: "02 - Operations",
    title: "Workflow Command Center",
    description:
      "A compact operations surface for task routing, team handoff, and production visibility, designed to reduce switching between support tools.",
    tags: ["React", "Queues", "Internal Tools"],
    theme: "emerald",
    metrics: [
      { label: "tasks", value: "124" },
      { label: "sla", value: "98%" },
    ],
  },
  {
    eyebrow: "03 - Commerce",
    title: "Merchant Catalog Builder",
    description:
      "A storefront management flow that combines product editing, preview states, and campaign checks into a calmer publishing experience.",
    tags: ["TypeScript", "Forms", "Preview"],
    theme: "amber",
    metrics: [
      { label: "items", value: "320" },
      { label: "drafts", value: "14" },
    ],
  },
  {
    eyebrow: "04 - Finance",
    title: "Subscription Revenue Console",
    description:
      "A finance-friendly interface for subscriptions, invoices, and account health, with dense tables balanced by clear summaries and status signals.",
    tags: ["ASP.NET", "Billing", "Data Tables"],
    theme: "sky",
    metrics: [
      { label: "mrr", value: "$42k" },
      { label: "risk", value: "Low" },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Motion",
    items: ["GSAP", "Micro-interactions", "Page transitions", "Scroll effects"],
  },
  {
    title: "Delivery",
    items: ["Responsive UI", "Component architecture", "Performance", "Clean handoff"],
  },
];

export const technicalSkillRows: TechnicalSkillRow[] = [
  {
    title: "Backend Development",
    description: "Secure API foundations, authentication flows, and role-aware service layers.",
    icon: "server",
    themeColor: "#38bdf8",
    glowColor: "rgba(56, 189, 248, 0.32)",
    skills: [
      "ASP.NET Core",
      "C#",
      "REST API",
      "JWT Authentication",
      "Refresh Token",
      "RBAC",
      "Permission-based Authorization",
    ],
  },
  {
    title: "Frontend Development",
    description: "Responsive interfaces built from typed, reusable components.",
    icon: "layout",
    themeColor: "#a78bfa",
    glowColor: "rgba(167, 139, 250, 0.34)",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
      "Reusable Components",
    ],
  },
  {
    title: "Database & Data",
    description: "Relational data modeling, query work, and practical database troubleshooting.",
    icon: "database",
    themeColor: "#34d399",
    glowColor: "rgba(52, 211, 153, 0.3)",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "Entity Framework Core",
      "Stored Procedures",
      "Query Debugging",
      "Database Design",
    ],
  },
  {
    title: "Architecture & Patterns",
    description: "Maintainable backend structure with clear boundaries and predictable contracts.",
    icon: "architecture",
    themeColor: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.32)",
    skills: [
      "Clean Architecture",
      "Repository Pattern",
      "Unit of Work",
      "Dependency Injection",
      "API Design",
      "Global Error Handling",
    ],
  },
  {
    title: "Production & Tools",
    description: "Deployment, observability, API testing, and production support workflows.",
    icon: "terminal",
    themeColor: "#fb7185",
    glowColor: "rgba(251, 113, 133, 0.3)",
    skills: [
      "Docker",
      "Railway",
      "GitHub",
      "Cloudflare R2",
      "Serilog",
      "Seq",
      "Postman",
      "Swagger",
    ],
  },
  {
    title: "AI & Developer Workflow",
    description: "AI-assisted implementation, debugging, documentation, and iteration loops.",
    icon: "spark",
    themeColor: "#22d3ee",
    glowColor: "rgba(34, 211, 238, 0.3)",
    skills: [
      "Codex",
      "ChatGPT",
      "Prompt Engineering",
      "AI-assisted Development",
      "Debugging Workflow",
      "Documentation",
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "QHRM",
    logo: qhrmLogo,
    location: "Yangon, Myanmar",
    date: "May 2025 - Present",
    summary:
      "Working on HRMS, attendance, payroll, leave, reporting, and production support features using ASP.NET Core, SQL Server, Dapper, and stored procedures.",
    bullets: [
      "Develop and maintain backend features for HRMS modules under tight release timelines.",
      "Debug production issues related to attendance, leave, payroll reports, email jobs, and data inconsistencies.",
      "Work with legacy code, stored procedures, and business workflows to identify root causes and deliver fixes.",
      "Support QA, release testing, deployment activities, and client feedback during live issue resolution.",
      "Collaborate with backend, mobile, and support teams to stabilize business-critical HRMS features.",
    ],
    techTags: [
      "ASP.NET Core",
      "SQL Server",
      "Dapper",
      "Stored Procedures",
      "HRMS",
      "Production Support",
    ],
  },
  {
    role: "Full Stack Software Engineer",
    company: "KBZ Bank",
    logo: kbzBankLogo,
    location: "Yangon, Myanmar",
    date: "Feb 2024 - May 2025",
    summary:
      "Built and supported business applications using ASP.NET Core, React, TypeScript, AWS services, and database-driven backend systems.",
    bullets: [
      "Developed RESTful APIs with ASP.NET Core and designed database schemas for business-critical applications.",
      "Built frontend interfaces with React and TypeScript and integrated them with backend APIs.",
      "Worked with microservices and cloud services including AWS Fargate, ECS, and SQS.",
      "Collaborated with a team of engineers using agile development practices.",
      "Participated in internal AWS training and contributed to an AI-powered RAG application using AWS Bedrock.",
    ],
    techTags: [
      "ASP.NET Core",
      "React",
      "TypeScript",
      "AWS Fargate",
      "ECS",
      "SQS",
      "Microservices",
      "AWS Bedrock",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "InnoLogic",
    logo: innologicLogo,
    location: "Yangon, Myanmar",
    date: "Jul 2019 - Feb 2020",
    summary:
      "Started my professional development journey by building web pages and backend functionality for client projects.",
    bullets: [
      "Built responsive landing pages using ASP.NET Web Forms and Bootstrap.",
      "Developed backend functionality with ASP.NET Web Forms, MSSQL, and stored procedures.",
      "Deployed web applications to IIS for production use.",
      "Learned practical software development workflows through real client-facing projects.",
    ],
    techTags: [
      "ASP.NET Web Forms",
      "Bootstrap",
      "MSSQL",
      "Stored Procedures",
      "IIS",
    ],
  },
];
