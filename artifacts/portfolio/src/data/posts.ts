export type Post = {
  id: string;
  type: "article" | "linkedin";
  title: string;
  excerpt: string;
  date: string; // ISO: "2024-03-15"
  url: string;  // Replace "#" with real URLs
  tags: string[];
  readTime?: string; // articles only
};

export const posts: Post[] = [
  // ── Articles ──────────────────────────────────────────────────────────────
  {
    id: "1",
    type: "article",
    title: "Building Event-Driven Data Pipelines with Apache Kafka at Scale",
    excerpt:
      "When processing millions of events per hour, the difference between a well-designed Kafka topology and a naive one can mean the difference between a system that scales gracefully and one that falls apart under load.",
    date: "2024-11-20",
    url: "#", // Replace with published article URL
    tags: ["Apache Kafka", "Data Engineering", "Distributed Systems"],
    readTime: "8 min read",
  },
  {
    id: "2",
    type: "article",
    title: "From Monolith to Microservices: Three Years, Three Lessons",
    excerpt:
      "Our team spent three years migrating a legacy monolith to a microservices architecture. Here is what we wish we had known before we started — and what we would do differently.",
    date: "2024-08-05",
    url: "#", // Replace with published article URL
    tags: ["Microservices", "Architecture", "Backend Engineering"],
    readTime: "12 min read",
  },
  {
    id: "3",
    type: "article",
    title: "Why Your Data Quality Strategy is Failing (And How to Fix It)",
    excerpt:
      "Most data quality initiatives focus on detection — catching bad data after it enters the system. The better approach is designing your pipelines so bad data never gets in.",
    date: "2024-05-18",
    url: "#", // Replace with published article URL
    tags: ["Data Quality", "Data Engineering", "dbt"],
    readTime: "6 min read",
  },

  // ── LinkedIn Posts ─────────────────────────────────────────────────────────
  {
    id: "4",
    type: "linkedin",
    title: "The distributed systems lesson that took me three years to learn",
    excerpt:
      "In distributed systems, the thing that kills you is not the failure you planned for — it is the failure you assumed was impossible. We had a scenario bite us in production last quarter. Here is what happened and how we fixed it.",
    date: "2025-01-10",
    url: "#", // Replace with real LinkedIn post URL
    tags: ["Distributed Systems", "Lessons Learned"],
  },
  {
    id: "5",
    type: "linkedin",
    title: "Moving from Bengaluru to Vancouver as a senior engineer",
    excerpt:
      "Two years ago I made the jump from a comfortable Senior Engineer role in Bengaluru to starting fresh in Vancouver. Best decision I ever made — and also the scariest. A few things nobody tells you about making that move.",
    date: "2024-10-03",
    url: "#", // Replace with real LinkedIn post URL
    tags: ["Career", "Relocation", "Engineering Life"],
  },
  {
    id: "6",
    type: "linkedin",
    title: "You do not need Kubernetes until you do",
    excerpt:
      "Most teams adopt Kubernetes before they are ready for it. We scaled to 50k requests/min without it. Here is the inflection point where it actually made sense for us, and how we knew we had hit it.",
    date: "2024-07-22",
    url: "#", // Replace with real LinkedIn post URL
    tags: ["Kubernetes", "Infrastructure", "Scaling"],
  },
];
