import React, { useState } from "react";

const ProjectsSection = ({ projects, itemsPerPage = 6 }) => {
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const currentProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="mt-16" aria-labelledby="proyectos">
      <h2 id="proyectos" className="text-3xl font-bold mb-4">
        Proyectos
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {currentProjects.map((project, index) => (
          <article
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:from-gray-700 hover:to-gray-800 flex flex-col md:flex-row md:justify-center"
          >
            <div className="p-6 w-full">
              <h3 className="text-xl font-semibold mb-2 hover:text-blue-300 transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-gray-300 prose prose-invert md:prose-lg mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="flex items-center justify-center bg-blue-900 text-white px-3 py-1 my-1 rounded-3xl text-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="w-full flex gap-5 mt-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-lg gap-4 hover:text-blue-300 transition-colors duration-300"
                >
                  Github
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center space-x-2">
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-4 py-2 rounded bg-gradient-to-br from-gray-800 to-gray-900 hover:bg-gray-300"
              disabled={currentPage === 1}
              aria-label="Anterior"
            >
              Anterior
            </button>
          )}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded ${
                page === currentPage
                  ? "bg-blue-500 text-white"
                  : "bg-gradient-to-br from-gray-800 to-gray-900 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-2 rounded bg-gradient-to-br from-gray-800 to-gray-900 hover:bg-gray-300"
              aria-label="Siguiente"
            >
              Siguiente
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
