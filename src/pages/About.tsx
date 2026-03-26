import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function About() {
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

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          关于我
        </h1>

        <div className="space-y-6 text-base text-slate-300 leading-7">
          <p>
            我拥有物理学研究背景与一线教学经验，长期关注用户行为与认知过程。
            在教学实践中，通过观察学生的学习与情绪表现，逐步建立起对“用户需求如何产生”的理解。
          </p>
          <p>
            基于这些真实场景，我开始探索 AI
            产品设计，围绕情绪陪伴、学习辅助与产品工具方向，
            独立完成多个项目的设计与实现。
          </p>
          <p>
            在项目中，我更关注从用户问题出发，构建清晰的产品路径，而不仅仅是技术实现。
            我习惯将复杂问题进行抽象与结构化拆解，并通过可复用的工作流进行表达与落地。
          </p>
          <p>
            目前希望在产品经理岗位上，将用户洞察与 AI
            能力结合，持续打磨可创造真实价值的产品。
          </p>
        </div>

        {/* Skills */}
        <div className="mt-12">
          <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">
            能力标签
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm text-slate-300 font-medium mb-3">
                产品能力
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "用户调研",
                  "竞品分析",
                  "需求定义",
                  "PRD 撰写",
                  "交互设计",
                  "数据分析",
                  "A/B 测试",
                  "项目管理",
                ].map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono text-slate-400 bg-white/[0.03] border border-white/5 rounded-full px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm text-slate-300 font-medium mb-3">
                技术理解
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React / Vue",
                  "TypeScript",
                  "Prompt Engineering",
                  "LLM API",
                  "GitHub Actions",
                  "Tailwind CSS",
                ].map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono text-slate-400 bg-white/[0.03] border border-white/5 rounded-full px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm text-slate-300 font-medium mb-3">
                领域知识
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI 产品",
                  "教育科技",
                  "行为心理学",
                  "间隔重复算法",
                  "启发式教学",
                ].map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono text-slate-400 bg-white/[0.03] border border-white/5 rounded-full px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-12 rounded-lg border border-accent/10 bg-accent/[0.03] p-6">
          <p className="text-base text-slate-200 leading-7">
            <span className="text-accent font-medium">产品逻辑：</span>
            关注用户行为与真实需求 → 拆解问题结构 → 设计可执行方案 →
            通过迭代不断优化产品体验。
          </p>
        </div>
      </div>
    </div>
  );
}
