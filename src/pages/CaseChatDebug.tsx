import CaseLayout, { Section, Decision } from "../components/CaseLayout";

export default function CaseChatDebug() {
  return (
    <CaseLayout
      title="EchoMate —— 对话决策辅助 AI"
      subtitle="Case Study #2"
      tags={["AI", "社交沟通", "Vue", "OpenAI Compatible API", "决策辅助"]}
      tldr="EchoMate 的核心不是“替你聊天”，而是“帮你做更好的回复决策”。通过感知→推理→生成三层分析框架，先看懂对话状态，再给出多策略建议与理由，帮助用户提升长期沟通能力。"
      github="https://github.com/wei-liping/EchoMate"
      live="https://wei-liping.github.io/EchoMate/"
      prev={{ to: "/case/wuli-ai", label: "悟理 AI" }}
      next={{ to: "/case/prodmind", label: "ProdMind AI" }}
    >
      {/* ── 背景 ── */}
      <Section icon="🧩" title="背景">
        <p>
          在真实聊天中，大多数人的问题不是“不会说话”，而是“不知道这句话是否合适”：
          不确定对方情绪、无法判断对话阶段、害怕冷场、想回复得更好却没有思路。
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mt-2">
          {[
            {
              name: "判断困难",
              desc: "不知道对方当前情绪和真实意图，无法判断回复方向",
            },
            {
              name: "策略单一",
              desc: "传统 AI 往往只给一个答案，用户缺少可比较的回复方案",
            },
            {
              name: "成长缺失",
              desc: "用户得到回复但学不到判断方法，下次仍会卡住",
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
          核心洞察：用户真正缺的不是“话术”，而是“对对话局面的理解与判断能力”。
        </p>
      </Section>

      {/* ── 我的角色 ── */}
      <Section icon="👤" title="我的角色">
        <p>
          独立完成全流程：问题定义 → 用户场景梳理 → 三层框架设计 → Prompt
          Engineering → 前端实现（Vue + Vite）→
          上线部署。重点是把“对话判断”这种隐性能力，产品化为可执行步骤。
        </p>
      </Section>

      {/* ── 目标 ── */}
      <Section icon="🎯" title="目标与指标">
        <p className="text-slate-300 font-medium">
          核心目标：从“AI 替我回”升级为“AI 帮我做选择”
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mt-2">
          {[
            {
              metric: "策略采纳率",
              desc: "用户是否愿意在多条策略中选择并实际使用",
            },
            {
              metric: "解释理解度",
              desc: "用户是否理解“为什么这么回”",
            },
            {
              metric: "复用意愿",
              desc: "用户是否在新场景中持续回访使用",
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
          对比主流 AI
          回复体验后发现，现有产品更多在“生成内容”，较少在“辅助决策”。 EchoMate
          将产品重心从“给答案”转向“给判断与理由”。
        </p>
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 pr-4 text-accent/60 font-mono font-normal">
                  维度
                </th>
                <th className="text-left py-3 pr-4 text-accent/60 font-mono font-normal">
                  传统做法
                </th>
                <th className="text-left py-3 text-accent/60 font-mono font-normal">
                  EchoMate 做法
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-400">
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 text-slate-300">输出形式</td>
                <td className="py-3 pr-4">单一回复文本</td>
                <td className="py-3">2-3 条策略候选 + 适用场景</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 text-slate-300">分析深度</td>
                <td className="py-3 pr-4">直接改写句子</td>
                <td className="py-3">感知→推理→生成三层结构化分析</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-slate-300">用户收益</td>
                <td className="py-3 pr-4">短期拿到一句话</td>
                <td className="py-3">长期提升沟通判断能力</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── 关键决策 ── */}
      <Section icon="🧠" title="关键决策">
        <div className="space-y-4">
          <Decision
            title="决策一：从“生成答案”转向“辅助决策”"
            problem="只给单条回复会让用户依赖 AI，无法形成自己的判断能力"
            decision="提供多种回复策略，并明确每种策略的适用条件"
            tradeoff="交互更复杂，用户需要做选择 vs 用户掌控感和迁移能力更强"
            rationale="产品目标是增强用户能力，而不是替代用户表达"
          />
          <Decision
            title="决策二：三层框架（感知→推理→生成）"
            problem="直接给建议容易忽略对话阶段、情绪强度、动量变化"
            decision="先识别状态，再解释局面，最后给出建议"
            tradeoff="系统推理链更长 vs 建议更稳健、可解释"
            rationale="先理解局面再行动，才能减少“回复正确但时机错误”的问题"
          />
          <Decision
            title="决策三：多策略输出 + 理由解释"
            problem="同一句话在不同关系和场景下效果差异大，用户需要比较空间"
            decision="输出 2-3 条风格不同的回复，并解释各自优缺点"
            tradeoff="输出长度增加 vs 选择质量和执行信心提升"
            rationale="“可比较的选项”比“唯一正确答案”更贴近真实沟通决策"
          />
        </div>
      </Section>

      {/* ── 解决方案 ── */}
      <Section icon="🚀" title="解决方案">
        <p className="text-slate-300 font-medium mb-3">
          EchoMate 三层分析架构：
        </p>
        <div className="space-y-3 mb-6">
          {[
            {
              layer: "感知层",
              items: [
                "识别情绪强度与语气信号",
                "检测冷淡/回避等风险表达",
                "抽取对话中的关键信息点",
              ],
            },
            {
              layer: "推理层",
              items: [
                "判断对话阶段（开场/熟悉/冷却）",
                "分析对话动量（升温/停滞/下降）",
                "识别阻力来源（对方/自己/情境）",
                "给出当前风险与机会判断",
              ],
            },
            {
              layer: "生成层",
              items: [
                "给出 2-3 条不同策略的回复",
                "解释“为什么这样更合适”",
                "提供后续推进建议",
              ],
            },
          ].map((l) => (
            <div
              key={l.layer}
              className="rounded-lg border border-white/5 bg-white/[0.02] p-4"
            >
              <p className="text-sm text-accent/70 font-mono mb-2">{l.layer}</p>
              <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1">
                {l.items.map((item) => (
                  <p key={item} className="text-xs text-slate-400">
                    <span className="text-accent/40 mr-1.5">▸</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-slate-300 font-medium mb-3">覆盖场景：</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { scene: "开场破冰", output: "3 种风格开场建议" },
            { scene: "对话冷场", output: "冷场原因 + 救场策略" },
            { scene: "分寸沟通", output: "职场/朋友/家人语气建议" },
            { scene: "关系推进", output: "推进节奏 + 风险提醒" },
          ].map((s) => (
            <div key={s.scene} className="flex gap-3 items-start">
              <span className="text-accent/40 mt-0.5">▸</span>
              <div>
                <span className="text-sm text-slate-300">{s.scene}</span>
                <span className="text-sm text-slate-500"> → {s.output}</span>
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
              <li>从“替用户生成内容”转向“帮助用户做决策”的产品定位更清晰</li>
              <li>三层分析结构让输出更可解释，提升了建议的可信度</li>
              <li>多策略建议机制显著增强了用户选择权与表达掌控感</li>
            </ul>
          </div>
          <div>
            <p className="text-slate-300 font-medium mb-2">
              如果重新来过，我会……
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>增加对话历史对比，帮助用户观察长期沟通能力变化</li>
              <li>支持更多业务场景模板（婚恋、职场、家庭）</li>
              <li>补充实验设计与数据埋点，量化评估策略采纳与复用效果</li>
              <li>探索移动端原型与 App 化路径，提升高频使用体验</li>
            </ul>
          </div>
        </div>
      </Section>
    </CaseLayout>
  );
}
