import { Link } from "react-router-dom";
import { ArrowLeft, Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-accent transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          返回首页
        </Link>

        <div className="flex items-start justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">简历</h1>
          <a
            href="/personal-home/resume.pdf"
            download
            className="inline-flex items-center gap-2 text-sm text-accent border border-accent/30 rounded-lg px-4 py-2 hover:bg-accent/10 transition-colors"
          >
            <Download size={15} />
            下载 PDF
          </a>
        </div>

        {/* Resume content */}
        <div className="space-y-10">
          {/* Header */}
          <section>
            <h2 className="text-xl font-bold text-white mb-1">韦莉萍</h2>
            <p className="text-sm text-accent/70 font-mono mb-3">
              产品经理 · AI 驱动的消费级产品
            </p>
            <p className="text-sm text-slate-400">
              GitHub:{" "}
              <a
                href="https://github.com/wei-liping"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent/70 hover:text-accent transition-colors"
              >
                github.com/wei-liping
              </a>
            </p>
          </section>

          <hr className="border-white/5" />

          {/* Projects */}
          <section>
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
              项目经历
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="text-sm font-semibold text-slate-200">
                    悟理 AI —— 苏格拉底式物理 AI 私教
                  </h4>
                  <span className="text-xs text-slate-500 font-mono">2025</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-2">
                  独立完成用户调研、竞品分析（3 款 AI
                  产品深度评测）、产品设计、开发与部署。 通过苏格拉底式分步引导
                  + SM-2 间隔复习算法，解决学生「看懂但不会做」的核心痛点。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["AI", "教育科技", "React", "竞品分析", "用户调研"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-accent/50 bg-accent/5 rounded-full px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="text-sm font-semibold text-slate-200">
                    聊天 Debug —— AI 社交对话分析工具
                  </h4>
                  <span className="text-xs text-slate-500 font-mono">2025</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-2">
                  独立完成心理学理论调研、产品架构设计、Prompt
                  Engineering、前端开发与部署。
                  三层分析架构（感知→推理→生成），将心理学理论转化为可交互的产品体验。
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AI",
                    "心理学",
                    "Vue",
                    "Prompt Engineering",
                    "产品设计",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-accent/50 bg-accent/5 rounded-full px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <hr className="border-white/5" />

          {/* Skills */}
          <section>
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
              核心能力
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-400">
              <div>
                <p className="text-slate-300 font-medium mb-2">产品</p>
                <p>
                  用户调研 · 竞品分析 · 需求定义 · PRD · 交互设计 · 数据分析
                </p>
              </div>
              <div>
                <p className="text-slate-300 font-medium mb-2">技术</p>
                <p>
                  React / Vue · TypeScript · Prompt Engineering · LLM API ·
                  CI/CD
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Placeholder notice */}
        <div className="mt-12 rounded-lg border border-white/5 bg-white/[0.02] p-5 flex items-start gap-3">
          <FileText size={18} className="text-slate-500 mt-0.5 shrink-0" />
          <p className="text-xs text-slate-500">
            以上为简历摘要。如需完整简历，请点击右上角下载 PDF
            版本，或通过邮件联系我获取。将 PDF 文件放置在{" "}
            <code className="text-accent/50 font-mono">public/resume.pdf</code>{" "}
            即可启用下载功能。
          </p>
        </div>
      </div>
    </div>
  );
}
