import type { StaticImageData } from "next/image";

import qhrmHomeImage from "../../specs/case-study/Home.png";
import qhrmMyRequestImage from "../../specs/case-study/My Request.png";
import qhrmDashboardImage from "../../specs/case-study/qhrm-v2-dashboard.png";
import qhrmV2AttendanceImage from "../../specs/case-study/v2-attendance.jpg";
import smartHrImage from "../../specs/case-study/smartHR.webp";
import smartHrSettingImage from "../../specs/case-study/smarthr setting.webp";
import vpnDashboardImage from "../../specs/case-study/vpn-dashboard.png";
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
  image?: StaticImageData;
  secondaryImage?: StaticImageData;
  preview?: "mobile";
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
    image: qhrmDashboardImage,
    secondaryImage: qhrmV2AttendanceImage,
    metrics: [
      { label: "load time", value: "1.2s" },
      { label: "views", value: "8" },
    ],
  },
  {
    eyebrow: "02 - VPN Admin",
    title: "VPN User Management Console",
    description:
      "A dark admin dashboard for managing VPN users, active status, expiry windows, data usage, and operational actions from one dense control surface.",
    tags: ["Next.js", "Admin UI", "Usage Tracking"],
    theme: "emerald",
    image: vpnDashboardImage,
    metrics: [
      { label: "users", value: "10" },
      { label: "data", value: "443GB" },
    ],
  },
  {
    eyebrow: "03 - Mobile HR",
    title: "QHRM Mobile Workspace",
    description:
      "A mobile HR workspace for attendance, leave, payroll, onboarding, and team actions, designed around fast check-ins and clear daily tasks.",
    tags: ["Mobile UI", "HRMS", "Self-Service"],
    theme: "amber",
    preview: "mobile",
    image: qhrmHomeImage,
    secondaryImage: qhrmMyRequestImage,
    metrics: [
      { label: "modules", value: "8" },
      { label: "check-in", value: "08:00" },
    ],
  },
  {
    eyebrow: "04 - Smart HR",
    title: "SmartHR Employee Workspace",
    description:
      "A mobile employee workspace for attendance, profile settings, HR requests, learning, reports, and daily self-service actions.",
    tags: ["Mobile UI", "Employee App", "Self-Service"],
    theme: "sky",
    preview: "mobile",
    image: smartHrImage,
    secondaryImage: smartHrSettingImage,
    metrics: [
      { label: "modules", value: "9" },
      { label: "screens", value: "2" },
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
    role: "Software Developer",
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
