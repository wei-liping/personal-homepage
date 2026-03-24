import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

interface CaseNav {
  to: string;
  label: string;
}

interface CaseLayoutProps {
  title: string;
  subtitle: string;
  tags: string[];
  tldr: string;
  github?: string;
  live?: string;
  prev?: CaseNav;
  next?: CaseNav;
  children: ReactNode;
}

export default function CaseLayout({
  title,
  subtitle,
  tags,
  tldr,
  github,
  live,
  prev,
  next,
  children,
}: CaseLayoutProps) {
  return (
    <article className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-accent transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          返回首页
        </Link>

        {/* Header */}
        <header className="mb-12">
          <p className="text-sm font-mono text-accent/70 mb-3">{subtitle}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-accent/60 bg-accent/5 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 mb-8">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors"
              >
                <Github size={15} /> 源代码
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors"
              >
                <ExternalLink size={15} /> 在线体验
              </a>
            )}
          </div>

          {/* TL;DR */}
          <div className="rounded-lg border border-accent/10 bg-accent/[0.03] p-5">
            <p className="text-xs font-mono text-accent/50 mb-2">TL;DR</p>
            <p className="text-sm text-slate-300 leading-relaxed">{tldr}</p>
          </div>
        </header>

        {/* Content */}
        <div className="space-y-16">{children}</div>

        {/* Navigation */}
        <nav className="mt-20 pt-10 border-t border-white/5 flex justify-between">
          {prev ? (
            <Link
              to={prev.to}
              className="text-sm text-slate-500 hover:text-accent transition-colors"
            >
              ← {prev.label}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={next.to}
              className="text-sm text-slate-500 hover:text-accent transition-colors"
            >
              {next.label} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  );
}

interface SectionProps {
  icon: string;
  title: string;
  children: ReactNode;
}

export function Section({ icon, title, children }: SectionProps) {
  return (
    <section>
      <h2 className="flex items-center gap-3 text-xl font-semibold text-white mb-6">
        <span className="text-lg">{icon}</span>
        {title}
      </h2>
      <div className="text-sm text-slate-400 leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}

interface DecisionProps {
  title: string;
  problem: string;
  decision: string;
  tradeoff: string;
  rationale?: string;
}

export function Decision({
  title,
  problem,
  decision,
  tradeoff,
  rationale,
}: DecisionProps) {
  return (
    <div className="rounded-lg border border-white/5 bg-white/[0.02] p-5 space-y-3">
      <h4 className="text-sm font-semibold text-slate-200">{title}</h4>
      <div className="space-y-2 text-sm">
        <p>
          <span className="text-accent/60 font-mono text-xs mr-2">问题</span>
          <span className="text-slate-400">{problem}</span>
        </p>
        <p>
          <span className="text-accent/60 font-mono text-xs mr-2">决策</span>
          <span className="text-slate-300">{decision}</span>
        </p>
        <p>
          <span className="text-accent/60 font-mono text-xs mr-2">权衡</span>
          <span className="text-slate-400">{tradeoff}</span>
        </p>
        {rationale && (
          <p>
            <span className="text-accent/60 font-mono text-xs mr-2">依据</span>
            <span className="text-slate-400">{rationale}</span>
          </p>
        )}
      </div>
    </div>
  );
}
