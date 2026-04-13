# bingyongcao.github.io

This repository contains a statically exported Next.js personal website for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

The site uses the Next.js App Router and exports static files into `out/` when you run `npm run build`.

## Site structure

- `app/` contains routes and page layouts.
- `content/posts/` contains blog posts in markdown.
- `data/resume.ts` contains editable resume content.
- `data/site.ts` contains shared site metadata and homepage text.
- `.github/workflows/deploy.yml` deploys the static export to GitHub Pages.

## Editing content

### Add a blog post

1. Create a new markdown file in `content/posts/`.
2. Add frontmatter with `title`, `summary`, and `date`.
3. Write the post body in markdown.

### Update the resume

Edit `data/resume.ts` and replace the placeholder entries with your own experience, education, and skills.

### Update the homepage

Edit `data/site.ts` for your name, introduction, contact details, and focus areas.

## Deployment

This repository is a GitHub Pages user site, so it publishes from the root domain `https://bingyongcao.github.io/`.

To enable deployment:

1. Push the repository to GitHub.
2. In repository settings, open Pages.
3. Set the source to `GitHub Actions`.
4. Push to `main` to trigger the workflow.

The workflow installs dependencies, runs the Next.js production build, and deploys the generated `out/` directory.