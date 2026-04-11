import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

export interface CaseGalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

/** 1–3 张图自适应栅格；截图放入 public/example-images/ 后替换 src */
export function CaseImageGallery({ images }: { images: CaseGalleryImage[] }) {
  if (images.length === 0) return null;
  const gridClass =
    images.length === 1
      ? "grid-cols-1 max-w-2xl"
      : images.length === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-3";

  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {images.map((img, i) => (
        <figure
          key={`${img.src}-${i}`}
          className="rounded-xl border border-gray-200/90 bg-white overflow-hidden card-shadow"
        >
          <div className="aspect-video bg-slate-100 flex items-center justify-center">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          {img.caption ? (
            <figcaption className="text-xs text-slate-500 px-3 py-2.5 border-t border-gray-100 leading-relaxed">
              {img.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}

export interface StarSummaryProps {
  context: string;
  challenge: string;
  action: string;
  outcome: string;
}

export function StarSummary({
  context,
  challenge,
  action,
  outcome,
}: StarSummaryProps) {
  const cells: { label: string; text: string }[] = [
    { label: "背景", text: context },
    { label: "挑战", text: challenge },
    { label: "关键动作", text: action },
    { label: "结果", text: outcome },
  ];
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {cells.map(({ label, text }) => (
        <div
          key={label}
          className="rounded-xl border border-gray-200/90 bg-white/80 p-4 card-shadow"
        >
          <p className="text-xs font-mono text-blue-600 tracking-wide mb-2">
            {label}
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">{text}</p>
        </div>
      ))}
    </div>
  );
}

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
          className="interactive-link inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-slate-900 mb-10 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2"
        >
          <ArrowLeft size={14} />
          返回首页
        </Link>

        {/* Header */}
        <header className="mb-12">
          <p className="text-sm font-mono text-blue-600 mb-3 tracking-wide">
            {subtitle}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-4 tracking-tight leading-[1.1]">
            {title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="interactive-chip inline-block text-xs font-mono text-blue-700 bg-blue-50 border border-blue-100/80 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-5 mb-8">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-link inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-slate-900 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2"
              >
                <Github size={15} /> 源代码
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-link inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-slate-900 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2"
              >
                <ExternalLink size={15} /> 在线体验
              </a>
            )}
          </div>

          {/* TL;DR — vibrancy-style material */}
          <div className="rounded-2xl border border-blue-200/40 bg-white/60 backdrop-blur-md p-5 card-shadow">
            <p className="text-xs font-mono text-blue-600 mb-2 tracking-[0.15em]">
              TL;DR
            </p>
            <p className="text-base text-slate-700 leading-relaxed">{tldr}</p>
          </div>
        </header>

        {/* Content */}
        <div className="space-y-20">{children}</div>

        {/* Navigation */}
        <nav className="mt-20 pt-10 border-t border-gray-200 flex justify-between">
          {prev ? (
            <Link
              to={prev.to}
              className="interactive-link text-sm font-semibold text-blue-600 hover:text-slate-900 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 px-1 -mx-1"
            >
              ← {prev.label}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={next.to}
              className="interactive-link text-sm font-semibold text-blue-600 hover:text-slate-900 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 px-1 -mx-1"
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
      <h2 className="flex items-center gap-3 text-2xl md:text-[28px] font-semibold text-slate-900 mb-6 tracking-tight leading-snug">
        <span className="text-lg">{icon}</span>
        {title}
      </h2>
      <div className="text-base text-slate-600 leading-relaxed space-y-4">
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
    <div className="interactive-card card-shadow card-shadow-hover rounded-xl border border-gray-200/90 border-l-[3px] border-l-blue-600 bg-white pl-4 pr-5 py-5 space-y-3 hover:border-gray-200 hover:border-l-blue-600 hover:scale-[1.005]">
      <h4 className="text-base font-semibold text-slate-900">{title}</h4>
      <div className="space-y-2 text-sm">
        <p>
          <span className="text-blue-600 font-mono text-xs mr-2">问题</span>
          <span className="text-slate-600">{problem}</span>
        </p>
        <p>
          <span className="text-blue-600 font-mono text-xs mr-2">决策</span>
          <span className="text-slate-700">{decision}</span>
        </p>
        <p>
          <span className="text-blue-600 font-mono text-xs mr-2">权衡</span>
          <span className="text-slate-600">{tradeoff}</span>
        </p>
        {rationale && (
          <p>
            <span className="text-blue-600 font-mono text-xs mr-2">依据</span>
            <span className="text-slate-600">{rationale}</span>
          </p>
        )}
      </div>
    </div>
  );
}
