interface SkillsProps {
  isDarkMode: boolean;
}

export function Skills({ isDarkMode }: SkillsProps) {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'Jest', 'CI/CD'],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 px-4 ${
        isDarkMode ? 'bg-black border-t border-white' : 'bg-white border-t border-black'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-5xl md:text-6xl text-center mb-12 ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}
        >
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3
                className={`text-3xl mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 border rounded-full transition-colors ${
                      isDarkMode
                        ? 'border-white text-white hover:bg-white hover:text-black'
                        : 'border-black text-black hover:bg-black hover:text-white'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}