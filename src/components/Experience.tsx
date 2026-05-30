import { motion } from "framer-motion"
import { Briefcase, Code, Database, Cloud } from "lucide-react"

const experiences = [
  {
    period: "2025 — 2025",
    title: "Desarrollador Full Stack Freelance",
    description:
      "Desarrollo de una aplicación web para gestión de inventario de un pequeño negocio, participando en el análisis de requerimientos funcionales y fiscales, así como en la implementación de módulos para productos, entradas, salidas, autoconsumos, retiros y reportes administrativos utilizando React, Node.js, Express y SQLite.",
    icon: Briefcase,
  },
];

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-github-text mb-3">Experiencia</h2>
          <p className="text-github-text-secondary max-w-lg mx-auto">
            Mi trayectoria profesional en ingeniería de software
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative space-y-0"
          >
            <div className="absolute left-5 top-0 bottom-0 w-px bg-github-border" />

            {experiences.map((exp) => {
              const Icon = exp.icon
              return (
                <motion.div
                  key={exp.title}
                  variants={itemVariants}
                  className="relative pl-14 pb-10 last:pb-0"
                >
                  <div className="absolute left-3.5 top-0 w-3 h-3 rounded-full bg-github-bg border-2 border-github-blue z-10" />

                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-github-surface border border-github-border flex items-center justify-center">
                    <Icon className="h-4 w-4 text-github-blue" />
                  </div>

                  <div className="pt-0.5">
                    <span className="text-xs font-mono text-github-text-tertiary">{exp.period}</span>
                    <h3 className="text-base font-semibold text-github-text mt-0.5 mb-1.5">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-github-text-secondary leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
