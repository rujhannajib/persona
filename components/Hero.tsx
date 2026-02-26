import { Github, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  isDarkMode: boolean;
}

export function Hero({ isDarkMode }: HeroProps) {
  return (
    <section className={`min-h-screen flex items-center justify-center px-4 py-20 ${
      isDarkMode ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className={`text-6xl md:text-8xl ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Rujhan Najib
        </h1>
        <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-white' : 'text-black'}`}>
          CS + Math @ PSU | Former Intern @ MARA, NUS, Nittany AI Advance
        </p>
        
        <div className="pt-8">
          <a
            href="https://drive.google.com/file/d/1wCnMV6Ro3TwGIHUdkdWxSDVS7nJ1MNoj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-8 py-4 border-2 rounded-full transition-colors text-lg ${
              isDarkMode
                ? 'border-white text-white hover:bg-white hover:text-black'
                : 'border-black text-black hover:bg-black hover:text-white'
            }`}
          >
            Download Resume
          </a>
        </div>

        <div className="pt-12">
          <h2 className={`text-2xl md:text-3xl mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Connect with me!
          </h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                isDarkMode
                  ? 'text-white hover:text-gray-400'
                  : 'text-black hover:text-gray-600'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-10 h-10" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                isDarkMode
                  ? 'text-white hover:text-gray-400'
                  : 'text-black hover:text-gray-600'
              }`}
              aria-label="GitHub"
            >
              <Github className="w-10 h-10" />
            </a>
            <a
              href="mailto:alex@example.com"
              className={`transition-colors ${
                isDarkMode
                  ? 'text-white hover:text-gray-400'
                  : 'text-black hover:text-gray-600'
              }`}
              aria-label="Email"
            >
              <Mail className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}