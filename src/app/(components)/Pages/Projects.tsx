"use client";

import { useState } from "react";
import Image from "next/image";

/* ✅ Type تعریف */
type Project = {
  title: string;
  desc: string;
  tech: string[];
  img: string;
  features: string[];
  challenges: string[];
};

/* ✅ Data */
const projects: Project[] = [
  {
    title: "Emotional Detector",
    desc: "Deep learning model using CNN to detect human emotions from images in real-time.",
    tech: ["Python", "TensorFlow", "Keras", "CNN"],
    img: "/projects/emotion.png",
    features: [
      "Real-time emotion detection",
      "CNN-based classification",
      "Image processing pipeline",
    ],
    challenges: [
      "Improving accuracy with limited data",
      "Handling lighting variations",
    ],
  },
  {
    title: "Travel Planner API",
    desc: "AI-powered travel itinerary and budget generator using Gemini & Overpass APIs.",
    tech: ["Django", "REST API", "Gemini API"],
    img: "/projects/travel.png",
    features: [
      "AI itinerary generation",
      "Budget optimization",
      "Location-based suggestions",
    ],
    challenges: [
      "Handling dynamic API responses",
      "User input variations",
    ],
  },
  {
    title: "Vendor Analysis System",
    desc: "SQL + Python based ETL & analytics system to evaluate vendor performance.",
    tech: ["SQL", "Python", "Pandas"],
    img: "/projects/analytics.png",
    features: [
      "ETL pipelines",
      "Vendor performance tracking",
      "Data visualization",
    ],
    challenges: [
      "Handling large datasets",
      "Query optimization",
    ],
  },
  {
    title: "College Management System",
    desc: "System to manage students, fees, results and faculty records.",
    tech: ["Java", "JSP", "MySQL"],
    img: "/projects/college.png",
    features: [
      "Student management",
      "Fee tracking",
      "Result generation",
    ],
    challenges: [
      "Database design",
      "Multi-module integration",
    ],
  },
  {
    title: "Tourism Management System",
    desc: "System to manage tours, bookings and customers.",
    tech: ["Java", "JSP", "MySQL"],
    img: "/projects/college.png",
    features: [
      "Booking system",
      "Tour planning",
      "Customer records",
    ],
    challenges: [
      "Data consistency",
      "User experience",
    ],
  },
  {
    title: "Online Notice Board",
    desc: "Digital notice system replacing traditional boards.",
    tech: ["Java", "JSP", "MySQL"],
    img: "/projects/notice.png",
    features: [
      "Admin posting",
      "Real-time updates",
      "User-friendly UI",
    ],
    challenges: [
      "Access control",
      "Live updates handling",
    ],
  },
];

export default function Projects() {
  /* ✅ Typed state */
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen px-2 py-20 md:pl-36 bg-[#020617] text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Projects
          </h2>
          <p className="text-gray-400 mt-3">
            A collection of my recent work
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-[#0f172a] border border-white/10 hover:border-cyan-400/40 transition hover:scale-[1.03]"
            >

              {/* Image */}
              <div className="h-40 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-3">
                  {project.desc}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-sm text-cyan-400 hover:underline"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* 🔥 Modal */}
      {selectedProject && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">

    <div className="bg-[#0f172a] max-w-lg w-full rounded-2xl overflow-hidden border border-white/10 relative">

      {/* ❌ Close Button */}
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-3 right-3 z-10 text-gray-300 hover:text-white text-lg"
      >
        ✕
      </button>

      {/* 🔥 Image */}
      <div className="h-48 w-full overflow-hidden">
        <Image
          src={selectedProject.img}
          alt={selectedProject.title}
          width={600}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-xl font-semibold text-cyan-400 mb-2">
          {selectedProject.title}
        </h3>

        <p className="text-gray-400 mb-4 text-sm">
          {selectedProject.desc}
        </p>

        {/* Features */}
        <div className="mb-4">
          <p className="text-cyan-400 font-medium">Key Features:</p>
          <ul className="list-disc ml-5 text-sm text-gray-300">
            {selectedProject.features.map((f: string, i: number) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div className="mb-4">
          <p className="text-cyan-400 font-medium">Challenges:</p>
          <ul className="list-disc ml-5 text-sm text-gray-300">
            {selectedProject.challenges.map((c: string, i: number) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>

        {/* Tech */}
        <div>
          <p className="text-cyan-400 font-medium mb-2">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {selectedProject.tech.map((t: string, i: number) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300"
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