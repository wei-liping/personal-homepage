import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

export default function Landing() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Hero */}
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
            具备一线教学经验与独立产品实践，持续围绕教育、决策辅助与效率工具场景设计 AI 产品。
            <br />
            更关注用户真实问题、任务链路与人机协作，而不只是单点生成能力。
            <br />
            代表项目包括 PM 决策工作台、对话决策辅助与学习辅助产品。
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

        {/* Projects */}
        <section>
          <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-8">
            精选项目
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <ProjectCard
              to="/case/prodmind"
              title="ProdMind AI"
              subtitle="AI × PM Workflow"
              description="面向产品经理的 AI 决策工作台。将洞察、方案、优先级与验证串成一条连续任务链，帮助用户从想法走到可决策。"
              tags={["AI", "PM 工具", "Next.js", "Workflow"]}
            />
            <ProjectCard
              to="/case/echomate"
              title="EchoMate"
              subtitle="AI × 对话决策"
              description="不是替用户聊天，而是先分析对话状态，再提供策略和理由，帮助用户做出更合适的表达选择。"
              tags={["AI", "社交沟通", "Vue", "决策辅助"]}
            />
            <ProjectCard
              to="/case/wuli-ai"
              title="悟理 AI"
              subtitle="AI × 教育"
              description="从聊天答疑出发，逐步迭代为分步引导、变式验证与复习强化结合的学习闭环产品。"
              tags={["AI", "教育科技", "React", "学习闭环"]}
            />
            <ProjectCard
              title="To be continued"
              subtitle="筹备中"
              description="下一个项目正在迭代中，敬请期待。"
              tags={["Coming Soon"]}
              comingSoon
            />
          </div>
        </section>
      </div>
    </div>
  );
}
