import { motion } from "framer-motion"

interface TechGroup {
  category: string
  items: { name: string; icon: string }[]
}

const techGroups: TechGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "devicon-plain:react" },
      { name: "Next.js", icon: "devicon-plain:nextjs" },
      { name: "TypeScript", icon: "devicon-plain:typescript" },
      { name: "TailwindCSS", icon: "devicon-plain:tailwindcss" },
      { name: "Astro", icon: "devicon-plain:astro" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "devicon-plain:nodejs" },
      { name: "Express", icon: "devicon-plain:express" },
      { name: "NestJS", icon: "devicon-plain:nestjs" },
      { name: "REST APIs", icon: "mdi:api" },
      { name: "JWT", icon: "mdi:lock-pattern" },
    ],
  },
  {
    category: "Base de Datos",
    items: [
      { name: "PostgreSQL", icon: "devicon-plain:postgresql" },
      { name: "MongoDB", icon: "devicon-plain:mongodb" },
      { name: "SQLite", icon: "devicon-plain:sqlite" },
      { name: "MySQL", icon: "devicon-plain:mysql" },
    ],
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git", icon: "devicon-plain:git" },
      { name: "GitHub", icon: "devicon-plain:github" },
      { name: "Docker", icon: "devicon-plain:docker" },
      { name: "Linux", icon: "devicon-plain:linux" },
      { name: "pnpm", icon: "devicon-plain:pnpm" },
      { name: "VSCode", icon: "devicon-plain:vscode" },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-github-text mb-3">Tecnologías</h2>
          <p className="text-github-text-secondary max-w-lg mx-auto">
            Tecnologías que uso a diario para construir aplicaciones modernas y escalables
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {techGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={itemVariants}
              className="rounded-xl border border-github-border bg-github-surface/50 p-5 hover:border-github-border-hover transition-colors"
            >
              <h3 className="text-sm font-semibold text-github-text mb-4 pb-3 border-b border-github-border">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-github-bg border border-github-border text-github-text-secondary hover:text-github-text hover:border-github-text-tertiary transition-colors"
                  >
                    <span className="w-3.5 h-3.5 flex items-center justify-center text-github-blue text-[10px] font-mono">
                      &gt;
                    </span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
