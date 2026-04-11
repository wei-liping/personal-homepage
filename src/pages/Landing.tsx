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
            <p className="text-xl md:text-2xl text-slate-800 max-w-2xl leading-relaxed mb-3 font-semibold">
              用 AI 把复杂任务拆成能走完的流程，让人保留判断权。
            </p>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-2">
              AI 产品经理 / AI Agent 方向 ·
              独立负责从问题定义到上线展示的全链路。
            </p>
            <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
              我关注真实场景里的卡点、任务链路与可复盘依据，而不是单点生成。下面三个项目分别覆盖
              求职工作流、用户洞察与决策、对话决策辅助；另有早期 PM
              工作台探索可作为脉络补充。
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
                href="mailto:weilipng@zju.edu.cn"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-900 card-shadow hover:border-blue-200 hover:bg-white hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2"
              >
                联系我
              </a>
            </div>
          </section>
        </div>

        <section className="mb-14">
          <h2 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-3">
            精选项目
          </h2>
          <p className="text-sm text-slate-500 mb-8 max-w-2xl leading-relaxed">
            每个案例均含背景—挑战—行动—结果叙事；完整图文见案例页（可替换为你的产品截图）。
          </p>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
            <ProjectCard
              to="/case/jobhunter"
              title="JobHunter AI"
              subtitle="AI × 求职工作台"
              featured
              story={[
                "求职动作分散在招聘站、文档和笔记里，岗位与简历上下文难以在同一条链路里传递。",
                "将产品拆为岗位探索、简历优化、模拟面试、内容管理四栏，并接入本机 BOSS 搜索与本地沉淀。",
                "形成可运行的本地工作台闭环，可演示从看岗到沉淀复盘的主路径。",
              ]}
              tags={["Next.js", "本地优先", "Workflow"]}
              outcomes={["多步链路", "上下文传递", "可演示闭环"]}
            />
            <ProjectCard
              to="/case/insightflow"
              title="InsightFlow AI"
              subtitle="AI × 洞察与决策"
              featured
              story={[
                "反馈量大且分散，从洞察到优先级、PRD 与验证常断在多工具之间，结论难复核。",
                "用多 Agent 拆分长链路，结合检索与共享反馈库，并保留来源与关键节点人工复核。",
                "可运行工作台打通输入到导出，强调证据可追溯与过程可继续。",
              ]}
              tags={["多 Agent", "RAG", "Next.js"]}
              outcomes={["证据可追溯", "长链路稳定", "可复核"]}
            />
            <ProjectCard
              to="/case/echomate"
              title="EchoMate"
              subtitle="AI × 对话决策"
              featured
              story={[
                "用户缺的不是一句话术，而是对对话状态与下一步策略的判断。",
                "做「状态分析 → 多策略 → 理由解释」的决策辅助，不替用户说话。",
                "可运行产品已上线展示，经真实试用迭代并扩展职场等场景。",
              ]}
              tags={["Vue 3", "决策辅助", "已上线"]}
              outcomes={["保留表达权", "可解释", "可迭代"]}
            />
          </div>

          <h3 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-4">
            早期探索
          </h3>
          <div className="max-w-xl">
            <ProjectCard
              to="/case/prodmind"
              title="ProdMind AI"
              subtitle="AI × PM Workflow（早期）"
              description="在连续决策流程上的先行验证：洞察、方案、优先级与验证串成一条流水线，为 InsightFlow 等后续方向提供框架基础。"
              tags={["Next.js", "工作流", "RICE"]}
              outcomes={["流程串联", "结构化输出"]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
