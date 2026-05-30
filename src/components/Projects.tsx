import { motion } from "framer-motion"
import { ExternalLink, GithubIcon } from "lucide-react"
import projects from "../data/projects.json"

const projectDecorations: Record<string, string> = {
  inventory: "bg-gradient-to-br from-emerald-500/10 to-emerald-500/5",
  social: "bg-gradient-to-br from-blue-500/10 to-blue-500/5",
  finance: "bg-gradient-to-br from-violet-500/10 to-violet-500/5",
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-github-text mb-3">Proyectos Destacados</h2>
          <p className="text-github-text-secondary max-w-lg mx-auto">
            Aplicaciones reales que he construido desde cero
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="group relative rounded-xl border border-github-border bg-github-surface overflow-hidden hover:border-github-border-hover transition-all duration-300"
            >
              <div className={`h-48 ${projectDecorations[project.id]} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(48,54,61,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(48,54,61,0.2)_1px,transparent_1px)] bg-[length:24px_24px]" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-github-red" />
                  <div className="w-3 h-3 rounded-full bg-github-orange" />
                  <div className="w-3 h-3 rounded-full bg-github-green" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-mono text-xs text-github-text-secondary/60 space-y-1">
                    <div className="flex gap-2">
                      <span className="text-github-blue">import</span>
                      <span>{'{'}</span>
                      <span className="text-github-orange">{project.id}</span>
                      <span>{'}'}</span>
                      <span className="text-github-blue">from</span>
                      <span className="text-github-green">'@projects/{project.id}'</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-github-text mb-2 group-hover:text-github-blue transition-colors">
                  {project.name}
                </h3>

                <p className="text-sm text-github-text-secondary leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-github-bg border border-github-border text-github-text-tertiary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-1.5 mb-5">
                  {project.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="text-xs text-github-text-secondary flex items-start gap-2"
                    >
                      <span className="text-github-blue mt-0.5">&gt;</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-3 pt-3 border-t border-github-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-github-text-secondary hover:text-github-text transition-colors"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    Código
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-github-blue hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Demo en vivo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
