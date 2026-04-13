import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');
const WORDS_PER_MINUTE = 220;

type Frontmatter = {
  title: string;
  summary: string;
  date: string;
};

export type PostSummary = Frontmatter & {
  slug: string;
  readingTime: string;
};

export type PostDetail = PostSummary & {
  contentHtml: string;
};

function getReadingTime(markdown: string): string {
  const wordCount = markdown.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}

function getPostFilePaths(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith('.md'));
}

export function getAllPosts(): PostSummary[] {
  return getPostFilePaths()
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const frontmatter = data as Frontmatter;

      return {
        slug,
        title: frontmatter.title,
        summary: frontmatter.summary,
        date: frontmatter.date,
        readingTime: getReadingTime(content),
      };
    })
    .sort((left, right) => (left.date < right.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<PostDetail | undefined> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return undefined;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const frontmatter = data as Frontmatter;
  const processedContent = await remark().use(html).process(content);

  return {
    slug,
    title: frontmatter.title,
    summary: frontmatter.summary,
    date: frontmatter.date,
    readingTime: getReadingTime(content),
    contentHtml: processedContent.toString(),
  };
}