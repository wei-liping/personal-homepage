import CaseLayout, { Section, Decision } from "../components/CaseLayout";

export default function CaseWuliAi() {
  return (
    <CaseLayout
      title="悟理 AI —— 苏格拉底式物理私教"
      subtitle="Case Study #1"
      tags={["AI", "教育科技", "React", "启发式教学", "SM-2 算法"]}
      tldr="针对高中生物理学习痛点，通过对 3 款主流 AI 产品的系统评测，识别出 4 个核心缺陷，设计并实现了一个基于苏格拉底式教学法的 AI 物理辅导工具。核心差异：不是「讲完你听」，而是「每步你都得证明你懂了」。"
      github="https://github.com/wei-liping/wuli-ai-tutor"
      live="https://wei-liping.github.io/wuli-ai-tutor/"
      next={{ to: "/case/echomate", label: "EchoMate" }}
    >
      {/* ── 背景 ── */}
      <Section icon="🧩" title="背景">
        <p>
          高中物理一直是让许多学生头疼的科目。不是因为物理「太难」，而是传统教学和现有
          AI
          工具都忽略了一个关键问题：学生需要的不是「答案」，而是「理解的过程」。
        </p>
        <div className="rounded-lg border border-white/5 bg-white/[0.02] p-5">
          <p className="text-xs font-mono text-accent/50 mb-3">目标用户</p>
          <p className="text-slate-300">高中物理学习困难的学生，尤其是：</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
            <li>基础薄弱，看 AI 解答都看不懂的学生</li>
            <li>一做题就蒙，不知道第一步怎么想到的</li>
            <li>讲完就忘，换个情境还是不会</li>
          </ul>
        </div>
      </Section>

      {/* ── 我的角色 ── */}
      <Section icon="👤" title="我的角色">
        <p>
          独立完成全流程：用户调研 → 竞品分析 → 产品定义 → 交互设计 → 前端开发 →
          部署上线。 从问题发现到产品落地，覆盖了产品经理核心工作的每一个环节。
        </p>
      </Section>

      {/* ── 目标 ── */}
      <Section icon="🎯" title="目标与指标">
        <p className="text-slate-300 font-medium">
          核心目标：将「解题」转化为「理解」
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mt-2">
          {[
            {
              metric: "单步理解确认率",
              desc: "每个教学步骤，学生是否真正理解",
            },
            {
              metric: "变式题正确率",
              desc: "换个情境，是否还会做",
            },
            {
              metric: "知识点掌握周期",
              desc: "从首次接触到稳定掌握的时间",
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
          对通义千问、豆包、腾讯元宝三款主流 AI 问答产品进行了教育场景深度评测。
          即使评分最高的通义千问（综合 4.68/5），在物理辅导中仍存在 4
          大共性缺陷：
        </p>
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 pr-4 text-accent/60 font-mono font-normal">
                  痛点
                </th>
                <th className="text-left py-3 pr-4 text-accent/60 font-mono font-normal">
                  学生的声音
                </th>
                <th className="text-left py-3 text-accent/60 font-mono font-normal">
                  现有 AI 表现
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-400">
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 text-slate-300">缺乏学情诊断</td>
                <td className="py-3 pr-4">"AI 讲的太难了/太简单了"</td>
                <td className="py-3">三款均未主动询问学生水平</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 text-slate-300">被动式输出</td>
                <td className="py-3 pr-4">"不知道第一步怎么想到的"</td>
                <td className="py-3">一次性输出完整解答</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 text-slate-300">缺少可视化</td>
                <td className="py-3 pr-4">"概念太抽象，做题就蒙"</td>
                <td className="py-3">纯文字为主，缺少图示辅助</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-slate-300">无法举一反三</td>
                <td className="py-3 pr-4">"AI 讲完就走了，换情境不会"</td>
                <td className="py-3">无一款主动推送变式题</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          竞品综合评分：通义千问 4.68 &gt; 豆包 4.60 &gt; 腾讯元宝 4.28（满分 5
          分）。三款产品各有优势，但在教育场景的「互动式引导」维度均有明显不足。
        </p>
      </Section>

      {/* ── 关键决策 ── */}
      <Section icon="🧠" title="关键决策">
        <div className="space-y-4">
          <Decision
            title="决策一：苏格拉底式对话 vs 直接给答案"
            problem="竞品分析发现所有 AI 都采用「一次性输出完整解答」模式，学生被动接收"
            decision="采用强制分步反馈循环——每步讲解后必须确认理解才推进，不懂则降维重讲"
            tradeoff="对话轮次增加（用户交互成本上升） vs 理解深度显著提升"
            rationale="教育心理学研究表明，主动建构知识比被动接收效果好 3-5 倍"
          />
          <Decision
            title="决策二：引入物理模型标注"
            problem="学生反馈「看书能懂，一做题就蒙」——缺乏从文字到物理模型的抽象能力"
            decision="AI 自动识别题目涉及的物理模型（如匀变速直线运动 + 牛顿第二定律），展示在侧边栏"
            tradeoff="增加 AI 推理复杂度和 Prompt 成本 vs 帮助学生建立模型化思维"
          />
          <Decision
            title="决策三：SM-2 间隔复习算法"
            problem="一次理解 ≠ 长期掌握，学生容易「讲完就忘」"
            decision="引入 SM-2 算法管理复习周期（12 小时 ~ 90 天），变式题自动存入错题本"
            tradeoff="增加产品复杂度（需要本地数据持久化） vs 从根本上解决遗忘问题"
            rationale="艾宾浩斯遗忘曲线 + SuperMemo 间隔重复理论的工程化应用"
          />
        </div>
      </Section>

      {/* ── 解决方案 ── */}
      <Section icon="🚀" title="解决方案">
        <p className="text-slate-300 font-medium">
          核心架构——「学习三部曲」模型：
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mt-2 mb-6">
          {[
            {
              step: "01",
              name: "模型抽象",
              desc: "将复杂题目转化为标准物理模型（如小球、匀加速、点电荷）",
            },
            {
              step: "02",
              name: "逻辑递进",
              desc: "将长链路解题拆解为学生可消化的微小逻辑单元",
            },
            {
              step: "03",
              name: "闭环验证",
              desc: "通过变式训练确认学生是否实现了真正的知识内化",
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

        <p className="text-slate-300 font-medium mb-3">六大功能模块：</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            {
              name: "苏格拉底答疑",
              desc: "多模态输入 + 分步讲解 + 双向反馈 + 情绪兜底",
            },
            {
              name: "题库闯关",
              desc: "8 大模块 30+ 题，支持拍照批改",
            },
            {
              name: "每日练习",
              desc: "SM-2 算法驱动的个性化复习",
            },
            {
              name: "错题本",
              desc: "汇总所有学习记录，支持多维筛选",
            },
            {
              name: "知识技能树",
              desc: "力导向图可视化 50+ 知识点及关联",
            },
            {
              name: "灵活配置",
              desc: "支持 DeepSeek、通义千问、Kimi 等多模型接入",
            },
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
              <li>系统性竞品分析验证了产品方向的正确性</li>
              <li>
                建立了一套从「用户痛点 → 教育理论 → 产品功能」的映射方法论
              </li>
              <li>
                技术栈选型（React + Vite + Tailwind）实现了快速迭代和高质量交付
              </li>
            </ul>
          </div>
          <div>
            <p className="text-slate-300 font-medium mb-2">
              如果重新来过，我会……
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>更早进行用户测试，用真实学生验证分步引导的颗粒度</li>
              <li>引入更多可视化手段（动画模拟物理过程），降低抽象理解门槛</li>
              <li>
                探索社交学习功能（同伴互助、学习小组），利用社交动力提升留存
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </CaseLayout>
  );
}
