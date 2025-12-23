import { ExternalLink, Github, BarChart3, Code2, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Analytics Dashboard",
      description: "Real-time business intelligence dashboard with custom visualizations, automated reporting, and predictive analytics capabilities.",
      tags: ["React", "Python", "PostgreSQL", "D3.js"],
      icon: BarChart3,
      category: "Data Analytics",
      github: "#",
      live: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with inventory management, payment processing, and customer behavior analytics.",
      tags: ["TypeScript", "Node.js", "MongoDB", "Stripe"],
      icon: Code2,
      category: "Full-Stack",
      github: "#",
      live: "#",
    },
    {
      title: "Data Pipeline Framework",
      description: "Scalable ETL framework processing 10M+ records daily with automated quality checks and monitoring.",
      tags: ["Python", "Apache Airflow", "AWS", "dbt"],
      icon: Database,
      category: "Data Engineering",
      github: "#",
      live: "#",
    },
    {
      title: "ML Prediction API",
      description: "Machine learning API for demand forecasting with 94% accuracy, serving 1000+ requests per minute.",
      tags: ["Python", "TensorFlow", "FastAPI", "Docker"],
      icon: BarChart3,
      category: "Machine Learning",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, analytics dashboards, and team insights.",
      tags: ["React", "Firebase", "TypeScript", "Tailwind"],
      icon: Code2,
      category: "Full-Stack",
      github: "#",
      live: "#",
    },
    {
      title: "Customer Segmentation Tool",
      description: "Automated customer segmentation using clustering algorithms with interactive visualization dashboard.",
      tags: ["Python", "Scikit-learn", "Tableau", "SQL"],
      icon: Database,
      category: "Data Analytics",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">// projects</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Featured Work
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in software development and data analytics.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group relative flex flex-col rounded-xl bg-gradient-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground px-2 py-1 rounded bg-secondary">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="px-6 pb-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-1 rounded bg-secondary/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="p-6 pt-4 border-t border-border flex gap-3">
                  <Button variant="ghost" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild className="flex-1">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* View more */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/JeClaude" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
