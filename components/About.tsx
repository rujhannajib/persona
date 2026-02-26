import { GraduationCap, Briefcase } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

export function About({ isDarkMode }: AboutProps) {
  const timeline = [
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Penn State University',
      role: 'Bachelor of Science in Computer Science & Mathematics',
      period: '2022 - 2026',
      description: 'Double major in Computer Science and Mathematics. Focus on algorithms, machine learning, and software engineering.',
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'MARA',
      role: 'Software Engineering Intern',
      period: 'Summer 2025',
      description: 'Developed full-stack features for enterprise applications. Worked with React, Node.js, and PostgreSQL.',
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'NUS (National University of Singapore)',
      role: 'Research Intern',
      period: 'Summer 2024',
      description: 'Conducted research in artificial intelligence and machine learning. Published findings on deep learning algorithms.',
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'Nittany AI Advance',
      role: 'Software Development Intern',
      period: 'Fall 2023',
      description: 'Built AI-powered solutions for student services. Implemented natural language processing features.',
    },
  ];

  return (
    <section id="about" className={`py-20 px-4 ${
      isDarkMode ? 'bg-black border-t border-white' : 'bg-white border-t border-black'
    }`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-5xl md:text-6xl text-center mb-12 ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>
          About Me
        </h2>
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className={`text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            I'm a passionate full-stack developer with over 5 years of experience building web applications. 
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
          <p className={`text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
            or sharing knowledge with the developer community.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-px ${
            isDarkMode ? 'bg-white' : 'bg-black'
          }`}></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Icon */}
                  <div className={`absolute left-8 md:left-1/2 -ml-4 w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 ${
                    isDarkMode
                      ? 'bg-black border-white'
                      : 'bg-white border-black'
                  }`}>
                    <Icon className={`w-4 h-4 ${isDarkMode ? 'text-white' : 'text-black'}`} />
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} pl-20 md:pl-0`}>
                    <div className={`border rounded-lg p-6 transition-all group ${
                      isDarkMode
                        ? 'border-white hover:bg-white hover:text-black'
                        : 'border-black hover:bg-black hover:text-white'
                    }`}>
                      <div className={`text-sm mb-2 ${
                        isDarkMode
                          ? 'text-gray-400 group-hover:text-gray-600'
                          : 'text-gray-600 group-hover:text-gray-400'
                      }`}>
                        {item.period}
                      </div>
                      <h3 className={`text-2xl mb-1 ${
                        isDarkMode
                          ? 'text-white group-hover:text-black'
                          : 'text-black group-hover:text-white'
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-lg mb-3 ${
                        isDarkMode
                          ? 'text-white group-hover:text-black'
                          : 'text-black group-hover:text-white'
                      }`}>
                        {item.role}
                      </p>
                      <p className={isDarkMode
                        ? 'text-white group-hover:text-black'
                        : 'text-black group-hover:text-white'
                      }>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}