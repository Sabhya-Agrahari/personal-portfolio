"use client";

import ShimmerButton from "../(components)/Button";
import { Sparkles, Briefcase } from "lucide-react";

export default function ExperiencePage() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white px-4 md:px-8 py-14"
    >
      <div className="max-w-5xl mx-auto">
        {/* TOP SPACE */}
        <div className="flex items-center justify-between mb-10"></div>

        {/* HEADER WITH SPARKLES */}
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-xl md:text-3xl font-bold tracking-wide">
            WORK EXPERIENCE
          </h1>
        </div>

        <p className="text-gray-400 leading-8 max-w-3xl text-sm md:text-base mb-14">
          My professional journey building scalable backend systems,
          modern web applications, and AI-powered solutions through
          real-world projects and hands-on development experience.
        </p>

        {/* EXPERIENCE LIST */}
        <div className="relative space-y-8">
          {/* Ragyatech */}
          <div className="bg-[#080808] border border-white/10 rounded-3xl p-7 transition-all duration-300 hover:border-white/20">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-gray-500" />
                  <p className="text-[10px] tracking-[0.3em] text-gray-500">
                    SEP 2025 — PRESENT
                  </p>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  RAGYATECH PVT LTD
                </h3>
                <p className="text-gray-500 text-xs tracking-wide mt-1">
                  FULL STACK DEVELOPER
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <ShimmerButton href="https://ragyatech.in/">
                  Official Website
                </ShimmerButton>
              </div>
            </div>

            <ul className="space-y-2 text-gray-300 text-sm leading-7 mt-4 pt-4 border-t border-white/10">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-1.0">—</span>
                <span>Built and deployed full stack applications using Next.js & React.js</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-1.0">—</span>
                <span>Managed backend logic, API integrations, and UI development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-1.0">—</span>
                <span>Delivered scalable, high-performance applications</span>
              </li>
            </ul>
          </div>

          {/* Esperance */}
          <div className="bg-[#080808] border border-white/10 rounded-3xl p-7 transition-all duration-300 hover:border-white/20">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-gray-500" />
                  <p className="text-[10px] tracking-[0.3em] text-gray-500">
                    SEP 2024 — SEP 2025
                  </p>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  ESPERANCE TECHNOLOGIES
                </h3>
                <p className="text-gray-500 text-xs tracking-wide mt-1">
                  BACKEND DEVELOPER (DJANGO REST)
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <ShimmerButton href="http://esperancetech.com/">
                  Official Website
                </ShimmerButton>
              </div>
            </div>

            <ul className="space-y-2 text-gray-300 text-sm leading-7 mt-4 pt-4 border-t border-white/10">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-1.0">—</span>
                <span>Developed scalable REST APIs using Django REST Framework</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-1.0">—</span>
                <span>Improved performance using query optimization & caching</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-1.0">—</span>
                <span>Implemented RBAC, authentication & API versioning</span>
              </li>
            </ul>
          </div>

          {/* NullClass */}
          <div className="bg-[#080808] border border-white/10 rounded-3xl p-7 transition-all duration-300 hover:border-white/20">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-gray-500" />
                  <p className="text-[10px] tracking-[0.3em] text-gray-500">
                    MAY 2024 — AUG 2024
                  </p>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  NULLCLASS
                </h3>
                <p className="text-gray-500 text-xs tracking-wide mt-1">
                  DATA SCIENCE INTERN
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <ShimmerButton href="https://www.nullclass.com/">
                  Official Website
                </ShimmerButton>
              </div>
            </div>

            <ul className="space-y-2 text-gray-300 text-sm leading-7 mt-4 pt-4 border-t border-white/10">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-1.0">—</span>
                <span>Worked on real-world datasets using Python</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-1.0">—</span>
                <span>Performed data analysis & visualization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-1.0">—</span>
                <span>Used Pandas & Matplotlib for insights</span>
              </li>
            </ul>
          </div>

          {/* Internshala */}
          <div className="bg-[#080808] border border-white/10 rounded-3xl p-7 transition-all duration-300 hover:border-white/20">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-gray-500" />
                  <p className="text-[10px] tracking-[0.3em] text-gray-500">
                    APRIL 2024
                  </p>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  INTERNSHALA
                </h3>
                <p className="text-gray-500 text-xs tracking-wide mt-1">
                  DATA SCIENCE TRAINING (8 WEEKS)
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <ShimmerButton href="https://internshala.com/">
                  Official Website
                </ShimmerButton>
              </div>
            </div>

            <ul className="space-y-2 text-gray-300 text-sm leading-7 mt-4 pt-4 border-t border-white/10">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-1.0">—</span>
                <span>Completed certified Data Science training</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-1.0">—</span>
                <span>Learned Python, ML basics & data analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-1.0">—</span>
                <span>Built real-world mini projects</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}