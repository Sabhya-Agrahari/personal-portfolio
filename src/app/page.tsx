

"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { Raleway } from "next/font/google";
import ShimmerButton from "./(components)/Button";
import { GitHubLink, InstagramLink, GmailLink } from "@/utils/sociallink.util";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <section
      id="home"
      className={`${raleway.className} min-h-screen flex items-center justify-center bg-black text-white px-6`}
    >
      <div className="text-center max-w-2xl">
        
        <p className="text-xs tracking-[0.4em] text-gray-600">I AM</p>
        {/* Name */}
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          SABHYA AGRAHARI
        </h2>

        {/* Role */}
        <h2 className="mt-6 text-lg md:text-xl text-gray-400">
          Full Stack Developer
        </h2>

        {/* Short Line */}
        <p className="mt-8 text-gray-500 text-sm md:text-base">
          Building scalable web applications with clean logic & modern tech.
        </p>

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-6">

  {/* GitHub */}
  <a
    href={GitHubLink}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition"
  >
    <FaGithub size={22} />
  </a>

  {/* Gmail */}
  <a
    href={GmailLink}
    className="text-gray-400 hover:text-white transition"
  >
    <Mail size={22} />
  </a>

  {/* Instagram */}
  <a
    href={InstagramLink}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition"
  >
    <FaInstagram size={22} />
  </a>

</div>

       {/* CTA */}

 <div className="mt-12 flex justify-center gap-4 flex-wrap">
  <ShimmerButton href="#projects">
    View Projects
  </ShimmerButton>

  <ShimmerButton href="/cv.pdf" target="_blank">
    Download CV
  </ShimmerButton>
</div>

  
      </div>
    </section>
  );
}