import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-[var(--line)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-xl font-semibold text-neutral-950">{project.title}</h3>
      <p className="mt-3 leading-7 text-[var(--muted)]">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#edf7f5] px-3 py-1 text-xs font-semibold text-teal-800"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
