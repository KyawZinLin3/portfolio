export type Project = {
  title: string;
  description: string;
  tags: string[];
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
