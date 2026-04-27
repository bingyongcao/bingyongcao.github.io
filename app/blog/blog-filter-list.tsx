'use client';

import { useState } from 'react';
import Link from 'next/link';

import type { PostSummary } from '../../lib/posts';

type Props = {
  posts: PostSummary[];
};

export default function BlogFilterList({ posts }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedKeyword, setSelectedKeyword] = useState<string>('');

  const categories = Array.from(
    new Set(posts.map((post) => post.category).filter((category): category is string => Boolean(category))),
  );
  const keywords = Array.from(new Set(posts.flatMap((post) => post.keywords)));

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesKeyword = !selectedKeyword || post.keywords.includes(selectedKeyword);

    return matchesCategory && matchesKeyword;
  });

  const hasActiveFilters = Boolean(selectedCategory || selectedKeyword);

  return (
    <>
      <div className="blog-filters" aria-label="筛选博客文章">
        <div className="filter-group">
          <span className="filter-label">分类</span>
          <div className="filter-actions">
            <button
              type="button"
              className={`filter-chip${selectedCategory === '' ? ' is-active' : ''}`}
              onClick={() => setSelectedCategory('')}
            >
              全部
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-chip${selectedCategory === category ? ' is-active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <span className="filter-label">关键词</span>
          <div className="filter-actions">
            <button
              type="button"
              className={`filter-chip${selectedKeyword === '' ? ' is-active' : ''}`}
              onClick={() => setSelectedKeyword('')}
            >
              全部
            </button>
            {keywords.map((keyword) => (
              <button
                key={keyword}
                type="button"
                className={`filter-chip${selectedKeyword === keyword ? ' is-active' : ''}`}
                onClick={() => setSelectedKeyword(keyword)}
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>

        {hasActiveFilters ? (
          <button
            type="button"
            className="filter-reset"
            onClick={() => {
              setSelectedCategory('');
              setSelectedKeyword('');
            }}
          >
            清除筛选
          </button>
        ) : null}
      </div>

      <div className="post-list">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card">
              <div className="meta-row">
                <span>{post.date}</span>
                <span>{post.readingTime}</span>
                {post.category ? <span className="post-taxonomy-label">{post.category}</span> : null}
              </div>
              <h3>{post.title}</h3>
              <p className="post-summary">{post.summary}</p>
              {post.keywords.length > 0 ? (
                <div className="post-taxonomy-list" aria-label="Keywords">
                  {post.keywords.map((keyword) => (
                    <span key={keyword} className="post-taxonomy-chip">
                      {keyword}
                    </span>
                  ))}
                </div>
              ) : null}
            </Link>
          ))
        ) : (
          <div className="post-empty-state">
            <h3>没有符合当前筛选条件的文章。</h3>
            <p>可以清除筛选，或选择更宽泛的分类和关键词。</p>
          </div>
        )}
      </div>
    </>
  );
}