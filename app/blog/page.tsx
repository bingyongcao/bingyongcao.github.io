import type { Metadata } from 'next';
import Link from 'next/link';

import { getAllPosts } from '../../lib/posts';

export const metadata: Metadata = {
  title: 'Blog | Bingyong Cao',
  description: 'Writing, notes, and longer-form posts.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="section">
      <header className="post-header">
        <div className="eyebrow">Blog</div>
        <h1>Writing and working notes.</h1>
        <p className="lede">
          Add posts in <code>content/posts</code>. Each markdown file becomes a statically generated page on build.
        </p>
      </header>

      <div className="post-list">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card">
            <div className="meta-row">
              <span>{post.date}</span>
              <span>{post.readingTime}</span>
            </div>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}