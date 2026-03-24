import { useState } from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { blogPosts } from "@/data/blog";

export function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 3;
  const maxIndex = Math.max(0, blogPosts.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section
      id="blog"
      className="py-20 px-4 bg-cream-200 border-t border-chocolate-600"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-5xl md:text-6xl mb-4 text-chocolate-600">
              Latest Blog Posts
            </h2>
            <p className="text-lg max-w-2xl text-chocolate-400">
              Sharing my thoughts on web development, best practices, and the
              latest technologies.
            </p>
          </div>
          <div className="flex gap-2 justify-center md:justify-end">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-3 rounded-full border-2 transition-all border-chocolate-600 text-chocolate-600 hover:bg-accent hover:border-accent hover:text-cream-200 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-chocolate-600"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="p-3 rounded-full border-2 transition-all border-chocolate-600 text-chocolate-600 hover:bg-accent hover:border-accent hover:text-cream-200 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-chocolate-600"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-8"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView + 2.67)}%)`,
            }}
          >
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] rounded-xl overflow-hidden border transition-all group border-chocolate-600 hover:bg-accent hover:border-accent"
              >
                 
                <div className="aspect-video overflow-hidden">
                  {/* If no image provided, no display */}
                  {post.image && (<ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />)}
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 border text-sm rounded-full mb-3 border-chocolate-600 text-chocolate-600 group-hover:border-cream-200 group-hover:text-cream-200">
                    {post.category}
                  </span>
                  <h3 className="text-2xl mb-3 transition-colors text-chocolate-600 group-hover:text-cream-200">
                    {post.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 text-chocolate-600 group-hover:text-cream-200">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm mb-4 text-chocolate-400 group-hover:text-cream-200">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 transition-colors text-chocolate-600 group-hover:text-cream-200"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-accent"
                  : "bg-chocolate-600/30 hover:bg-chocolate-600/50"
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          {/* <a
            href="#"
            className="inline-block px-8 py-3 border-2 rounded-full transition-colors text-lg border-accent text-accent hover:bg-accent hover:text-cream-200"
          >
            View All Posts
          </a> */}
        </div>
      </div>
    </section>
  );
}
