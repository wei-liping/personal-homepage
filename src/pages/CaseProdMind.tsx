import CaseLayout, { Section, Decision } from "../components/CaseLayout";

export default function CaseProdMind() {
  return (
    <CaseLayout
      title="ProdMind AI —— 像产品经理一样思考的 AI Copilot"
      subtitle="Case Study #3"
      tags={["AI", "PM 工具", "Next.js", "RICE 框架", "Zustand"]}
      tldr="针对产品经理工作流碎片化的痛点，设计了一条引导式 AI 工作流：从用户洞察 → PRD 生成 → 优先级排序 → 用户访谈模拟，每一步的输出自动流入下一步。核心理念：不是「用 AI 做了个工具」，而是「设计了一条 PM 工作流并用 AI 实现」。"
      github="https://github.com/wei-liping/ProdMind-AI"
      live="https://wei-liping.github.io/ProdMind-AI/"
      prev={{ to: "/case/echomate", label: "EchoMate" }}
    >
      {/* ── 背景 ── */}
      <Section icon="🧩" title="背景">
        <p>
          在学习产品管理的过程中，我发现一个核心矛盾：产品思维是一个连贯的决策链，
          但我们的工具却是碎片化的。写用户洞察用一个工具，写 PRD 用另一个，
          做优先级排序再换一个——每次切换上下文，思路就断了。
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mt-2">
          {[
            {
              name: "数据看板类",
              desc: "太技术向，偏分析平台，缺少产品决策引导",
            },
            {
              name: "笔记/文档类",
              desc: "太通用，无法模拟 PM 的结构化思考流程",
            },
            {
              name: "ChatGPT 对话类",
              desc: "太自由发散，输出非结构化，不可直接用于决策",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="rounded-lg border border-white/5 bg-white/[0.02] p-4"
            >
              <p className="text-sm text-slate-200 font-medium mb-1">
                {item.name}
              </p>
              <p className="text-xs text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4">
          市面上没有一款工具在模拟真实的 PM 工作流：理解用户 → 定义问题 →
          生成方案 → 做出取舍。 ProdMind AI 正是为了填补这个空缺。
        </p>
      </Section>

      {/* ── 我的角色 ── */}
      <Section icon="👤" title="我的角色">
        <p>
          独立完成全流程：问题定义 → 工作流设计 → 产品架构 → Prompt Engineering
          → 全栈开发（Next.js + React）→ 部署上线。核心挑战在于如何将 PM
          的隐性思维过程 转化为一条可操作、可交互的引导式工作流。
        </p>
      </Section>

      {/* ── 目标 ── */}
      <Section icon="🎯" title="目标与指标">
        <p className="text-slate-300 font-medium">
          核心目标：让「产品思考」变成一个可操作的流程，而不只是脑中的直觉
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mt-2">
          {[
            {
              metric: "工作流完成率",
              desc: "用户是否能从洞察走完到导出的全流程",
            },
            {
              metric: "输出结构化程度",
              desc: "AI 输出是否可直接用于决策（非聊天文本）",
            },
            {
              metric: "回访率",
              desc: "用户是否在新项目中再次使用该工作流",
            },
          ].map((item) => (
            <div
              key={item.metric}
              className="rounded-lg border border-white/5 bg-white/[0.02] p-4"
            >
              <p className="text-xs font-mono text-accent/60 mb-1">
                {item.metric}
              </p>
              <p className="text-xs text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 研究与发现 ── */}
      <Section icon="🔍" title="研究与发现">
        <p>
          通过对 PM 日常工作流的拆解和现有工具的分类分析，识别出一个关键空白：
          没有工具将 PM 的核心环节串联为一条连贯的流水线。
        </p>
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 pr-4 text-accent/60 font-mono font-normal">
                  工具类型
                </th>
                <th className="text-left py-3 pr-4 text-accent/60 font-mono font-normal">
                  代表产品
                </th>
                <th className="text-left py-3 pr-4 text-accent/60 font-mono font-normal">
                  优势
                </th>
                <th className="text-left py-3 text-accent/60 font-mono font-normal">
                  缺失
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-400">
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 text-slate-300">数据分析平台</td>
                <td className="py-3 pr-4">Mixpanel、Amplitude</td>
                <td className="py-3 pr-4">数据洞察能力强</td>
                <td className="py-3">不引导产品决策</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 text-slate-300">文档/协作工具</td>
                <td className="py-3 pr-4">Notion、飞书文档</td>
                <td className="py-3 pr-4">灵活、可协作</td>
                <td className="py-3">无结构化 PM 流程</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 text-slate-300">AI 对话工具</td>
                <td className="py-3 pr-4">ChatGPT、Claude</td>
                <td className="py-3 pr-4">通用能力强</td>
                <td className="py-3">输出自由发散，非结构化</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-slate-300">项目管理工具</td>
                <td className="py-3 pr-4">Jira、Linear</td>
                <td className="py-3 pr-4">执行追踪好</td>
                <td className="py-3">不覆盖前期决策环节</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          核心洞察：现有工具要么太技术向，要么太通用，都没有模拟「理解用户 →
          定义问题 → 生成方案 → 做出取舍」这条 PM 最核心的决策链路。
        </p>
      </Section>

      {/* ── 关键决策 ── */}
      <Section icon="🧠" title="关键决策">
        <div className="space-y-4">
          <Decision
            title="决策一：流程驱动 vs 功能驱动"
            problem="市面上的 PM 工具大多是独立功能的集合（工具箱模式），用户需要自己串联"
            decision="设计成一条引导式工作流（流水线模式），上一步的输出自动成为下一步的输入"
            tradeoff="灵活性降低（用户不能跳步使用） vs 思维连贯性大幅提升"
            rationale="真实 PM 工作就是线性推进的——先理解用户，再定义问题，再排优先级。工具应该模拟这个过程"
          />
          <Decision
            title="决策二：结构化输出 vs 自由对话"
            problem="ChatGPT 式的自由对话输出一段段文本，不可直接用于产品决策"
            decision="所有 AI 输出都是结构化的、可操作的——痛点卡片、Persona 卡片、RICE 评分表格、可视化气泡图"
            tradeoff="Prompt 工程复杂度增加 vs 输出结果可直接用于决策和交付"
            rationale="PM 需要的不是「一段话」，而是「一张表、一个排序、一份文档」"
          />
          <Decision
            title="决策三：客户端架构 vs 后端服务"
            problem="传统 SaaS 需要注册、登录、后端部署，增加用户使用门槛和运维成本"
            decision="纯客户端架构——AI 调用在浏览器端直接发起，数据存储在 localStorage，用户自带 API Key"
            tradeoff="无法实现多设备同步和团队协作 vs 零后端、零注册、极简部署"
            rationale="MVP 阶段优先验证核心工作流价值，多端同步留给后续迭代"
          />
        </div>
      </Section>

      {/* ── 解决方案 ── */}
      <Section icon="🚀" title="解决方案">
        <p className="text-slate-300 font-medium mb-3">
          五步引导式工作流——每步输出自动流入下一步：
        </p>
        <div className="space-y-3 mb-6">
          {[
            {
              step: "01",
              name: "用户洞察 · 痛点雷达",
              desc: "输入产品想法或用户评论，AI 自动提取结构化洞察：核心痛点（严重度 + 频率）、情绪分析、高频需求关键词",
            },
            {
              step: "02",
              name: "PRD 生成 · 产品文档助手",
              desc: "基于洞察结果，自动生成用户画像（Persona）、使用场景、功能列表（自动区分 MVP 与后续迭代）、完整 PRD 文档",
            },
            {
              step: "03",
              name: "优先级排序 · RICE 决策引擎",
              desc: "RICE 评分框架（Reach x Impact x Confidence / Effort），可视化气泡图 + 可调参数 + AI 决策建议",
            },
            {
              step: "04",
              name: "用户访谈模拟 · AI 角色扮演",
              desc: "AI 基于前序生成的 Persona 进行角色扮演，模拟真实用户的反应和疑虑，帮助提前发现产品逻辑盲点",
            },
            {
              step: "05",
              name: "导出 · Markdown / PDF",
              desc: "支持导出单个步骤或全部流程，Markdown 方便编辑，PDF 适合作为交付物分享",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-lg border border-white/5 bg-white/[0.02] p-4"
            >
              <p className="text-xs font-mono text-accent/40 mb-2">
                Step {item.step}
              </p>
              <p className="text-sm text-slate-200 font-medium mb-1">
                {item.name}
              </p>
              <p className="text-xs text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-slate-300 font-medium mb-3">技术选型：</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { name: "Next.js 16 + React 19", desc: "App Router + 静态导出" },
            {
              name: "Tailwind CSS v4 + shadcn/ui",
              desc: "原子化样式 + 高质量组件",
            },
            { name: "Zustand + localStorage", desc: "轻量状态管理 + 持久化" },
            { name: "Recharts", desc: "RICE 优先级气泡图可视化" },
            { name: "OpenAI 兼容 API", desc: "客户端直连，支持多家服务商" },
            { name: "GitHub Pages + Actions", desc: "推送即部署，零运维" },
          ].map((item) => (
            <div key={item.name} className="flex gap-3 items-start">
              <span className="text-accent/40 mt-0.5">▸</span>
              <div>
                <span className="text-sm text-slate-300">{item.name}</span>
                <span className="text-sm text-slate-500"> — {item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 结果与反思 ── */}
      <Section icon="📊" title="结果与反思">
        <div className="space-y-4">
          <div>
            <p className="text-slate-300 font-medium mb-2">定性成果</p>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>
                验证了「流水线 vs
                工具箱」的设计假设——引导式工作流比独立功能集合更符合 PM 思维习惯
              </li>
              <li>
                建立了从「模糊想法 → 结构化决策」的产品方法论，可复用于其他 AI
                工作流类产品
              </li>
              <li>
                MVP 克制原则的实践——只做 PM 工作流中最核心的 4 个环节，聚焦 =
                产品力
              </li>
            </ul>
          </div>
          <div>
            <p className="text-slate-300 font-medium mb-2">
              如果重新来过，我会……
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>
                接入真实数据源（App Store
                评论、Reddit、社交媒体），让洞察基于真实用户反馈
              </li>
              <li>增加多项目对比分析功能，支持 PM 同时管理多条产品线</li>
              <li>探索团队协作模式，让多人可以在同一个工作流上协同决策</li>
              <li>支持更多导出格式（Notion、飞书文档），降低交付摩擦</li>
            </ul>
          </div>
        </div>
      </Section>
    </CaseLayout>
  );
}
