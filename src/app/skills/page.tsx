"use client";

export default function Skills() {
  const skillsData = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Next.js", "Django", "Django REST", "Flask"],
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
        "ETL Pipelines",
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
        "Markdown"
      ],
    },
    {
      title: "Other Skills",
      skills: ["SEO", "Social Media Marketing", "Email Automation"],
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
const hobbies = [
    "Gardening",
    "Listening Music",
    "Self Growth",
  ];
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        {/* 🔹 HEADING (Same as About) */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.4em] text-gray-500 mb-3">
            SKILLS
          </p>

          <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
            TECHNICAL EXPERTISE
          </h2>

          <p className="text-xs tracking-[0.3em] text-gray-600 mt-2">
            TECHNOLOGIES I WORK WITH
          </p>
        </div>

        {/* 🔹 SKILLS GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="
                p-6 rounded-xl
                border border-white/10
                backdrop-blur-md
                transition-all duration-300
              "
            >
              <h3 className="text-sm tracking-[0.2em] text-gray-400 mb-4 border-b border-white/10 pb-2">
                {category.title.toUpperCase()}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      text-xs px-3 py-1.5
                      border border-white/10
                      text-gray-300
                      hover:text-white
                      hover:border-white/30
                      transition-all duration-200
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 SOFT SKILLS */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <h3 className="text-xs tracking-[0.4em] text-gray-500 text-center mb-6">
            SOFT SKILLS
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="
                  text-xs px-4 py-1.5
                  border border-white/10
                  text-gray-300
                  hover:text-white
                  hover:border-white/30
                  transition-all duration-200
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
 {/* 🔹 HOBBIES (NEW SECTION) */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <h3 className="text-xs tracking-[0.4em] text-gray-500 text-center mb-6">
            HOBBIES
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {hobbies.map((hobby) => (
              <span
                key={hobby}
                className="
                  text-xs px-4 py-1.5
                  border border-white/10
                  text-gray-300
                  hover:text-white
                  hover:border-white/30
                  transition-all duration-200
                "
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}