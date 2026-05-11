import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  to?: string;
  title: string;
  subtitle: string;
  /** 与 story 二选一：无 story 时用整段描述 */
  description?: string;
  /** [问题, 关键行动, 结果] */
  story?: [string, string, string];
  tags: string[];
  /** 扫描用结果标签，如「链路闭环」 */
  outcomes?: string[];
  /** 首页三大核心项目高亮 */
  featured?: boolean;
  comingSoon?: boolean;
}

export default function ProjectCard({
  to,
  title,
  subtitle,
  description,
  story,
  tags,
  outcomes,
  featured,
  comingSoon,
}: ProjectCardProps) {
  const body =
    story && story.length === 3 ? (
      <div className="space-y-2.5 mb-4 text-sm text-slate-600 leading-relaxed">
        <p className="break-words">
          <span className="font-semibold text-slate-800">问题 · </span>
          {story[0]}
        </p>
        <p className="break-words">
          <span className="font-semibold text-slate-800">行动 · </span>
          {story[1]}
        </p>
        <p className="break-words">
          <span className="font-semibold text-slate-800">结果 · </span>
          {story[2]}
        </p>
      </div>
    ) : (
      <p className="text-base text-slate-600 leading-relaxed mb-4 break-words">
        {description}
      </p>
    );

  const content = (
    <div
      className={`group interactive-card relative w-full min-w-0 rounded-2xl border bg-white p-5 sm:p-7 card-shadow ${
        featured
          ? "border-blue-200/80 ring-1 ring-blue-100/80"
          : "border-gray-200/90"
      } ${
        comingSoon
          ? "opacity-50 cursor-default"
          : "card-shadow-hover hover:border-blue-200/80 hover:scale-[1.015]"
      }`}
    >
      {featured && !comingSoon && (
        <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-2.5 py-1">
          核心项目
        </span>
      )}
      {comingSoon && (
        <span className="absolute top-4 right-4 text-xs font-mono text-slate-500 border border-gray-300 rounded-full px-3 py-1">
          即将上线
        </span>
      )}

      <p className="text-sm font-mono text-blue-600 mb-2 tracking-wide">
        {subtitle}
      </p>
      <h3 className="text-xl font-semibold text-slate-900 mb-3 flex min-w-0 items-center gap-2 tracking-tight pr-16">
        <span className="min-w-0 break-words">{title}</span>
        {!comingSoon && (
          <ArrowUpRight
            size={16}
            className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
          />
        )}
      </h3>
      {body}
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="interactive-chip inline-block text-xs font-mono text-blue-700 bg-blue-50 rounded-full px-3 py-1 hover:bg-blue-100 border border-blue-100/80"
          >
            {tag}
          </span>
        ))}
      </div>
      {outcomes && outcomes.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
          {outcomes.map((o) => (
            <span
              key={o}
              className="text-xs font-medium text-slate-600 bg-slate-100/90 rounded-md px-2.5 py-1"
            >
              {o}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  if (comingSoon || !to) return content;
  return (
    <Link
      to={to}
      className="block w-full min-w-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/45 focus-visible:ring-offset-2"
    >
      {content}
    </Link>
  );
}
