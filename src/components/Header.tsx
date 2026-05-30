import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "#tech-stack", label: "Tecnologías" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
  { href: "#about", label: "Sobre Mí" },
  { href: "#contact", label: "Contacto" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-github-border bg-github-bg/80 backdrop-blur-xl">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg font-semibold tracking-tight text-github-text"
          >
            <span className="text-github-blue">&lt;</span>
            dv
            <span className="text-github-blue"> /&gt;</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="px-3 py-2 text-sm text-github-text-secondary hover:text-github-text transition-colors rounded-md hover:bg-github-surface"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-github-text-secondary hover:text-github-text hover:bg-github-surface transition-colors"
            aria-label="Abrir menú"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-github-border bg-github-bg"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2.5 text-sm text-github-text-secondary hover:text-github-text rounded-md hover:bg-github-surface transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
