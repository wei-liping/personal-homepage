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
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-4">
            AI 产品探索者 ·
            <span className="text-accent"> 关注用户行为与认知结构</span>
          </p>
          <p className="text-sm text-slate-500 max-w-xl leading-relaxed">
            具备物理与教育背景的 AI 产品探索者，关注用户行为与认知结构。
            <br />
            围绕情绪陪伴、学习辅助与产品工具，设计并实现多个 AI 产品项目。
            <br />
            致力于用结构化思维，将复杂问题转化为可落地的产品方案。
          </p>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-8">
            精选项目
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <ProjectCard
              to="/case/wuli-ai"
              title="悟理 AI"
              subtitle="AI × 教育"
              description="苏格拉底式物理 AI 私教。通过竞品评测发现 4 大痛点，设计分步引导 + 变式训练 + 间隔复习的闭环学习体验。"
              tags={["AI", "教育科技", "React", "启发式教学"]}
            />
            <ProjectCard
              to="/case/echomate"
              title="EchoMate"
              subtitle="AI × 对话决策"
              description="不是替你聊天，而是帮你把话说得更好。通过感知→推理→生成三层框架，帮助用户看懂对话并做出更优回复选择。"
              tags={["AI", "社交沟通", "Vue", "决策辅助"]}
            />
            <ProjectCard
              to="/case/prodmind"
              title="ProdMind AI"
              subtitle="AI × PM Workflow"
              description="像产品经理一样思考的 AI Copilot。将碎片化的 PM 工具串联为引导式工作流：洞察 → PRD → 优先级 → 用户验证，一条流水线。"
              tags={["AI", "PM 工具", "Next.js", "RICE 框架"]}
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
