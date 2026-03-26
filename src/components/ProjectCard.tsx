import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  to?: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  comingSoon?: boolean;
}

export default function ProjectCard({
  to,
  title,
  subtitle,
  description,
  tags,
  comingSoon,
}: ProjectCardProps) {
  const content = (
    <div
      className={`group interactive-card relative rounded-xl border border-white/5 bg-white/[0.02] p-6 ${
        comingSoon
          ? "opacity-50 cursor-default"
          : "hover:bg-white/[0.045] hover:border-accent/25 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
      }`}
    >
      {comingSoon && (
        <span className="absolute top-4 right-4 text-xs font-mono text-slate-500 border border-slate-700 rounded-full px-3 py-1">
          即将上线
        </span>
      )}

      <p className="text-sm font-mono text-accent/70 mb-2">{subtitle}</p>
      <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2 tracking-tight">
        {title}
        {!comingSoon && (
          <ArrowUpRight
            size={16}
            className="text-slate-500 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
          />
        )}
      </h3>
      <p className="text-base text-slate-300 leading-7 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="interactive-chip text-xs font-mono text-accent/60 bg-accent/5 rounded-full px-3 py-1 hover:bg-accent/10"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  if (comingSoon || !to) return content;
  return (
    <Link
      to={to}
      className="block rounded-xl focus-visible:outline-accent/60 focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {content}
    </Link>
  );
}
