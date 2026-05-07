"use client";

import Image from "next/image";
import profile from "../../assets/Image/Image.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-black text-white"
    >
      <div className="max-w-5xl w-full">

        {/* 🔹 NEW PREMIUM HEADING */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.4em] text-gray-500 mb-3">
            ABOUT ME
          </p>

          <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
            SABHYA AGRAHARI
          </h1>

          <p className="text-xs tracking-[0.3em] text-gray-600 mt-2">
            BACKEND & FULL STACK DEVELOPER
          </p>
        </div>

        {/* 🔹 MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-14">

          {/* 🔹 LEFT — IMAGE */}
          <div className="flex justify-center items-start">
            <div className="sticky top-28">
              <div className="relative group">
                <div className="absolute inset-0 rounded-2xl bg-white/5 blur-xl opacity-30 group-hover:opacity-50 transition"></div>

                <Image
                  src={profile}
                  alt="Sabhya"
                  width={550}
                  height={450}
                  className="relative rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] object-cover"
                />
              </div>
            </div>
          </div>

          {/* 🔹 RIGHT — CONTENT (UNCHANGED ✅) */}
          <div className="max-w-4xl w-full">

            <div className="space-y-8 text-gray-300 text-sm md:text-base leading-7">

              {/* Intro */}
              <div className="py-6 space-y-3">
                <p>
                  I&apos;m{" "}
                  <span className="text-white font-semibold">
                    Sabhya Agrahari
                  </span>
                  , a results-driven{" "}
                  <span className="text-white">
                    Backend & Full Stack Developer
                  </span>{" "}
                  with strong expertise in{" "}
                  <span className="text-white">
                    Python, Django REST Framework, SQL, Next.js, and React.js
                  </span>.
                </p>

                <p>
                  I focus on building{" "}
                  <span className="text-white">
                    scalable, secure, and high-performance web applications
                  </span>{" "}
                  with clean architecture and optimized backend systems.
                </p>
              </div>

              {/* Experience */}
              <div className="border-t border-white/10 py-6 space-y-3">
                <p>
                  Previously worked as a{" "}
                  <span className="text-white font-medium">
                    Backend Developer at Esperance Technologies
                  </span>
                  , where I designed and developed REST APIs using{" "}
                  <span className="text-white">Django REST Framework</span>.
                </p>

                <p>
                  I improved API performance by{" "}
                  <span className="text-white">~30%</span> through query optimization
                  and caching, and implemented{" "}
                  <span className="text-white">
                    RBAC, token-based authentication, and API versioning
                  </span>.
                </p>

                <p>
                  Currently working as a{" "}
                  <span className="text-white font-medium">
                    Full Stack Developer at Ragyatech Pvt Ltd
                  </span>
                  , where I build scalable applications using{" "}
                  <span className="text-white">
                    Next.js for backend logic and React.js for frontend development
                  </span>.
                </p>

                <p>
                  I handle both API integration and UI development to deliver
                  seamless and high-performance user experiences.
                </p>
              </div>

              {/* Internship */}
              <div className="border-t border-white/10 py-6 space-y-3">
                <p>
                  During my{" "}
                  <span className="text-white">Data Science Internship</span>, I worked
                  with real-world datasets, applying{" "}
                  <span className="text-white">
                    data analysis, visualization, and machine learning
                  </span>{" "}
                  techniques to extract meaningful insights.
                </p>

                <p>
                  I also have prior experience as a{" "}
                  <span className="text-white">Java Developer Intern</span>,
                  where I contributed to building web-based systems using JSP,
                  Servlets, and MySQL.
                </p>
              </div>

              {/* Projects */}
              <div className="border-t border-white/10 py-6 space-y-3">
                <p>
                  I have built multiple real-world projects including an{" "}
                  <span className="text-white">
                    Emotion Detection System
                  </span>{" "}
                  using Deep Learning and a{" "}
                  <span className="text-white">
                    Travel Itinerary Planner API
                  </span>{" "}
                  with AI-powered recommendations.
                </p>

                <p>
                  My work also includes performance optimization, API design,
                  and handling large datasets with efficient SQL queries.
                </p>
              </div>

              {/* Mindset */}
              <div className="border-t border-white/10 py-6 space-y-3">
                <p>
                  I believe in writing{" "}
                  <span className="text-white">
                    clean, maintainable, and scalable code
                  </span>{" "}
                  and continuously improving my{" "}
                  <span className="text-white">
                    problem-solving and logical thinking
                  </span>.
                </p>

                <p>
                  My goal is to grow into a highly skilled engineer who can design
                  scalable systems and contribute to impactful, real-world products.
                </p>
              </div>

            </div>
            {/* 🔹 STATS */}
<div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10">

  <div>
    <p className="text-2xl font-semibold text-white">26</p>
    <p className="text-[10px] tracking-[0.3em] text-gray-500">
      AGE
    </p>
  </div>

  <div>
    <p className="text-2xl font-semibold text-white">2+</p>
    <p className="text-[10px] tracking-[0.3em] text-gray-500">
      YEARS CODING
    </p>
  </div>

  <div>
    <p className="text-2xl font-semibold text-white">15+</p>
    <p className="text-[10px] tracking-[0.3em] text-gray-500">
      PROJECTS
    </p>
  </div>

</div>
          </div>
        </div>
      </div>
    </section>
  );
}