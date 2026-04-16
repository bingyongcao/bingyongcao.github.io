import Link from 'next/link';

import { siteConfig } from '../data/site';
import { getAllPosts } from '../lib/posts';

export default function HomePage() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <>
      <section className="hero">
        <div className="eyebrow">BIM / GIM</div>
        <h1>面向工程软件的研发与技术记录</h1>
        <p className="hero-copy">{siteConfig.introduction}</p>

        <div className="hero-actions">
          <Link href="/resume" className="button">
            关于我
          </Link>
          <Link href="/blog" className="button-secondary">
            阅读博客
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <div className="eyebrow">Focus</div>
            <h2 className="section-title">当前关注方向</h2>
          </div>
        </div>

        <div className="grid grid--three">
          {siteConfig.focusAreas.map((area) => (
            <article key={area.title} className="card">
              <div className="kicker">Focus area</div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <div className="eyebrow">Writing</div>
            <h2 className="section-title">最近文章</h2>
          </div>
          <Link href="/blog" className="button-secondary">
            查看全部
          </Link>
        </div>

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
    </>
  );
}