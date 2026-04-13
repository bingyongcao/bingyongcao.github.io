---
title: "Launching a personal site that stays easy to maintain"
summary: "Why this site uses markdown for writing and structured data for resume updates."
date: "April 13, 2026"
---

This repository starts with a simple goal: make it easy to keep a professional site current.

That means the content model should be boring in the right way:

- Blog posts live in markdown files.
- Resume content lives in one structured data file.
- The site builds to static files for GitHub Pages.

## Why keep the stack this small?

The main failure mode for personal sites is not design. It is maintenance.

If publishing a post or editing your resume feels heavier than it should, the site goes stale. A lightweight content flow makes updates much more likely.

## What to customize first

Replace the homepage summary, update the resume data, and add a second post in `content/posts`. Once that feels good, you can decide whether you want richer content features such as MDX, RSS, or analytics.