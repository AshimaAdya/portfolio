import { useState } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Clock, Linkedin, BookOpen } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { posts, type Post } from '@/data/posts';

type Filter = 'all' | 'article' | 'linkedin';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function PostCard({ post, index }: { post: Post; index: number }) {
  return (
    <motion.a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-card border border-border rounded-2xl p-6 hover:shadow-md hover:border-primary/30 transition-all duration-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.25, delay: index * 0.05 }}
    >
      {/* Badges row */}
      <div className="flex items-center gap-2 mb-4">
        {post.type === 'linkedin' ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            <Linkedin className="w-3 h-3" />
            LinkedIn
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
            <BookOpen className="w-3 h-3" />
            Article
          </span>
        )}
        {post.readTime && (
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        )}
      </div>

      {/* Title */}
      <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug line-clamp-2">
        {post.title}
      </h2>

      {/* Excerpt */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3 flex-1">
        {post.excerpt}
      </p>

      {/* Footer row */}
      <div className="flex items-end justify-between gap-3 mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
          <span>{formatDate(post.date)}</span>
          <ExternalLink className="w-3 h-3" />
        </div>
      </div>
    </motion.a>
  );
}

export default function Writing() {
  const [filter, setFilter] = useState<Filter>('all');

  const articleCount = posts.filter(p => p.type === 'article').length;
  const linkedinCount = posts.filter(p => p.type === 'linkedin').length;

  const filtered = posts.filter(p => filter === 'all' || p.type === filter);

  const tabs: { key: Filter; label: string }[] = [
    { key: 'all', label: `All  ${posts.length}` },
    { key: 'article', label: `Articles  ${articleCount}` },
    { key: 'linkedin', label: `LinkedIn  ${linkedinCount}` },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-28 pb-24">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Page header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-3">Writing</h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Thoughts on backend engineering, data systems, distributed architecture,
            and life as a software engineer.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
                filter === key
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid gap-4 sm:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {filtered.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">Nothing here yet.</p>
        )}

        {/* Footer note */}
        <p className="text-center text-xs text-muted-foreground mt-20">
          Follow on{' '}
          <a
            href="https://linkedin.com/in/ashima-adya"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>{' '}
          to get new posts as they go up.
        </p>
      </main>
    </div>
  );
}
