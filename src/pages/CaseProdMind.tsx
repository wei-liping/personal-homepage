import CaseLayout, { Section, Decision } from "../components/CaseLayout";

export default function CaseProdMind() {
  return (
    <CaseLayout
      title="ProdMind AI — 像产品经理一样思考的 AI Copilot"
      subtitle="Case Study #3"
      tags={["AI PM 工具", "工作流", "Next.js", "RICE", "结构化决策"]}
      tldr="ProdMind AI 是一个把 PM 碎片化工作串成完整决策流程的 AI 产品。它将用户洞察、PRD 生成、优先级排序与用户验证连接为一条流水线，帮助 PM 从“有想法”走到“可决策”。"
      github="https://github.com/wei-liping/ProdMind-AI"
      live="https://wei-liping.github.io/ProdMind-AI/"
      prev={{ to: "/case/insightflow", label: "InsightFlow AI" }}
      next={{ to: "/case/echomate", label: "EchoMate" }}
    >
      <Section icon="📌" title="项目概述（Overview）">
        <p>
          ProdMind AI 是一个面向产品经理的 AI
          工作台，帮助用户把模糊想法与零散反馈转化为结构化产品决策。
        </p>
        <p className="text-slate-900 font-semibold">
          一句话：一个帮助 PM 把“洞察→方案→取舍→验证”串联起来的 AI 决策产品。
        </p>
      </Section>

      <Section icon="⚡" title="快速看懂（Quick Scan）">
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          <li>目标用户：需要快速整理洞察、输出方案并做优先级判断的产品经理</li>
          <li>核心问题：工具分散，导致信息搬运重复、决策链路断裂</li>
          <li>
            我的工作：独立完成问题分析、流程设计、功能定义、迭代优化和上线展示
          </li>
          <li>
            当前结果：完成可运行产品，已支持从输入问题到导出方案的完整链路
          </li>
        </ul>
      </Section>

      <Section icon="🎯" title="Problem（用户问题）">
        <p>产品经理日常工作并不缺工具，缺的是“跨工具连贯决策”。</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
          <li>
            场景 1：用户洞察在一个工具里，PRD 在另一个工具里，信息反复搬运
          </li>
          <li>场景 2：功能优先级与前期洞察脱节，决策缺少链路依据</li>
          <li>场景 3：在开发前缺少低成本验证，方案风险后置</li>
        </ul>
        <p>本质问题：PM 的思考是连续链路，但工具是离散模块。</p>
      </Section>

      <Section icon="🔍" title="Insight（关键洞察）">
        <p>我对现有方案做了分类对比，发现“功能强”不等于“流程通”。</p>
        <p className="text-slate-900 font-semibold">现有方案的问题：</p>
        <ul className="list-disc list-inside mt-1 space-y-1 text-slate-600">
          <li>数据平台强分析但不引导决策闭环</li>
          <li>文档工具强记录但不提供决策框架</li>
          <li>通用聊天 AI 强生成但输出难以直接落地</li>
        </ul>
        <p className="text-slate-900 font-semibold">
          结论：用户真正需要的不是“更多工具”，而是“可串联的决策流程”。
        </p>
      </Section>

      <Section icon="💡" title="Solution（解决方案）">
        <p>围绕“流程连续性”设计了三个核心决策：</p>
        <Decision
          title="流程驱动优先"
          problem="工具箱式产品让用户自己拼接流程，成本高且容易断链"
          decision="将产品设计为从输入到导出的引导式流水线"
          tradeoff="自由度降低 vs 决策链路完整性显著提升"
        />
        <Decision
          title="结构化输出优先"
          problem="自由文本难以直接用于 PRD 或优先级评审"
          decision="把 AI 输出限制为卡片化/表格化结构（痛点、Persona、RICE）"
          tradeoff="表达灵活性下降 vs 可执行性和复用性提升"
        />
        <Decision
          title="验证前置"
          problem="很多方案在开发后才发现方向问题"
          decision="把用户访谈模拟嵌入流程，在开发前做低成本验证"
          tradeoff="流程步骤增加 vs 决策风险前移可控"
        />
      </Section>

      <Section icon="🧠" title="Key Design / System（核心设计）">
        <p>系统核心是“上一步输出自动进入下一步输入”的工作流串联机制。</p>
        <div className="space-y-3 mt-2">
          <div className="rounded-xl border border-gray-200/90 border-l-[3px] border-l-blue-500/80 bg-white p-4 card-shadow card-shadow-hover interactive-card">
            <p className="text-sm text-slate-900 font-semibold mb-1">
              模块 1：用户洞察提取
            </p>
            <p className="text-xs text-slate-600">
              将想法/评论结构化为痛点、情绪、需求关键词。
            </p>
          </div>
          <div className="rounded-xl border border-gray-200/90 border-l-[3px] border-l-blue-500/80 bg-white p-4 card-shadow card-shadow-hover interactive-card">
            <p className="text-sm text-slate-900 font-semibold mb-1">
              模块 2：PRD 生成与范围拆分
            </p>
            <p className="text-xs text-slate-600">
              自动产出 Persona、场景、功能并区分 MVP 与后续迭代。
            </p>
          </div>
          <div className="rounded-xl border border-gray-200/90 border-l-[3px] border-l-blue-500/80 bg-white p-4 card-shadow card-shadow-hover interactive-card">
            <p className="text-sm text-slate-900 font-semibold mb-1">
              模块 3：优先级与验证
            </p>
            <p className="text-xs text-slate-600">
              通过 RICE 排序和用户访谈模拟完成决策闭环。
            </p>
          </div>
        </div>
        <p className="text-slate-900 font-semibold">
          核心是让“决策上下文”在流程中持续传递，而不是每一步重新开始。
        </p>
      </Section>

      <Section icon="✨" title="Key Features（核心功能）">
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          <li>洞察雷达：自动提取核心痛点与情绪分布</li>
          <li>PRD 助手：自动生成 Persona、场景、功能清单</li>
          <li>RICE 引擎：可视化优先级计算与参数微调</li>
          <li>用户访谈模拟：开发前对方案进行角色化验证</li>
          <li>导出能力：支持 Markdown / PDF 交付</li>
        </ul>
      </Section>

      <Section icon="🎯" title="Use Cases（使用场景）">
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          <li>从 0 到 1 探索新产品方向</li>
          <li>针对海量用户反馈做需求归类与优先级排序</li>
          <li>团队评审前快速产出结构化方案材料</li>
        </ul>
      </Section>

      <Section icon="🧠" title="Product Thinking（产品思考）">
        <Decision
          title="AI 增强 PM 决策，而不是替 PM 决策"
          problem="若 AI 直接替代判断，PM 容易失去决策上下文"
          decision="让 AI 提供结构化依据，最终取舍由人完成"
          tradeoff="用户仍需思考 vs 决策质量与可解释性更高"
        />
        <Decision
          title="先流程后功能"
          problem="功能堆砌会提高复杂度，却未必提升效率"
          decision="优先构建闭环路径，再补功能密度"
          tradeoff="短期功能数量较少 vs 核心体验更稳定"
        />
      </Section>

      <Section icon="🚀" title="Outcome（结果）">
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          <li>完成可运行产品并上线展示</li>
          <li>实现从洞察到验证的连续工作流</li>
          <li>支持真实 PM 场景下的方案产出与导出</li>
        </ul>
        <p className="text-slate-900 font-semibold mt-3">
          若上线后重点关注指标：
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          <li>完整流程完成率（Insight→Export）</li>
          <li>PRD 导出使用率与复用率</li>
          <li>RICE 排序后需求变更率</li>
        </ul>
      </Section>

      <Section icon="🔁" title="关键迭代（Iteration）">
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          <li>
            围绕结构化输出和流程连续性完成多轮迭代，让每一步结果可直接进入下一步，而不是重新整理上下文
          </li>
          <li>
            在扩展阶段评估过接入平台评论抓取能力，希望进一步增强真实反馈输入
          </li>
          <li>
            这套关于连续决策流程的探索，后来也继续延展成了更强调证据追溯和人工复核的
            InsightFlow
          </li>
          <li>
            最终因合规风险暂未上线该能力，保留为后续优化方向，也进一步明确了产品边界和风险判断
          </li>
        </ul>
      </Section>

      <Section icon="🔄" title="Reflection（反思）">
        <p>
          我最大的收获是：AI PM
          产品的价值不在“写得更快”，而在“让关键决策更有依据”。
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-600 mt-2">
          <li>未来应补充更多真实业务样本，提升洞察质量稳定性</li>
          <li>协作场景仍是短板，团队化能力需要优先补齐</li>
        </ul>
      </Section>

      <Section icon="📈" title="Next Steps（未来优化）">
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          <li>接入真实数据源（应用商店评论、社区反馈）</li>
          <li>支持多项目对比分析与模板库</li>
          <li>增加多人协作与评审批注能力</li>
          <li>扩展导出到 Notion / 飞书文档等生态</li>
        </ul>
      </Section>
    </CaseLayout>
  );
}
