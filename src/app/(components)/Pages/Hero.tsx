"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import profile from "../../../assets/Image/portfolio.jpeg"

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "React & Next.js Developer",
    "Django REST Developer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[index];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 70);

      return () => clearTimeout(timeout);
    } else {
      const reset = setTimeout(() => {
        setCharIndex(0);
        setText("");
        setIndex((prev) => (prev + 1) % roles.length);
      }, 1500);

      return () => clearTimeout(reset);
    }
  }, [charIndex, index, roles]);

  return (
    <section  id="home" className="min-h-screen flex items-center justify-center relative px-6 py-24 bg-[#020617] text-white">
      <div className="text-center max-w-2xl">

        {/* Avatar */}
        <div className="mb-10 relative flex justify-center">
          <div className="absolute w-32 h-32 rounded-full blur-2xl bg-cyan-500 opacity-30"></div>
          <Image
            src={profile}
            alt="Sabhya"
            width={220}
            height={220}
            className="rounded-full border-4 border-cyan-400 shadow-lg shadow-cyan-500/40 relative"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I&apos;m{" "}
          <span className="text-cyan-400">Sabhya Agrahari</span>
        </h1>

        {/* Typing */}
        <h2 className="mt-6 text-lg md:text-xl text-gray-400">
          I&apos;m a{" "}
          <span className="text-cyan-400 border-r-2 border-cyan-400 pr-2 animate-pulse">
            {text}
          </span>
        </h2>

        {/* Description */}
        <p className="mt-8 text-gray-400 leading-relaxed">
          I build scalable and high-performance web applications using{" "}
          <span className="text-cyan-400">React, Next.js</span> and{" "}
          <span className="text-cyan-400">Django REST Framework</span>.
          <br />
          Passionate about clean code, strong logic, and solving real-world problems.
        </p>

        {/* Buttons - Pure Tailwind CSS */}
        <div className="mt-20 md:mt-24 flex justify-center gap-6 flex-wrap items-center">
          <a 
            href="#projects" 
            className="px-7 py-3.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 inline-block text-center no-underline bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md shadow-cyan-500/40 text-white hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/60"
          >
            View Projects
          </a>

          <a 
            href="/cv.pdf" 
            className="px-7 py-3.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 inline-block text-center no-underline border border-blue-500/30 text-gray-300 bg-transparent hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}