import CaseLayout, {
  Section,
  Decision,
  StarSummary,
  CaseImageGallery,
} from "../components/CaseLayout";

const ex = (folder: string, name: string) =>
  `${import.meta.env.BASE_URL}example-images/${folder}/${encodeURIComponent(name)}`;

export default function CaseJobHunter() {
  return (
    <CaseLayout
      title="JobHunter AI — 面向真实求职链路的 AI Agent Workflow"
      subtitle="Case Study #2"
      tags={["AI Agent", "Workflow", "JD 解析", "结构化输出", "上下文管理"]}
      tldr="把岗位搜索、JD 解析、匹配评估、简历改写、模拟面试和记录沉淀拆成连续 Agent workflow，让输入、处理、输出和数据保存都能沿同一条链路推进。"
      github="https://github.com/wei-liping/JobHunter"
      prev={{ to: "/case/knownet", label: "KnowNet" }}
      next={{ to: "/case/insightflow", label: "InsightFlow AI" }}
    >
      <Section icon="📋" title="一页看懂（背景 → 挑战 → 行动 → 结果）">
        <StarSummary
          context="真实求职流程里，岗位搜索、JD、简历版本、面试问答和复盘记录分散在不同工具中。"
          challenge="单次 Prompt 只能生成一段内容，无法持续复用岗位与简历上下文，也无法保存可回看的过程数据。"
          action="拆成岗位探索、JD 解析、匹配评估、简历改写、模拟面试和内容沉淀多个步骤，围绕同一组上下文流转。"
          outcome="形成可运行的本地 Agent workflow：输入岗位与简历，输出匹配分析、改写建议、面试问答和可维护记录。"
        />
      </Section>

      <Section icon="🖼️" title="关键界面与流程">
        <CaseImageGallery
          images={[
            {
              src: ex("jobhunter", "首页.png"),
              alt: "JobHunter 工作台首页与四栏入口",
              caption: "首页：岗位探索、简历优化、模拟面试、内容管理入口。",
            },
            {
              src: ex("jobhunter", "岗位探索.png"),
              alt: "岗位探索界面",
              caption: "岗位探索：让真实岗位信息进入后续 Agent workflow。",
            },
            {
              src: ex("jobhunter", "内容管理.png"),
              alt: "内容管理与沉淀",
              caption: "内容管理：保存岗位、简历版本、面试问答和复盘记录。",
            },
          ]}
        />
      </Section>

      <Section icon="📌" title="项目概述（Overview）">
        <p>
          JobHunter AI 是面向真实求职流程的本地 Agent workflow。它把“输入岗位和简历 →
          解析 JD → 匹配评估 → 简历改写 → 模拟面试 → 记录保存”拆成连续步骤，让
          AI 输出不再停留在临时聊天记录里。
        </p>
        <p className="text-slate-900 font-semibold">
          一句话：把求职场景改造成一个可复用上下文、可保存结果、可继续迭代的多步骤 Agent 链路。
        </p>
      </Section>

      <Section icon="🎯" title="Problem（工程问题）">
        <p>
          这个项目关注的不是“求职产品体验”，而是一个多步骤 Agent 场景如何把输入、处理、输出和数据沉淀串起来。
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
          <li>输入分散：岗位来自招聘站，简历在文档里，面试问题和复盘记录又在其他地方</li>
          <li>处理割裂：每次都要重新复制 JD、找旧简历、判断缺口、生成建议</li>
          <li>输出不可复用：匹配评估、改写建议、面试问答没有统一保存结构</li>
          <li>数据难沉淀：岗位、简历版本、面试问答和复盘内容无法持续回看</li>
        </ul>
        <p>
          本质上，这是一个典型的 Agent workflow 问题：需要持续传递上下文、调用外部搜索能力、生成结构化结果，并保存过程数据。
        </p>
      </Section>

      <Section icon="🔍" title="Insight（关键判断）">
        <p>
          我最初也尝试过把能力堆进一个工作台里，但很快发现问题不在于功能数量，而在于上下文是否能持续流转。Agent
          链路要解决的是“同一组岗位与简历信息如何被后续步骤复用”。
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
          <li>岗位探索需要接近真实招聘站点，才能减少手动录入成本</li>
          <li>JD 解析和匹配评估需要结构化输出，后续步骤才能复用</li>
          <li>简历改写和模拟面试必须共享岗位与简历上下文，否则结果很快失真</li>
          <li>记录保存不是附属模块，而是让 Agent 输出变成可维护数据的关键</li>
        </ul>
      </Section>

      <Section icon="💡" title="Solution（链路设计）">
        <p>围绕“Agent workflow 能跑通”这个目标，我做了三项关键取舍：</p>
        <Decision
          title="把流程拆成清晰的输入、处理、输出"
          problem="所有能力堆在一起时，JD 解析、匹配评估、简历改写和面试问答的边界不清楚"
          decision="把任务拆成岗位探索、JD 解析、简历优化、模拟面试、内容管理等步骤"
          tradeoff="页面路径更多 vs 每一步输入输出更清楚，后续更容易接 API 和存储"
        />
        <Decision
          title="岗位来源接近真实输入"
          problem="如果岗位来源停留在手动录入，后续 JD 解析和匹配评估就缺少真实数据入口"
          decision="接入本机 BOSS 搜索能力，让岗位信息先进入系统，再流向后续步骤"
          tradeoff="更依赖本地环境 vs 输入更贴近真实使用场景"
        />
        <Decision
          title="把记录保存作为链路一部分"
          problem="如果岗位、简历版本、面试问答和复盘记录不保存，Agent 每次都像重新开始"
          decision="把岗位记录、简历版本、投递进展、面试问答和复盘内容沉淀到内容管理中"
          tradeoff="状态管理更复杂 vs 输出能被回看、复用和继续迭代"
        />
      </Section>

      <Section icon="🧠" title="Key Design（核心设计）">
        <p>
          当前链路围绕“输入 → 处理 → 输出 → 保存”组织，每个步骤只解决一类问题，但岗位与简历上下文会持续传递。
        </p>
        <div className="space-y-3 mt-2">
          <div className="rounded-xl border border-gray-200/90 border-l-[3px] border-l-blue-500/80 bg-white p-4 card-shadow card-shadow-hover interactive-card">
            <p className="text-sm text-slate-900 font-semibold mb-1">
              模块 1：岗位探索
            </p>
            <p className="text-xs text-slate-600">
              连接本机 BOSS 搜索，按关键词获取岗位列表，让真实 JD 先进入系统，作为后续匹配评估和简历改写的输入。
            </p>
          </div>
          <div className="rounded-xl border border-gray-200/90 border-l-[3px] border-l-blue-500/80 bg-white p-4 card-shadow card-shadow-hover interactive-card">
            <p className="text-sm text-slate-900 font-semibold mb-1">
              模块 2：JD 解析与简历优化
            </p>
            <p className="text-xs text-slate-600">
              围绕目标 JD 和简历生成匹配评估、覆盖点、缺失点、薄弱项、改写建议和开场白，尽量保持结构化输出。
            </p>
          </div>
          <div className="rounded-xl border border-gray-200/90 border-l-[3px] border-l-blue-500/80 bg-white p-4 card-shadow card-shadow-hover interactive-card">
            <p className="text-sm text-slate-900 font-semibold mb-1">
              模块 3：模拟面试
            </p>
            <p className="text-xs text-slate-600">
              用户先选岗位和简历，再围绕这组上下文进行多轮问答，让面试问题、回答和复盘可以关联到同一条记录。
            </p>
          </div>
          <div className="rounded-xl border border-gray-200/90 border-l-[3px] border-l-blue-500/80 bg-white p-4 card-shadow card-shadow-hover interactive-card">
            <p className="text-sm text-slate-900 font-semibold mb-1">
              模块 4：内容沉淀
            </p>
            <p className="text-xs text-slate-600">
              保存岗位、简历版本、投递进展、面试问答和复盘内容，让 Agent 输出从临时文本变成可维护数据。
            </p>
          </div>
        </div>
      </Section>

      <Section icon="🚀" title="Outcome（结果）">
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          <li>完成可运行的本地 Agent workflow，覆盖岗位输入、JD 解析、匹配评估、简历改写、面试问答和记录保存</li>
          <li>接通本机 BOSS 搜索，让系统具备接近真实场景的数据入口</li>
          <li>围绕岗位与简历上下文生成结构化输出，减少每一步重复输入</li>
          <li>将岗位、简历版本、面试问答和复盘沉淀为可回看的本地资料库</li>
        </ul>
      </Section>

      <Section icon="🔄" title="Reflection（反思）">
        <p>
          这个项目让我更确定一件事：AI Agent 工程的难点不是把一段内容生成得更漂亮，而是把真实任务拆成可运行步骤，并让上下文和结果能持续传递。
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-600 mt-2">
          <li>求职是天然的多步骤任务，单点生成很容易看起来有用，但很难沉淀为可维护数据</li>
          <li>把链路拆成多个步骤后，输入输出更清楚，也更容易解释系统如何运行</li>
          <li>Agent workflow 的重点不是自动替用户做完所有事，而是接住真实链路上的上下文、工具调用和结果保存</li>
        </ul>
      </Section>
    </CaseLayout>
  );
}
