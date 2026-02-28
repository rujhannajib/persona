import { Github, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-cream-200">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-6xl md:text-8xl text-chocolate-600">
          Rujhan Najib
        </h1>
        <p className="text-xl md:text-2xl text-chocolate-400">
          CS + Math @ PSU | Former Intern @ MARA, NUS, Nittany AI Advance
        </p>
        
        <div className="pt-8">
          <a
            href="https://drive.google.com/file/d/1wCnMV6Ro3TwGIHUdkdWxSDVS7nJ1MNoj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border-2 rounded-full transition-colors text-lg border-accent text-accent hover:bg-accent hover:text-cream-200"
          >
            Download Resume
          </a>
        </div>

        <div className="pt-12">
          <h2 className="text-2xl md:text-3xl mb-6 text-chocolate-600">
            Connect with me!
          </h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-chocolate-600 hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-10 h-10" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-chocolate-600 hover:text-accent"
              aria-label="GitHub"
            >
              <Github className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}