import { Code2, Database, BarChart3, Braces } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Code2, label: "Full-Stack Development", description: "Building scalable web applications" },
    { icon: Database, label: "Data Engineering", description: "ETL pipelines & data infrastructure" },
    { icon: BarChart3, label: "Data Analysis", description: "Statistical analysis & visualization" },
    { icon: Braces, label: "Machine Learning", description: "Predictive models & automation" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">// about me</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Where Code Meets Data
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 5 years of experience bridging the gap between software engineering and data science, 
                I specialize in creating solutions that not only work beautifully but also provide deep insights.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey started as a backend developer, but I quickly discovered my passion for turning raw data 
                into meaningful stories. Today, I combine these skills to build data-driven applications that scale.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new datasets, contributing to open-source projects, 
                or writing about the latest in tech and analytics.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">20+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
