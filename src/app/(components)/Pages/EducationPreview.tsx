"use client";

import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export default function EducationPreview() {
  return (
    <section
      id="education"
      className=" px-6 py-16 md:pl-36 bg-[#020617] text-white flex items-center"
    >
      <div className="max-w-4xl w-full mx-auto">

        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Education
          </h2>
          <FiExternalLink className="text-gray-400 text-sm" />
        </div>

        {/* Card */}
        <div 
          className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 
          transition-all duration-300
          shadow-[0_0_40px_rgba(0,212,255,0.25)] 
          border-cyan-400/20"
        >
          {/* Degree */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-200">
              M.C.A (Master of Computer Applications)
            </h3>
            <p className="text-gray-500 text-sm mt-1">
             AKTU Uttar Pradesh, India
            </p>
          </div>

          {/* CGPA */}
          <p className="text-green-400 text-sm font-medium">
            CGPA - 9.07
          </p>

          {/* Points */}
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm leading-6">

            <li>
              Developed <span className="text-yellow-400">Dr Care</span> — an online doctor appointment booking system.
            </li>

            <li>
              Users can book appointments with doctors, manage schedules, and access healthcare services digitally.
            </li>

            <li>
              Built using modern web technologies with focus on performance and user experience.
            </li>

            <li>
              Designed clean UI and implemented backend logic for seamless booking flow.
            </li>

          </ul>

          {/* View More */}
          <Link
            href="/education"
            className="inline-block text-cyan-400 text-sm hover:underline pt-2"
          >
            View more →
          </Link>

        </div>

      </div>
    </section>
  );
}