import { motion } from "framer-motion"
import { Mail, GithubIcon, LinkedinIcon, Download, ArrowUpRight } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-github-text mb-3">Contacto</h2>
          <p className="text-github-text-secondary max-w-lg mx-auto">
            ¿Interesado en trabajar juntos? Hablemos sobre tu próximo proyecto
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <div className="rounded-xl border border-github-border bg-github-surface/50 p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-github-blue/10 flex items-center justify-center mx-auto mb-5">
              <Mail className="h-7 w-7 text-github-blue" />
            </div>

            <h3 className="text-xl font-semibold text-github-text mb-2">
              ¿Interesado en trabajar juntos?
            </h3>
            <p className="text-sm text-github-text-secondary mb-6 max-w-sm mx-auto">
              Actualmente estoy abierto a proyectos freelance, trabajo por contrato y
              oportunidades de tiempo completo. Construyamos algo grandioso juntos.
            </p>

            <a
              href="mailto:dioniciovargas1226@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-github-blue text-white rounded-lg font-medium text-sm hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/10 mb-6"
            >
              <Mail className="h-4 w-4" />
              dioniciovargas1226@gmail.com
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <div className="flex items-center justify-center gap-4 pt-5 border-t border-github-border">
              <a
                href="https://github.com/theblaze98"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-github-text-secondary hover:text-github-text transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dionicio-vargas-832821237"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-github-text-secondary hover:text-github-text transition-colors"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
