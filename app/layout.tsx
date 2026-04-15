import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';
import { Manrope, Newsreader } from 'next/font/google';

import './globals.css';
import { siteConfig } from '../data/site';

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});

const headingFont = Newsreader({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bingyongcao.github.io'),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html lang="zh-CN">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <header className="site-header">
          <div className="shell site-header__inner">
            <Link href="/" className="brand" aria-label="Homepage">
              <span className="brand__name">{siteConfig.name}</span>
              <span className="brand__tag">{siteConfig.role}</span>
            </Link>

            <nav className="nav" aria-label="Primary">
              <Link href="/">首页</Link>
              <Link href="/blog">博客</Link>
              <Link href="/resume">关于我</Link>
            </nav>
          </div>
        </header>

        <main className="shell page">{children}</main>

        <footer className="shell site-footer">
          <span>© {year} {siteConfig.name}</span>
          <div className="inline-links">
            {siteConfig.socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
            <a href={`mailto:${siteConfig.email}`}>邮箱</a>
          </div>
        </footer>
      </body>
    </html>
  );
}