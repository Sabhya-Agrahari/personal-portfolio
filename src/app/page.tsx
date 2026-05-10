"use client";

import {  Code, Download, MailIcon } from "lucide-react";
import { FaGithub,  FaLinkedin } from "react-icons/fa";
import { Raleway } from "next/font/google";
import ShimmerButton from "./(components)/Button";
import { GitHubLink, GmailLink, LinkedInLink } from "../utils/sociallink.util";
import Link from "next/link";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <section
      id="home"
      className={`${raleway.className} min-h-screen bg-black text-white px-4 md:px-8 py-14 flex items-center justify-center`}
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* TOP SPACE */}
        <div className="flex items-center justify-between mb-10"></div>

        {/* MAIN CONTENT CARD */}
        <div className=" border border-white/10 rounded-3xl p-8 md:p-12 text-center transition-all duration-300 hover:border-white/20">
       

          {/* NAME */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            SABHYA  AGRAHARI
           
          </h1>

          {/* ROLE WITH SPARKLES */}
          <div className="flex items-center justify-center gap-3 mt-6 mb-6">
           
            <h2 className="text-lg md:text-xl text-gray-300">
              Full Stack Developer
            </h2>
          </div>

          {/* SHORT DESCRIPTION */}
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Building scalable web applications with clean logic, modern tech stack,
            and a passion for creating exceptional digital experiences.
          </p>

        

          {/* SOCIAL LINKS */}
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href={GitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 hover:border-white/30 hover:scale-110 transition-all duration-300 text-gray-400 hover:text-white"
            >
              <FaGithub size={20} />
            </Link>
            <Link
              href={GmailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 hover:border-white/30 hover:scale-110 transition-all duration-300 text-gray-400 hover:text-white"
            >
              <MailIcon size={20} />
            </Link>
            <Link
              href={LinkedInLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 hover:border-white/30 hover:scale-110 transition-all duration-300 text-gray-400 hover:text-white"
            >
              <FaLinkedin size={20} />
            </Link>
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            <ShimmerButton href="/projects">
              <span className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                View Projects
              </span>
            </ShimmerButton>

            <ShimmerButton href="/cv.pdf" target="_blank">
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </span>
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
}