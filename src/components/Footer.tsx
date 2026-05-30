export default function Footer() {
  return (
    <footer className="border-t border-github-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-github-text-tertiary font-mono">
            &copy; {new Date().getFullYear()} Dionicio Vargas
          </p>
          <p className="text-xs text-github-text-tertiary font-mono">
            Construido con Astro &bull; TailwindCSS &bull; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
