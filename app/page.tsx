import Link from 'next/link';

import { resumeData } from '../data/resume';
import { siteConfig } from '../data/site';
import { getAllPosts } from '../lib/posts';

export default function HomePage() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <>
      <section className="hero">
        <div className="eyebrow">BIM / GIM</div>
        <h1>面向工程场景的软件研发与技术记录。</h1>
        <p className="hero-copy">{siteConfig.introduction}</p>

        <div className="meta-row">
          <span>{siteConfig.role}</span>
          <span>{siteConfig.location}</span>
          <span>{siteConfig.email}</span>
        </div>

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
          <p className="lede">围绕工程数字化研发、数据解析和开发效率提升，持续沉淀方法与实践。</p>
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

      <section className="section grid grid--two">
        <article className="resume-card">
          <div className="eyebrow">Resume</div>
          <h2>职业概览</h2>
          <p>
            2020 年硕士毕业于南京林业大学，现居江苏南京，长期从事 BIM / GIM 软件开发工作。
          </p>
          <Link href="/resume" className="button-secondary">
            打开简历页
          </Link>
        </article>

        <article className="resume-card">
          <div className="eyebrow">Highlights</div>
          <h2>技术与兴趣</h2>
          <p className="callout">核心技能覆盖 {resumeData.skills.slice(0, 3).join('、')}。</p>
          <p>工作之外，喜欢 {resumeData.interests.join(' / ')}。</p>
        </article>
      </section>
    </>
  );
}