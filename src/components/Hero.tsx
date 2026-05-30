import { motion } from "framer-motion"
import { GithubIcon, LinkedinIcon, Mail, ArrowRight, ChevronDown } from "lucide-react"
import Avatar from "../assets/img.webp"

const codeSnippet = `const developer = {
  name: "Dionicio Vargas",
  role: "Full Stack Developer",
  stack: ["React", "Next.js", "Node.js", "TypeScript"],
  focus: "Construyendo apps web escalables",
  available: true
};`

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(48,54,61,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(48,54,61,0.3)_1px,transparent_1px)] bg-[length:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-github-border bg-github-surface/50 text-sm text-github-green mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-github-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-github-green" />
                </span>
                Disponible para trabajar
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-github-text mb-3"
            >
              Dionicio Vargas
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl font-medium text-github-blue mb-2"
            >
              Desarrollador Full Stack
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-base text-github-text-secondary mb-2 font-mono"
            >
              React &bull; Next.js &bull; Node.js &bull; TypeScript
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-github-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              Desarrollando aplicaciones web escalables con tecnologías modernas,
              enfocado en arquitectura mantenible, código limpio y experiencias
              de usuario intuitivas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-github-blue text-white rounded-lg font-medium text-sm hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/10"
              >
                Ver Proyectos
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/theblaze98"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-github-border rounded-lg text-sm font-medium text-github-text hover:bg-github-surface transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dionicio-vargas-832821237"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-github-border rounded-lg text-sm font-medium text-github-text hover:bg-github-surface transition-colors"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="mailto:dioniciovargas1226@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-github-border rounded-lg text-sm font-medium text-github-text hover:bg-github-surface transition-colors"
              >
                <Mail className="h-4 w-4" />
                Contáctame
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-github-border shadow-2xl">
                <img
                  src={Avatar.src}
                  alt="Dionicio Vargas"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-github-blue/20 -z-10" />
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
          <div className="font-mono text-xs text-github-text-secondary leading-relaxed">
            {codeSnippet.split("\n").map((line, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-github-text-tertiary w-6 text-right select-none">
                  {i + 1}
                </span>
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-5 w-5 text-github-text-tertiary animate-bounce" />
      </motion.div>
    </section>
  )
}
