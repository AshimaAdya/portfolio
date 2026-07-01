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
  // ── Published Articles ────────────────────────────────────────────────────
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
  // Add your LinkedIn post URLs below. Replace url: "#" with the real link.
  {
    id: "4",
    type: "linkedin",
    title: "The distributed systems lesson that took me three years to learn",
    excerpt:
      "In distributed systems, the thing that kills you is not the failure you planned for — it is the failure you assumed was impossible. We had a scenario bite us in production last quarter. Here is what happened and how we fixed it.",
    date: "2025-01-10",
    url: "#",
    tags: ["Distributed Systems", "Lessons Learned"],
  },
  {
    id: "5",
    type: "linkedin",
    title: "Moving from Bengaluru to Vancouver as a senior engineer",
    excerpt:
      "Two years ago I made the jump from a comfortable Senior Engineer role in Bengaluru to starting fresh in Vancouver. Best decision I ever made — and also the scariest. A few things nobody tells you about making that move.",
    date: "2024-10-03",
    url: "#",
    tags: ["Career", "Relocation", "Engineering Life"],
  },
  {
    id: "6",
    type: "linkedin",
    title: "You do not need Kubernetes until you do",
    excerpt:
      "Most teams adopt Kubernetes before they are ready for it. We scaled to 50k requests per minute without it. Here is the inflection point where it actually made sense for us, and how we knew we had hit it.",
    date: "2024-07-22",
    url: "#",
    tags: ["Kubernetes", "Infrastructure", "Scaling"],
  },
];
