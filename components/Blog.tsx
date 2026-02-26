import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogProps {
  isDarkMode: boolean;
}

export function Blog({ isDarkMode }: BlogProps) {
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
  ];

  return (
    <section id="blog" className={`py-20 px-4 ${
      isDarkMode ? 'bg-black border-t border-white' : 'bg-white border-t border-black'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-5xl md:text-6xl mb-4 ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>
            Latest Blog Posts
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>
            Sharing my thoughts on web development, best practices, and the latest technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className={`rounded-xl overflow-hidden border transition-all group ${
                isDarkMode
                  ? 'border-white hover:bg-white'
                  : 'border-black hover:bg-black'
              }`}
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className={`inline-block px-3 py-1 border text-sm rounded-full mb-3 ${
                  isDarkMode
                    ? 'border-white text-white group-hover:border-black group-hover:text-black'
                    : 'border-black text-black group-hover:border-white group-hover:text-white'
                }`}>
                  {post.category}
                </span>
                <h3 className={`text-2xl mb-3 transition-colors ${
                  isDarkMode
                    ? 'text-white group-hover:text-black'
                    : 'text-black group-hover:text-white'
                }`}>
                  {post.title}
                </h3>
                <p className={`mb-4 line-clamp-3 ${
                  isDarkMode
                    ? 'text-white group-hover:text-black'
                    : 'text-black group-hover:text-white'
                }`}>
                  {post.excerpt}
                </p>
                <div className={`flex items-center justify-between text-sm mb-4 ${
                  isDarkMode
                    ? 'text-white group-hover:text-black'
                    : 'text-black group-hover:text-white'
                }`}>
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
                  className={`inline-flex items-center gap-2 transition-colors ${
                    isDarkMode
                      ? 'text-white group-hover:text-black'
                      : 'text-black group-hover:text-white'
                  }`}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className={`inline-block px-8 py-3 border-2 rounded-full transition-colors text-lg ${
              isDarkMode
                ? 'border-white text-white hover:bg-white hover:text-black'
                : 'border-black text-black hover:bg-black hover:text-white'
            }`}
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
}