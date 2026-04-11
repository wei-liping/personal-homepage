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
      className={`group interactive-card relative rounded-2xl border border-gray-200/90 bg-white p-7 card-shadow ${
        comingSoon
          ? "opacity-50 cursor-default"
          : "card-shadow-hover hover:border-blue-200/80 hover:scale-[1.015]"
      }`}
    >
      {comingSoon && (
        <span className="absolute top-4 right-4 text-xs font-mono text-slate-500 border border-gray-300 rounded-full px-3 py-1">
          即将上线
        </span>
      )}

      <p className="text-sm font-mono text-blue-600 mb-2 tracking-wide">
        {subtitle}
      </p>
      <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2 tracking-tight">
        {title}
        {!comingSoon && (
          <ArrowUpRight
            size={16}
            className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
          />
        )}
      </h3>
      <p className="text-base text-slate-600 leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="interactive-chip inline-block text-xs font-mono text-blue-700 bg-blue-50 rounded-full px-3 py-1 hover:bg-blue-100 border border-blue-100/80"
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
      className="block rounded-2xl focus-visible:outline-blue-600/60 focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {content}
    </Link>
  );
}
