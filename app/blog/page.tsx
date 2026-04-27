import type { Metadata } from 'next';

import BlogFilterList from './blog-filter-list';
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
      </header>

      <BlogFilterList posts={posts} />
    </section>
  );
}