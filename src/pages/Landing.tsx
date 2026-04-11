import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

export default function Landing() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="hero-gradient -mx-6 px-6 pt-2 pb-1 rounded-b-3xl mb-2">
          <section className="mb-32">
            <p className="text-sm font-mono text-blue-600 mb-4 tracking-[0.12em]">
              你好，我是
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.08] tracking-tight">
              韦莉萍
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 max-w-2xl leading-relaxed mb-4 font-medium">
              AI 产品经理 / AI Agent 方向 ·
              <span className="text-blue-600 font-semibold">
                {" "}
                擅长把真实问题拆成可执行流程
              </span>
            </p>
            <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
              具备一线教学经验与独立产品实践，持续围绕决策辅助、效率工具与人机协作场景设计
              AI 产品。
              <br />
              更关注用户真实问题、任务链路与人机协作，而不只是单点生成能力。
              <br />
              当前公开项目覆盖 AI 求职工作台、用户洞察与产品决策工作台、PM
              决策探索与对话决策辅助产品。
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/resume"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_1px_2px_rgba(37,99,235,0.35),0_4px_12px_rgba(37,99,235,0.25)] hover:bg-blue-700 hover:shadow-[0_2px_4px_rgba(37,99,235,0.4),0_8px_20px_rgba(37,99,235,0.2)] transition-colors"
              >
                查看简历
              </Link>
              <a
                href="mailto:weilipng@zju.edu.cn"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-900 card-shadow hover:border-blue-200 hover:bg-white hover:text-blue-600 transition-colors"
              >
                联系我
              </a>
            </div>
          </section>
        </div>

        <section>
          <h2 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-8">
            精选项目
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <ProjectCard
              to="/case/jobhunter"
              title="JobHunter AI"
              subtitle="AI × 求职工作台"
              description="把找岗位、看 JD、改简历、生成开场白、模拟面试和内容沉淀放进同一套本地工作流里，减少在多个工具之间反复切换。"
              tags={["AI 产品", "求职工作流", "本地优先", "Workflow"]}
            />
            <ProjectCard
              to="/case/insightflow"
              title="InsightFlow AI"
              subtitle="AI × 用户洞察与产品决策"
              description="把用户反馈整理、洞察分析、优先级判断、PRD 草案和访谈验证串成同一条工作流，让产品判断更快形成，也更容易回看依据。"
              tags={["AI", "用户洞察", "多 Agent", "决策工作流"]}
            />
            <ProjectCard
              to="/case/prodmind"
              title="ProdMind AI"
              subtitle="AI × PM Workflow"
              description="更早期的 PM 决策工作台探索。先把洞察、方案、优先级与验证串成连续任务链，为后续更完整的产品判断系统打下基础。"
              tags={["AI", "PM 工具", "Next.js", "Workflow"]}
            />
            <ProjectCard
              to="/case/echomate"
              title="EchoMate"
              subtitle="AI × 对话决策"
              description="不是替用户聊天，而是先分析对话状态，再提供策略和理由，帮助用户做出更合适的表达选择。"
              tags={["AI", "社交沟通", "Vue", "决策辅助"]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
