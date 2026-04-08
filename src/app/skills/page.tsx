"use client";

export default function Skills() {
  const skillsData = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React.js",
        "Next.js",
        "Django",
        "Django REST",
        "Flask",
      ],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "SQLite", "Redis"],
    },
    {
      title: "Data Science & Analytics",
      skills: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "Power BI",
        "ETL Pipelines"
      ],
    },
    {
      title: "AI / Machine Learning",
      skills: [
        
        "OpenAI API",
        "RAG Systems",
        "Computer Vision",
        "Deep Learning",
      ],
    },
    {
      title: "Tools & Version Control",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Jupyter",
        "Excel",
        "JupyterNotebook"
      ],
    },

    {
      title: "Other Skills",
      skills: [
        "SEO",
        "Social Media Marketing",
        "Email Automation"
      ],
    },
  ];

  const softSkills = [
    "Leadership",
    "Team Collaboration",
    "Task Management",
    "Problem Solving",
    "Entrepreneurship",
    "Communication",
    "Critical Thinking",
    "Time Management",
  ];

  return (
    
     <section className="min-h-screen px-2 py-16 md:pl-32 text-white bg-[#020617]">
    
      <div className="max-w-6xl mx-auto">

        {/* Heading - Same as About section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Technical Skills
          </h2>
          <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
        </div>

        {/* Skills Grid - 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-cyan-400 mb-4 pb-2 border-b border-cyan-400/20">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs md:text-sm rounded-full bg-cyan-400/10 border border-cyan-400/20 hover:bg-cyan-400/20 hover:border-cyan-400/40 hover:scale-105 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section - Full Width */}
        <div className="mt-8 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4 pb-2 border-b border-cyan-400/20 text-center">
            Soft Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 text-sm rounded-full bg-cyan-400/10 border border-cyan-400/20 hover:bg-cyan-400/20 hover:border-cyan-400/40 hover:scale-105 transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}