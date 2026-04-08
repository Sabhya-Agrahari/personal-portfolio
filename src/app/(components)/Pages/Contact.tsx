"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className=" px-6 py-16 md:pl-36 bg-[#020617] text-white flex items-center"
    >
      <div className="max-w-4xl w-full mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Contact Me
          </h2>
          <FiExternalLink className="text-gray-400 text-sm" />
        </div>
    

        {/* Main Card */}
          <div 
          className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 
          transition-all duration-300
          shadow-[0_0_40px_rgba(0,212,255,0.25)] 
          border-cyan-400/20"
        >
          
          {/* Left and Right Container using Flex */}
          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            
            {/* Left Side Content - Takes remaining space */}
            <div className="flex-1 space-y-6">
              {/* Contact Details */}
              <div>
                <h3 className="text-lg text-cyan-400 font-semibold">
                  Contact Details
                </h3>
                <p className="mt-2 text-gray-300 flex items-center justify-left gap-2">
                  <FaEnvelope /> sabhyaagrahari18@gmail.com
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg text-cyan-400 font-semibold">
                  Connect with me
                </h3>

                <div className="flex justify-left gap-6 mt-3 text-xl">
                  {/* GitHub */}
                  <Link
                    href="https://github.com/sabhya-agrahari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition"
                  >
                    <FaGithub />
                  </Link>

                  {/* LinkedIn */}
                  <Link
                    href="https://www.linkedin.com/in/sabhya-agrahari-1864621a8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition"
                  >
                    <FaLinkedin />
                  </Link>

                  {/* Instagram */}
                  <Link
                    href="https://www.instagram.com/sabhya_agrahari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition"
                  >
                    <FaInstagram />
                  </Link>

                  {/* Email */}
                  <Link
                    href="mailto:sabhyaagrahari18@gmail.com"
                    className="hover:text-cyan-400 transition"
                  >
                    <FaEnvelope />
                  </Link>
                </div>
              </div>

              {/* Resume Button */}
              <div>
                <Link
                  href="/resume.pdf"
                  download
                  className="inline-block px-6 py-2 bg-cyan-400 text-black rounded-lg font-medium hover:bg-cyan-300 transition"
                >
                  Download Resume
                </Link>
              </div>

              {/* Extra Text */}
              <p className="text-gray-400 text-sm">
                Currently open to new opportunities in software development.
              </p>

              {/* CTA */}
              <div>
                <button className="mt-2 px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition">
                  Send a Message
                </button>
              </div>
            </div>

            {/* Right Side - WhatsApp Card (Width kam, Height zyada) */}
            <div className="md:w-64 lg:w-72">
              <div className="p-6 rounded-xl bg-white/10 border border-white/10 h-full flex flex-col justify-center">
                <div>
                  <p className="text-gray-200 text-sm font-medium">
                    Let&apos;s build something amazing together 🚀
                  </p>
                  <p className="text-gray-400 text-xs mt-3">
                    Currently open to new opportunities in software development and cybersecurity
                  </p>
                </div>

                {/* WhatsApp Button */}
                <Link
                  href="https://wa.me/919455956183"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-500 text-white rounded-lg font-medium hover:bg-green-400 transition mt-6"
                >
                  <FaWhatsapp className="text-lg" />
                  WhatsApp Me
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}