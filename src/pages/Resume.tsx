import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

export default function Resume() {
  const resumePdfUrl = `${import.meta.env.BASE_URL}resume.pdf`;

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

        <div className="flex items-start justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            简历
          </h1>
          <a
            href={resumePdfUrl}
            download
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 border border-blue-200 rounded-xl px-4 py-2.5 bg-white card-shadow hover:bg-blue-50 hover:border-blue-300 transition-colors"
          >
            <Download size={15} />
            下载 PDF
          </a>
        </div>

        {/* Resume content */}
        <div className="space-y-12">
          {/* Header */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-1">韦莉萍</h2>
            <p className="text-sm text-blue-600 font-mono mb-3">
              AI产品经理 / AI Agent产品方向
            </p>
            <div className="space-y-1 text-sm text-slate-600">
              <p>邮箱：weiliping@zju.edu.cn</p>
              <p>
                作品集：{" "}
                <a
                  href="https://wei-liping.github.io/personal-homepage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:text-blue-800 underline-offset-2 hover:underline transition-colors"
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
                  className="font-semibold text-blue-600 hover:text-blue-800 underline-offset-2 hover:underline transition-colors"
                >
                  github.com/wei-liping
                </a>
              </p>
            </div>
          </section>

          <hr className="border-gray-200 my-10" />

          {/* Summary */}
          <section>
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-4">
              个人简介
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              浙江大学物理学硕士；具备一线教学与独立 AI
              产品实践。习惯从场景卡点出发，把复杂任务拆成可走完的流程，并关注证据、可复核与迭代，而不是单点生成功能堆砌。
            </p>
          </section>

          <hr className="border-gray-200 my-10" />

          {/* Projects */}
          <section>
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-4">
              项目经历
            </h3>

            <div className="space-y-8">
              <div>
                <div className="flex items-baseline justify-between mb-2 gap-4">
                  <h4 className="text-sm font-semibold text-slate-900">
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
                      className="font-semibold text-blue-600 hover:text-blue-800 underline-offset-2 hover:underline transition-colors"
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
                      className="font-semibold text-blue-600 hover:text-blue-800 underline-offset-2 hover:underline transition-colors"
                    >
                      github.com/wei-liping/JobHunter
                    </a>
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 leading-relaxed">
                  <li>
                    <span className="font-medium text-slate-700">背景：</span>
                    求职动作分散在招聘站、文档与笔记中，岗位与简历上下文难在同一路径延续。
                  </li>
                  <li>
                    <span className="font-medium text-slate-700">挑战：</span>
                    单点生成无法承接「看岗—改简历—练习—沉淀」的多步链路。
                  </li>
                  <li>
                    <span className="font-medium text-slate-700">行动：</span>
                    四栏信息架构（岗位探索 / 简历优化 / 模拟面试 /
                    内容管理），接入本机 BOSS 搜索，关键记录本地沉淀。
                  </li>
                  <li>
                    <span className="font-medium text-slate-700">结果：</span>
                    可运行本地工作台与可演示主路径，验证 AI
                    更适合承接任务链而非单次生成。
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-2 gap-4">
                  <h4 className="text-sm font-semibold text-slate-900">
                    InsightFlow AI｜多 Agent 用户洞察与产品决策系统
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
                      className="font-semibold text-blue-600 hover:text-blue-800 underline-offset-2 hover:underline transition-colors"
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
                      className="font-semibold text-blue-600 hover:text-blue-800 underline-offset-2 hover:underline transition-colors"
                    >
                      github.com/wei-liping/InsightFlow
                    </a>
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 leading-relaxed">
                  <li>
                    <span className="font-medium text-slate-700">背景：</span>
                    反馈体量大且分散，从洞察到优先级、PRD
                    与验证常断在多工具之间。
                  </li>
                  <li>
                    <span className="font-medium text-slate-700">挑战：</span>
                    长链路单次生成易漂移；缺来源与复核时结论难进评审。
                  </li>
                  <li>
                    <span className="font-medium text-slate-700">行动：</span>
                    基于 LangGraph 多 Agent 拆分步骤；RAG
                    与共享反馈库支撑证据；关键节点支持人工校准后继续。
                  </li>
                  <li>
                    <span className="font-medium text-slate-700">结果：</span>
                    可运行工作台打通采集到导出，强调可追溯与「判断可继续」。
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-2 gap-4">
                  <h4 className="text-sm font-semibold text-slate-900">
                    EchoMate｜AI 对话决策辅助工具
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
                      className="font-semibold text-blue-600 hover:text-blue-800 underline-offset-2 hover:underline transition-colors"
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
                      className="font-semibold text-blue-600 hover:text-blue-800 underline-offset-2 hover:underline transition-colors"
                    >
                      github.com/wei-liping/EchoMate
                    </a>
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 leading-relaxed">
                  <li>
                    <span className="font-medium text-slate-700">背景：</span>
                    用户更需要「策略与阶段判断」，而非一句话术生成。
                  </li>
                  <li>
                    <span className="font-medium text-slate-700">挑战：</span>
                    直接生成回复会绕过判断，难以形成可迁移的沟通方法。
                  </li>
                  <li>
                    <span className="font-medium text-slate-700">行动：</span>
                    设计「状态分析 → 多策略 →
                    理由解释」链路；产品已公开展示并可访问。
                  </li>
                  <li>
                    <span className="font-medium text-slate-700">结果：</span>
                    经试用迭代扩展场景与维度（如沟通风格），强化决策辅助定位。
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-2 gap-4">
                  <h4 className="text-sm font-semibold text-slate-900">
                    ProdMind AI｜PM 决策工作台探索（早期）
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
                      className="font-semibold text-blue-600 hover:text-blue-800 underline-offset-2 hover:underline transition-colors"
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
                      className="font-semibold text-blue-600 hover:text-blue-800 underline-offset-2 hover:underline transition-colors"
                    >
                      github.com/wei-liping/ProdMind-AI
                    </a>
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 leading-relaxed">
                  <li>
                    <span className="font-medium text-slate-700">背景：</span>
                    洞察、方案、优先级与验证分散，决策链路易断。
                  </li>
                  <li>
                    <span className="font-medium text-slate-700">挑战：</span>
                    自由长文难用于评审；需验证「连续流程」是否成立。
                  </li>
                  <li>
                    <span className="font-medium text-slate-700">行动：</span>
                    引导式流水线 + 结构化输出（痛点、Persona、RICE 等）+
                    验证前置。
                  </li>
                  <li>
                    <span className="font-medium text-slate-700">结果：</span>
                    跑通从输入到导出，为 InsightFlow 等后续方向提供框架基础。
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-gray-200 my-10" />

          {/* Work */}
          <section>
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-4">
              工作经历
            </h3>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <div>
                <p className="text-slate-900 font-semibold">
                  杭州市富阳区江南中学｜高中物理教师
                </p>
                <p>
                  长期处在高密度反馈环境中，持续观察不同人面对复杂任务时的理解负担、问题拆解方式和反馈差异。这段经历也让我更重视真实用户场景中的行为差异，而不是只停留在抽象需求层面。
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200 my-10" />

          {/* Education */}
          <section>
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-4">
              教育与科研
            </h3>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <div>
                <p className="text-slate-900 font-semibold">
                  浙江大学｜理论物理硕士｜2020 - 2023
                </p>
                <p>专业前 10%，荣获优秀研究生、优秀团员、学业奖学金 ×2。</p>
              </div>
              <div>
                <p className="text-slate-900 font-semibold">
                  科研课题｜负责人｜2021 - 2023
                </p>
                <p>
                  负责课题建模、数据处理、结果分析与验证，完成从问题定义到结论输出的完整过程，相关成果发表于《天文学报》。
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200 my-10" />

          {/* Skills */}
          <section>
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-4">
              核心能力
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600 leading-relaxed">
              <div>
                <p className="text-slate-900 font-semibold mb-2">产品</p>
                <p>
                  用户洞察 · 需求分析 · 任务流程设计 · 决策辅助设计 · 结构化表达
                </p>
              </div>
              <div>
                <p className="text-slate-900 font-semibold mb-2">技术</p>
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
