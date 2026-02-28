import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-cream-200 text-chocolate-600 border-t border-chocolate-600">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl mb-2">Rujhan Najib</p>
            <p className="text-chocolate-400">CS + Math @ PSU</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border rounded-lg transition-colors border-chocolate-600 hover:bg-accent hover:border-accent hover:text-cream-200"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border rounded-lg transition-colors border-chocolate-600 hover:bg-accent hover:border-accent hover:text-cream-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center border-chocolate-600 text-chocolate-400">
          <p>&copy; {currentYear} Rujhan Najib. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}