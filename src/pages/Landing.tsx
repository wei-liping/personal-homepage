import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

export default function Landing() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <section className="mb-24">
          <p className="text-sm font-mono text-accent/70 mb-4">你好，我是</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            韦莉萍
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed mb-4 font-medium">
            AI 产品经理 / AI Agent 方向 ·
            <span className="text-accent"> 擅长把真实问题拆成可执行流程</span>
          </p>
          <p className="text-base text-slate-300 max-w-2xl leading-7">
            具备一线教学经验与独立产品实践，持续围绕决策辅助、效率工具与人机协作场景设计 AI 产品。
            <br />
            更关注用户真实问题、任务链路与人机协作，而不只是单点生成能力。
            <br />
            当前公开项目覆盖 AI 求职工作台、用户洞察与产品决策工作台、PM 决策探索与对话决策辅助产品。
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/resume"
              className="inline-flex items-center justify-center rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent hover:bg-accent/15 transition-colors"
            >
              查看简历
            </Link>
            <a
              href="mailto:weilipng@zju.edu.cn"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 hover:border-accent/30 hover:text-accent transition-colors"
            >
              联系我
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-8">
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
