"use client";

import { useState } from "react";
import Image from "next/image";

type Project = {
  title: string;
  desc: string;
  tech: string[];
  img: string;
  features: string[];
  challenges: string[];
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
    title: "Travel Planner API",
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

  const bestProjects = projects.slice(0, 3); // 🔥 Top 3
  const otherProjects = projects.slice(3);   // 🔥 Remaining

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">

        {/* 🔹 Heading */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.4em] text-gray-500 mb-3">
            THINGS I HAVE BUILT
          </p>

          <h2 className="text-5xl md:text-7xl font-bold">
            PROJECTS
          </h2>

          <p className="text-xs tracking-[0.3em] text-gray-600 mt-3">
            SELECTED WORK & EXPERIMENTS
          </p>
        </div>

        {/* ================= BEST PROJECTS ================= */}
        <div className="flex items-center gap-4 mb-10">
          <p className="text-sm tracking-[0.4em] text-gray-400">
            BEST PROJECTS
          </p>
          <div className="flex-1 h-[1px] bg-white/10"></div>
        </div>

        <div className="space-y-14 mb-20">
          {bestProjects.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden border border-white/10">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={900}
                  height={400}
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-1 max-w-xl">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] tracking-[0.3em] px-2 py-1 border border-white/10 text-gray-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= ALL PROJECTS ================= */}
        <div className="flex items-center gap-4 mb-10">
          <p className="text-sm tracking-[0.4em] text-gray-400">
            ALL PROJECTS
          </p>
          <div className="flex-1 h-[1px] bg-white/10"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {otherProjects.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden border border-white/10">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-[180px] object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="mt-3">
                <h3 className="text-sm font-semibold">{project.title}</h3>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] px-2 py-1 border border-white/10 text-gray-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ================= MODAL ================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4">

          <div className="bg-black border border-white/10 max-w-xl w-full relative">

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <div className="h-52 overflow-hidden">
              <Image
                src={selectedProject.img}
                alt={selectedProject.title}
                width={600}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {selectedProject.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {selectedProject.desc}
              </p>

              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">FEATURES</p>
                {selectedProject.features.map((f, i) => (
                  <p key={i} className="text-sm text-gray-300">— {f}</p>
                ))}
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-2">TECH STACK</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-1 border border-white/10 text-gray-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}