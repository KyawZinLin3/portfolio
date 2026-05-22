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
