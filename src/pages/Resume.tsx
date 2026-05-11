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

        <div className="flex items-start justify-between mb-8 gap-4">
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

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-1">韦莉萍</h2>
            <p className="text-sm text-blue-600 font-mono mb-3">
              AI Agent Engineer / AI 应用工程师 / RAG 与智能体应用开发
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

          <section>
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-4">
              个人简介
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              浙江大学物理学硕士，具备逻辑建模、数据分析和复杂问题拆解能力。近期重点围绕
              AI Agent、RAG 知识库、知识图谱、工具调用和多步骤任务流做项目，能够结合
              Python、FastAPI、LangGraph、Docker Compose 搭建可运行、可验证、可迭代的 AI 应用链路。
            </p>
          </section>

          <hr className="border-gray-200 my-10" />

          <section>
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-4">
              重点项目
            </h3>

            <div className="space-y-8">
              <div>
                <div className="flex items-baseline justify-between mb-2 gap-4">
                  <h4 className="text-sm font-semibold text-slate-900">
                    KnowNet｜基于大模型的知识库与知识图谱智能体开发平台
                  </h4>
                  <span className="text-xs text-slate-500 font-mono shrink-0">
                    2025.11 - 至今
                  </span>
                </div>
                <div className="space-y-1 text-sm text-slate-500 mb-3">
                  <p>角色：独立负责</p>
                  <p>
                    项目案例：{" "}
                    <a
                      href="https://wei-liping.github.io/personal-homepage/#/case/knownet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600 hover:text-blue-800 underline-offset-2 hover:underline transition-colors"
                    >
                      wei-liping.github.io/personal-homepage/#/case/knownet
                    </a>
                  </p>
                  <p>
                    GitHub：{" "}
                    <a
                      href="https://github.com/wei-liping/KnowNet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600 hover:text-blue-800 underline-offset-2 hover:underline transition-colors"
                    >
                      github.com/wei-liping/KnowNet
                    </a>
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 leading-relaxed">
                  <li>
                    <span className="font-medium text-slate-700">背景：</span>
                    企业知识问答和智能体应用常见问题是知识分散、回答不可追溯、Agent 能力难配置、工具与知识库难统一接入。
                  </li>
                  <li>
                    <span className="font-medium text-slate-700">行动：</span>
                    基于 LangGraph 搭建 Agent 运行链路，打通 RAG 知识库、LightRAG、Neo4j 图谱、工具调用、Skills、MCP 和子智能体配置。
                  </li>
                  <li>
                    <span className="font-medium text-slate-700">结果：</span>
                    使用 Docker Compose 整合 Web、API、Worker、PostgreSQL、Redis、MinIO、Milvus、Neo4j，支持本地启动和完整链路调试。
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-2 gap-4">
                  <h4 className="text-sm font-semibold text-slate-900">
                    JobHunter｜面向真实求职流程的 AI Agent Workflow
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
                    岗位搜索、JD 分析、简历修改、模拟面试和复盘记录分散在不同工具中，导致上下文反复丢失。
                  </li>
                  <li>
                    <span className="font-medium text-slate-700">行动：</span>
                    将求职任务拆解为岗位探索、JD 解析、匹配评估、简历改写、模拟面试和内容沉淀多个步骤。
                  </li>
                  <li>
                    <span className="font-medium text-slate-700">结果：</span>
                    围绕 JD 与简历上下文生成结构化输出，并保存岗位记录、简历版本、面试问答和复盘内容。
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-gray-200 my-10" />

          <section>
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-4">
              补充项目
            </h3>
            <div className="space-y-5 text-sm text-slate-600 leading-relaxed">
              <div>
                <p className="text-slate-900 font-semibold">
                  InsightFlow AI｜多 Agent 分析链路
                </p>
                <p>
                  将反馈输入、主题分析、策略生成和验证拆成多 Agent 链路，重点验证 RAG、证据保留、评估与复核。
                </p>
              </div>
              <div>
                <p className="text-slate-900 font-semibold">
                  ProdMind AI｜早期 Workflow 与结构化输出探索
                </p>
                <p>
                  早期验证 workflow 与 structured output，把洞察、方案、优先级和验证串起来，为后续 Agent 链路拆分打基础。
                </p>
              </div>
              <div>
                <p className="text-slate-900 font-semibold">
                  EchoMate｜Prompt Strategy 与结构化推理 Demo
                </p>
                <p>
                  将对话辅助从单句生成改为状态分析、策略建议和理由解释，作为 Prompt strategy 与结构化推理的轻量 demo。
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200 my-10" />

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
                  长期处在高密度反馈环境中，持续观察不同人面对复杂任务时的理解负担、问题拆解方式和反馈差异。这段经历让我更重视真实场景里的引导、反馈和复盘。
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200 my-10" />

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

          <section>
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-4">
              核心能力
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600 leading-relaxed">
              <div>
                <p className="text-slate-900 font-semibold mb-2">工程开发</p>
                <p>
                  Python · FastAPI · Vue · Docker Compose · Git · 前后端接口联调
                </p>
              </div>
              <div>
                <p className="text-slate-900 font-semibold mb-2">AI 应用</p>
                <p>
                  LangGraph · RAG · 知识图谱 · 工具调用 · MCP / Skills · Badcase 复盘
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
