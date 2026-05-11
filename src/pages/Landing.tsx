import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

export default function Landing() {
  return (
    <div className="overflow-x-hidden pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="hero-gradient -mx-6 px-6 pt-2 pb-1 rounded-b-3xl mb-2">
          <section className="mb-24 sm:mb-32">
            <p className="text-sm font-mono text-blue-600 mb-4 tracking-[0.12em]">
              你好，我是
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.08] tracking-tight">
              韦莉萍
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-800 max-w-2xl leading-relaxed mb-3 font-semibold break-words">
              构建可运行、可验证的 AI Agent 与 RAG 应用。
            </p>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mb-2 break-words">
              ai agent engineer / AI 应用工程师方向 · 关注 RAG、工具调用、知识图谱与多步骤任务流。
            </p>
            <p className="text-base text-slate-600 max-w-2xl leading-relaxed break-words">
              我重点实践从真实场景拆解、Agent 流程设计、知识库接入、工具调用到本地运行验证的完整链路。主项目
              KnowNet 展示 Python、FastAPI、LangGraph、RAG、知识图谱与 Docker
              Compose 组合的智能体平台能力，JobHunter 展示多步骤任务流和上下文沉淀。
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/resume"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_1px_2px_rgba(37,99,235,0.35),0_4px_12px_rgba(37,99,235,0.25)] hover:bg-blue-700 hover:shadow-[0_2px_4px_rgba(37,99,235,0.4),0_8px_20px_rgba(37,99,235,0.2)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2"
              >
                查看简历
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-900 card-shadow hover:border-blue-200 hover:bg-white hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2"
              >
                关于我
              </Link>
              <a
                href="mailto:weiliping@zju.edu.cn"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-900 card-shadow hover:border-blue-200 hover:bg-white hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2"
              >
                联系我
              </a>
            </div>
          </section>
        </div>

        <section className="mb-14">
          <h2 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-8">
            核心项目
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            <ProjectCard
              to="/case/knownet"
              title="KnowNet"
              subtitle="AI Agent × RAG 工程平台"
              featured
              story={[
                "企业知识问答和智能体应用常见问题是知识分散、回答不可追溯、工具与知识库难统一接入。",
                "用 LangGraph 串起 Agent 编排，打通文档解析、分块、Embedding、检索、重排序、引用回答和图谱可视化。",
                "通过 Docker Compose 整合 Web、API、Worker、PostgreSQL、Redis、MinIO、Milvus、Neo4j，形成可本地复现的完整链路。",
              ]}
              tags={["Python", "FastAPI", "LangGraph", "RAG"]}
              outcomes={["工具调用", "知识图谱", "Docker Compose"]}
            />
            <ProjectCard
              to="/case/jobhunter"
              title="JobHunter AI"
              subtitle="AI Agent × 多步骤任务流"
              featured
              story={[
                "真实求职流程里，JD、简历版本、面试问答和复盘记录分散，AI 输出难以沉淀复用。",
                "把 JD 解析、匹配评估、简历改写、模拟面试和记录保存拆成连续 Agent workflow。",
                "围绕岗位与简历上下文生成结构化输出，并把关键记录沉淀为可回看的个人资料库。",
              ]}
              tags={["Agent Workflow", "结构化输出", "上下文管理"]}
              outcomes={["JD 解析", "记录保存", "本地验证"]}
            />
          </div>

          <h3 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-4">
            补充案例
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            <ProjectCard
              to="/case/insightflow"
              title="InsightFlow AI"
              subtitle="多 Agent × 分析链路"
              description="把反馈输入、主题分析、策略生成和验证拆成多 Agent 链路，重点展示 RAG、证据保留、评估与复核。"
              tags={["Multi-Agent", "RAG", "评估/复核"]}
              outcomes={["证据追溯", "结构化输出"]}
            />
            <ProjectCard
              to="/case/prodmind"
              title="ProdMind AI"
              subtitle="Workflow × Structured Output"
              description="早期 workflow demo，用结构化输出把洞察、方案、优先级和验证串起来，为后续 Agent 链路拆分打基础。"
              tags={["Workflow", "Structured Output", "RICE"]}
              outcomes={["流程串联", "早期验证"]}
            />
            <ProjectCard
              to="/case/echomate"
              title="EchoMate"
              subtitle="Prompt Strategy × Reasoning Demo"
              description="把对话辅助从单句生成改为状态分析、策略建议和理由解释，作为 Prompt strategy 与结构化推理的轻量 demo。"
              tags={["Prompt Strategy", "Vue 3", "结构化推理"]}
              outcomes={["可解释", "已上线"]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
