"use client";

import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export default function ExperiencePreview() {
  return (
    <section
      id="experience"
      className=" px-6 py-16 md:pl-36 bg-[#020617] text-white flex items-center"
    >
      <div className="max-w-4xl w-full mx-auto">

        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Experience
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
          {/* Experience Item 1 */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-200 font-medium">
                Ragyatech — Full Stack Developer
              </p>
              <p className="text-gray-500 text-sm">On-Site</p>
            </div>
            <p className="text-gray-400 text-sm whitespace-nowrap">
              Sep 2025 – Present
            </p>
          </div>

          {/* Experience Item 2 */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-200 font-medium">
                Esperance Technologies Pvt Ltd
              </p>
              <p className="text-gray-500 text-sm">Remote</p>
            </div>
            <p className="text-gray-400 text-sm whitespace-nowrap">
              Sep 2024 – Sep 2025
            </p>
          </div>

          {/* Experience Item 3 */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-200 font-medium">
                NullClass Pvt Ltd (Intern)
              </p>
              <p className="text-gray-500 text-sm">Remote</p>
            </div>
            <p className="text-gray-400 text-sm whitespace-nowrap">
              May 2024 – Aug 2024
            </p>
          </div>

          {/* View More */}
          <Link
            href="/experience"
            className="inline-block text-cyan-400 text-sm hover:underline"
          >
            View the remaining experiences →
          </Link>

        </div>

      </div>
    </section>
  );
}