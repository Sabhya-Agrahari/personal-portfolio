"use client";

import { Trophy, Award } from "lucide-react";
import ShimmerButton from "../(components)/Button";

export default function Achievements() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto flex">

        {/* 🔹 LEFT TIMELINE LINE */}
        <div className="relative mr-10 hidden md:block">
          <div className="absolute left-2 top-0 bottom-0 w-[1px] bg-white/10"></div>
        </div>

        {/* 🔹 RIGHT CONTENT */}
        <div className="flex-1">

          {/* 🔹 HEADING */}
          <div className="mb-16">
            <p className="text-xs tracking-[0.4em] text-gray-500 mb-3">
              ACHIEVEMENTS
            </p>

            <h2 className="text-5xl md:text-7xl font-bold tracking-wide text-white">
              MILESTONES
            </h2>

            <p className="text-xs tracking-[0.3em] text-gray-600 mt-3">
              WHAT I’VE ACCOMPLISHED SO FAR
            </p>
          </div>

          {/* 🔹 ITEMS */}
          <div className="space-y-16">

            {/* 🔸 Academic */}
            <div className="relative">
              <div className="absolute -left-[34px] top-2 w-3 h-3 border border-white/30 bg-black"></div>

              <p className="text-[10px] tracking-[0.3em] text-gray-500 mb-2">
                ACADEMIC
              </p>

              <h3 className="text-lg md:text-xl font-semibold text-white flex items-center gap-2">
                <Trophy size={18} /> Academic Achievements
              </h3>

              <ul className="space-y-2 text-gray-300 text-sm leading-6 mt-3">
                <li>— Secured <span className="text-white">3rd Rank</span> in High School (U.P. Board)</li>
                <li>— Achieved <span className="text-white">1st Rank</span> in Science Exhibition</li>
              </ul>
            </div>

            {/* 🔸 Certifications */}
            <div className="relative">
              <div className="absolute -left-[34px] top-2 w-3 h-3 border border-white/30 bg-black"></div>

              <p className="text-[10px] tracking-[0.3em] text-gray-500 mb-2">
                CERTIFICATIONS
              </p>

              <h3 className="text-lg md:text-xl font-semibold text-white flex items-center gap-2 mb-6">
                <Award size={18} /> Certifications
              </h3>

              <div className="grid md:grid-cols-2 gap-4">

                {[
                  {
                    name: "HP LIFE – AI for Beginners",
                    link: "#",
                  },
                  {
                    name: "HP LIFE – Data Science and Analytics",
                    link: "#",
                  },
                  {
                    name: "NullClass – Data Science Internship",
                    link: "#",
                  },
                  {
                    name: "Internshala – Data Science Training",
                    link: "#",
                  },
                  {
                    name: "Simplilearn – Power BI for Beginners",
                    link: "#",
                  },
                  {
                    name: "Infoseek Technologies – Java Internship",
                    link: "#",
                  },
                ].map((cert, i) => (
                  <div
                    key={i}
                    className="group p-4 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.05]"
                  >
                    <p className="text-gray-300 text-sm mb-4">
                      {cert.name}
                    </p>

                    <ShimmerButton href={cert.link}>
                      View Certificate
                    </ShimmerButton>
                  </div>
                ))}

              </div>
            </div>

            {/* 🔸 Professional */}
            <div className="relative">
              <div className="absolute -left-[34px] top-2 w-3 h-3 border border-white/30 bg-black"></div>

              <p className="text-[10px] tracking-[0.3em] text-gray-500 mb-2">
                PROFESSIONAL
              </p>

              <h3 className="text-lg md:text-xl font-semibold text-white">
                Highlights
              </h3>

              <ul className="space-y-2 text-gray-300 text-sm leading-6 mt-3">
                <li>— Improved API performance by 30%</li>
                <li>— Implemented RBAC reducing issues by 40%</li>
                <li>— Reduced API response time to &lt;200ms</li>
                <li>— Identified $2.71M unsold inventory</li>
              </ul>
            </div>

            {/* 🔸 Extra */}
            <div className="relative">
              <div className="absolute -left-[34px] top-2 w-3 h-3 border border-white/30 bg-black"></div>

              <p className="text-[10px] tracking-[0.3em] text-gray-500 mb-2">
                EXTRA
              </p>

              <h3 className="text-lg md:text-xl font-semibold text-white">
                Activities
              </h3>

              <ul className="space-y-2 text-gray-300 text-sm leading-6 mt-3">
                <li>— Attended workshops on Cyber Security & AI</li>
                <li>— Active GitHub contributor</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}