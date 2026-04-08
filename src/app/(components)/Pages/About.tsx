"use client";

import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="px-6 py-16 md:pl-36 bg-[#020617] text-white flex items-center"
    >
      <div className="max-w-4xl w-full mx-auto">

        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            About
          </h2>
          <FiExternalLink className="text-gray-400 text-sm" />
        </div>

        {/* Card with Continuous Glow Effect */}
        <div 
          className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 
          transition-all duration-300
          shadow-[0_0_40px_rgba(0,212,255,0.25)] 
          border-cyan-400/20"
        >
          <p className="text-gray-300 leading-7">
            I&apos;m{" "}
            <span className="text-cyan-400 font-semibold">
              Sabhya Agrahari
            </span>
            , a passionate{" "}
            <span className="text-cyan-400">
              Backend & Full Stack Developer
            </span>{" "}
            specializing in{" "}
            <span className="text-cyan-400">
              Python, Django REST Framework, Next.js, and React.js
            </span>.
          </p>

          <p className="mt-4 text-gray-400 leading-7">
            I build scalable and high-performance web applications with clean
            architecture, optimized backend systems, and seamless frontend
            experiences.
          </p>

          {/* Button */}
          <Link
            href="/about"
            className="inline-flex items-center gap-2 mt-6 text-cyan-400 text-sm hover:underline"
          >
            View more
            <span>→</span>
          </Link>

        </div>

      </div>
    </section>
  );
}