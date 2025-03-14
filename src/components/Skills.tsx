import React from "react";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "Astro",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "MongoDB",
      "PostgreSQL",
      "REST API",
    ],
  },
  {
    title: "Herramientas",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "Render"],
  },
];

const Skills: React.FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center mb-6">Mis Habilidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
