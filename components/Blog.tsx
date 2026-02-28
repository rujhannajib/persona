import { useState } from 'react';
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const blogPosts = [
    {
      title: 'Understanding React Hooks: A Deep Dive',
      excerpt: 'Explore the power of React Hooks and how they revolutionize the way we write React components. Learn best practices and common patterns.',
      date: 'February 10, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3MTI3MTI0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'React',
    },
    {
      title: 'Modern JavaScript Features You Should Know',
      excerpt: 'Stay up-to-date with the latest JavaScript features including optional chaining, nullish coalescing, and more ES2024 additions.',
      date: 'February 5, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1529429612779-c8e40ef2f36d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXZhc2NyaXB0JTIwY29kZSUyMHNjcmVlbnxlbnwxfHx8fDE3NzEyMzEyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'JavaScript',
    },
    {
      title: 'Building Accessible Web Applications',
      excerpt: 'Learn how to create inclusive web experiences that work for everyone. Discover ARIA patterns, keyboard navigation, and screen reader optimization.',
      date: 'January 28, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1657812159077-90649115008c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB0aXBzfGVufDF8fHx8MTc3MTI3MTI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Web Development',
    },
    {
      title: 'Introduction to Machine Learning with Python',
      excerpt: 'Get started with machine learning using Python. Learn about scikit-learn, neural networks, and how to build your first ML model.',
      date: 'January 20, 2026',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcxMjcxMjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Machine Learning',
    },
    {
      title: 'The Future of Web Development: 2026 Trends',
      excerpt: 'Explore emerging technologies and trends shaping the web development landscape, from AI-assisted coding to edge computing.',
      date: 'January 15, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwdHJlbmRzfGVufDF8fHx8MTc3MTI3MTI0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Trends',
    },
    {
      title: 'Mastering TypeScript: Advanced Patterns',
      excerpt: 'Level up your TypeScript skills with advanced patterns, generics, conditional types, and utility types for type-safe code.',
      date: 'January 10, 2026',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBlc2NyaXB0fGVufDF8fHx8MTc3MTI3MTI0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'TypeScript',
    },
  ];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, blogPosts.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="blog" className="py-20 px-4 bg-cream-200 border-t border-chocolate-600">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-5xl md:text-6xl mb-4 text-chocolate-600">
              Latest Blog Posts
            </h2>
            <p className="text-lg max-w-2xl text-chocolate-400">
              Sharing my thoughts on web development, best practices, and the latest technologies.
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
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + 2.67)}%)` }}
          >
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] rounded-xl overflow-hidden border transition-all group border-chocolate-600 hover:bg-accent hover:border-accent"
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
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
                  href="#"
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
                  ? 'bg-accent'
                  : 'bg-chocolate-600/30 hover:bg-chocolate-600/50'
              }`}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-3 border-2 rounded-full transition-colors text-lg border-accent text-accent hover:bg-accent hover:text-cream-200"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
}