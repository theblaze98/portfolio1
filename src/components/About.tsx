import { motion } from "framer-motion"
import { Code2, Cpu, Layers, Zap } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    text: "Experiencia sólida en el ecosistema JavaScript/TypeScript",
  },
  {
    icon: Layers,
    text: "Desarrollo full-stack desde la base de datos hasta el despliegue",
  },
  {
    icon: Cpu,
    text: "Enfoque en arquitectura limpia y código mantenible",
  },
  {
    icon: Zap,
    text: "Aprendizaje continuo y mentalidad de resolución de problemas",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-github-text mb-3">Sobre Mí</h2>
          <p className="text-github-text-secondary max-w-lg mx-auto">
            Ingeniero de software enfocado en construir aplicaciones web confiables y escalables
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none mb-12"
          >
            <p className="text-github-text-secondary leading-relaxed mb-4">
              Trabajo en todo el stack de JavaScript/TypeScript construyendo aplicaciones web que
              resuelven problemas reales. Mi experiencia abarca desarrollo frontend con React y Next.js,
              servicios backend con Node.js, Express y NestJS, y diseño de bases de datos con PostgreSQL
              y MongoDB.
            </p>
            <p className="text-github-text-secondary leading-relaxed mb-4">
              Priorizo escribir código limpio y mantenible, y diseñar sistemas que escalen.
              Desde la arquitectura de APIs REST hasta la creación de interfaces de usuario intuitivas,
              me enfoco en entregar software confiable, eficiente y bien probado.
            </p>
            <p className="text-github-text-secondary leading-relaxed">
              Estoy en constante expansión de mis habilidades, explorando patrones de diseño de sistemas,
              infraestructura en la nube y técnicas de optimización de rendimiento. Creo en escribir
              código que otros desarrolladores puedan entender y sobre el cual puedan construir.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.text}
                  className="flex items-start gap-3 p-4 rounded-lg border border-github-border bg-github-surface/50"
                >
                  <div className="w-8 h-8 rounded-lg bg-github-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="h-4 w-4 text-github-blue" />
                  </div>
                  <span className="text-sm text-github-text-secondary">{item.text}</span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
