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
            我拥有理论物理研究背景和一线教学经验。科研训练让我习惯做建模、数据处理和结果验证；教学经历让我长期观察用户面对复杂问题时的理解成本、反馈路径和错误模式。
          </p>
          <p>
            现在我的求职方向是 AI Agent Engineer / AI 应用工程师。我不是只做
            AI 工具体验设计，而是更关注 AI
            应用如何真正跑起来：输入如何进入系统、知识如何被检索、工具如何被调用、结果如何被验证和复用。
          </p>
          <p>
            近期主项目是 KnowNet 和 JobHunter。KnowNet 聚焦企业知识库与智能体平台，覆盖
            Python、FastAPI、LangGraph、RAG、知识图谱、工具调用和 Docker
            Compose；JobHunter 聚焦多步骤 Agent workflow，把 JD
            解析、匹配评估、结构化输出和记录沉淀串成可运行链路。
          </p>
          <p>
            我希望参与智能体平台、企业知识库、业务自动化和 AI
            原生应用建设，继续把 RAG、Agent、工具调用和工程验证结合起来。
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200/90 bg-white p-6 card-shadow">
          <h2 className="text-sm font-semibold text-slate-900 mb-4">
            我如何构建 Agent 应用
          </h2>
          <ul className="space-y-3 text-sm text-slate-600 leading-relaxed list-disc list-inside">
            <li>
              <span className="font-medium text-slate-800">先拆输入和任务：</span>
              明确用户输入、外部资料、工具调用和最终输出分别是什么。
            </li>
            <li>
              <span className="font-medium text-slate-800">再搭运行链路：</span>
              用 Python / FastAPI 承接接口，用 LangGraph 或 workflow
              拆分多步骤任务，把模型调用、检索和工具调用隔离清楚。
            </li>
            <li>
              <span className="font-medium text-slate-800">补齐知识与存储：</span>
              用 RAG、向量检索、知识图谱和数据库保存上下文，让结果能追溯、能复用。
            </li>
            <li>
              <span className="font-medium text-slate-800">最后做验证和复盘：</span>
              通过结构化输出、引用来源、Badcase 复盘和本地运行检查，判断链路是否真的可用。
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-6">
            能力标签
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm text-slate-900 font-semibold mb-3">
                工程能力
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "FastAPI",
                  "Docker Compose",
                  "Git",
                  "前后端接口联调",
                  "本地运行验证",
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
                Agent / RAG
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "LangGraph",
                  "RAG",
                  "工具调用",
                  "MCP / Skills",
                  "SubAgents",
                  "上下文管理",
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
                数据与存储
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "PostgreSQL",
                  "Redis",
                  "MinIO",
                  "Milvus",
                  "Neo4j",
                  "知识图谱",
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

        <div className="mt-12 rounded-2xl border border-blue-200/40 bg-white/70 backdrop-blur-md p-6 card-shadow">
          <p className="text-base text-slate-700 leading-relaxed">
            <span className="text-blue-600 font-semibold">工程实践路径：</span>
            场景拆解 → API 与 Agent 链路 → RAG / 工具调用 / 存储 →
            本地运行、结果验证和 Badcase 复盘。
          </p>
        </div>
      </div>
    </div>
  );
}
