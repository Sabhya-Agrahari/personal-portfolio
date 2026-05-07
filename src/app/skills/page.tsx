"use client";
import { Sparkles } from "lucide-react";

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
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-4 md:px-8 py-14"
    >
      <div className="max-w-5xl mx-auto">
        {/* TOP SPACE */}
        <div className="flex items-center justify-between mb-10"></div>

        {/* TECHNICAL SKILLS HEADER */}
        <div className="flex items-center gap-3 mb-12">
        
          <h1 className="text-xl md:text-3xl font-bold tracking-wide">
            TECHNICAL EXPERTISE
          </h1>

        </div>
        <p className="text-gray-400 leading-8 max-w-3xl text-sm md:text-base mb-14">
          Technologies, frameworks and tools I use to build scalable
          backend systems, modern web applications and AI-powered
          solutions.
        </p>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="bg-[#080808] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-white/20"
            >
              <h3 className="text-xs tracking-[0.3em] text-gray-500 mb-4">
                {category.title.toUpperCase()}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:border-white/30 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* HORIZONTAL LINE & SOFT SKILLS HEADER */}
        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="flex items-center gap-3 bg-black px-6">
              <h2 className="text-s tracking-[0.3em] text-gray-500">
                SOFT SKILLS
              </h2>
            </div>
          </div>
        </div>

        {/* SOFT SKILLS CONTENT */}
        <div className="bg-[#080808] border border-white/10 rounded-2xl p-7">
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-4 py-1.5 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:border-white/30 transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* HORIZONTAL LINE & HOBBIES HEADER */}
        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="flex items-center gap-3 bg-black px-6">
              <h2 className="text-s tracking-[0.3em] text-gray-500">
                HOBBIES & INTERESTS
              </h2>
            </div>
          </div>
        </div>

        {/* HOBBIES CONTENT */}
        <div className="bg-[#080808] border border-white/10 rounded-2xl p-7">
          <div className="flex flex-wrap justify-center gap-3">
            {hobbies.map((hobby) => (
              <span
                key={hobby}
                className="text-xs px-4 py-1.5 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:border-white/30 transition-all duration-200"
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