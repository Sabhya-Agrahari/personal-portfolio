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

const projects: Project[] = [
  // ==========================
  // FEATURED PROJECTS
  // ==========================

  {
    title: "Ragya Tech Pvt. Ltd.",
    desc: "Designed and developed the complete company website including frontend, backend, REST APIs, authentication, SEO optimization, and database architecture.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "MySQL",
      "REST API",
    ],
    img: "/projects/ragyatech.in_.png",
    features: [
      "Complete Frontend Development",
      "Complete Backend Development",
      "Authentication & Authorization",
      "REST API Development",
      "SEO Optimization",
      "Responsive Design",
      "Database Design",
    ],
    challenges: [
      "Scalable Architecture",
      "Performance Optimization",
      "SEO Implementation",
    ],
    link: "https://ragyatech.in",
  },

  {
    title: "DualLeaf Mattress",
    desc: "Developed the complete backend for an e-commerce mattress platform and contributed to frontend development for selected pages.",
    tech: ["Next.js", "React.js", "MySQL", "REST API"],
    img: "/projects/dualleafmattress.com_.png",
    features: [
      "Complete Backend Development",
      "Product APIs",
      "Order Management",
      "Business Logic",
      "Admin APIs",
      "Frontend Support",
    ],
    challenges: [
      "Complex Business Logic",
      "API Optimization",
      "Database Design",
    ],
    link: "https://dualleafmattress.com/",
  },
  
  {
    title: "ApniCar",
    desc: "Contributed to backend development by building APIs and implementing business logic for a vehicle rental platform.",
    tech: ["Next.js", "React.js", "REST API", "MySQL"],
    img: "/projects/apniicar.in_.png",
    features: [
      "Backend API Development",
      "Business Logic",
      "Database Operations",
      "Feature Enhancements",
    ],
    challenges: [
      "API Performance",
      "Scalable Backend Modules",
    ],
    link: "https://apniicar.in",
  },
  
  // ==========================
  // PROFESSIONAL PROJECTS
  // ==========================

  {
    title: "ApniCar NCR",
    desc: "Developed the complete frontend for the vehicle rental platform with responsive layouts and API integration.",
    tech: ["React", "Next.js", "TypeScript"],
    img: "/projects/apniicarncr.in_.png",
    features: [
      "Complete Frontend",
      "Responsive UI",
      "API Integration",
      "Performance Optimization",
    ],
    challenges: [
      "Responsive Layout",
      "Cross-browser Compatibility",
    ],
    link: "https://apniicarncr.in",
  },

  {
    title: "Billing Platform ",
    desc: "Developed the complete backend for a billing and invoicing platform similar to MyBillBook.",
    tech: ["Python", "Django", "MySQL", "REST API"],
    img: "/projects/mybillbook.png",
    features: [
      "Inventory Management",
      "Invoice Management",
      "Sales Module",
      "Purchase Module",
      "Reporting APIs",
      "POS System"
    ],
    challenges: [
      "Business Workflow",
      "Database Optimization",
    ],
  },

  {
    title: "CRM System",
    desc: "Developed the backend of a CRM platform to manage customers, leads, and operational workflows.",
    tech: ["Python", "Django", "MySQL", "REST API"],
    img: "/projects/crm.png",
    features: [
      "Customer Management",
      "Lead Management",
      "Role-Based Access",
      "Reporting APIs",
    ],
    challenges: [
      "Permission Management",
      "Scalable Backend",
    ],
  },

  // ==========================
  // PERSONAL PROJECTS
  // ==========================

  {
    title: "Winner Quest",
    desc: "A picture quiz game where users guess images and win exciting rewards.",
    tech: ["React", "Next.js"],
    img: "/projects/winner-quest.png",
    features: [
      "Picture Quiz",
      "Reward System",
      "Responsive UI",
    ],
    challenges: [
      "Game Logic",
      "Database Integration",
    ],
    link: "https://winner-quest.vercel.app/",
  },

  {
    title: "Travel Itinerary & Budget Planner",
    desc: "AI-powered travel planning platform using Gemini API.",
    tech: ["Django", "REST API", "Gemini API"],
    img: "/projects/travel.png",
    features: [
      "AI Itinerary",
      "Budget Optimization",
      "Travel Recommendations",
    ],
    challenges: [
      "Prompt Engineering",
      "Dynamic APIs",
    ],
  },

  {
    title: "Emotional Detector",
    desc: "Deep learning model using CNN to detect human emotions from facial images.",
    tech: ["Python", "TensorFlow", "Keras", "CNN"],
    img: "/projects/emotion.png",
    features: [
      "Real-time Emotion Detection",
      "CNN Classification",
    ],
    challenges: [
      "Improving Accuracy",
      "Lighting Variations",
    ],
  },

  {
    title: "Vendor Analysis System",
    desc: "Python and SQL based ETL analytics system with reporting dashboards.",
    tech: ["Python", "SQL", "Pandas"],
    img: "/projects/analytics.png",
    features: [
      "ETL Pipelines",
      "Analytics Dashboard",
      "Data Visualization",
    ],
    challenges: [
      "Large Datasets",
      "Performance Optimization",
    ],
  },

  {
    title: "College Management System",
    desc: "Management system for students, faculty, fees, and examination records.",
    tech: ["Java", "JSP", "MySQL"],
    img: "/projects/college.png",
    features: [
      "Student Management",
      "Faculty Records",
      "Results Management",
    ],
    challenges: [
      "Database Design",
      "Module Integration",
    ],
  },

  {
    title: "Tourism Management System",
    desc: "Tour booking and customer management system.",
    tech: ["Java", "JSP", "MySQL"],
    img: "/projects/tourism.png",
    features: [
      "Booking System",
      "Customer Management",
      "Package Management",
    ],
    challenges: [
      "Data Consistency",
      "Booking Workflow",
    ],
  },

  {
    title: "Online Notice Board",
    desc: "Digital notice board with real-time updates.",
    tech: ["Java", "JSP", "MySQL"],
    img: "/projects/notice.png",
    features: [
      "Admin Posting",
      "Live Updates",
      "Role-Based Access",
    ],
    challenges: [
      "Access Control",
      "Real-time Updates",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

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

  const featuredProjects = projects.slice(0, 3);
  const professionalProjects = projects.slice(3, 6);
  const personalProjects = projects.slice(6);

  const handleImageError = (title: string) => {
    setImageErrors((prev) => ({
      ...prev,
      [title]: true,
    }));
  };

  return (
    <>
      <section
        id="projects"
        className="min-h-screen bg-black text-white px-4 md:px-8 py-14"
      >
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="mb-14">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
              PROJECTS
            </h1>

            <p className="text-gray-400 leading-8 max-w-3xl text-sm md:text-base mt-5">
              A collection of professional and personal projects showcasing
              expertise in Full Stack Development, scalable backend systems,
              modern frontend technologies, REST APIs, AI-powered applications,
              and production-ready software solutions.
            </p>
          </div>

          {/* ================= FEATURED PROJECTS ================= */}

          <div className="relative mb-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>

            <div className="relative flex justify-center">
              <div className="bg-black px-6 flex items-center gap-3">
                <FolderGit2 className="w-4 h-4 text-gray-400" />
                <h2 className="text-xs tracking-[0.35em] text-gray-500 uppercase">
                  Featured Projects
                </h2>
                <FolderGit2 className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="space-y-8 mb-20">
            {featuredProjects.map((project, i) => (
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
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-7 mb-5">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] tracking-[0.25em] px-3 py-1.5 border border-white/10 rounded-lg text-gray-400"
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
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 mt-5 text-purple-400 hover:text-purple-300 text-sm"
                    >
                      Visit Website
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ================= PROFESSIONAL PROJECTS ================= */}

          <div className="relative mb-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>

            <div className="relative flex justify-center">
              <div className="bg-black px-6 flex items-center gap-3">
                <FolderGit2 className="w-4 h-4 text-gray-400" />
                <h2 className="text-xs tracking-[0.35em] text-gray-500 uppercase">
                  Professional Projects
                </h2>
                <FolderGit2 className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
            {professionalProjects.map((project, i) => (
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
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-6 mb-4 line-clamp-3">
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
                </div>
              </div>
            ))}
          </div>

          {/* ================= PERSONAL PROJECTS ================= */}

          <div className="relative mb-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>

            <div className="relative flex justify-center">
              <div className="bg-black px-6 flex items-center gap-3">
                <FolderGit2 className="w-4 h-4 text-gray-400" />
                <h2 className="text-xs tracking-[0.35em] text-gray-500 uppercase">
                  Personal Projects
                </h2>
                <FolderGit2 className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {personalProjects.map((project, i) => (
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
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-6 mb-4 line-clamp-3">
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
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 mt-4 text-purple-400 hover:text-purple-300 text-xs"
                    >
                      Visit Website
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}

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
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-black/50 rounded-full w-8 h-8 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative w-full rounded-t-3xl overflow-hidden bg-[#111111]">
              {!imageErrors[selectedProject.title] ? (
                <Image
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  width={700}
                  height={450}
                  className="w-full h-auto object-cover"
                  onError={() => handleImageError(selectedProject.title)}
                />
              ) : (
                <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <FolderGit2 className="w-14 h-14 text-gray-600" />
                </div>
              )}
            </div>

            <div className="p-7">

              <h3 className="text-2xl font-semibold mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-gray-400 leading-7 text-sm mb-6">
                {selectedProject.desc}
              </p>

              <div className="mb-6">
                <h4 className="text-xs tracking-[0.35em] uppercase text-gray-500 mb-3">
                  Key Features
                </h4>

                <div className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <p
                      key={index}
                      className="text-sm text-gray-300 flex gap-2"
                    >
                      <span className="text-gray-500">—</span>
                      {feature}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs tracking-[0.35em] uppercase text-gray-500 mb-3">
                  Technologies
                </h4>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-[10px] tracking-[0.2em] px-3 py-1.5 border border-white/10 rounded-lg text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs tracking-[0.35em] uppercase text-gray-500 mb-3">
                  Challenges
                </h4>

                <div className="space-y-2">
                  {selectedProject.challenges.map((challenge, index) => (
                    <p
                      key={index}
                      className="text-sm text-gray-300 flex gap-2"
                    >
                      <span className="text-gray-500">—</span>
                      {challenge}
                    </p>
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
                  Visit Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
}