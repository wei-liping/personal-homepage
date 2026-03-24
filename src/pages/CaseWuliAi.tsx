import CaseLayout, { Section, Decision } from "../components/CaseLayout";

export default function CaseWuliAi() {
  return (
    <CaseLayout
      title="悟理 AI — 苏格拉底式物理学习助手"
      subtitle="Case Study #1"
      tags={["AI 教育", "高中物理", "React", "SM-2", "启发式教学"]}
      tldr="悟理 AI 是一个帮助高中生从“会看答案”走向“真正理解”的学习产品。通过分步确认、变式训练与间隔复习，把解题过程转化为可验证的理解过程。"
      github="https://github.com/wei-liping/wuli-ai-tutor"
      live="https://wei-liping.github.io/wuli-ai-tutor/"
      next={{ to: "/case/echomate", label: "EchoMate" }}
    >
      <Section icon="📌" title="项目概述（Overview）">
        <p>
          悟理 AI 是一个 AI 物理辅导产品，帮助高中生在真实解题场景中建立模型化思维，
          并通过引导式学习流程提升长期掌握能力。
        </p>
        <p className="text-slate-300 font-medium">
          一句话：一个帮助高中生理解物理思维过程、而不是只记住答案的 AI 学习工具。
        </p>
      </Section>

      <Section icon="🎯" title="Problem（用户问题）">
        <p>用户在学习物理时的典型卡点是“看得懂讲解，但自己不会做”。</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
          <li>场景 1：看完完整解答后仍不知道第一步如何下手</li>
          <li>场景 2：换一个题目情境就不会迁移</li>
          <li>场景 3：短期理解后很快遗忘，复习缺乏节奏</li>
        </ul>
        <p>本质问题：用户缺的不是答案，而是“可重复的思考过程”。</p>
      </Section>

      <Section icon="🔍" title="Insight（关键洞察）">
        <p>
          对主流 AI 问答产品在教育场景进行对比后，我发现它们普遍采用“一次性完整输出”模式。
        </p>
        <p className="text-slate-300 font-medium">现有方案的问题：</p>
        <ul className="list-disc list-inside mt-1 space-y-1 text-slate-400">
          <li>缺少分步确认，无法判断学生是否真正理解</li>
          <li>缺少变式验证，难以确认知识迁移能力</li>
          <li>缺少长期复习机制，学习效果难沉淀</li>
        </ul>
        <p className="text-slate-300 font-medium">
          结论：用户真正需要的不是“完整答案”，而是“可验证的理解过程”。
        </p>
      </Section>

      <Section icon="💡" title="Solution（解决方案）">
        <p>产品围绕“过程可验证”设计了三项核心决策：</p>
        <Decision
          title="分步确认机制"
          problem="完整输出看似高效，但学生容易被动接收"
          decision="每次只讲一小步，必须确认理解后再推进"
          tradeoff="交互轮次增加 vs 理解深度显著提升"
        />
        <Decision
          title="变式训练闭环"
          problem="单题理解不等于可迁移能力"
          decision="在关键节点自动生成变式题进行验证"
          tradeoff="训练成本增加 vs 迁移能力更可测"
        />
        <Decision
          title="SM-2 间隔复习"
          problem="短期理解容易遗忘"
          decision="按掌握度动态安排复习周期（12小时~90天）"
          tradeoff="系统复杂度上升 vs 长期掌握率提升"
        />
      </Section>

      <Section icon="🧠" title="Key Design / System（核心设计）">
        <p>系统采用“学习三部曲”闭环架构，确保每一步都有学习目标。</p>
        <div className="space-y-3 mt-2">
          <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
            <p className="text-sm text-slate-200 font-medium mb-1">模块 1：模型抽象</p>
            <p className="text-xs text-slate-400">将题目文本转为标准物理模型，降低认知负担。</p>
          </div>
          <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
            <p className="text-sm text-slate-200 font-medium mb-1">模块 2：逻辑递进</p>
            <p className="text-xs text-slate-400">把长推导链拆成可消化的微步骤，逐步构建因果关系。</p>
          </div>
          <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
            <p className="text-sm text-slate-200 font-medium mb-1">模块 3：闭环验证</p>
            <p className="text-xs text-slate-400">通过变式题和复习调度验证是否真正掌握。</p>
          </div>
        </div>
        <p className="text-slate-300 font-medium">
          核心是把“讲解”转化为“验证”，把“会看”转化为“会做”。
        </p>
      </Section>

      <Section icon="✨" title="Key Features（核心功能）">
        <ul className="list-disc list-inside space-y-1 text-slate-400">
          <li>苏格拉底式分步讲解：每一步都可确认“懂了/没懂”</li>
          <li>变式题自动生成：针对薄弱点即时强化</li>
          <li>错题本与复习队列：记录问题来源与掌握进度</li>
          <li>知识技能树可视化：展示知识点依赖与掌握状态</li>
        </ul>
      </Section>

      <Section icon="🎯" title="Use Cases（使用场景）">
        <ul className="list-disc list-inside space-y-1 text-slate-400">
          <li>学生课后自学时，分步理解一道难题</li>
          <li>考试前复盘错题，快速定位薄弱知识点</li>
          <li>每日练习时按复习计划完成高效巩固</li>
        </ul>
      </Section>

      <Section icon="🧠" title="Product Thinking（产品思考）">
        <Decision
          title="AI 应增强学习，而非替代学习"
          problem="直接给答案会削弱学生主动思考"
          decision="坚持“分步引导 + 微测试”机制"
          tradeoff="短期速度降低 vs 长期学习能力提升"
        />
        <Decision
          title="验证比讲解更重要"
          problem="学生经常“听懂了”但做不出来"
          decision="把“会做”作为产品评价标准，而非“讲清楚”"
          tradeoff="需要更多交互设计 vs 学习效果更可信"
        />
      </Section>

      <Section icon="🚀" title="Outcome（结果）">
        <ul className="list-disc list-inside space-y-1 text-slate-400">
          <li>完成端到端可用产品（题目输入、讲解、练习、复习、错题管理）</li>
          <li>实现学习闭环：讲解→验证→复习→再验证</li>
          <li>支持真实学习场景下的连续使用</li>
        </ul>
        <p className="text-slate-300 font-medium mt-3">若上线后重点关注指标：</p>
        <ul className="list-disc list-inside space-y-1 text-slate-400">
          <li>单步理解确认率</li>
          <li>变式题正确率</li>
          <li>7日复习完成率与掌握提升率</li>
        </ul>
      </Section>

      <Section icon="🔄" title="Reflection（反思）">
        <p>
          我最大的收获是：教育类 AI 产品的核心竞争力不在“讲得多快”，而在“是否能证明用户真的学会了”。
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-400 mt-2">
          <li>后续应更早引入真实学生测试，校准步骤粒度</li>
          <li>在可视化演示方面仍有提升空间（物理过程动画化）</li>
        </ul>
      </Section>

      <Section icon="📈" title="Next Steps（未来优化）">
        <ul className="list-disc list-inside space-y-1 text-slate-400">
          <li>加入个性化学习路径（按年级/基础自适应）</li>
          <li>强化复习算法参数，提升不同类型题目的记忆命中率</li>
          <li>引入学习报告，帮助家长/教师理解学习进展</li>
        </ul>
      </Section>
    </CaseLayout>
  );
}
