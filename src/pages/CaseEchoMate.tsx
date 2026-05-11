import CaseLayout, {
  Section,
  Decision,
  StarSummary,
  CaseImageGallery,
} from "../components/CaseLayout";

const ex = (folder: string, name: string) =>
  `${import.meta.env.BASE_URL}example-images/${folder}/${encodeURIComponent(name)}`;

export default function CaseEchoMate() {
  const mobilePrototypeUrl = `${import.meta.env.BASE_URL}prototypes/echomate-mobile.html`;

  return (
    <CaseLayout
      title="EchoMate — Prompt Strategy 与结构化推理 Demo"
      subtitle="Case Study #5"
      tags={["Prompt Strategy", "结构化推理", "Vue 3", "Vite", "轻量 Demo"]}
      tldr="作为补充案例，展示 Prompt strategy 与结构化推理：先做状态分析，再给策略和理由，让输出比单句生成更稳定、更可解释。"
      github="https://github.com/wei-liping/EchoMate"
      live="https://wei-liping.github.io/EchoMate/"
      prev={{ to: "/case/prodmind", label: "ProdMind AI" }}
    >
      <Section icon="📋" title="一页看懂（背景 → 挑战 → 行动 → 结果）">
        <StarSummary
          context="社交与职场沟通里，用户常卡在「该不该回、怎么回、语气与节奏」而非缺一句话术。"
          challenge="通用生成工具给单句答案，难支撑对关系与对话阶段的判断。"
          action="将 Prompt 链路拆成状态分析 → 多策略 → 理由解释，用结构化推理再生成。"
          outcome="Vue 3 可运行产品已公开展示；经真实试用迭代（如沟通风格维度与场景扩展）。"
        />
      </Section>

      <Section icon="🖼️" title="关键界面与流程">
        <CaseImageGallery
          images={[
            {
              src: ex("echomate", "1首页.png"),
              alt: "EchoMate 首页",
              caption: "首页：进入对话辅助主流程。",
            },
            {
              src: ex("echomate", "2输入内容.png"),
              alt: "输入待分析内容",
              caption: "输入内容：提交当前对话或场景供分析。",
            },
            {
              src: ex("echomate", "3分析结果_C对话建议.png"),
              alt: "分析结果与对话建议",
              caption: "分析结果：策略与对话建议（决策辅助，不替用户说话）。",
            },
          ]}
        />
      </Section>

      <Section icon="📌" title="项目概述">
        <p>
          EchoMate
          面向社交与职场沟通：不直接生成一句回复，而通过对话状态分析、策略与理由，帮助用户做更合适的表达选择。
        </p>
        <p className="text-slate-900 font-semibold">
          核心定位：AI 不替用户说话，而是帮助用户更好地表达自己。
        </p>
      </Section>

      <Section icon="🎯" title="Problem：用户真正的聊天难点">
        <p>在真实社交中，用户常见的问题并不是“不会说话”，而是：</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
          <li>不确定这句话会不会说错</li>
          <li>无法判断对方的情绪或态度</li>
          <li>不知道当前对话处于什么阶段（升温 / 冷却）</li>
          <li>聊天容易中断，但不知道原因</li>
        </ul>
        <p>这些问题本质上不是表达问题，而是：缺乏对对话的判断能力。</p>
      </Section>

      <Section icon="🔍" title="Insight：现有 AI 工具的局限">
        <p>
          对比现有 AI 产品（如
          ChatGPT）的使用方式后发现：它们擅长生成“一个看起来不错的回复”，
          但无法解决用户在真实聊天中的核心决策问题。
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
          <li>是否应该回复？</li>
          <li>应该用什么语气？</li>
          <li>现在是推进还是收敛？</li>
        </ul>
        <p>本质问题是：现有 AI 在“生成内容”，但用户需要的是“辅助决策”。</p>
      </Section>

      <Section icon="💡" title="Solution：从“生成回复”到“辅助决策”">
        <p>
          基于上述洞察，EchoMate 被设计为一个对话决策辅助系统（Decision Support
          Tool）。
        </p>
        <p className="text-slate-900 font-semibold">
          1) 多回复策略（而非单一答案）
        </p>
        <ul className="list-disc list-inside mt-1 space-y-1 text-slate-600">
          <li>提供 2-3 条不同方向回复</li>
          <li>用户可以选择或改写</li>
          <li>保留表达主动权</li>
        </ul>
        <p className="text-slate-900 font-semibold mt-4">2) 解释机制（Why）</p>
        <ul className="list-disc list-inside mt-1 space-y-1 text-slate-600">
          <li>每条建议附带理由</li>
          <li>帮助用户理解背后的沟通逻辑</li>
        </ul>
        <p className="text-slate-900 font-semibold">
          目标不是“帮用户说”，而是“教用户怎么说”。
        </p>
      </Section>

      <Section icon="🧠" title="Key Design：三层分析架构">
        <p>
          为了让 AI 输出“有依据”而不是随机生成，EchoMate
          设计为感知→推理→生成三层结构。
        </p>
        <div className="space-y-3 mt-2">
          <div className="rounded-xl border border-gray-200/90 border-l-[3px] border-l-blue-500/80 bg-white p-4 card-shadow card-shadow-hover interactive-card">
            <p className="text-sm text-slate-900 font-semibold mb-1">
              感知层（Perception Layer）
            </p>
            <p className="text-xs text-slate-600 mb-2">
              解决问题：用户无法准确理解对方状态
            </p>
            <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
              <li>情绪识别</li>
              <li>冷淡 / 回避信号检测</li>
              <li>关键信息提取</li>
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200/90 border-l-[3px] border-l-blue-500/80 bg-white p-4 card-shadow card-shadow-hover interactive-card">
            <p className="text-sm text-slate-900 font-semibold mb-1">
              推理层（Reasoning Layer）
            </p>
            <p className="text-xs text-slate-600 mb-2">
              解决问题：用户无法判断对话阶段
            </p>
            <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
              <li>对话阶段判断（开场 / 熟悉 / 冷却）</li>
              <li>对话动量分析（上升 / 停滞 / 下降）</li>
              <li>阻力来源识别</li>
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200/90 border-l-[3px] border-l-blue-500/80 bg-white p-4 card-shadow card-shadow-hover interactive-card">
            <p className="text-sm text-slate-900 font-semibold mb-1">
              生成层（Generation Layer）
            </p>
            <p className="text-xs text-slate-600 mb-2">
              解决问题：用户不知道下一句怎么说
            </p>
            <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
              <li>提供多种回复策略</li>
              <li>给出具体表达方式</li>
              <li>提供后续对话引导</li>
            </ul>
          </div>
        </div>
        <p className="text-slate-900 font-semibold">
          关键设计原则：让“生成结果”来自“结构化推理”，而不是直接生成。
        </p>
      </Section>

      <Section icon="✨" title="产品差异点（Differentiation）">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 pr-4 text-blue-600 font-mono font-normal">
                  传统 AI 工具
                </th>
                <th className="text-left py-3 text-blue-600 font-mono font-normal">
                  EchoMate
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">单一回复</td>
                <td className="py-3">多策略选择</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">直接生成</td>
                <td className="py-3">分析 + 推理 + 生成</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4">替用户表达</td>
                <td className="py-3">辅助用户表达</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">无上下文判断</td>
                <td className="py-3">强调对话状态</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section icon="🎯" title="使用场景（Use Cases）">
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          <li>不知道如何回复一条消息</li>
          <li>想让聊天更自然、有趣</li>
          <li>在 dating 场景中破冰或推进关系</li>
          <li>聊天冷场时进行“救场”</li>
          <li>处理需要分寸的职场沟通</li>
        </ul>
      </Section>

      <Section icon="🧠" title="Product Thinking：关键思考">
        <Decision
          title="AI 的角色不是替代，而是增强"
          problem="生成式 AI 容易替用户做表达，导致用户依赖"
          decision="设计为辅助决策工具，保留用户的最终表达权"
          tradeoff="用户需要投入判断成本 vs 获得长期表达能力增长"
          rationale="AI 不应该替用户说话，而应该帮助用户表达得更好"
        />
        <Decision
          title="用户缺的不是话术，而是判断力"
          problem="“说什么”容易被关注，“什么时候说什么”更关键却被忽略"
          decision="先分析对话状态，再提供策略选择"
          tradeoff="产品链路更长 vs 建议更贴近真实场景"
        />
        <Decision
          title="从结果导向到过程导向"
          problem="只给答案缺少可迁移性，用户下次仍无从判断"
          decision="提供分析过程 + 决策依据"
          tradeoff="输出内容更长 vs 用户理解更深、复用更强"
        />
      </Section>

      <Section icon="🚀" title="项目成果（Project Outcome）">
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          <li>完整实现前端产品（Vue 3 + Vite）</li>
          <li>支持多模型接入（OpenAI-compatible API）</li>
          <li>实现结构化对话分析 + 多策略生成</li>
          <li>支持真实场景使用（聊天辅助）</li>
        </ul>
        <p className="text-slate-900 font-semibold">
          在线体验：https://wei-liping.github.io/EchoMate/
        </p>
      </Section>

      <Section icon="🔁" title="关键迭代（Iteration）">
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          <li>
            基于真实用户试用反馈，补充 MBTI 维度，让输出建议更贴近不同沟通风格
          </li>
          <li>
            早期主要聚焦约会聊天，后根据使用反馈扩展到日常社交和职场沟通，提升适用范围
          </li>
          <li>
            多轮迭代后，产品从“生成回复”进一步收敛为“分析状态 + 提供策略 +
            解释理由”的决策辅助定位
          </li>
        </ul>
      </Section>

      <Section icon="📱" title="移动端方向探索">
        <p>
          这不是独立新项目，而是 EchoMate
          在移动端场景下的形态延展。核心目标没有变化，仍然是帮助用户在真实聊天中更快判断现在该怎么回。
        </p>
        <p>
          我之所以补充 App
          版本原型，是因为聊天辅助本身就是高频、即时、强上下文依赖的场景。相比网页，手机端更适合随时查看对话、获取建议并直接完成回复。
        </p>
        <p className="text-slate-900 font-semibold">
          查看移动端原型：{" "}
          <a
            href={mobilePrototypeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 hover:text-blue-800 underline-offset-2 hover:underline transition-colors"
          >
            EchoMate App Prototype
          </a>
        </p>
      </Section>

      <Section icon="🔄" title="Reflection：项目反思">
        <p>
          在这个项目中，我最大的收获是：AI
          产品的关键不在“能生成什么”，而在“应该帮助用户做什么决策”。
        </p>
        <p>这让我在后续设计中更加关注：</p>
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          <li>用户是否保留决策权</li>
          <li>AI 是否在增强而不是替代用户</li>
          <li>产品是否真正解决场景问题</li>
        </ul>
      </Section>

      <Section icon="📌" title="下一步优化方向">
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          <li>个性化表达（基于用户历史风格）</li>
          <li>长期记忆（对话关系建模）</li>
          <li>插件化（接入聊天工具）</li>
          <li>更细粒度的语气控制</li>
          <li>继续验证移动端形态下的高频使用路径和建议触达效率</li>
        </ul>
        <p className="text-slate-900 font-semibold">
          EchoMate · Make every reply count.
        </p>
      </Section>
    </CaseLayout>
  );
}
