import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

// ─── Types ──────────────────────────────────────────────────────────────────

type Reply = { label: string; nodeId: string };

type FaqNode = {
  text: string;
  replies?: Reply[];
  url?: string; // open this URL when this node is reached
};

type ChatMessage = {
  id: string;
  from: 'bot' | 'user';
  text: string;
  replies?: Reply[]; // only on bot messages, shown as chips below
};

// ─── FAQ tree ────────────────────────────────────────────────────────────────

const BOOKING = 'https://calendar.app.google/4nrNJt6VdKYzTaie7';

const nodes: Record<string, FaqNode> = {
  welcome: {
    text: "Hi there! 👋 I'm Ashima's site assistant. What would you like to know?",
    replies: [
      { label: '🧑‍💻 Her experience', nodeId: 'experience' },
      { label: '🔨 Projects', nodeId: 'projects' },
      { label: '✍️ Writing', nodeId: 'writing' },
      { label: '📅 Book a call', nodeId: 'booking' },
      { label: '💼 Services & pricing', nodeId: 'pricing' },
    ],
  },

  // ── Experience branch ────────────────────────────────────────────────────
  experience: {
    text: "Ashima has 8+ years of experience as a Senior Software Engineer, specialising in backend systems, distributed architecture, and data engineering. She's built production systems at Zafin, Gainsight, and ITC Infotech.",
    replies: [
      { label: 'Zafin (current)', nodeId: 'zafin' },
      { label: 'Gainsight', nodeId: 'gainsight' },
      { label: 'Technologies she uses', nodeId: 'tech' },
      { label: '← Main menu', nodeId: 'welcome' },
    ],
  },
  zafin: {
    text: "At Zafin (March 2023 – present) in Vancouver, Ashima leads distributed microservices and real-time data pipelines using Java, Spring Boot, Apache Flink, and NiFi for North American banks. She owns Azure AKS clusters end-to-end, mentors a team of 5, and cut incident response time by 30%.",
    replies: [
      { label: 'Gainsight', nodeId: 'gainsight' },
      { label: 'Technologies', nodeId: 'tech' },
      { label: '← Main menu', nodeId: 'welcome' },
    ],
  },
  gainsight: {
    text: "At Gainsight (July 2019 – June 2022) in Bengaluru, Ashima built a large-scale Java + AWS data ingestion platform. She led the iPaaS integration framework enabling a 10× expansion in service offerings, and reduced syncing errors by 40%.",
    replies: [
      { label: 'Zafin (current)', nodeId: 'zafin' },
      { label: 'Technologies', nodeId: 'tech' },
      { label: '← Main menu', nodeId: 'welcome' },
    ],
  },
  tech: {
    text: "Java · Scala · Python · Spring Boot · Kafka · Apache Flink · Apache NiFi · Databricks · Azure AKS · AWS · Docker · Kubernetes · PostgreSQL · MongoDB · Redis · Prometheus · Grafana.",
    replies: [
      { label: '← Main menu', nodeId: 'welcome' },
    ],
  },

  // ── Projects branch ───────────────────────────────────────────────────────
  projects: {
    text: "Ashima has several open-source projects on GitHub — most tie directly to her articles and real engineering work. Which would you like to hear about?",
    replies: [
      { label: 'Nexus Reach (AI)', nodeId: 'nexus' },
      { label: 'Kimball Data Warehouse', nodeId: 'kimball' },
      { label: 'Azure Pipeline', nodeId: 'azure' },
      { label: 'Apache Flink projects', nodeId: 'flink' },
      { label: '← Main menu', nodeId: 'welcome' },
    ],
  },
  nexus: {
    text: "Nexus Reach is an AI-powered cold email generator with a built-in evaluation loop. It scores outreach quality — below 0.7 it retries automatically so users never see a low-quality draft. Built in Python with LLMs.",
    replies: [
      { label: '→ View on GitHub', nodeId: 'nexus_gh' },
      { label: 'Other projects', nodeId: 'projects' },
      { label: '← Main menu', nodeId: 'welcome' },
    ],
  },
  nexus_gh: {
    text: "Opening the GitHub repo! 🚀",
    url: 'https://github.com/AshimaAdya/ColdEmailGenration',
    replies: [
      { label: 'Other projects', nodeId: 'projects' },
      { label: '← Main menu', nodeId: 'welcome' },
    ],
  },
  kimball: {
    text: "The Kimball Retail Data Warehouse implements dimensional modelling from The Data Warehouse Toolkit on Databricks — Bronze → Silver → Gold Medallion Architecture with fact tables, SCDs, and conformed dimensions.",
    replies: [
      { label: '→ View on GitHub', nodeId: 'kimball_gh' },
      { label: '→ Read the article', nodeId: 'kimball_article' },
      { label: 'Other projects', nodeId: 'projects' },
      { label: '← Main menu', nodeId: 'welcome' },
    ],
  },
  kimball_gh: {
    text: "Opening the GitHub repo! 📂",
    url: 'https://github.com/AshimaAdya/RetailAnalysis',
    replies: [{ label: '← Main menu', nodeId: 'welcome' }],
  },
  kimball_article: {
    text: "Opening the Medium article! 📖",
    url: 'https://medium.com/@ashima.adya/from-book-to-build-a-data-engineering-guide-to-kimballs-retail-sales-model-with-databricks-8002f8229438',
    replies: [{ label: '← Main menu', nodeId: 'welcome' }],
  },
  azure: {
    text: "An end-to-end Azure data engineering pipeline using ADF for orchestration, Databricks for transformation, Synapse Analytics for serving, and Power BI for visualisation — Medallion Architecture throughout.",
    replies: [
      { label: '→ View on GitHub', nodeId: 'azure_gh' },
      { label: '→ Read the article', nodeId: 'azure_article' },
      { label: 'Other projects', nodeId: 'projects' },
      { label: '← Main menu', nodeId: 'welcome' },
    ],
  },
  azure_gh: {
    text: "Opening the GitHub repo! 📂",
    url: 'https://github.com/AshimaAdya/AdventureWorkDEP1',
    replies: [{ label: '← Main menu', nodeId: 'welcome' }],
  },
  azure_article: {
    text: "Opening the Medium article! 📖",
    url: 'https://medium.com/@ashima.adya/build-a-complete-azure-data-pipeline-using-adf-databricks-synapse-power-bi-step-by-step-guide-43c745511682',
    replies: [{ label: '← Main menu', nodeId: 'welcome' }],
  },
  flink: {
    text: "Ashima has three Apache Flink projects: real-time stream processing, batch processing, and browser session analysis — all demonstrating stateful computation over high-throughput event streams in Java.",
    replies: [
      { label: '→ See on GitHub', nodeId: 'flink_gh' },
      { label: 'Other projects', nodeId: 'projects' },
      { label: '← Main menu', nodeId: 'welcome' },
    ],
  },
  flink_gh: {
    text: "Opening her GitHub profile! 🚀",
    url: 'https://github.com/AshimaAdya',
    replies: [{ label: '← Main menu', nodeId: 'welcome' }],
  },

  // ── Writing branch ────────────────────────────────────────────────────────
  writing: {
    text: "Ashima writes about data engineering, distributed systems, and AI tools. Her articles walk through real implementations — Azure pipelines, Databricks, LLM-powered apps — with actual code, not theory.",
    replies: [
      { label: '→ Read on Medium', nodeId: 'medium' },
      { label: '→ Read on LinkedIn', nodeId: 'linkedin' },
      { label: '← Main menu', nodeId: 'welcome' },
    ],
  },
  medium: {
    text: "Opening her Medium profile! 📝",
    url: 'https://medium.com/@ashima.adya',
    replies: [{ label: '← Main menu', nodeId: 'welcome' }],
  },
  linkedin: {
    text: "Opening her LinkedIn! 🔗",
    url: 'https://www.linkedin.com/in/ashima-adya/',
    replies: [{ label: '← Main menu', nodeId: 'welcome' }],
  },

  // ── Booking branch ────────────────────────────────────────────────────────
  booking: {
    text: "You can schedule a free 30-minute intro call via Google Calendar — Ashima's flexible with timezones. Or reach her directly at ashima.adya@gmail.com.",
    replies: [
      { label: '→ Book a call', nodeId: 'book_link' },
      { label: '← Main menu', nodeId: 'welcome' },
    ],
  },
  book_link: {
    text: "Opening the booking calendar! 📅 Looking forward to connecting.",
    url: BOOKING,
    replies: [{ label: '← Main menu', nodeId: 'welcome' }],
  },

  // ── Pricing branch ────────────────────────────────────────────────────────
  pricing: {
    text: "Ashima offers project-based pricing for freelance work (typically 2–6 week scopes), flexible arrangements for technical collaboration, and hourly sessions for mentoring. Book a free 30-min discovery call to discuss specifics.",
    replies: [
      { label: 'What services exactly?', nodeId: 'services' },
      { label: '→ Book a call', nodeId: 'book_link' },
      { label: '← Main menu', nodeId: 'welcome' },
    ],
  },
  services: {
    text: "Three ways to work with Ashima:\n\n• Freelance Engineering — data pipelines, backend APIs, Azure/Databricks\n\n• Technical Collaboration — partner on your product as a backend/data expert\n\n• Career Mentoring — 1:1 guidance for students and early-career engineers",
    replies: [
      { label: '→ Book a call', nodeId: 'book_link' },
      { label: '← Main menu', nodeId: 'welcome' },
    ],
  },
};

// ─── Typing indicator ────────────────────────────────────────────────────────

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 mb-3">
      <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-xs font-bold">
        AA
      </div>
      <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1 h-10">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
            animate={{ y: [0, -4, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              delay: i * 0.15,
              ease: 'easeInOut' as const,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

let msgId = 0;
const uid = () => String(++msgId);

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: uid(),
    from: 'bot',
    text: nodes.welcome.text,
    replies: nodes.welcome.replies,
  },
];

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // scroll to bottom whenever messages change or typing state changes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  function handleReply(reply: Reply) {
    const node = nodes[reply.nodeId];
    if (!node) return;

    // Open URL if present
    if (node.url) window.open(node.url, '_blank', 'noopener,noreferrer');

    // Add user message (chip label), strip leading emoji + space for cleanliness
    const userText = reply.label.replace(/^[^\w←]+\s*/, '').replace('← ', '');
    setMessages((prev) => {
      // Remove replies from the last bot message so chips disappear after selection
      const updated = prev.map((m, i) =>
        i === prev.length - 1 && m.from === 'bot' ? { ...m, replies: undefined } : m,
      );
      return [...updated, { id: uid(), from: 'user' as const, text: reply.label }];
    });

    // Show typing indicator then add bot response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: uid(),
          from: 'bot' as const,
          text: node.text,
          replies: node.replies,
        },
      ]);
    }, 600);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' as const }}
            className="w-[340px] sm:w-[380px] bg-card border border-border shadow-2xl rounded-2xl flex flex-col overflow-hidden"
            style={{ maxHeight: 'min(520px, calc(100dvh - 120px))' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground shrink-0">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold shrink-0">
                AA
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm leading-tight">Ashima's Assistant</p>
                <p className="text-xs opacity-75">Usually answers instantly</p>
              </div>
              <button
                onClick={handleClose}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 min-h-0">
              {messages.map((msg) => (
                <div key={msg.id}>
                  {msg.from === 'bot' ? (
                    <div className="flex items-end gap-2 mb-1">
                      <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-[10px] font-bold">
                        AA
                      </div>
                      <div className="max-w-[80%]">
                        <div className="bg-muted text-foreground text-sm rounded-2xl rounded-bl-sm px-4 py-2.5 leading-relaxed whitespace-pre-wrap">
                          {msg.text}
                        </div>
                        {/* Chips */}
                        {msg.replies && msg.replies.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {msg.replies.map((r) => (
                              <button
                                key={r.nodeId}
                                onClick={() => handleReply(r)}
                                className="text-xs px-3 py-1.5 rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
                              >
                                {r.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-end mb-1">
                      <div className="max-w-[80%] bg-primary text-primary-foreground text-sm rounded-2xl rounded-br-sm px-4 py-2.5 leading-relaxed">
                        {msg.text}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {isTyping && <TypingIndicator />}
              <div ref={bottomRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={open ? handleClose : handleOpen}
        whileTap={{ scale: 0.93 }}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="relative w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-5 h-5" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-5 h-5" />
            </motion.span>
          )}
        </AnimatePresence>
        {/* Pulse ring when closed */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20 pointer-events-none" />
        )}
      </motion.button>
    </div>
  );
}
