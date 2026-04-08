"use client";

import { Trophy, Award, Medal, Star } from "lucide-react";

export default function Achievements() {
  return (
    <section className="min-h-screen px-6 py-20 md:pl-36 bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Achievements
          </h2>
          <p className="text-gray-400 mt-3">
            My milestones, certifications & accomplishments
          </p>
        </div>

        {/* 🏆 Academic Achievements */}
        <div className="mb-14">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-2">
            <Trophy /> Academic Achievements
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-6 rounded-xl bg-[#0f172a] border border-cyan-400/20">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <Medal className="text-yellow-400" /> High School Topper
              </h4>
              <p className="text-gray-400 mt-2 text-sm">
                Secured <span className="text-cyan-400 font-medium">3rd Rank</span> in High School (U.P. Board).
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0f172a] border border-cyan-400/20">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <Star className="text-pink-400" /> Science Exhibition Winner
              </h4>
              <p className="text-gray-400 mt-2 text-sm">
                Achieved <span className="text-cyan-400 font-medium">1st Rank</span> in Science Exhibition.
              </p>
            </div>

          </div>
        </div>

        {/* 🎓 Certifications */}
        <div className="mb-14">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-2">
            <Award /> Certifications
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "HP LIFE – AI for Beginners",
              "HP LIFE – Data Science and Analytics",
              "NullClass – Data Science Internship",
              "NullClass – Emotional Detector Training",
              "Internshala – Data Science Training",
              "Simplilearn – Power BI for Beginners",
              "Infoseek Technologies – Java Internship",
            ].map((cert, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-[#0f172a] border border-white/10 hover:border-cyan-400/40 transition"
              >
                <p className="text-gray-300">{cert}</p>
              </div>
            ))}

          </div>
        </div>

        {/* 💼 Professional Highlights */}
        <div className="mb-14">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
            Professional Highlights
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-6 rounded-xl bg-[#0f172a] border border-white/10">
              <p className="text-gray-300 text-sm">
                🚀 Improved API performance by <span className="text-cyan-400">30%</span> 
                using optimization & caching strategies.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0f172a] border border-white/10">
              <p className="text-gray-300 text-sm">
                🔐 Implemented RBAC & authentication reducing access issues by 
                <span className="text-cyan-400"> 40%</span>.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0f172a] border border-white/10">
              <p className="text-gray-300 text-sm">
                ⚡ Reduced API response time to <span className="text-cyan-400">&lt;200ms</span>.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0f172a] border border-white/10">
              <p className="text-gray-300 text-sm">
                📊 Identified $2.71M unsold inventory in vendor analysis project.
              </p>
            </div>

          </div>
        </div>

        {/* 🌟 Extra Activities */}
        <div>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
            Extra Activities
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-6 rounded-xl bg-[#0f172a] border border-white/10">
              <p className="text-gray-300 text-sm">
                🎤 Attended workshops on Cyber Security & AI applications.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0f172a] border border-white/10">
              <p className="text-gray-300 text-sm">
                💻 Active GitHub contributor with backend & data science projects.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}