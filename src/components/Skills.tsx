const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "SQL", level: 92 },
        { name: "JavaScript", level: 88 },
      ],
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "React", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "Pandas/NumPy", level: 92 },
        { name: "TensorFlow", level: 78 },
      ],
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "Tableau/Power BI", level: 85 },
        { name: "Apache Spark", level: 75 },
        { name: "AWS/GCP", level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">// skills</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Technical Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div key={category.title} className="space-y-6">
                <h3 className="text-lg font-semibold text-center border-b border-border pb-3">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-mono">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools grid */}
          <div className="mt-16 pt-12 border-t border-border">
            <h3 className="text-center text-muted-foreground mb-8 font-mono text-sm">
              Other tools I work with
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Git", "Docker", "Kubernetes", "Redis", "MongoDB", "Jupyter", "Airflow", "dbt", "Snowflake", "FastAPI", "GraphQL", "Figma"].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm font-mono text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
