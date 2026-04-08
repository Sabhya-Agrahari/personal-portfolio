"use client";

import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export default function SkillsPreview() {
  const topSkills = [
    "Python",
    "Django REST",
    "Next.js",
    "React.js",
    "SQL",
    "Machine Learning",
  ];

  return (
    <section
      id="skills"
      className=" px-6 py-16 md:pl-36 bg-[#020617] text-white flex items-center"
    >
        <div className="max-w-4xl w-full mx-auto">

            <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                    Skills
                </h2>
                <FiExternalLink className="text-gray-400 text-sm" />
            </div>
        
       <div 
          className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 
          transition-all duration-300
          shadow-[0_0_40px_rgba(0,212,255,0.25)] 
          border-cyan-400/20"
        >
        {/* Short Intro */}
        <p className="mt-5 text-gray-400">
          A quick overview of my core technical expertise
        </p>

        {/* Skills */}
        <div className="mt-8 flex flex-wrap justify-left gap-3">
          {topSkills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 text-sm rounded-full bg-cyan-400/10 border border-cyan-400/20 hover:bg-cyan-400/20 transition"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Button */}
        <Link
            href="/skills"
            className="inline-block text-cyan-400 text-sm hover:underline pt-2"
          >
            View more →
          </Link>

      </div>
      </div>
    </section>
  );
}