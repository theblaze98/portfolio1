"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import projectsData from "../data/projects.json"

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6

  // Calcular proyectos para la página actual
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject)

  // Calcular total de páginas
  const totalPages = Math.ceil(projectsData.length / projectsPerPage)

  // Funciones para navegar entre páginas
  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center mb-6">Mis Proyectos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentProjects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all hover:shadow-md"
          >
            <div className="p-0">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{project.created_at}</span>
                  <div className="flex gap-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Código
                    </a>
                    {project.deployed_at && (
                      <a
                        href={project.deployed_at}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 dark:text-green-400 hover:underline ml-3"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 p-0"
          aria-label="Página anterior"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <span className="text-sm">
          Página {currentPage} de {totalPages}
        </span>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 p-0"
          aria-label="Página siguiente"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

