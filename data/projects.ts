export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Persona",
    description: "A personal portfolio website of Rujhan Najib.",
    image: "blogs/portfolio.png",
    tags: ["Typescript", "Next.js", "Tailwind"],
    githubUrl: "https://github.com/rujhannajib/persona",
  },
  {
    title: "IHPM",
    description:
      "IHPM: In-House Password Manager, A simple and secure terminal-based password manager built with Python and MySQL. Paired together with Admona",
    image: "projects/ihpm_front.png",
    tags: ["Python", "MySQL", "Cryptography"],
    githubUrl: "https://github.com/rujhannajib/IHPM",
  },
];
