"use client";

import Image from "next/image";
import profile from "../../assets/Image/Image.jpg";
import {
  ArrowUpRight,
  Sparkles,
  GraduationCap,
  User,
} from "lucide-react";
import {
  GitHubLink,
  InstagramLink,
  LinkedInLink
} from "../../utils/sociallink.util";
import { SocialIcon } from "react-social-icons";


export default function About() {

    const socials = [
    { url: GitHubLink, label: "github" },
    { url: LinkedInLink, label: "linkedin" },
    { url: InstagramLink, label: "instagram" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-4 md:px-8 py-14"
    >
      <div className="max-w-5xl mx-auto">

        {/* TOP SPACE */}
        <div className="flex items-center justify-between mb-10"></div>

        {/* ABOUT HEADER */}
        <div className="flex items-center gap-3 mb-12">
          <h1 className="text-xl md:text-3xl font-bold tracking-wide">
            ABOUT ME
          </h1>
        </div>

        <p className="text-gray-400 leading-8 max-w-3xl text-sm md:text-base mb-14">
          Get to know more about my background, education, and professional journey
          as a Full Stack Developer passionate about building scalable solutions.
        </p>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">

          {/* LEFT SIDE */}
          <div className="md:col-span-4 flex flex-col gap-5">

            {/* PROFILE CARD */}
            <div className="bg-[#080808] border border-white/10 rounded-3xl p-5">

              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={profile}
                  alt="Sabhya"
                  className="w-full h-[340px] object-cover rounded-2xl transition duration-500 hover:scale-[1.02]"
                />
              </div>

              <div className="mt-5">
                <p className="text-xs tracking-[0.3em] text-gray-500 mb-2">
                  FULL STACK DEVELOPER
                </p>

                <h2 className="text-2xl font-semibold">
                  Sabhya Agrahari
                </h2>

                <p className="text-sm text-gray-400 mt-3 leading-6">
                  Backend & Full Stack Developer specializing in Python,
                  Django REST Framework, React.js, Next.js and scalable
                  backend architecture.
                </p>
              </div>
            </div>

            {/* EDUCATION */}
            <div className="bg-[#080808] border border-white/10 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-5 h-5 text-gray-400" />
                <p className="text-xs tracking-[0.3em] text-gray-500">
                  EDUCATION
                </p>
                <GraduationCap className="w-5 h-5 text-gray-400" />
              </div>

              <div className="space-y-7">

                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    2019 - 2021
                  </p>

                  <h3 className="text-lg font-medium">
                    Master of Computer Applications
                  </h3>

                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm text-gray-400">
                      MCA Graduate
                    </p>

                    <span className="text-sm text-white font-medium">
                      9.07 CGPA
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    2016 - 2019
                  </p>

                  <h3 className="text-lg font-medium">
                    Bachelor of Computer Applications
                  </h3>

                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm text-gray-400">
                      BCA Graduate
                    </p>

                    <span className="text-sm text-white font-medium">
                      7.02 CGPA
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* EXPERIENCE CARD */}
            <div className="bg-[#080808] border border-white/10 rounded-3xl p-6">
             <div className="space-y-8">

              <div className="flex items-center justify-between gap-6">

                {/* EXPERIENCE */}
                <div>
                  <h2 className="text-4xl font-bold mb-2">
                    02+
                  </h2>

                  <p className="text-sm text-gray-400 leading-6">
                    Years Of <br /> Experience
                  </p>
                </div>

                {/* DIVIDER */}
                <div className="h-16 w-px bg-white/10" />

                {/* PROJECTS */}
                <div>
                  <h2 className="text-4xl font-bold mb-2">
                    10+
                  </h2>

                  <p className="text-sm text-gray-400 leading-6">
                    Projects <br /> Completed
                  </p>
                </div>

              </div>
            </div>
            </div>
            </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-8 flex flex-col gap-5">

            {/* SELF SUMMARY */}
            <div className="bg-[#080808] border border-white/10 rounded-3xl p-7 relative overflow-hidden">

              <div className="absolute top-0 right-0 w-52 h-52 rounded-full" />

              <div className="relative z-10">

                <div className="flex items-center gap-3 mb-6">
                  <h1 className="text-xl md:text-2xl font-bold tracking-wide">
                    SELF-SUMMARY
                  </h1>
                </div>

                <div className="space-y-5 text-gray-400 leading-8 text-sm md:text-base">

                  <p>
                    I&apos;m{" "}
                    <span className="text-white font-medium">
                      Sabhya Agrahari
                    </span>
                    , a results-driven{" "}
                    <span className="text-white">
                      Backend & Full Stack Developer
                    </span>{" "}
                    specializing in{" "}
                    <span className="text-white">
                      Python, Django REST Framework, SQL, React.js, and
                      Next.js
                    </span>.
                  </p>

                  <p>
                    I focus on building{" "}
                    <span className="text-white">
                      scalable, secure, and high-performance web applications
                    </span>{" "}
                    with clean backend architecture, optimized APIs, and
                    seamless frontend experiences.
                  </p>

                  <p>
                    Previously, I worked as a{" "}
                    <span className="text-white">
                      Backend Developer at Esperance Technologies
                    </span>
                    , where I developed REST APIs using{" "}
                    <span className="text-white">
                      Django REST Framework
                    </span>{" "}
                    and improved performance through query optimization,
                    caching, RBAC implementation, token-based authentication,
                    and API versioning.
                  </p>

                  <p>
                    Currently, I&apos;m working as a{" "}
                    <span className="text-white">
                      Full Stack Developer at Ragyatech Pvt Ltd
                    </span>
                    , where I build scalable applications using{" "}
                    <span className="text-white">
                      Next.js, React.js, and backend-driven architectures
                    </span>.
                  </p>

                  <p>
                    During my{" "}
                    <span className="text-white">
                      Data Science Internship
                    </span>
                    , I worked with real-world datasets and applied{" "}
                    <span className="text-white">
                      machine learning, data analysis, and visualization
                    </span>{" "}
                    techniques to extract meaningful insights.
                  </p>

                  <p>
                    I also gained experience as a{" "}
                    <span className="text-white">
                      Java Developer Intern
                    </span>
                    , where I worked with{" "}
                    <span className="text-white">
                      JSP, Servlets, and MySQL
                    </span>{" "}
                    for web-based application development.
                  </p>

                  <p>
                    Some of my major projects include an{" "}
                    <span className="text-white">
                      Emotion Detection System
                    </span>{" "}
                    using Deep Learning and an{" "}
                    <span className="text-white">
                      AI-powered Travel Itinerary Planner API
                    </span>.
                  </p>

                  <p>
                    I believe in writing{" "}
                    <span className="text-white">
                      clean, maintainable, and scalable code
                    </span>{" "}
                    while continuously improving my problem-solving ability,
                    logical thinking, and system design skills.
                  </p>

                </div>
              </div>
            </div>

            {/* COMBINED CARD */}
            <div className="bg-[#080808] border border-white/10 rounded-3xl p-3.5 flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden">

              <div className="absolute -top-10 -right-10 w-40 h-40 blur-3xl rounded-full" />

              {/* LEFT */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <p className="text-xs tracking-[0.3em] text-gray-500">
                    CONNECT WITH ME
                  </p>
                </div>

               <div className="flex justify-center gap-2">
                 {socials.map((s) => (
                   <SocialIcon
                     key={s.label}
                     url={s.url}
                     target="_blank"
                     style={{ height: 40, width: 40 }}
                     bgColor="transparent"
                     className="hover:scale-110 transition-transform duration-300"
                   />
                 ))}
               </div>
              </div>

              {/* CENTER */}
              <div className="flex-1 md:px-8 p-7">
                <p className="text-4xl md:text-5xl font-light leading-tight">
                  Let&apos;s 
                  work <span className="text-blue-500">together.</span>
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}