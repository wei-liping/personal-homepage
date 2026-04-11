import CaseLayout, {
  Section,
  Decision,
  StarSummary,
  CaseImageGallery,
} from "../components/CaseLayout";

const ex = (folder: string, name: string) =>
  `${import.meta.env.BASE_URL}example-images/${folder}/${encodeURIComponent(name)}`;

export default function CaseInsightFlow() {
  return (
    <CaseLayout
      title="InsightFlow AI — 多 Agent 驱动的用户洞察与产品决策系统"
      subtitle="Case Study #2"
      tags={["AI PM 工具", "多 Agent", "RAG", "Next.js", "决策工作流"]}
      tldr="面向「反馈很多却难形成判断」：把输入、分析、优先级、PRD 与验证串成一条工作流；用多 Agent 稳住长链路，并尽量保留来源与复核点，让结论可解释、可继续。"
      github="https://github.com/wei-liping/InsightFlow"
      prev={{ to: "/case/jobhunter", label: "JobHunter AI" }}
      next={{ to: "/case/prodmind", label: "ProdMind AI" }}
    >
      <Section icon="📋" title="一页看懂（背景 → 挑战 → 行动 → 结果）">
        <StarSummary
          context="海量反馈散落在各渠道，PM 需要尽快从噪声里抽出可行动判断。"
          challenge="长链路一次性生成易漂移；若缺少来源与复核，结果难拿去评审或落地。"
          action="多 Agent 拆分步骤；结合检索与共享反馈库；关键节点支持人工校准后再推进。"
          outcome="可运行工作台打通采集到导出；强调证据可追溯与过程可继续，降低黑盒感。"
        />
      </Section>

      <Section icon="🖼️" title="关键界面与流程">
        <CaseImageGallery
          images={[
            {
              src: ex("insightflow", "1首页.png"),
              alt: "InsightFlow 首页与项目入口",
              caption: "首页：进入洞察与决策工作流的入口。",
            },
            {
              src: ex("insightflow", "3智能分析.png"),
              alt: "智能分析界面",
              caption: "智能分析：多步骤分析与协作流程。",
            },
            {
              src: ex("insightflow", "5PRD总览.png"),
              alt: "PRD 总览",
              caption: "PRD 总览：从洞察推进到方案与文档结构。",
            },
          ]}
        />
      </Section>

      <Section icon="📌" title="项目概述（Overview）">
        <p>
          InsightFlow AI 面向洞察与决策：不只产出
          PRD，而是把原始反馈、分析过程、优先级、方案草拟与验证串在一起，从「信息很多」推进到「判断更清楚」。
        </p>
        <p className="text-slate-900 font-semibold">
          一句话：帮 PM 把「反馈→洞察→取舍→验证」这条链路跑通。
        </p>
      </Section>

      <Section icon="🎯" title="Problem（用户问题）">
        <p>
          产品经理早期探索时，真正麻烦的往往不是“没有反馈”，而是“有了反馈也很难快速形成判断”。
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
          <li>
            评论、社区讨论、外部内容和内部记录分散在不同位置，整理成本很高
          </li>
          <li>
            即使做出了洞察，优先级判断、PRD
            草案和后续验证仍要切到别的工具里继续做
          </li>
          <li>
            通用 AI
            虽然能生成内容，但证据从哪里来、结论是否站得住、下一步该不该继续，常常不够清楚
          </li>
          <li>样本多、链路长时，单次长输出容易漂，结果也不容易回看和复核</li>
        </ul>
        <p>
          本质上，用户需要的不是一段更漂亮的结论，而是一条更可靠、更可追溯的产品判断路径。
        </p>
      </Section>

      <Section icon="🔍" title="Insight（关键洞察）">
        <p>
          我在继续做 PM
          决策产品时，越来越明确一个问题：真正卡住用户的，不只是“工具分散”，而是分析结果缺少证据、过程难以复查、链路一长就容易失真。
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
          <li>如果分析结论无法回溯到原始反馈，用户很难真正信任结果</li>
          <li>
            如果所有任务都压进一次生成里，链路一长，稳定性和可解释性都会明显下降
          </li>
          <li>
            如果关键节点不能人工复核，产品在真实评审和演示场景里会显得过黑盒
          </li>
          <li>
            如果洞察之后不能自然进入优先级、PRD
            和验证，用户仍然会回到“多工具切换”的老问题
          </li>
        </ul>
        <p className="text-slate-900 font-semibold">
          所以 InsightFlow 的方向不是简单重复
          ProdMind，而是在那条“决策流程”思路上继续做深，把证据支撑、人工校准和长链路稳定性补齐。
        </p>
      </Section>

      <Section icon="💡" title="Solution（解决方案）">
        <p>围绕“从反馈走到判断”这条链路，我做了三项关键取舍：</p>
        <Decision
          title="把长链路拆成多 Agent 协作流程"
          problem="单次长输出容易失真，链路越长越不稳定，也不容易定位问题出在哪一步"
          decision="将采集、清洗、痛点分析、主题分析、审查、合议、策略生成和 PRD 草拟拆开处理"
          tradeoff="系统设计更复杂 vs 分析更稳定、步骤更清楚，也更方便后续调整"
        />
        <Decision
          title="证据保留优先"
          problem="如果只有结论没有来源，用户很难判断结果是否可信，更难拿去继续沟通"
          decision="尽量保留原始来源链接、证据引用和结果置信度，让分析能回看、能解释"
          tradeoff="展示层更重 vs 结果更可追溯，黑盒感更低"
        />
        <Decision
          title="关键节点允许人工复核"
          problem="当样本不足或判断存在风险时，完全自动推进容易把错误一路带到后面"
          decision="在证据不足或结论存疑时支持人工校准，再继续推进后续策略和文档"
          tradeoff="流程不再完全自动化 vs 更符合真实产品判断场景"
        />
      </Section>

      <Section icon="🧠" title="Key Design（核心设计）">
        <p>
          系统围绕“输入 / 采集 → 分析 → 策略 → PRD → 验证 →
          导出”组织，每一步都尽量承接上一步的结果，而不是重新开始。
        </p>
        <div className="space-y-3 mt-2">
          <div className="rounded-xl border border-gray-200/90 border-l-[3px] border-l-blue-500/80 bg-white p-4 card-shadow card-shadow-hover interactive-card">
            <p className="text-sm text-slate-900 font-semibold mb-1">
              模块 1：数据输入与采集
            </p>
            <p className="text-xs text-slate-600">
              支持从想法或用户反馈两种入口创建项目，既可手动输入，也可补充外部公开内容，并尽量保留原始链接。
            </p>
          </div>
          <div className="rounded-xl border border-gray-200/90 border-l-[3px] border-l-blue-500/80 bg-white p-4 card-shadow card-shadow-hover interactive-card">
            <p className="text-sm text-slate-900 font-semibold mb-1">
              模块 2：多 Agent 洞察分析
            </p>
            <p className="text-xs text-slate-600">
              将清洗、痛点分析、主题分析、审查和合议拆分处理，结合共享反馈库与检索增强，提高海量非结构化评论场景下的稳定性和可解释性。
            </p>
          </div>
          <div className="rounded-xl border border-gray-200/90 border-l-[3px] border-l-blue-500/80 bg-white p-4 card-shadow card-shadow-hover interactive-card">
            <p className="text-sm text-slate-900 font-semibold mb-1">
              模块 3：策略优先级与 PRD 草案
            </p>
            <p className="text-xs text-slate-600">
              基于前面得到的洞察结果继续生成功能建议、排序理由、RICE 结果和 PRD
              草案，让判断能直接进入方案层。
            </p>
          </div>
          <div className="rounded-xl border border-gray-200/90 border-l-[3px] border-l-blue-500/80 bg-white p-4 card-shadow card-shadow-hover interactive-card">
            <p className="text-sm text-slate-900 font-semibold mb-1">
              模块 4：访谈验证与导出
            </p>
            <p className="text-xs text-slate-600">
              在方案形成后继续用角色化访谈做低成本验证，并支持按步骤导出为
              Markdown 或 PDF，方便演示、评审和后续沉淀。
            </p>
          </div>
        </div>
        <p className="text-slate-900 font-semibold">
          这套设计最核心的变化，是把“结果可生成”推进到了“过程可追溯、关键节点可复核、整条链路可继续”。
        </p>
      </Section>

      <Section icon="🚀" title="Outcome（结果）">
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          <li>
            完成可运行的产品洞察与决策工作台，打通从反馈输入到导出材料的完整链路
          </li>
          <li>
            基于多 Agent
            协作与检索增强，提高长链路分析场景下的稳定性和结果可解释性
          </li>
          <li>把证据引用、原始链接和人工复核能力纳入主路径，降低结果黑盒感</li>
          <li>
            让优先级判断、PRD 草案和访谈验证自然承接分析结果，而不是各自孤立
          </li>
        </ul>
        <p className="text-slate-900 font-semibold mt-3">
          如果用产品指标来衡量，这个项目更关注：
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          <li>从原始反馈进入可执行策略建议的链路完成率</li>
          <li>分析结果中证据引用和来源追溯的可用性</li>
          <li>用户从洞察进入 PRD 与访谈验证的衔接效率</li>
        </ul>
      </Section>

      <Section icon="🔁" title="关键迭代（Iteration）">
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          <li>
            项目方向延续了 ProdMind
            对“连续决策流程”的判断，但把重点从单纯流程串联进一步推进到证据支撑和过程可靠性
          </li>
          <li>
            随着链路加长，我把原本容易堆在一起的生成任务拆成多角色协作，以减少长链路输出时的漂移和不稳定
          </li>
          <li>
            在真实使用和演示需求下，进一步加入来源保留和人工复核能力，让结果更适合回看、解释和继续推进
          </li>
        </ul>
      </Section>

      <Section icon="🔄" title="Reflection（反思）">
        <p>
          这个项目让我更确定：AI
          在产品场景里的价值，不只是“帮你更快生成一份东西”，而是帮你把证据、判断和后续动作接起来。
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-600 mt-2">
          <li>
            链路越长，越不能只靠一次生成，必须把任务拆开并明确每一步承担什么角色
          </li>
          <li>
            当结果会进入评审、演示和决策时，可追溯性几乎和生成能力同样重要
          </li>
          <li>
            完全自动化并不一定最好，关键节点允许人工校准，反而更接近真实工作流
          </li>
        </ul>
      </Section>

      <Section icon="📈" title="Next Steps（未来优化）">
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          <li>
            继续提升不同平台反馈采集的稳定性和样本清洗质量，减少前置整理成本
          </li>
          <li>增强共享反馈库与项目内反馈联动，让跨项目洞察复用更自然</li>
          <li>
            继续完善协作与评审环节，让多人一起看结论、补证据和做取舍更顺畅
          </li>
          <li>
            在不牺牲可解释性的前提下，继续优化策略建议和 PRD 草案的表达质量
          </li>
        </ul>
      </Section>
    </CaseLayout>
  );
}
