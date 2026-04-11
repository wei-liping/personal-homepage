import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function About() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-slate-900 transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          返回首页
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          关于我
        </h1>

        <div className="space-y-6 text-base text-slate-600 leading-relaxed">
          <p>
            我拥有物理学研究背景和一线教学经验。对我来说，产品思考不是从功能开始，而是从真实用户在具体场景里的卡点开始。
            在教学实践中，我长期面对不同人对同一任务的理解差异、表达差异和反馈差异，因此形成了较强的用户观察能力。
          </p>
          <p>
            物理和科研训练则让我更习惯先拆解问题结构，再验证结论是否成立。
            这让我在做产品时，会自然关注任务链路、判断依据和结果验证，而不是停留在想法层面。
          </p>
          <p>
            基于这些能力，我围绕 AI 求职工作台、用户洞察与产品决策、PM
            决策探索和对话决策辅助方向， 独立完成多个 AI
            产品项目的定义、设计、迭代和上线展示。 我尤其关注 AI
            在真实场景中如何辅助用户判断、推进任务，而不是简单替用户完成一次生成。
          </p>
          <p>
            目前希望在 AI 产品经理或 AI Agent
            方向，继续把用户洞察、复杂任务拆解和人机协作设计结合起来，
            打磨真正可用、可解释、可持续迭代的产品。
          </p>
        </div>

        {/* Skills */}
        <div className="mt-12">
          <h2 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-6">
            能力标签
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm text-slate-900 font-semibold mb-3">
                产品能力
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "用户调研",
                  "竞品分析",
                  "需求定义",
                  "任务流程设计",
                  "决策辅助设计",
                  "数据分析",
                  "项目推进",
                ].map((s) => (
                  <span
                    key={s}
                    className="interactive-chip inline-block text-xs font-mono text-blue-800 bg-blue-50/90 border border-blue-100 rounded-full px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm text-slate-900 font-semibold mb-3">
                技术理解
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React / Vue",
                  "TypeScript",
                  "Prompt Engineering",
                  "LLM API",
                  "Workflow 设计",
                  "Prompt 调优",
                ].map((s) => (
                  <span
                    key={s}
                    className="interactive-chip inline-block text-xs font-mono text-indigo-800 bg-indigo-50/90 border border-indigo-100 rounded-full px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm text-slate-900 font-semibold mb-3">
                领域知识
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI 产品",
                  "教育科技",
                  "对话辅助",
                  "学习科学",
                  "间隔重复算法",
                  "启发式教学",
                ].map((s) => (
                  <span
                    key={s}
                    className="interactive-chip inline-block text-xs font-mono text-emerald-800 bg-emerald-50/90 border border-emerald-100 rounded-full px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-12 rounded-2xl border border-blue-200/40 bg-white/70 backdrop-blur-md p-6 card-shadow">
          <p className="text-base text-slate-700 leading-relaxed">
            <span className="text-blue-600 font-semibold">产品逻辑：</span>
            从真实场景发现问题 → 拆解任务流程 → 设计人机协作方案 →
            通过反馈和迭代不断优化产品可用性。
          </p>
        </div>
      </div>
    </div>
  );
}
