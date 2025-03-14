import React from "react";

interface Experience {
  title: string;
  company: string;
  period: string;
}

const experiences: Experience[] = [];

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Sobre Mí</h2>

      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p>
          Soy un Desarrollador Full-Stack con una profunda pasión por
          transformar ideas en soluciones digitales que conectan personas y
          resuelven problemas reales. Mi enfoque va más allá del código: busco
          crear experiencias intuitivas, escalables y significativas que marquen
          la diferencia en la vida de quienes las usan.
        </p>
        <p>
          Me apasiona aprender y crecer constantemente, siempre explorando
          nuevas formas de innovar y mejorar. Creo que el desarrollo no se trata
          solo de construir aplicaciones, sino de entender las necesidades de
          las personas y diseñar soluciones que sean tan funcionales como
          inspiradoras.
        </p>
        <p>
          Disfruto enfrentándome a desafíos que me permiten expandir mis
          habilidades y aportar valor a través de mi trabajo. Mi enfoque combina
          un diseño moderno y centrado en el usuario con una arquitectura sólida
          y eficiente. Me esfuerzo por crear productos que no solo cumplan con
          los objetivos técnicos, sino que también generen un impacto positivo
          en quienes los utilizan.
        </p>
        <p>
          Para mí, el éxito de un proyecto se mide por la forma en que mejora la
          experiencia de las personas y contribuye a resolver problemas reales.
          Soy un entusiasta de la innovación y la tecnología, pero siempre con
          un enfoque humano. Mi motivación es seguir aprendiendo, colaborando y
          creando soluciones que inspiren y conecten.
        </p>
        {/* <div className="pt-4">
          <h3 className="text-xl font-semibold mb-3">Experiencia</h3>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="border-l-2 border-blue-500 pl-4 py-1"
              >
                <h4 className="font-medium">{exp.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {exp.company} • {exp.period}
                </p>
              </div>
            ))}
          </div> </div> */}
      </div>
    </div>
  );
};

export default About;
