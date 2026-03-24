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

        <div className="space-y-6 text-sm text-slate-400 leading-relaxed">
          <p>我是韦莉萍，一名专注于 AI 驱动消费级产品的产品经理。</p>
          <p>
            我相信好的产品不是功能的堆砌，而是对用户真实问题的深刻理解。
            我擅长从行为科学和技术的交叉视角出发，将复杂的用户需求拆解为可落地的产品方案。
          </p>
          <p>
            在过去的项目中，我独立完成了从用户调研、竞品分析、产品定义到原型开发的全流程。
            这让我对产品的每一个环节都有切身体感——不只是画原型，更能理解技术实现的边界和成本。
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
          <p className="text-sm text-slate-300 leading-relaxed">
            <span className="text-accent font-medium">我的产品哲学：</span>
            表达清晰，逻辑严谨，有产品判断。不追求功能的多寡，而追求每一个功能背后是否有清晰的用户价值和决策依据。
          </p>
        </div>
      </div>
    </div>
  );
}
