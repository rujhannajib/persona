import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Rujhan Najib`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-cream-200">
      {/* Header bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream-200 border-b border-chocolate-600/10">
        <nav className="max-w-4xl mx-auto px-4 py-4">
          <a
            href="/#blog"
            className="inline-flex items-center gap-2 text-chocolate-600 hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </a>
        </nav>
      </header>

      <main className="pt-24 pb-20 px-4">
        <article className="max-w-3xl mx-auto">
          {/* Hero image */}
          <div className="w-3/4 mx-auto aspect-video rounded-xl overflow-hidden mb-8 shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-chocolate-600/10 ring-1 ring-chocolate-600/5">
            {post.image && (
              <img
                src={resolveImageSrc(post.image)}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Meta */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 border text-sm rounded-full mb-4 border-chocolate-600 text-chocolate-600">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl mb-4 text-chocolate-600">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-chocolate-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none text-chocolate-600 
            [&_h2]:text-3xl [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-chocolate-600
            [&_h3]:text-2xl [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-chocolate-600
            [&_p]:mb-4 [&_p]:leading-relaxed
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul_li]:mb-1
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol_li]:mb-1
            [&_strong]:font-semibold [&_strong]:text-chocolate-600
            [&_code]:bg-chocolate-600/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm
            [&_pre]:bg-chocolate-600/5 [&_pre]:border [&_pre]:border-chocolate-600/20 [&_pre]:rounded-lg [&_pre]:p-4 [&_pre]:mb-6 [&_pre]:overflow-x-auto
            [&_pre_code]:bg-transparent [&_pre_code]:p-0
          "
          >
            {post.content.split("\n").map((line, i) => {
              // Heading 2
              if (line.startsWith("## ")) {
                return <h2 key={i}>{line.slice(3)}</h2>;
              }
              // Heading 3
              if (line.startsWith("### ")) {
                return <h3 key={i}>{line.slice(4)}</h3>;
              }
              // Images: ![alt](url)
              const imgMatch = line.match(/^\s*!\[([^\]]*)\]\(([^)]+)\)\s*$/);
              if (imgMatch) {
                return (
                  <figure key={i} className="my-8">
                    <img
                      src={resolveImageSrc(imgMatch[2])}
                      alt={imgMatch[1]}
                      className="w-3/4 mx-auto rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-chocolate-600/10"
                    />
                    {imgMatch[1] && (
                      <figcaption className="text-center text-sm text-chocolate-400 mt-3">
                        {imgMatch[1]}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              // Code block boundaries
              if (line.startsWith("```")) {
                return null;
              }
              // List items
              if (line.startsWith("- ")) {
                return (
                  <li key={i} className="ml-6 list-disc">
                    {renderInlineCode(line.slice(2))}
                  </li>
                );
              }
              // Numbered list items
              if (/^\d+\.\s/.test(line)) {
                return (
                  <li key={i} className="ml-6 list-decimal">
                    {renderInlineCode(line.replace(/^\d+\.\s/, ""))}
                  </li>
                );
              }
              // Empty lines
              if (line.trim() === "") {
                return null;
              }
              // Regular paragraph
              return <p key={i}>{renderInlineCode(line)}</p>;
            })}
          </div>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-chocolate-600/20">
            <a
              href="/#blog"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 rounded-full transition-colors border-accent text-accent hover:bg-accent hover:text-cream-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Posts
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}

function resolveImageSrc(src: string) {
  const trimmedSrc = src.trim();

  // Keep external and already-absolute paths unchanged.
  if (
    /^(https?:)?\/\//i.test(trimmedSrc) ||
    trimmedSrc.startsWith("/") ||
    trimmedSrc.startsWith("data:") ||
    trimmedSrc.startsWith("blob:")
  ) {
    return trimmedSrc;
  }

  // Treat relative markdown paths as files under public/.
  const normalized = trimmedSrc.replace(/^(\.\/)+/, "").replace(/^(\.\.\/)+/, "");
  return `/${normalized}`;
}

/** Renders inline `code` backtick spans, **bold**, and [links](url) within a line */
function renderInlineCode(text: string) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={i}>{part.slice(1, -1)}</code>;
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={i}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
        >
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });
}
