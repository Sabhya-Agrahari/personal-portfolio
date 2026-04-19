"use client";

import Image from "next/image";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../../../assets/Image/portfolio.jpeg";

export default function Hero() {

  const handleScroll = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 bg-[var(--bg)] text-[var(--text)]"
    >
      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="space-y-6">
          
          <div className="space-y-2">
            <p className="text-sm tracking-wide text-[var(--text)] opacity-70">
              SOFTWARE DEVELOPER
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold text-[var(--text)]">
              Hi, I&apos;m Sabhya Agrahari
            </h1>
          </div>

          <h2 className="text-xl text-[var(--text)] opacity-80">
            Full Stack Developer | React | Next.js | Django REST
          </h2>

          <p className="leading-relaxed text-[var(--text)] opacity-70">
            I build scalable and high-performance web applications using modern 
            technologies. Focused on writing clean, efficient, and maintainable code.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/sabhya-agrahari"
              target="_blank"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/sabhya-agrahari-1864621a8/"
              target="_blank"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="mailto:sabhyaagrahari18@gmail.com"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
  onClick={handleScroll}
  className="relative cursor-pointer py-3 px-8 text-sm font-medium 
  inline-flex items-center justify-center gap-2
  text-[var(--bg)] bg-[var(--text)] 
  rounded-lg overflow-hidden group 
  hover:scale-105 transition"
>
  {/* SHINE (ABOVE BG, BELOW TEXT) */}
  <span
    className="absolute top-0 left-0 h-full w-[40%] 
    bg-gradient-to-r from-transparent via-white to-transparent 
    opacity-80 blur-md
    z-10
    transform -translate-x-[150%] skew-x-12
    group-hover:translate-x-[250%]
    transition-transform duration-700 ease-in-out"
  ></span>

  {/* TEXT */}
  <span className="relative z-20 flex items-center gap-2">
    View Projects
    <ArrowDown size={16} />
  </span>
</button>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="px-6 py-2.5 text-sm font-medium rounded-md flex items-center gap-2 border border-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all duration-300"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src={profile}
            alt="Sabhya Agrahari"
            width={320}
            height={320}
            className="rounded-md object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}