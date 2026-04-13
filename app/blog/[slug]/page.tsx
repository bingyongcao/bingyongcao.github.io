import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getAllPosts, getPostBySlug } from '../../../lib/posts';

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post not found | Bingyong Cao',
    };
  }

  return {
    title: `${post.title} | Bingyong Cao`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section">
      <header className="post-header">
        <div className="eyebrow">Blog post</div>
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span>{post.date}</span>
          <span>{post.readingTime}</span>
        </div>
        <p className="lede">{post.summary}</p>
      </header>

      <div className="post-body" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}