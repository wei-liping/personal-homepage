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
      className={`group relative rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 ${
        comingSoon
          ? "opacity-50 cursor-default"
          : "hover:bg-white/[0.05] hover:border-accent/20 hover:-translate-y-1"
      }`}
    >
      {comingSoon && (
        <span className="absolute top-4 right-4 text-xs font-mono text-slate-500 border border-slate-700 rounded-full px-3 py-1">
          即将上线
        </span>
      )}

      <p className="text-xs font-mono text-accent/70 mb-2">{subtitle}</p>
      <h3 className="text-lg font-semibold text-slate-100 mb-3 flex items-center gap-2">
        {title}
        {!comingSoon && (
          <ArrowUpRight
            size={16}
            className="text-slate-500 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
          />
        )}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono text-accent/60 bg-accent/5 rounded-full px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  if (comingSoon || !to) return content;
  return <Link to={to}>{content}</Link>;
}
