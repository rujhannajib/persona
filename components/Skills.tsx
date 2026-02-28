export function Skills() {
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
      className="py-20 px-4 bg-cream-200 border-t border-chocolate-600"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-center mb-12 text-chocolate-600">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-3xl mb-6 text-chocolate-600">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 border rounded-full transition-colors border-chocolate-600 text-chocolate-600 hover:bg-accent hover:border-accent hover:text-cream-200"
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