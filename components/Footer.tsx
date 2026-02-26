import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

export function Footer({ isDarkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 px-4 ${
      isDarkMode ? 'bg-black text-white border-t border-white' : 'bg-white text-black border-t border-black'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl mb-2">Alex Johnson</p>
            <p className="text-gray-600">Full Stack Developer</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 border rounded-lg transition-colors ${
                isDarkMode
                  ? 'border-white hover:bg-white hover:text-black'
                  : 'border-black hover:bg-black hover:text-white'
              }`}
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 border rounded-lg transition-colors ${
                isDarkMode
                  ? 'border-white hover:bg-white hover:text-black'
                  : 'border-black hover:bg-black hover:text-white'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:alex@example.com"
              className={`p-2 border rounded-lg transition-colors ${
                isDarkMode
                  ? 'border-white hover:bg-white hover:text-black'
                  : 'border-black hover:bg-black hover:text-white'
              }`}
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className={`mt-8 pt-8 border-t text-center text-gray-600 ${
          isDarkMode ? 'border-white' : 'border-black'
        }`}>
          <p>&copy; {currentYear} Rujhan Najib. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}