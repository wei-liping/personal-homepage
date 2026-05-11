import CaseLayout, {
  Section,
  Decision,
  StarSummary,
  CaseImageGallery,
} from "../components/CaseLayout";

const ex = (name: string) =>
  `${import.meta.env.BASE_URL}example-images/knownet/${name}`;

export default function CaseKnowNet() {
  return (
    <CaseLayout
      title="KnowNet — 基于大模型的知识库与知识图谱智能体开发平台"
      subtitle="Case Study #1"
      tags={["Python", "FastAPI", "LangGraph", "RAG", "Docker Compose"]}
      tldr="用 Python、FastAPI、LangGraph 和 Docker Compose 搭建可本地运行的 AI Agent 平台：覆盖文档上传、解析、分块、向量检索、重排序、引用回答、知识图谱、工具调用和多服务编排。"
      github="https://github.com/wei-liping/KnowNet"
      next={{ to: "/case/jobhunter", label: "JobHunter AI" }}
    >
      <Section icon="📋" title="一页看懂（背景 → 挑战 → 行动 → 结果）">
        <StarSummary
          context="企业知识问答和智能体应用常见问题是知识分散、回答不可追溯、Agent 能力难配置、工具与知识库难统一接入。"
          challenge="只做聊天入口无法展示工程链路；只做后端能力又缺少可操作界面和可复现运行方式。"
          action="基于 LangGraph 搭建 Agent 运行链路，打通 RAG 知识库、LightRAG、Neo4j 图谱、工具调用、Skills、MCP 和子智能体配置。"
          outcome="使用 Docker Compose 整合 Web、API、Worker、PostgreSQL、Redis、MinIO、Milvus、Neo4j，形成可本地启动、调试和继续开发的完整系统。"
        />
      </Section>

      <Section icon="🖼️" title="关键界面与流程">
        <CaseImageGallery
          images={[
            {
              src: ex("home.png"),
              alt: "KnowNet 首页",
              caption: "首页：进入知识库、智能体和平台管理能力。",
            },
            {
              src: ex("agent.png"),
              alt: "KnowNet 智能体配置",
              caption: "智能体配置：模型、提示词、工具和扩展统一管理。",
            },
            {
              src: ex("graph.png"),
              alt: "KnowNet 知识图谱",
              caption: "知识图谱：让实体关系参与检索和推理。",
            },
          ]}
        />
      </Section>

      <Section icon="📌" title="项目概述（Overview）">
        <p>
          KnowNet
          面向企业知识库和 Agent 应用开发场景，把智能体运行链路、RAG
          知识库、知识图谱、工具调用和管理界面放在同一套可运行系统中。它不是单个聊天
          Demo，而是一个从资料入库到 Agent 调用都能本地复现的工程项目。
        </p>
        <p className="text-slate-900 font-semibold">
          一句话：让 AI Agent 能带着外部知识、工具和图谱一起完成可追溯问答与任务执行。
        </p>
      </Section>

      <Section icon="🎯" title="Problem（用户问题）">
        <p>
          很多企业已经有大量文档、业务资料和流程知识，但这些内容很难直接进入可运行、可调试、可复用的 AI 应用。
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
          <li>多格式资料需要上传、解析、分块、Embedding、检索和引用回答，链路长且容易断</li>
          <li>普通问答只能处理单次问题，难以承接工具调用、任务拆解和多轮状态传递</li>
          <li>只做向量检索时，实体关系、全局结构和跨文档信息很难被利用起来</li>
          <li>模型、工具、知识库、图谱和运行服务分散配置，调试和复现成本高</li>
        </ul>
        <p>
          本质问题不是“缺一个聊天入口”，而是缺一套能把知识处理、检索、工具调用和 Agent 运行组织起来的工程链路。
        </p>
      </Section>

      <Section icon="🔍" title="Insight（关键洞察）">
        <p>
          做 AI Agent 工程时，最容易被低估的是“系统如何稳定跑起来”。文档上传只是开始，真正影响可用性的是资料如何被解析和检索、工具如何被调用、图谱如何参与回答、运行过程如何调试和复现。
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
          <li>RAG 不只是向量检索，还包括文档解析、切分策略、Embedding、重排序、引用溯源和评估</li>
          <li>知识图谱能补充实体关系视角，让回答不只依赖片段匹配</li>
          <li>Agent 需要可配置的模型、提示词、工具调用和上下文管理，才能承接多步骤任务</li>
          <li>Docker Compose、数据库、对象存储和向量库是工程复现与排障的基础</li>
        </ul>
        <p className="text-slate-900 font-semibold">
          所以 KnowNet 的重点不是“包装一个 AI 应用”，而是把 RAG、图谱、工具调用、Agent 编排和多服务运行连成一条可验证链路。
        </p>
      </Section>

      <Section icon="💡" title="Solution（解决方案）">
          <p>围绕“让知识进入可运行的 Agent 系统”这个目标，我做了三项关键取舍：</p>
        <Decision
          title="用 LangGraph 承接 Agent 运行链路"
          problem="如果逻辑散落在普通请求处理里，模型调用、工具调用、知识库和子任务很难维护"
          decision="把模型、提示词、工具、知识库、Skills、MCP 和子智能体统一到可配置上下文中"
          tradeoff="链路设计更复杂 vs 更容易扩展多步骤任务和工具调用"
        />
        <Decision
          title="RAG 与知识图谱并行"
          problem="只靠文档片段检索，容易忽略实体关系、跨文档结构和复杂概念关联"
          decision="同时支持多格式文档解析、向量检索、重排序、LightRAG 图增强检索和 Neo4j 图谱可视化"
          tradeoff="依赖 Milvus、Neo4j 等服务 vs 回答依据更丰富，也更接近企业知识应用场景"
        />
        <Decision
          title="用 Docker Compose 保证可复现运行"
          problem="AI Demo 只在本机脚本里能跑，很难让别人启动、调试和二次开发"
          decision="整合 Web、API、Worker、PostgreSQL、Redis、MinIO、Milvus、Neo4j 等服务"
          tradeoff="服务数量更多 vs 能展示真实工程链路、接口文档和排障路径"
        />
      </Section>

      <Section icon="🧠" title="Key Design（核心设计）">
        <p>
          KnowNet
          的核心链路是“资料上传 → 文档解析 → 分块与向量化 → 检索与重排序 → Agent 配置 → 工具调用与图谱增强 → 引用回答与运行记录”。
        </p>
        <div className="space-y-3 mt-2">
          <div className="rounded-xl border border-gray-200/90 border-l-[3px] border-l-blue-500/80 bg-white p-4 card-shadow card-shadow-hover interactive-card">
            <p className="text-sm text-slate-900 font-semibold mb-1">
              模块 1：Agent 运行与工具调用
            </p>
            <p className="text-xs text-slate-600">
              基于 LangGraph 组织模型、提示词、工具、Skills、MCP、子智能体和中间件，让不同任务能组合不同能力，而不是只做单轮问答。
            </p>
          </div>
          <div className="rounded-xl border border-gray-200/90 border-l-[3px] border-l-blue-500/80 bg-white p-4 card-shadow card-shadow-hover interactive-card">
            <p className="text-sm text-slate-900 font-semibold mb-1">
              模块 2：RAG 知识库链路
            </p>
            <p className="text-xs text-slate-600">
              覆盖多格式资料上传、解析、分块、Embedding、向量检索、重排序、引用回答和知识库评估，让资料从原文件变成可检索资产。
            </p>
          </div>
          <div className="rounded-xl border border-gray-200/90 border-l-[3px] border-l-blue-500/80 bg-white p-4 card-shadow card-shadow-hover interactive-card">
            <p className="text-sm text-slate-900 font-semibold mb-1">
              模块 3：LightRAG 与 Neo4j 图谱
            </p>
            <p className="text-xs text-slate-600">
              支持实体关系抽取、图谱可视化和图增强检索，让复杂知识不只依赖文本片段匹配，也能通过实体关系辅助理解。
            </p>
          </div>
          <div className="rounded-xl border border-gray-200/90 border-l-[3px] border-l-blue-500/80 bg-white p-4 card-shadow card-shadow-hover interactive-card">
            <p className="text-sm text-slate-900 font-semibold mb-1">
              模块 4：服务编排与管理界面
            </p>
            <p className="text-xs text-slate-600">
              通过 Web 管理界面和 Docker Compose 运行方式管理 Web、API、Worker、PostgreSQL、Redis、MinIO、Milvus、Neo4j 等服务。
            </p>
          </div>
        </div>
      </Section>

      <Section icon="🚀" title="Outcome（结果）">
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          <li>完成可本地启动的 AI Agent 工程项目，覆盖 Agent、RAG、知识图谱和工具调用主链路</li>
          <li>支持从资料上传、解析入库到智能体检索、引用回答和图谱查看的完整流程</li>
          <li>用 Docker Compose 整合 Web、API、Worker、PostgreSQL、Redis、MinIO、Milvus、Neo4j 等服务</li>
          <li>补充 README、快速开始和架构说明，让项目能被他人理解、运行和继续开发</li>
        </ul>
        <p className="text-slate-900 font-semibold mt-3">
          面向 AI Agent Engineer 求职方向，这个项目最能体现我对“Agent
          不是聊天框，而是模型、知识、工具、存储和服务编排共同组成的工程系统”的理解。
        </p>
      </Section>

      <Section icon="🔄" title="Reflection（反思）">
        <p>
          KnowNet 让我更明确：做 AI Agent
          工程，关键不是把模型能力包装得更神奇，而是让知识处理、工具调用、服务依赖、结果追溯和运行验证都能落到一条可维护链路里。
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-600 mt-2">
          <li>Agent 的工程价值来自稳定承接任务，而不只是生成回答</li>
          <li>RAG 和图谱需要和工具调用、存储、评估一起设计，才能进入真实链路</li>
          <li>可启动、可调试、可复现，比单次演示更能说明项目能力</li>
        </ul>
      </Section>

      <Section icon="📈" title="Next Steps（未来优化）">
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          <li>继续优化知识库评估和图谱构建反馈，让用户更清楚资料质量与可用范围</li>
          <li>增强 Agent 运行过程的可观察性，方便定位检索、工具调用和回答质量问题</li>
          <li>补充更多团队协作与权限场景，让平台更适合真实组织内落地</li>
        </ul>
      </Section>
    </CaseLayout>
  );
}
