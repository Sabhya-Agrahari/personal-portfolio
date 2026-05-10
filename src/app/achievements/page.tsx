"use client";

import { Trophy, Award, Sparkles, Medal, Star } from "lucide-react";
import ShimmerButton from "../(components)/Button";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen bg-black text-white px-4 md:px-8 py-14"
    >
      <div className="max-w-5xl mx-auto">
        {/* TOP SPACE */}
        <div className="flex items-center justify-between mb-10"></div>

        {/* HEADER WITH SPARKLES */}
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-xl md:text-3xl font-bold tracking-wide">
            ACHIEVEMENTS & CERTIFICATIONS
          </h1>
        </div>

        <p className="text-gray-400 leading-8 max-w-3xl text-sm md:text-base mb-14">
          A collection of academic accomplishments, professional milestones,
          certifications, and activities that reflect my continuous learning
          and growth in technology and software development.
        </p>

        {/* ACADEMIC ACHIEVEMENTS */}
        <div className="bg-[#080808] border border-white/10 rounded-3xl p-7 mb-5 transition-all duration-300 hover:border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-5 h-5 text-gray-400" />
            <h3 className="text-xs tracking-[0.3em] text-gray-500">
              ACADEMIC ACHIEVEMENTS
            </h3>
          </div>

          <ul className="space-y-3 text-gray-300 text-sm leading-7">
            <li className="flex items-start gap-3">
              <Medal className="w-4 h-4 text-gray-500 mt-1.0 flex-shrink-0" />
              <span>Secured <span className="text-white font-medium">3rd Rank</span> in High School (U.P. Board)</span>
            </li>
            <li className="flex items-start gap-3">
              <Medal className="w-4 h-4 text-gray-500 mt-1.0 flex-shrink-0" />
              <span>Achieved <span className="text-white font-medium">1st Rank</span> in Science Exhibition</span>
            </li>
          </ul>
        </div>

        {/* CERTIFICATIONS */}
        <div className="bg-[#080808] border border-white/10 rounded-3xl p-7 mb-5 transition-all duration-300 hover:border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-5 h-5 text-gray-400" />
            <h3 className="text-xs tracking-[0.3em] text-gray-500">
              CERTIFICATIONS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "HP LIFE – AI for Beginners",
                link: "/certificates/ai-beginner.pdf",
              },
              {
                name: "HP LIFE – Data Science and Analytics",
                link: "/certificates/Data Science & Analytics.pdf",
              },
              {
                name: "NullClass – Data Science Internship",
                link: "/certificates/NullClass-Data-Science-Internship-Certificate.pdf",
              },
              {
                name: "Internshala – Data Science Training",
                link: "/certificates/Data Science Training-Internshala.pdf",
              },
              {
                name: "Simplilearn – Power BI for Beginners",
                link: "/certificates/Power bi certificate.pdf",
              },
              {
                name: "Infoseek Technologies – Java Internship",
                link: "certificates/images/310 Sabhya Agrahari.png",
              },
            ].map((cert, i) => (
              <div
                key={i}
                className="flex flex-col p-5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.04]"
              >
                <p className="text-gray-300 text-sm leading-6 mb-4 flex-1">
                  {cert.name}
                </p>
                <ShimmerButton href={cert.link}>
                  View Certificate
                </ShimmerButton>
              </div>
            ))}
          </div>
        </div>

        {/* PROFESSIONAL HIGHLIGHTS */}
        <div className="bg-[#080808] border border-white/10 rounded-3xl p-7 mb-5 transition-all duration-300 hover:border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-xs tracking-[0.3em] text-gray-500">
              PROFESSIONAL HIGHLIGHTS
            </h3>
          </div>

          <ul className="space-y-3 text-gray-300 text-sm leading-7">
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.0">—</span>
              <span>Improved API performance by <span className="text-white font-medium">30%</span></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.0">—</span>
              <span>Implemented RBAC reducing issues by <span className="text-white font-medium">40%</span></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.0">—</span>
              <span>Reduced API response time to <span className="text-white font-medium">&lt;200ms</span></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.0">—</span>
              <span>Identified <span className="text-white font-medium">$2.71M</span> unsold inventory</span>
            </li>
          </ul>
        </div>

        {/* ACTIVITIES & INTERESTS */}
        <div className="bg-[#080808] border border-white/10 rounded-3xl p-7 transition-all duration-300 hover:border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-xs tracking-[0.3em] text-gray-500">
              ACTIVITIES & INTERESTS
            </h3>
          </div>

          <ul className="space-y-3 text-gray-300 text-sm leading-7">
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.0">—</span>
              <span>Attended workshops on Cyber Security & AI</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.0">—</span>
              <span>Active GitHub contributor</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-500 mt-1.0">—</span>
              <span>Passionate about backend architecture & scalable systems</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}