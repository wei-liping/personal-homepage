import CaseLayout, { Section, Decision } from "../components/CaseLayout";

export default function CaseJobHunter() {
  return (
    <CaseLayout
      title="JobHunter AI — 一个把求职链路接起来的本地工作台"
      subtitle="Case Study #1"
      tags={["AI 产品", "求职工作流", "本地优先", "Next.js", "Workflow"]}
      tldr="JobHunter AI 的核心不是再做一个会生成内容的工具，而是把找岗位、看 JD、改简历、生成开场白、模拟面试和内容沉淀放进同一套本地工作流里，让用户少在招聘网站、文档、聊天窗口和表格之间来回切换。"
      github="https://github.com/wei-liping/JobHunter"
      next={{ to: "/case/insightflow", label: "InsightFlow AI" }}
    >
      <Section icon="📌" title="项目概述（Overview）">
        <p>
          JobHunter AI 是一个面向真实求职流程的本地工作台。它不把所有能力都堆在一个页面里，而是拆成岗位探索、简历优化、模拟面试和内容管理四个独立栏目，让用户围绕一个岗位逐步完成判断、改写、练习和沉淀。
        </p>
        <p className="text-slate-300 font-medium">
          一句话：不是“帮你生成一份内容”，而是“帮你把一次真实求职流程走完”。
        </p>
      </Section>

      <Section icon="⚡" title="快速看懂（Quick Scan）">
        <ul className="list-disc list-inside space-y-1 text-slate-400">
          <li>目标用户：需要高频看岗、快速判断匹配度并持续迭代简历的求职者</li>
          <li>核心问题：岗位、简历、投递记录和面试准备长期分散在不同工具里，求职链路容易断</li>
          <li>我的工作：独立完成问题定义、信息架构、交互设计、产品实现与公开版整理</li>
          <li>当前结果：形成可运行的四栏工作台，已支持本机 BOSS 搜索、简历优化、文本模拟面试和内容沉淀</li>
        </ul>
      </Section>

      <Section icon="🎯" title="Problem（用户问题）">
        <p>用户真正卡住的，往往不是“不会写一份简历”，而是整条求职链路被拆散了。</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
          <li>看岗位时在招聘站点，改简历时在文档里，投递记录又在别的地方，信息要反复搬运</li>
          <li>每次看到一个新岗位，都要重新复制 JD、找旧简历、判断缺口、再想开场白</li>
          <li>准备阶段和复盘阶段通常是断开的，岗位、简历版本、投递结果难以沉淀到一起</li>
          <li>很多工具只优化单个步骤，但没有真正承接“从看到岗位到准备投递”的完整过程</li>
        </ul>
        <p>本质上，用户面对的是一条连续任务链，但手头工具提供的往往只是分散的按钮。</p>
      </Section>

      <Section icon="🔍" title="Insight（关键洞察）">
        <p>
          我最初也尝试过把能力堆进一个工作台里，但很快发现问题不在于功能数量，而在于信息流是否顺。用户不是想体验更多生成能力，而是想少切几个窗口，把一个岗位相关的判断和动作留在同一条路径里。
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
          <li>岗位探索需要接近真实招聘站点，而不是只靠手动录入</li>
          <li>简历优化不应该只给一段文字，而要围绕具体岗位持续迭代</li>
          <li>面试练习如果脱离岗位和简历上下文，参考价值会很弱</li>
          <li>内容管理不是附属模块，而是整个流程最终收口的位置</li>
        </ul>
        <p className="text-slate-300 font-medium">
          所以产品方向从“单一工作台”转成了“首页 + 四个独立栏目”，让每一步都更清楚，同时又能串起来。
        </p>
      </Section>

      <Section icon="💡" title="Solution（解决方案）">
        <p>围绕“链路不要断”这个目标，我做了三项关键取舍：</p>
        <Decision
          title="从一个大工作台改成四个独立栏目"
          problem="所有能力堆在一起会让页面越来越重，用户也很难判断下一步该做什么"
          decision="把产品拆成岗位探索、简历优化、模拟面试、内容管理四段明确路径"
          tradeoff="多了页面切换成本 vs 每个场景更聚焦，信息层级更清楚"
        />
        <Decision
          title="岗位探索优先连接本机 BOSS"
          problem="如果岗位来源还停留在手动录入，后续链路再顺也会很重"
          decision="用本机浏览器和登录态承接 BOSS 搜索，让岗位先自然进入系统"
          tradeoff="更依赖本地环境 vs 搜索体验更接近真实找岗行为"
        />
        <Decision
          title="把内容管理做成正式模块"
          problem="如果岗位、简历版本、投递结果和面试记录不沉淀，产品每次都像重新开始"
          decision="把岗位库、简历库、投递进展、面试记录和复盘记录集中到一个栏目里"
          tradeoff="状态管理更复杂 vs 用户能持续积累自己的求职资产"
        />
      </Section>

      <Section icon="🧠" title="Key Design（核心设计）">
        <p>当前产品围绕四个栏目组织，每个栏目只解决一类问题，但上下文会持续传递。</p>
        <div className="space-y-3 mt-2">
          <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
            <p className="text-sm text-slate-200 font-medium mb-1">栏目 1：岗位探索</p>
            <p className="text-xs text-slate-400">
              连接本机 BOSS 搜索，按用户输入的原始关键词返回结果，默认先展示一批岗位，再逐步补详情。结果会尽量贴近原站，但不追求完全镜像。
            </p>
          </div>
          <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
            <p className="text-sm text-slate-200 font-medium mb-1">栏目 2：简历优化</p>
            <p className="text-xs text-slate-400">
              围绕目标岗位做 AI 评估、简历润色和开场白生成。评估会输出已覆盖、缺失点、薄弱点和建议补充的小项目，润色结果支持保存为新版本。
            </p>
          </div>
          <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
            <p className="text-sm text-slate-200 font-medium mb-1">栏目 3：模拟面试</p>
            <p className="text-xs text-slate-400">
              用户先选岗位，再选简历，围绕这组上下文进行纯文本多轮问答，让练习和后续复盘更有针对性。
            </p>
          </div>
          <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
            <p className="text-sm text-slate-200 font-medium mb-1">栏目 4：内容管理</p>
            <p className="text-xs text-slate-400">
              负责沉淀岗位、简历、投递进展、面试记录和复盘。岗位与简历正文放在本地数据库里，模型接口配置则优先通过右上角设置保存在当前浏览器。
            </p>
          </div>
        </div>
        <p className="text-slate-300 font-medium">
          这套设计最重要的改变，不是多了几个 AI 功能，而是让一个岗位相关的动作能持续留在同一套系统里。
        </p>
      </Section>

      <Section icon="🚀" title="Outcome（结果）">
        <ul className="list-disc list-inside space-y-1 text-slate-400">
          <li>完成可运行的本地求职工作台，并把首页重构成更清楚的四入口结构</li>
          <li>接通本机 BOSS 搜索，让岗位探索更贴近真实找岗流程</li>
          <li>把简历优化、文本模拟面试和内容管理串成一条能持续沉淀的闭环</li>
          <li>完成公开版整理，文案与产品现状对齐，不再用旧版单工作台叙事包装项目</li>
        </ul>
        <p className="text-slate-300 font-medium mt-3">如果用产品指标来衡量，这个项目更关注：</p>
        <ul className="list-disc list-inside space-y-1 text-slate-400">
          <li>从看到岗位到进入简历优化的流程衔接是否顺畅</li>
          <li>一份岗位定制简历的产出时间是否明显缩短</li>
          <li>岗位、简历、投递、面试记录是否能在系统里持续沉淀</li>
        </ul>
      </Section>

      <Section icon="🔄" title="Reflection（反思）">
        <p>
          这个项目让我更确定一件事：AI 产品真正的难点，不是把一段内容生成得更漂亮，而是判断哪一段流程必须被接住，哪些切换成本必须被拿掉。
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-400 mt-2">
          <li>求职是一个天然的多步骤任务，单点生成工具很容易看起来有用，但很难长期被留下来</li>
          <li>把产品拆成四个栏目后，信息层级更清楚，也更接近真实用户心里的任务顺序</li>
          <li>很多“看起来很炫”的能力如果不在主路径上，反而会冲淡真正的价值表达</li>
        </ul>
      </Section>

      <Section icon="📈" title="Next Steps（未来优化）">
        <ul className="list-disc list-inside space-y-1 text-slate-400">
          <li>继续让岗位探索的排序、筛选和翻页更贴近原站，减少用户在原站和系统之间来回比对</li>
          <li>把岗位对比、投递优先级判断和复盘建议做得更完整，增强“管理多个岗位”的能力</li>
          <li>继续优化简历润色和面试反馈的表达方式，让输出更像真实求职材料，而不是模型回答</li>
          <li>在不破坏本地优先前提的情况下，再决定哪些能力值得扩展到更自动化的路径</li>
        </ul>
      </Section>
    </CaseLayout>
  );
}
