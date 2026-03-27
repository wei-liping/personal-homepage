import { Link } from "react-router-dom";
import { ArrowLeft, Download, FileText } from "lucide-react";

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
              浙江大学物理学硕士，具备一线高中教学经验，持续围绕教育、决策辅助与效率工具场景开展
              AI 产品实践。擅长从真实用户问题中提炼需求，将复杂任务拆解为连续流程，设计“分析、判断、执行、反馈”的产品链路，并通过多轮迭代持续优化产品可用性。
            </p>
          </section>

          <hr className="border-white/5" />

          {/* Projects */}
          <section>
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
              项目经历
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="text-sm font-semibold text-slate-200">
                    ProdMind AI —— 面向产品经理的 AI 决策工作台
                  </h4>
                  <span className="text-xs text-slate-500 font-mono">2026 - 至今</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-400 leading-relaxed">
                  <li>围绕“洞察、方案、优先级、验证分散在不同工具中”的问题，设计连续任务链路</li>
                  <li>将模糊输入拆解为“洞察提取 → 方案生成 → 优先级排序 → 用户验证 → 结果导出”的完整流程</li>
                  <li>围绕结构化输出和流程连续性完成多轮迭代，并在扩展阶段明确合规边界</li>
                </ul>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="text-sm font-semibold text-slate-200">
                    EchoMate —— AI 社交对话决策工具
                  </h4>
                  <span className="text-xs text-slate-500 font-mono">2026 - 至今</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-400 leading-relaxed">
                  <li>将产品定位为“对话决策辅助工具”，设计“状态分析 → 策略建议 → 理由解释”的核心链路</li>
                  <li>不是替用户生成一句回复，而是帮助用户理解对话状态并做出更合适的表达选择</li>
                  <li>基于真实用户反馈完成多轮迭代，新增 MBTI 维度，并将场景扩展到职场沟通</li>
                </ul>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="text-sm font-semibold text-slate-200">
                    悟理 AI —— 面向高中生的 AI 学习辅助产品
                  </h4>
                  <span className="text-xs text-slate-500 font-mono">2026 - 至今</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-400 leading-relaxed">
                  <li>基于一线教学观察，定位学生“看得懂答案但不会做”的核心问题</li>
                  <li>从聊天答疑逐步迭代为“分步引导 → 变式验证 → 复习强化”的学习闭环</li>
                  <li>在自测中补充知识树和每日练习模块，使产品更接近真实学习路径</li>
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
                  浙江大学附属中学 / 杭州富阳中学｜高中物理教师
                </p>
                <p>
                  长期面向高中生开展教学，积累真实用户观察经验，并持续归纳理解负担、问题拆解和反馈机制上的共性问题。这段经历为后续教育类
                  AI 产品的问题定义提供了直接场景基础。
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
                <p>专业前 10%，荣获优秀研究生、优秀团队、学业奖学金 ×2。</p>
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

        {/* Placeholder notice */}
        <div className="mt-12 rounded-lg border border-white/5 bg-white/[0.02] p-5 flex items-start gap-3">
          <FileText size={18} className="text-slate-500 mt-0.5 shrink-0" />
          <p className="text-xs text-slate-500">
            以上为主页展示版简历。如需用于投递的定制版本，可根据岗位方向再做调整。
          </p>
        </div>
      </div>
    </div>
  );
}
