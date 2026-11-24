import { Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { ImageWithFallback } from './figma/ImageWithFallback';

const resume_url = "https://drive.google.com/file/d/11TOexg4iOjw34FUSKN3JKpOOtRlv2Zck/view?usp=sharing"
const linkedin_url = "https://www.linkedin.com/in/rujhan-najib/"
const github_url = "https://github.com/rujhannajib"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-white">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-6xl md:text-8xl text-black">
          Rujhan Najib
        </h1>
        <p className="text-xl md:text-2xl text-black/60">
          CS + Math @ PSU | Former Intern @ MARA, NUS, Nittany AI Advance
        </p>

        <div className="pt-8">
          <a
            href={resume_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border-2 rounded-full transition-colors text-lg border-accent text-accent hover:bg-accent hover:text-white"
          >
            Download Resume
          </a>
        </div>

        <div className="pt-12">
          <h2 className="text-2xl md:text-3xl mb-6 text-black">
            Connect with me!
          </h2>
          <div className="flex justify-center gap-6">
            <a
              href={linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-black hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-10 h-10" />
            </a>
            <a
              href={github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-black hover:text-accent"
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