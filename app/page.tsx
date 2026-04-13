import Link from 'next/link';

import { siteConfig } from '../data/site';
import { getAllPosts } from '../lib/posts';

export default function HomePage() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <>
      <section className="hero">
        <div className="eyebrow">Personal website</div>
        <h1>Professional context and writing in one clear place.</h1>
        <p className="hero-copy">{siteConfig.introduction}</p>

        <div className="hero-actions">
          <Link href="/resume" className="button">
            View resume
          </Link>
          <Link href="/blog" className="button-secondary">
            Read the blog
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <div className="eyebrow">Focus</div>
            <h2 className="section-title">What this site is for</h2>
          </div>
          <p className="lede">Use the homepage as a short professional landing page, then let the blog and resume do the deeper work.</p>
        </div>

        <div className="grid grid--three">
          {siteConfig.focusAreas.map((area) => (
            <article key={area} className="card">
              <div className="kicker">Focus area</div>
              <h3>{area}</h3>
              <p>
                Replace this short description with a sentence that explains why this area matters in your work.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <div className="eyebrow">Writing</div>
            <h2 className="section-title">Recent posts</h2>
          </div>
          <Link href="/blog" className="button-secondary">
            Browse all posts
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
          <h2>Keep the web version current</h2>
          <p>
            A dedicated resume page is easier to scan on mobile and easier to update in git than a standalone document.
          </p>
          <Link href="/resume" className="button-secondary">
            Open resume page
          </Link>
        </article>

        <article className="resume-card">
          <div className="eyebrow">Editing flow</div>
          <h2>Designed for low-friction updates</h2>
          <p className="callout">
            Blog posts live in markdown files and resume content lives in a single data file, so content changes do not require touching presentation code.
          </p>
        </article>
      </section>
    </>
  );
}