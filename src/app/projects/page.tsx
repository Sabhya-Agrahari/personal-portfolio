"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FolderGit2, ExternalLink, X } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  tech: string[];
  img: string;
  features: string[];
  challenges: string[];
  link?: string;
};

/* ✅ ALL PROJECTS */
const projects: Project[] = [
  {
    title: "Emotional Detector",
    desc: "Deep learning model using CNN to detect human emotions from images in real-time.",
    tech: ["Python", "TensorFlow", "Keras", "CNN"],
    img: "/projects/emotion.png",
    features: ["Real-time emotion detection", "CNN-based classification"],
    challenges: ["Improving accuracy", "Lighting variations"],
  },
  {
    title: "Travel Itinerary and Budget Planner ",
    desc: "AI-powered travel itinerary and budget generator.",
    tech: ["Django", "REST API", "Gemini API"],
    img: "/projects/travel.png",
    features: ["AI itinerary", "Budget optimization"],
    challenges: ["Dynamic APIs", "User inputs"],
  },
  {
    title: "Vendor Analysis System",
    desc: "SQL + Python ETL analytics system.",
    tech: ["SQL", "Python", "Pandas"],
    img: "/projects/analytics.png",
    features: ["ETL pipelines", "Data visualization"],
    challenges: ["Large datasets", "Optimization"],
  },
  {
    title: "Winner Quest",
    desc: "A fun picture quiz game where users guess images and win rewards through engaging challenges.",
    tech: ["ReactJS", "NextJS"],
    img: "/projects/winner-quest.png",
    features: ["Picture quiz", "Reward system"],
    challenges: ["Game logic", "Database integration"],
    link: "https://winner-quest.vercel.app/",
  },
  {
    title: "College Management System",
    desc: "Manage students, fees, results & faculty.",
    tech: ["Java", "JSP", "MySQL"],
    img: "/projects/college.png",
    features: ["Student mgmt", "Results"],
    challenges: ["DB design", "Integration"],
  },
  {
    title: "Tourism Management System",
    desc: "Tour booking & customer management system.",
    tech: ["Java", "JSP", "MySQL"],
    img: "/projects/college.png",
    features: ["Booking system", "Customer records"],
    challenges: ["Data consistency"],
  },
  {
    title: "Online Notice Board",
    desc: "Digital notice board with real-time updates.",
    tech: ["Java", "JSP", "MySQL"],
    img: "/projects/notice.png",
    features: ["Admin posting", "Live updates"],
    challenges: ["Access control"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const bestProjects = projects.slice(0, 3);
  const otherProjects = projects.slice(3);

  const handleImageError = (title: string) => {
    setImageErrors(prev => ({ ...prev, [title]: true }));
  };

  return (
    <>
      <section
        id="projects"
        className="min-h-screen bg-black text-white px-4 md:px-8 py-14"
      >
        <div className="max-w-5xl mx-auto">
          
        <div className="flex items-center justify-between mb-10"></div>
          {/* HEADER */}
          <div className="flex items-center gap-3 mb-6">
            <h1 className="text-xl md:text-3xl font-bold tracking-wide">
              PROJECTS
            </h1>
          </div>

          <p className="text-gray-400 leading-8 max-w-3xl text-sm md:text-base mb-14">
            A showcase of real-world projects focused on full stack development,
            scalable backend architecture, AI-powered applications, and modern
            user experiences built using cutting-edge technologies.
          </p>

          {/* BEST PROJECTS SECTION */}
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="flex items-center gap-3 bg-black px-6">
                <FolderGit2 className="w-4 h-4 text-gray-400" />
                <h2 className="text-xs tracking-[0.3em] text-gray-500">
                  FEATURED PROJECTS
                </h2>
                <FolderGit2 className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="space-y-8 mb-20">
            {bestProjects.map((project, i) => (
              <div
                key={i}
                onClick={() => setSelectedProject(project)}
                className="bg-[#080808] border border-white/10 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-white/20 hover:scale-[1.01]"
              >
                <div className="relative h-64 overflow-hidden">
                  {!imageErrors[project.title] ? (
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={900}
                      height={400}
                      className="w-full h-full object-cover transition duration-500 hover:scale-105"
                      onError={() => handleImageError(project.title)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <FolderGit2 className="w-12 h-12 text-gray-600" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full p-2">
                    <ExternalLink className="w-4 h-4 text-gray-300" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-6 mb-4">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] tracking-[0.3em] px-3 py-1.5 border border-white/10 rounded-lg text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-purple-400 hover:text-purple-300 transition-colors text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ALL PROJECTS SECTION */}
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="flex items-center gap-3 bg-black px-6">
                <FolderGit2 className="w-4 h-4 text-gray-400" />
                <h2 className="text-xs tracking-[0.3em] text-gray-500">
                  MORE PROJECTS
                </h2>
                <FolderGit2 className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {otherProjects.map((project, i) => (
              <div
                key={i}
                onClick={() => setSelectedProject(project)}
                className="bg-[#080808] border border-white/10 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-white/20 hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  {!imageErrors[project.title] ? (
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover transition duration-500 hover:scale-105"
                      onError={() => handleImageError(project.title)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <FolderGit2 className="w-8 h-8 text-gray-600" />
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-base font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-xs leading-5 mb-3 line-clamp-2">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] px-2 py-1 border border-white/10 rounded-lg text-gray-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-purple-400 hover:text-purple-300 transition-colors text-xs"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL - IMAGE FROM TOP */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/90 backdrop-blur-md px-4 pt-8 md:pt-12 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div className="bg-[#080808] border border-white/20 rounded-3xl max-w-xl w-full relative transition-all duration-300 my-8">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-black/50 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Image Container - Now starts from top */}
            <div className="relative w-full bg-[#111111] rounded-t-3xl overflow-hidden">
              {!imageErrors[selectedProject.title] ? (
                <Image
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  onError={() => handleImageError(selectedProject.title)}
                />
              ) : (
                <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <FolderGit2 className="w-16 h-16 text-gray-600" />
                </div>
              )}
            </div>

            <div className="p-7">
              <h3 className="text-2xl font-semibold mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-gray-400 text-sm leading-6 mb-6">
                {selectedProject.desc}
              </p>

              <div className="mb-5">
                <p className="text-xs tracking-[0.3em] text-gray-500 mb-3">
                  KEY FEATURES
                </p>
                <div className="space-y-2">
                  {selectedProject.features.map((f, i) => (
                    <p key={i} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-gray-500">—</span>
                      {f}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <p className="text-xs tracking-[0.3em] text-gray-500 mb-3">
                  TECHNOLOGIES
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] tracking-[0.3em] px-3 py-1.5 border border-white/10 rounded-lg text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Visit Live Project <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}