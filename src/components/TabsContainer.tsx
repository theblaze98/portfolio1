import React, { useState } from "react";
import { Code, Briefcase, User } from "lucide-react";
import Projects from './Projects.tsx'
import About from './About.tsx'
import Skills from './Skills.tsx'


export default function TabsContainer() {
  const [activeTab, setActiveTab] = useState<string>("projects");

  const tabs = [
    { id: "projects", label: "Proyectos", icon: <Briefcase className="h-4 w-4" /> },
    { id: "skills", label: "Habilidades", icon: <Code className="h-4 w-4" /> },
    { id: "about", label: "Sobre Mí", icon: <User className="h-4 w-4" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "about":
        return <About />;
      default:
        return <div>No content found for this tab</div>;
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 max-w-md mx-auto mb-8 p-1 rounded-lg bg-muted">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-center gap-2 py-2 px-3 rounded-md transition-colors ${
              activeTab === tab.id
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      <div>{renderContent()}</div>
    </div>
  );
}
