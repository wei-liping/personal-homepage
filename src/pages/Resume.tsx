import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

export default function Resume() {
  const resumePdfUrl = `${import.meta.env.BASE_URL}resume.pdf`;

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

        <div className="flex items-start justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">简历</h1>
          <a
            href={resumePdfUrl}
            download
            className="inline-flex items-center gap-2 text-sm text-accent border border-accent/30 rounded-lg px-4 py-2 hover:bg-accent/10 transition-colors"
          >
            <Download size={15} />
            下载 PDF
          </a>
        </div>

        {/* Resume content */}
        <div className="space-y-10">
          {/* Header */}
          <section>
            <h2 className="text-xl font-bold text-white mb-1">韦莉萍</h2>
            <p className="text-sm text-accent/70 font-mono mb-3">
              AI产品经理 / AI Agent产品方向
            </p>
            <div className="space-y-1 text-sm text-slate-400">
              <p>邮箱：weiliping@zju.edu.cn</p>
              <p>
                作品集：{" "}
                <a
                  href="https://wei-liping.github.io/personal-homepage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent/70 hover:text-accent transition-colors"
                >
                  wei-liping.github.io/personal-homepage
                </a>
              </p>
              <p>
                GitHub：{" "}
                <a
                  href="https://github.com/wei-liping"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent/70 hover:text-accent transition-colors"
                >
                  github.com/wei-liping
                </a>
              </p>
            </div>
          </section>

          <hr className="border-white/5" />

          {/* Summary */}
          <section>
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
              个人简介
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              浙江大学物理学硕士，具备一线教学经验与独立产品实践。擅长从真实用户问题中提炼需求，将复杂任务拆解为连续流程，设计“分析、判断、执行、反馈”的产品链路，并通过多轮迭代持续优化产品可用性。
            </p>
          </section>

          <hr className="border-white/5" />

          {/* Projects */}
          <section>
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
              项目经历
            </h3>

            <div className="space-y-8">
              <div>
                <div className="flex items-baseline justify-between mb-2 gap-4">
                  <h4 className="text-sm font-semibold text-slate-200">
                    JobHunter｜面向真实求职流程的 AI 工作台
                  </h4>
                  <span className="text-xs text-slate-500 font-mono shrink-0">
                    2026.02 - 至今
                  </span>
                </div>
                <div className="space-y-1 text-sm text-slate-500 mb-3">
                  <p>角色：独立负责</p>
                  <p>
                    项目案例：{" "}
                    <a
                      href="https://wei-liping.github.io/personal-homepage/#/case/jobhunter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent/70 hover:text-accent transition-colors"
                    >
                      wei-liping.github.io/personal-homepage/#/case/jobhunter
                    </a>
                  </p>
                  <p>
                    GitHub：{" "}
                    <a
                      href="https://github.com/wei-liping/JobHunter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent/70 hover:text-accent transition-colors"
                    >
                      github.com/wei-liping/JobHunter
                    </a>
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-400 leading-relaxed">
                  <li>
                    面向求职过程中“找岗位、看
                    JD、改简历、写开场白、模拟面试、内容沉淀分散在不同工具中”的问题，识别出核心矛盾不是缺少单点功能，而是整条求职链路容易断裂
                  </li>
                  <li>
                    将产品设计为“首页导航 + 岗位探索 + 简历优化 + 模拟面试 +
                    内容管理”四栏结构，让不同任务各自聚焦，同时保持岗位、简历与记录在同一系统内持续传递
                  </li>
                  <li>
                    在岗位探索中接入本机 BOSS
                    搜索，使产品入口更贴近真实找岗行为；在简历优化中围绕目标岗位提供评估、润色与开场白生成；在模拟面试中继续复用岗位和简历上下文，增强练习针对性
                  </li>
                  <li>
                    将内容管理作为正式模块沉淀岗位、简历版本、投递记录、面试记录与复盘内容，减少重复整理与信息丢失
                  </li>
                  <li>
                    完成可运行产品并形成清晰的本地工作流闭环，验证了“AI
                    更适合接住多步骤任务链，而不是只负责单次生成”的产品方向
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-2 gap-4">
                  <h4 className="text-sm font-semibold text-slate-200">
                    InsightFlow AI｜多 Agent 驱动的用户洞察与产品决策系统
                  </h4>
                  <span className="text-xs text-slate-500 font-mono shrink-0">
                    2026.03 - 至今
                  </span>
                </div>
                <div className="space-y-1 text-sm text-slate-500 mb-3">
                  <p>角色：独立负责</p>
                  <p>
                    项目案例：{" "}
                    <a
                      href="https://wei-liping.github.io/personal-homepage/#/case/insightflow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent/70 hover:text-accent transition-colors"
                    >
                      wei-liping.github.io/personal-homepage/#/case/insightflow
                    </a>
                  </p>
                  <p>
                    GitHub：{" "}
                    <a
                      href="https://github.com/wei-liping/InsightFlow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent/70 hover:text-accent transition-colors"
                    >
                      github.com/wei-liping/InsightFlow
                    </a>
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-400 leading-relaxed">
                  <li>
                    面向产品经理“拿到大量用户反馈却难以快速形成判断”的痛点，搭建从数据输入、洞察分析、优先级判断、PRD
                    草案到访谈验证的一体化产品工作台
                  </li>
                  <li>
                    基于 LangGraph 设计多 Agent
                    协作流程，将痛点分析、主题分析、审查、合议、策略生成和 PRD
                    草拟拆分处理，提升长链路生成场景下的稳定性和可用性
                  </li>
                  <li>
                    结合 RAG 分析链路，引入 ChromaDB、BM25
                    和共享反馈库，增强海量非结构化评论场景下的问题提炼、证据支撑与结果解释能力
                  </li>
                  <li>
                    强化结果可追溯和人工校准能力：保留原始来源链接，支持关键节点人工复核后继续推进，方便复查、演示和后续产品决策落地
                  </li>
                  <li>
                    在 ProdMind
                    的连续决策流程思路上继续做深，把“流程串联”推进到“证据支撑、结果可复核、判断可继续”的更完整形态
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-2 gap-4">
                  <h4 className="text-sm font-semibold text-slate-200">
                    ProdMind AI —— 面向产品经理的 AI 决策工作台探索
                  </h4>
                  <span className="text-xs text-slate-500 font-mono shrink-0">
                    2026 - 至今
                  </span>
                </div>
                <div className="space-y-1 text-sm text-slate-500 mb-3">
                  <p>角色：独立负责</p>
                  <p>
                    项目案例：{" "}
                    <a
                      href="https://wei-liping.github.io/personal-homepage/#/case/prodmind"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent/70 hover:text-accent transition-colors"
                    >
                      wei-liping.github.io/personal-homepage/#/case/prodmind
                    </a>
                  </p>
                  <p>
                    GitHub：{" "}
                    <a
                      href="https://github.com/wei-liping/ProdMind-AI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent/70 hover:text-accent transition-colors"
                    >
                      github.com/wei-liping/ProdMind-AI
                    </a>
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-400 leading-relaxed">
                  <li>
                    围绕“洞察、方案、优先级、验证分散在不同工具中”的问题，先行验证连续任务链路是否成立
                  </li>
                  <li>
                    将模糊输入拆解为“洞察提取 → 方案生成 → 优先级排序 → 用户验证
                    → 结果导出”的完整流程，建立后续产品决策工作台的基础框架
                  </li>
                  <li>
                    围绕结构化输出和流程连续性完成多轮迭代，并在扩展阶段明确合规边界，也为后续
                    InsightFlow 的进一步深化提供方向
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-2 gap-4">
                  <h4 className="text-sm font-semibold text-slate-200">
                    EchoMate —— AI 社交对话决策工具
                  </h4>
                  <span className="text-xs text-slate-500 font-mono shrink-0">
                    2026 - 至今
                  </span>
                </div>
                <div className="space-y-1 text-sm text-slate-500 mb-3">
                  <p>角色：独立负责</p>
                  <p>
                    项目案例：{" "}
                    <a
                      href="https://wei-liping.github.io/personal-homepage/#/case/echomate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent/70 hover:text-accent transition-colors"
                    >
                      wei-liping.github.io/personal-homepage/#/case/echomate
                    </a>
                  </p>
                  <p>
                    GitHub：{" "}
                    <a
                      href="https://github.com/wei-liping/EchoMate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent/70 hover:text-accent transition-colors"
                    >
                      github.com/wei-liping/EchoMate
                    </a>
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-400 leading-relaxed">
                  <li>
                    将产品定位为“对话决策辅助工具”，设计“状态分析 → 策略建议 →
                    理由解释”的核心链路
                  </li>
                  <li>
                    不是替用户生成一句回复，而是帮助用户理解对话状态并做出更合适的表达选择
                  </li>
                  <li>
                    基于真实用户反馈完成多轮迭代，新增 MBTI
                    维度，并将场景扩展到职场沟通
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-white/5" />

          {/* Work */}
          <section>
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
              工作经历
            </h3>
            <div className="space-y-3 text-sm text-slate-400 leading-relaxed">
              <div>
                <p className="text-slate-300 font-medium">
                  杭州市富阳区江南中学｜高中物理教师
                </p>
                <p>
                  长期处在高密度反馈环境中，持续观察不同人面对复杂任务时的理解负担、问题拆解方式和反馈差异。这段经历也让我更重视真实用户场景中的行为差异，而不是只停留在抽象需求层面。
                </p>
              </div>
            </div>
          </section>

          <hr className="border-white/5" />

          {/* Education */}
          <section>
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
              教育与科研
            </h3>
            <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
              <div>
                <p className="text-slate-300 font-medium">
                  浙江大学｜理论物理硕士｜2020 - 2023
                </p>
                <p>专业前 10%，荣获优秀研究生、优秀团员、学业奖学金 ×2。</p>
              </div>
              <div>
                <p className="text-slate-300 font-medium">
                  科研课题｜负责人｜2021 - 2023
                </p>
                <p>
                  负责课题建模、数据处理、结果分析与验证，完成从问题定义到结论输出的完整过程，相关成果发表于《天文学报》。
                </p>
              </div>
            </div>
          </section>

          <hr className="border-white/5" />

          {/* Skills */}
          <section>
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
              核心能力
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-400 leading-relaxed">
              <div>
                <p className="text-slate-300 font-medium mb-2">产品</p>
                <p>
                  用户洞察 · 需求分析 · 任务流程设计 · 决策辅助设计 · 结构化表达
                </p>
              </div>
              <div>
                <p className="text-slate-300 font-medium mb-2">技术</p>
                <p>
                  React / Vue · TypeScript · Prompt Engineering · LLM API ·
                  Workflow 设计
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
