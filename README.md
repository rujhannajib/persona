# Persona

My personal portfolio and blog, built with Next.js, React and Tailwind CSS. It has sections for about, experience timeline, skills, projects and blog posts.

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router), [React](https://react.dev) 19, TypeScript
- [Tailwind CSS](https://tailwindcss.com) 4 with `tw-animate-css`
- [lucide-react](https://lucide.dev) icons
- pnpm for package management

## Getting started

Requires Node.js 20.9 or later and pnpm (`corepack enable` sets it up).

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

| Script       | What it does                       |
| ------------ | ---------------------------------- |
| `pnpm dev`   | Start the dev server on port 3000  |
| `pnpm build` | Build for production               |
| `pnpm start` | Serve the production build         |

## Project structure

```
app/
  page.tsx            Home page (Hero, About, Skills, Projects, Blog)
  blog/[slug]/        Individual blog post pages
components/           Page sections and shared UI
data/
  timeline.ts         Work and education history
  projects.ts         Project cards
  blog.ts             Blog posts (content stored inline)
public/               Images, logo and other static assets
styles/tailwind.css   Global styles
```

## Updating content

All site content lives in [`data/`](data/), so most updates don't touch components:

- **Experience**: add an entry to the top of the `timeline` array in [`data/timeline.ts`](data/timeline.ts).
- **Projects**: add to [`data/projects.ts`](data/projects.ts) and put the image in `public/projects/`.
- **Blog posts**: add to [`data/blog.ts`](data/blog.ts) with a unique `slug`; images go in `public/blogs/`. The post is served at `/blog/<slug>`.

## Run with Docker

The [`Dockerfile`](Dockerfile) is a multi-stage build that ships only the Next.js standalone output on `node:22-alpine`, to keep the image small.

```bash
docker build -t persona .
docker run --rm -p 3000:3000 persona
```

Or with Docker Compose:

```bash
docker compose up --build
```

## Deploying to Replit

The repo includes a [`.replit`](.replit) file, so it can be imported and deployed on [Replit](https://docs.replit.com/getting-started/quickstarts/next-js-app) as-is.

## Dependency checks

A GitHub Actions workflow ([`outdated_dependencies.yml`](.github/workflows/outdated_dependencies.yml)) runs on the 1st of every month. It scans for outdated packages and opens or updates an issue labelled `outdated-dependencies`. You can also run it manually from the Actions tab.
