/* empty css                                 */
import { c as createComponent, b as createAstro, e as addAttribute, r as renderTemplate, f as renderComponent, g as renderHead, h as renderSlot } from '../chunks/astro/server_BxOa3Z9M.mjs';
import 'kleur/colors';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { X, Menu, ArrowRight, GithubIcon, LinkedinIcon, Mail, ChevronDown, ExternalLink, Briefcase, Code2, Layers, Cpu, Zap, ArrowUpRight, Download } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description,
    image,
    keywords,
    author,
    robots,
    themeColor,
    url,
    siteName
  } = Astro2.props;
  return renderTemplate`<meta name="description"${addAttribute(description, "content")}><meta name="keywords"${addAttribute(keywords, "content")}><meta name="author"${addAttribute(author, "content")}><meta name="robots"${addAttribute(robots, "content")}><meta name="theme-color"${addAttribute(themeColor, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><meta property="og:url"${addAttribute(url, "content")}><meta property="og:site_name"${addAttribute(siteName, "content")}><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(image, "content")}><meta name="twitter:url"${addAttribute(url, "content")}><meta name="twitter:site"${addAttribute(siteName, "content")}>`;
}, "C:/Users/makigawa/Documents/projects/portfolio1/src/components/SEO.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es" class="dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="google-site-verification" content="d0-XGSNNymxfxwKjS7wMIzqu_OUWHujjJZ9YVPM2_YY"><link rel="icon" href="/favicon.jpeg" sizes="32x32" type="image/jpeg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": "Desarrollador Full Stack especializado en React, Next.js, Node.js y TypeScript. Construyendo aplicaciones web escalables con tecnolog\xEDas modernas.", "image": "https://dionicio.vercel.app/image.webp", "keywords": "dionicio, vargas, desarrollador, full stack, react, nextjs, typescript, portfolio, programador web", "author": "Dionicio Vargas", "robots": "index, follow", "themeColor": "#0d1117", "url": "https://dionicio.vercel.app", "siteName": "Dionicio Vargas - Desarrollador Full Stack" })}${renderHead()}</head> <body class="bg-github-bg text-github-text antialiased"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/makigawa/Documents/projects/portfolio1/src/layouts/Layout.astro", void 0);

const navLinks = [
  { href: "#tech-stack", label: "Tecnologías" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
  { href: "#about", label: "Sobre Mí" },
  { href: "#contact", label: "Contacto" }
];
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "fixed top-0 left-0 right-0 z-50 border-b border-github-border bg-github-bg/80 backdrop-blur-xl", children: [
    /* @__PURE__ */ jsx("nav", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsxs(
        motion.a,
        {
          href: "#",
          initial: { opacity: 0, x: -10 },
          animate: { opacity: 1, x: 0 },
          className: "text-lg font-semibold tracking-tight text-github-text",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-github-blue", children: "<" }),
            "dv",
            /* @__PURE__ */ jsx("span", { className: "text-github-blue", children: " />" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-1", children: navLinks.map((link, i) => /* @__PURE__ */ jsx(
        motion.a,
        {
          href: link.href,
          initial: { opacity: 0, y: -5 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.05 },
          className: "px-3 py-2 text-sm text-github-text-secondary hover:text-github-text transition-colors rounded-md hover:bg-github-surface",
          children: link.label
        },
        link.href
      )) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsOpen(!isOpen),
          className: "md:hidden p-2 rounded-md text-github-text-secondary hover:text-github-text hover:bg-github-surface transition-colors",
          "aria-label": "Abrir menú",
          children: isOpen ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        className: "md:hidden border-t border-github-border bg-github-bg",
        children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-3 flex flex-col gap-1", children: navLinks.map((link) => /* @__PURE__ */ jsx(
          "a",
          {
            href: link.href,
            onClick: () => setIsOpen(false),
            className: "px-3 py-2.5 text-sm text-github-text-secondary hover:text-github-text rounded-md hover:bg-github-surface transition-colors",
            children: link.label
          },
          link.href
        )) })
      }
    ) })
  ] });
}

const Avatar = new Proxy({"src":"/_astro/img.DAjffwNs.webp","width":400,"height":400,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/makigawa/Documents/projects/portfolio1/src/assets/img.webp";
							}
							
							return target[name];
						}
					});

const codeSnippet = `const developer = {
  name: "Dionicio Vargas",
  role: "Full Stack Developer",
  stack: ["React", "Next.js", "Node.js", "TypeScript"],
  focus: "Construyendo apps web escalables",
  available: true
};`;
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center pt-16 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(48,54,61,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(48,54,61,0.3)_1px,transparent_1px)] bg-[length:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-12 lg:gap-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center lg:text-left", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-github-border bg-github-surface/50 text-sm text-github-green mb-6", children: [
                /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-github-green opacity-75" }),
                  /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-github-green" })
                ] }),
                "Disponible para trabajar"
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.h1,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.1 },
              className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-github-text mb-3",
              children: "Dionicio Vargas"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.2 },
              className: "text-xl sm:text-2xl font-medium text-github-blue mb-2",
              children: "Desarrollador Full Stack"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.25 },
              className: "text-base text-github-text-secondary mb-2 font-mono",
              children: "React • Next.js • Node.js • TypeScript"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.3 },
              className: "text-github-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8",
              children: "Desarrollando aplicaciones web escalables con tecnologías modernas, enfocado en arquitectura mantenible, código limpio y experiencias de usuario intuitivas."
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.35 },
              className: "flex flex-wrap gap-3 justify-center lg:justify-start",
              children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "#projects",
                    className: "inline-flex items-center gap-2 px-5 py-2.5 bg-github-blue text-white rounded-lg font-medium text-sm hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/10",
                    children: [
                      "Ver Proyectos",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "https://github.com/theblaze98",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center gap-2 px-5 py-2.5 border border-github-border rounded-lg text-sm font-medium text-github-text hover:bg-github-surface transition-colors",
                    children: [
                      /* @__PURE__ */ jsx(GithubIcon, { className: "h-4 w-4" }),
                      "GitHub"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "https://www.linkedin.com/in/dionicio-vargas-832821237",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center gap-2 px-5 py-2.5 border border-github-border rounded-lg text-sm font-medium text-github-text hover:bg-github-surface transition-colors",
                    children: [
                      /* @__PURE__ */ jsx(LinkedinIcon, { className: "h-4 w-4" }),
                      "LinkedIn"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "mailto:dioniciovargas1226@gmail.com",
                    className: "inline-flex items-center gap-2 px-5 py-2.5 border border-github-border rounded-lg text-sm font-medium text-github-text hover:bg-github-surface transition-colors",
                    children: [
                      /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
                      "Contáctame"
                    ]
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.6, delay: 0.3 },
            className: "flex-shrink-0",
            children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-github-border shadow-2xl", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: Avatar.src,
                  alt: "Dionicio Vargas",
                  width: 256,
                  height: 256,
                  className: "w-full h-full object-cover"
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-github-blue/20 -z-10" })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none", children: /* @__PURE__ */ jsx("div", { className: "font-mono text-xs text-github-text-secondary leading-relaxed", children: codeSnippet.split("\n").map((line, i) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx("span", { className: "text-github-text-tertiary w-6 text-right select-none", children: i + 1 }),
        /* @__PURE__ */ jsx("span", { children: line })
      ] }, i)) }) })
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1.5 },
        className: "absolute bottom-8 left-1/2 -translate-x-1/2",
        children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-5 w-5 text-github-text-tertiary animate-bounce" })
      }
    )
  ] });
}

const techGroups = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "devicon-plain:react" },
      { name: "Next.js", icon: "devicon-plain:nextjs" },
      { name: "TypeScript", icon: "devicon-plain:typescript" },
      { name: "TailwindCSS", icon: "devicon-plain:tailwindcss" },
      { name: "Astro", icon: "devicon-plain:astro" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "devicon-plain:nodejs" },
      { name: "Express", icon: "devicon-plain:express" },
      { name: "NestJS", icon: "devicon-plain:nestjs" },
      { name: "REST APIs", icon: "mdi:api" },
      { name: "JWT", icon: "mdi:lock-pattern" }
    ]
  },
  {
    category: "Base de Datos",
    items: [
      { name: "PostgreSQL", icon: "devicon-plain:postgresql" },
      { name: "MongoDB", icon: "devicon-plain:mongodb" },
      { name: "SQLite", icon: "devicon-plain:sqlite" },
      { name: "MySQL", icon: "devicon-plain:mysql" }
    ]
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git", icon: "devicon-plain:git" },
      { name: "GitHub", icon: "devicon-plain:github" },
      { name: "Docker", icon: "devicon-plain:docker" },
      { name: "Linux", icon: "devicon-plain:linux" },
      { name: "pnpm", icon: "devicon-plain:pnpm" },
      { name: "VSCode", icon: "devicon-plain:vscode" }
    ]
  }
];
const containerVariants$1 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};
const itemVariants$1 = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 }
};
function TechStack() {
  return /* @__PURE__ */ jsx("section", { id: "tech-stack", className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-github-text mb-3", children: "Tecnologías" }),
          /* @__PURE__ */ jsx("p", { className: "text-github-text-secondary max-w-lg mx-auto", children: "Tecnologías que uso a diario para construir aplicaciones modernas y escalables" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: containerVariants$1,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
        children: techGroups.map((group) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            variants: itemVariants$1,
            className: "rounded-xl border border-github-border bg-github-surface/50 p-5 hover:border-github-border-hover transition-colors",
            children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-github-text mb-4 pb-3 border-b border-github-border", children: group.category }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: group.items.map((tech) => /* @__PURE__ */ jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-github-bg border border-github-border text-github-text-secondary hover:text-github-text hover:border-github-text-tertiary transition-colors",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "w-3.5 h-3.5 flex items-center justify-center text-github-blue text-[10px] font-mono", children: ">" }),
                    tech.name
                  ]
                },
                tech.name
              )) })
            ]
          },
          group.category
        ))
      }
    )
  ] }) });
}

const projects = [
	{
		id: "quotes-spark",
		name: "Quotes Spark",
		description: "Aplicación web para explorar y buscar citas inspiradoras con una interfaz moderna y rápida.",
		longDescription: "Plataforma web diseñada para descubrir, explorar y buscar citas de diferentes categorías. Construida con React y TypeScript, priorizando rendimiento, simplicidad y una experiencia de usuario limpia.",
		technologies: [
			"React",
			"TypeScript"
		],
		features: [
			"Búsqueda rápida de citas",
			"Interfaz moderna y responsiva",
			"Experiencia de usuario optimizada",
			"Renderizado rápido y ligero"
		],
		github: "https://github.com/theblaze98/quotes-spark",
		demo: "https://quotes-spark.vercel.app",
		image: "quotes-spark"
	},
	{
		id: "task-app-rust",
		name: "Task App Rust",
		description: "Aplicación de tareas en consola desarrollada en Rust enfocada en simplicidad y rendimiento.",
		longDescription: "Aplicación CLI para gestión de tareas desarrollada en Rust, permitiendo crear, listar y administrar tareas desde la terminal. Diseñada para practicar desarrollo de sistemas y programación eficiente.",
		technologies: [
			"Rust"
		],
		features: [
			"Gestión de tareas desde consola",
			"Aplicación ligera y rápida",
			"Interfaz CLI minimalista",
			"Desarrollada completamente en Rust"
		],
		github: "https://github.com/theblaze98/taskapp-rust",
		image: "task-app-rust"
	},
	{
		id: "app-router-next-react-router",
		name: "App Router Next with React Router DOM",
		description: "Implementación de un sistema de enrutamiento dinámico inspirado en Next.js usando React Router DOM.",
		longDescription: "Proyecto experimental enfocado en recrear el comportamiento del App Router de Next.js utilizando React Router DOM dentro de una aplicación React. Diseñado para explorar patrones avanzados de navegación.",
		technologies: [
			"React",
			"TypeScript"
		],
		features: [
			"Enrutamiento dinámico",
			"Arquitectura modular",
			"Simulación del App Router de Next.js",
			"Construido con React Router DOM"
		],
		github: "https://github.com/theblaze98/app-router-next-with-react-router-dom",
		image: "app-router-next-react-router"
	},
	{
		id: "nakano-nino-bot-ts",
		name: "Nakano Nino Bot TypeScript",
		description: "Bot de Discord desarrollado con TypeScript para automatización y gestión de comunidad.",
		longDescription: "Bot de Discord reescrito en TypeScript utilizando Discord.js, incluyendo comandos personalizados, automatización de tareas y herramientas de interacción para comunidades.",
		technologies: [
			"TypeScript",
			"Discord.js"
		],
		features: [
			"Comandos personalizados",
			"Automatización de tareas",
			"Integración con Discord.js",
			"Arquitectura basada en TypeScript"
		],
		github: "https://github.com/theblaze98/nakano-nino-bot-typescript",
		image: "nakano-nino-bot-ts"
	},
	{
		id: "create-cpp-projects",
		name: "Create CPP Projects",
		description: "Herramienta CLI para generar rápidamente proyectos de C++ configurados para VSCode.",
		longDescription: "Aplicación desarrollada en Rust para automatizar la creación de proyectos en C++ listos para trabajar en Visual Studio Code, reduciendo tiempo de configuración manual.",
		technologies: [
			"Rust"
		],
		features: [
			"Generación automática de proyectos",
			"Configuración lista para VSCode",
			"Automatización de estructura inicial",
			"CLI rápida y ligera"
		],
		github: "https://github.com/theblaze98/create-cpp-projects",
		image: "create-cpp-projects"
	},
	{
		id: "notes-app-backend",
		name: "Notes App Backend",
		description: "Backend para aplicación de notas con API REST y persistencia de datos.",
		longDescription: "Servidor backend construido con Express y MongoDB para gestionar notas mediante una API REST. Incluye endpoints CRUD y manejo de persistencia de datos.",
		technologies: [
			"JavaScript",
			"Express",
			"MongoDB"
		],
		features: [
			"API REST para notas",
			"Operaciones CRUD completas",
			"Persistencia de datos con MongoDB",
			"Arquitectura backend modular"
		],
		github: "https://github.com/theblaze98/notes-app-backend",
		demo: "https://notes-app-backend-blue.vercel.app",
		image: "notes-app-backend"
	},
	{
		id: "notes-app-frontend",
		name: "Notes App Frontend",
		description: "Frontend para aplicación de notas con interfaz simple y conectada a API REST.",
		longDescription: "Aplicación frontend construida en React para gestionar notas, conectándose a un backend mediante API REST para crear, editar y eliminar contenido.",
		technologies: [
			"JavaScript",
			"React"
		],
		features: [
			"Interfaz intuitiva para notas",
			"Integración con API REST",
			"Gestión de notas en tiempo real",
			"Diseño simple y funcional"
		],
		github: "https://github.com/theblaze98/notes-app-frontend",
		demo: "https://notes-app-frontend-sand.vercel.app",
		image: "notes-app-frontend"
	},
	{
		id: "bot-nino-nakano",
		name: "Bot Nino Nakano",
		description: "Bot de Discord orientado a entretenimiento y automatización de comunidad.",
		longDescription: "Bot de Discord desarrollado con JavaScript y Discord.js, enfocado en automatización, entretenimiento e interacción dentro de servidores relacionados con anime y comunidad.",
		technologies: [
			"JavaScript",
			"Discord.js"
		],
		features: [
			"Comandos personalizados",
			"Automatización de servidor",
			"Integración con Discord",
			"Funciones orientadas a comunidad"
		],
		github: "https://github.com/theblaze98/bot-nino-nakano",
		demo: "https://bot-nino-nakano.vercel.app",
		image: "bot-nino-nakano"
	},
	{
		id: "password-generator",
		name: "Password Generator",
		description: "Aplicación web para generar contraseñas seguras de forma rápida.",
		longDescription: "Herramienta web enfocada en la generación de contraseñas seguras y personalizables, desarrollada utilizando tecnologías web base.",
		technologies: [
			"HTML",
			"CSS",
			"JavaScript"
		],
		features: [
			"Generación rápida de contraseñas",
			"Interfaz simple y clara",
			"Aplicación ligera",
			"Desarrollada con JavaScript puro"
		],
		github: "https://github.com/theblaze98/password-generator",
		demo: "https://theblaze98.github.io/password-generator",
		image: "password-generator"
	},
	{
		id: "cronometro",
		name: "Cronómetro Web",
		description: "Cronómetro web simple y funcional desarrollado con JavaScript.",
		longDescription: "Aplicación web minimalista para medir tiempo mediante un cronómetro interactivo, construida con tecnologías web básicas.",
		technologies: [
			"HTML",
			"CSS",
			"JavaScript"
		],
		features: [
			"Inicio, pausa y reinicio",
			"Interfaz minimalista",
			"Rendimiento ligero",
			"JavaScript vanilla"
		],
		github: "https://github.com/theblaze98/cronometro",
		demo: "https://theblaze98.github.io/cronometro",
		image: "cronometro"
	},
	{
		id: "calculadora-web",
		name: "Calculadora Web",
		description: "Calculadora interactiva desarrollada para operaciones matemáticas básicas.",
		longDescription: "Aplicación web de calculadora construida utilizando JavaScript, HTML y Sass, enfocada en diseño interactivo y experiencia de usuario.",
		technologies: [
			"HTML",
			"Sass",
			"JavaScript"
		],
		features: [
			"Operaciones matemáticas básicas",
			"Interfaz interactiva",
			"Diseño con Sass",
			"Aplicación ligera"
		],
		github: "https://github.com/theblaze98/calculadora-web",
		demo: "https://theblaze98.github.io/calculadora-web",
		image: "calculadora-web"
	}
];

const projectDecorations = {
  inventory: "bg-gradient-to-br from-emerald-500/10 to-emerald-500/5",
  social: "bg-gradient-to-br from-blue-500/10 to-blue-500/5",
  finance: "bg-gradient-to-br from-violet-500/10 to-violet-500/5"
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
function Projects() {
  return /* @__PURE__ */ jsx("section", { id: "projects", className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-github-text mb-3", children: "Proyectos Destacados" }),
          /* @__PURE__ */ jsx("p", { className: "text-github-text-secondary max-w-lg mx-auto", children: "Aplicaciones reales que he construido desde cero" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
        children: projects.map((project) => /* @__PURE__ */ jsxs(
          motion.article,
          {
            variants: cardVariants,
            className: "group relative rounded-xl border border-github-border bg-github-surface overflow-hidden hover:border-github-border-hover transition-all duration-300",
            children: [
              /* @__PURE__ */ jsxs("div", { className: `h-48 ${projectDecorations[project.id]} relative overflow-hidden`, children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(48,54,61,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(48,54,61,0.2)_1px,transparent_1px)] bg-[length:24px_24px]" }),
                /* @__PURE__ */ jsxs("div", { className: "absolute top-4 left-4 flex gap-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-github-red" }),
                  /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-github-orange" }),
                  /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-github-green" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 right-4", children: /* @__PURE__ */ jsx("div", { className: "font-mono text-xs text-github-text-secondary/60 space-y-1", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-github-blue", children: "import" }),
                  /* @__PURE__ */ jsx("span", { children: "{" }),
                  /* @__PURE__ */ jsx("span", { className: "text-github-orange", children: project.id }),
                  /* @__PURE__ */ jsx("span", { children: "}" }),
                  /* @__PURE__ */ jsx("span", { className: "text-github-blue", children: "from" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-github-green", children: [
                    "'@projects/",
                    project.id,
                    "'"
                  ] })
                ] }) }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-github-text mb-2 group-hover:text-github-blue transition-colors", children: project.name }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-github-text-secondary leading-relaxed mb-4", children: project.description }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5 mb-4", children: project.technologies.map((tech) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "px-2 py-0.5 text-[11px] font-mono rounded bg-github-bg border border-github-border text-github-text-tertiary",
                    children: tech
                  },
                  tech
                )) }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-1.5 mb-5", children: project.features.slice(0, 3).map((feature) => /* @__PURE__ */ jsxs(
                  "li",
                  {
                    className: "text-xs text-github-text-secondary flex items-start gap-2",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "text-github-blue mt-0.5", children: ">" }),
                      feature
                    ]
                  },
                  feature
                )) }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pt-3 border-t border-github-border", children: [
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: project.github,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center gap-1.5 text-xs font-medium text-github-text-secondary hover:text-github-text transition-colors",
                      children: [
                        /* @__PURE__ */ jsx(GithubIcon, { className: "h-3.5 w-3.5" }),
                        "Código"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: project.demo,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center gap-1.5 text-xs font-medium text-github-blue hover:text-blue-400 transition-colors",
                      children: [
                        /* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" }),
                        "Demo en vivo"
                      ]
                    }
                  )
                ] })
              ] })
            ]
          },
          project.id
        ))
      }
    )
  ] }) });
}

const experiences = [
  {
    period: "2025 — 2025",
    title: "Desarrollador Full Stack Freelance",
    description: "Desarrollo de una aplicación web para gestión de inventario de un pequeño negocio, participando en el análisis de requerimientos funcionales y fiscales, así como en la implementación de módulos para productos, entradas, salidas, autoconsumos, retiros y reportes administrativos utilizando React, Node.js, Express y SQLite.",
    icon: Briefcase
  }
];
const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};
function Experience() {
  return /* @__PURE__ */ jsx("section", { id: "experience", className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-github-text mb-3", children: "Experiencia" }),
          /* @__PURE__ */ jsx("p", { className: "text-github-text-secondary max-w-lg mx-auto", children: "Mi trayectoria profesional en ingeniería de software" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: timelineVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        className: "relative space-y-0",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute left-5 top-0 bottom-0 w-px bg-github-border" }),
          experiences.map((exp) => {
            const Icon = exp.icon;
            return /* @__PURE__ */ jsxs(
              motion.div,
              {
                variants: itemVariants,
                className: "relative pl-14 pb-10 last:pb-0",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute left-3.5 top-0 w-3 h-3 rounded-full bg-github-bg border-2 border-github-blue z-10" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 w-10 h-10 rounded-full bg-github-surface border border-github-border flex items-center justify-center", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-github-blue" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "pt-0.5", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-github-text-tertiary", children: exp.period }),
                    /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-github-text mt-0.5 mb-1.5", children: exp.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-github-text-secondary leading-relaxed", children: exp.description })
                  ] })
                ]
              },
              exp.title
            );
          })
        ]
      }
    ) })
  ] }) });
}

const highlights = [
  {
    icon: Code2,
    text: "Experiencia sólida en el ecosistema JavaScript/TypeScript"
  },
  {
    icon: Layers,
    text: "Desarrollo full-stack desde la base de datos hasta el despliegue"
  },
  {
    icon: Cpu,
    text: "Enfoque en arquitectura limpia y código mantenible"
  },
  {
    icon: Zap,
    text: "Aprendizaje continuo y mentalidad de resolución de problemas"
  }
];
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-github-text mb-3", children: "Sobre Mí" }),
          /* @__PURE__ */ jsx("p", { className: "text-github-text-secondary max-w-lg mx-auto", children: "Ingeniero de software enfocado en construir aplicaciones web confiables y escalables" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "prose prose-invert max-w-none mb-12",
          children: [
            /* @__PURE__ */ jsx("p", { className: "text-github-text-secondary leading-relaxed mb-4", children: "Trabajo en todo el stack de JavaScript/TypeScript construyendo aplicaciones web que resuelven problemas reales. Mi experiencia abarca desarrollo frontend con React y Next.js, servicios backend con Node.js, Express y NestJS, y diseño de bases de datos con PostgreSQL y MongoDB." }),
            /* @__PURE__ */ jsx("p", { className: "text-github-text-secondary leading-relaxed mb-4", children: "Priorizo escribir código limpio y mantenible, y diseñar sistemas que escalen. Desde la arquitectura de APIs REST hasta la creación de interfaces de usuario intuitivas, me enfoco en entregar software confiable, eficiente y bien probado." }),
            /* @__PURE__ */ jsx("p", { className: "text-github-text-secondary leading-relaxed", children: "Estoy en constante expansión de mis habilidades, explorando patrones de diseño de sistemas, infraestructura en la nube y técnicas de optimización de rendimiento. Creo en escribir código que otros desarrolladores puedan entender y sobre el cual puedan construir." })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
          children: highlights.map((item) => {
            const Icon = item.icon;
            return /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-start gap-3 p-4 rounded-lg border border-github-border bg-github-surface/50",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-github-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-github-blue" }) }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-github-text-secondary", children: item.text })
                ]
              },
              item.text
            );
          })
        }
      )
    ] })
  ] }) });
}

function Contact() {
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-github-text mb-3", children: "Contacto" }),
          /* @__PURE__ */ jsx("p", { className: "text-github-text-secondary max-w-lg mx-auto", children: "¿Interesado en trabajar juntos? Hablemos sobre tu próximo proyecto" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "max-w-lg mx-auto",
        children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-github-border bg-github-surface/50 p-8 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-github-blue/10 flex items-center justify-center mx-auto mb-5", children: /* @__PURE__ */ jsx(Mail, { className: "h-7 w-7 text-github-blue" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-github-text mb-2", children: "¿Interesado en trabajar juntos?" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-github-text-secondary mb-6 max-w-sm mx-auto", children: "Actualmente estoy abierto a proyectos freelance, trabajo por contrato y oportunidades de tiempo completo. Construyamos algo grandioso juntos." }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "mailto:dioniciovargas1226@gmail.com",
              className: "inline-flex items-center gap-2 px-6 py-3 bg-github-blue text-white rounded-lg font-medium text-sm hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/10 mb-6",
              children: [
                /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
                "Enviar Correo",
                /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 pt-5 border-t border-github-border", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://github.com/theblaze98",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-2 text-sm text-github-text-secondary hover:text-github-text transition-colors",
                children: [
                  /* @__PURE__ */ jsx(GithubIcon, { className: "h-4 w-4" }),
                  "GitHub"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://www.linkedin.com/in/dionicio-vargas-832821237",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-2 text-sm text-github-text-secondary hover:text-github-text transition-colors",
                children: [
                  /* @__PURE__ */ jsx(LinkedinIcon, { className: "h-4 w-4" }),
                  "LinkedIn"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "/resume.pdf",
                download: true,
                className: "flex items-center gap-2 text-sm text-github-text-secondary hover:text-github-text transition-colors",
                children: [
                  /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
                  "Currículum"
                ]
              }
            )
          ] })
        ] })
      }
    )
  ] }) });
}

function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-github-border py-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxs("p", { className: "text-sm text-github-text-tertiary font-mono", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Dionicio Vargas"
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-github-text-tertiary font-mono", children: "Construido con Astro • TailwindCSS • Framer Motion" })
  ] }) }) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dionicio Vargas | Desarrollador Full Stack" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/makigawa/Documents/projects/portfolio1/src/components/Header.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/makigawa/Documents/projects/portfolio1/src/components/Hero.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "TechStack", TechStack, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/makigawa/Documents/projects/portfolio1/src/components/TechStack.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "Projects", Projects, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/makigawa/Documents/projects/portfolio1/src/components/Projects.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "Experience", Experience, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/makigawa/Documents/projects/portfolio1/src/components/Experience.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "About", About, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/makigawa/Documents/projects/portfolio1/src/components/About.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "Contact", Contact, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/makigawa/Documents/projects/portfolio1/src/components/Contact.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/makigawa/Documents/projects/portfolio1/src/components/Footer.tsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/makigawa/Documents/projects/portfolio1/src/pages/index.astro", void 0);

const $$file = "C:/Users/makigawa/Documents/projects/portfolio1/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
