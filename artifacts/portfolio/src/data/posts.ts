export type Post = {
  id: string;
  type: "article" | "linkedin";
  title: string;
  excerpt: string;
  date: string; // ISO: "2024-03-15"
  url: string;
  tags: string[];
  readTime?: string;
};

export const posts: Post[] = [
  // ── Published Articles (Medium) ───────────────────────────────────────────
  {
    id: "a1",
    type: "article",
    title: "From Book to Build: Retail Data Warehouse Design with Kimball's Dimensional Modeling and Databricks",
    excerpt:
      "Ralph Kimball's The Data Warehouse Toolkit is a cornerstone for anyone learning dimensional modeling. This guide bridges theory and practice — breaking down the Retail Sales case study and then building it step by step in Databricks using Medallion Architecture (Bronze to Silver to Gold).",
    date: "2025-08-25",
    url: "https://medium.com/@ashima.adya/from-book-to-build-a-data-engineering-guide-to-kimballs-retail-sales-model-with-databricks-8002f8229438",
    tags: ["Databricks", "Dimensional Modeling", "Data Engineering", "Medallion Architecture"],
    readTime: "10 min read",
  },
  {
    id: "a2",
    type: "article",
    title: "Build a Complete Azure Data Pipeline Using ADF, Databricks, Synapse & Power BI",
    excerpt:
      "A hands-on, end-to-end Azure data engineering project using Azure Data Factory, Databricks, Synapse Analytics, and Power BI. The pipeline follows Medallion Architecture (Bronze to Silver to Gold) — a widely adopted approach for scalable, modular data engineering.",
    date: "2025-06-08",
    url: "https://medium.com/@ashima.adya/build-a-complete-azure-data-pipeline-using-adf-databricks-synapse-power-bi-step-by-step-guide-43c745511682",
    tags: ["Azure", "ADF", "Databricks", "Synapse", "Power BI", "Data Engineering"],
    readTime: "12 min read",
  },
  {
    id: "a3",
    type: "article",
    title: "Flying Adhoc Network (FANET)",
    excerpt:
      "An exploration of Flying Adhoc Networks — what they are, how UAVs form self-configuring peer-to-peer networks without central infrastructure, and why FANETs present unique challenges around routing, security, and mobility compared to traditional adhoc networks.",
    date: "2020-07-07",
    url: "https://medium.com/@ashima.adya/flying-adhoc-network-1fc8da1d9b34",
    tags: ["Networking", "UAV", "FANET", "MANET"],
    readTime: "5 min read",
  },

  // ── LinkedIn Posts ─────────────────────────────────────────────────────────
  {
    id: "l1",
    type: "linkedin",
    title: "Agentic RAG fixed single-shot retrieval. It doesn't touch the cold-start problem.",
    excerpt:
      "Everyone's calling agentic RAG the new default. Instead of one search-then-answer pass, the agent loops — searches, checks confidence, searches again. That's a real step up. Then I hit the counterargument: RAG was built for a person asking one question. An agent works a task across many steps, and every new session it starts from zero.",
    date: "2025-04-10",
    url: "https://www.linkedin.com/posts/ashima-adya_aiengineering-aiagents-rag-activity-7477245529484079104-0iOB",
    tags: ["AI Engineering", "AI Agents", "RAG", "LangGraph", "Context Engineering"],
  },
  {
    id: "l2",
    type: "linkedin",
    title: "The 'Agent Harness' — and why it's where the real engineering lives",
    excerpt:
      "Agent = Model + Harness. The model is the brain. But a brain alone can't actually do anything. The harness is everything around it: the hands (tool calls), the memory (because the model forgets everything between calls), and the reflexes (checks that catch a bad output before a user sees it). Two teams can build on the same model. The one with the better harness wins.",
    date: "2025-03-31",
    url: "https://www.linkedin.com/posts/ashima-adya_aiengineering-aiagents-softwareengineering-activity-7474353526484135937-33Yf",
    tags: ["AI Engineering", "AI Agents", "Software Engineering", "AgentForce"],
  },
  {
    id: "l3",
    type: "linkedin",
    title: "Just earned my dbt Fundamentals certification — and it changed how I think about SQL",
    excerpt:
      "I've been writing SQL for years. Turns out I've been thinking about it too small. CTEs and subqueries only live inside one query — the moment it ends, the pieces are gone. dbt flips that: models become reusable across the whole project, one builds on another with ref(), and macros let you write logic once instead of copy-pasting the same CASE statement into twenty queries.",
    date: "2025-03-24",
    url: "https://www.linkedin.com/posts/ashima-adya_dbt-fundamentals-ashima-adya-dbt-labs-activity-7471917738039382016-qBhd",
    tags: ["dbt", "Data Engineering", "SQL", "Analytics Engineering"],
  },
  {
    id: "l4",
    type: "linkedin",
    title: "I built an AI agent that updates READMEs automatically — here's what I learned",
    excerpt:
      "Every developer knows this pain: you ship a feature, tell yourself you'll update the README later, and then never do. This weekend I built an AI agent to solve that. The hard part wasn't prompt engineering — it was clearly defining what changes should trigger an update, what a good update looks like, and when human approval is required. The better the specification, the better the agent performed.",
    date: "2025-03-17",
    url: "https://www.linkedin.com/posts/ashima-adya_aiengineering-softwareengineering-buildinpublic-activity-7469632841128165378-w0TJ",
    tags: ["AI Engineering", "Software Engineering", "Build In Public"],
  },
  {
    id: "l5",
    type: "linkedin",
    title: "I thought the hard part of building an AI app would be the AI. It wasn't.",
    excerpt:
      "I built Nexus Reach — an AI-powered cold email generator that matched candidate portfolios to job openings and drafted personalized outreach emails. Had a working demo in a few hours. Then I looked at it the way I look at every data pipeline I ship professionally. The gaps showed up immediately: no input validation, no retries, no quality gates. The AI part took hours. The engineering around it took most of the time.",
    date: "2025-03-07",
    url: "https://www.linkedin.com/posts/ashima-adya_dataengineering-softwareengineering-aiengineering-activity-7466641722350112768-OIpx",
    tags: ["Data Engineering", "Software Engineering", "AI Engineering", "Build In Public"],
  },
];
