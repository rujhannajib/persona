import { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MTI0NTU1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      image: 'https://images.unsplash.com/photo-1761123044903-1671e0edc3f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGxhcHRvcCUyMGNvZGV8ZW58MXx8fHwxNzcxMjA2MjEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Mobile Fitness Tracker',
      description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics.',
      image: 'https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzcxMjQwNjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React Native', 'Firebase', 'Redux'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'AI Image Generator',
      description: 'Web application that generates unique images using machine learning models and neural networks.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFydHxlbnwxfHx8fDE3NzEyNDU1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Stock Trading Bot',
      description: 'Automated trading system with backtesting capabilities and real-time market analysis.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMHRyYWRpbmd8ZW58MXx8fHwxNzcxMjQ1NTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Python', 'Pandas', 'NumPy', 'Alpaca API'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Smart Home Dashboard',
      description: 'IoT dashboard for monitoring and controlling smart home devices with voice commands.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWV8ZW58MXx8fHwxNzcxMjQ1NTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Vue.js', 'Node.js', 'MQTT', 'Raspberry Pi'],
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, projects.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="projects" className="py-20 px-4 bg-cream-100 border-t border-chocolate-600">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-5xl md:text-6xl text-chocolate-600">
            Featured Projects
          </h2>
          <div className="flex gap-2">
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
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] rounded-xl overflow-hidden border transition-all group border-chocolate-600 hover:bg-accent hover:border-accent"
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-2 text-chocolate-600 group-hover:text-cream-200">
                  {project.title}
                </h3>
                <p className="mb-4 text-chocolate-600 group-hover:text-cream-200">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border text-sm rounded-full border-chocolate-600 text-chocolate-600 group-hover:border-cream-200 group-hover:text-cream-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 transition-colors text-chocolate-600 group-hover:text-cream-200"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 transition-colors text-chocolate-600 group-hover:text-cream-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
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
      </div>
    </section>
  );
}