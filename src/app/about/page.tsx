"use client";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-white bg-[#020617]"
    >
      <div className="max-w-4xl w-full">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            About Me
          </h2>
          <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-300 text-sm md:text-base leading-7">

          {/* Intro */}
          <div className="py-6 space-y-3">
            <p>
              I&apos;m{" "}
              <span className="text-cyan-400 font-semibold">
                Sabhya Agrahari
              </span>
              , a results-driven{" "}
              <span className="text-cyan-400">Backend & Full Stack Developer</span>{" "}
              with strong expertise in{" "}
              <span className="text-cyan-400">
                Python, Django REST Framework, SQL, Next.js, and React.js
              </span>.
            </p>

            <p>
              I focus on building{" "}
              <span className="text-cyan-400">
                scalable, secure, and high-performance web applications
              </span>{" "}
              with clean architecture and optimized backend systems.
            </p>
          </div>

                {/* Experience */}
            <div className="border-t border-white/10 py-6 space-y-3">
            <p>
                Previously worked as a{" "}
                <span className="text-cyan-400 font-medium">
                Backend Developer at Esperance Technologies
                </span>
                , where I designed and developed REST APIs using{" "}
                <span className="text-cyan-400">Django REST Framework</span>.
            </p>

            <p>
                I improved API performance by{" "}
                <span className="text-cyan-400">~30%</span> through query optimization
                and caching, and implemented{" "}
                <span className="text-cyan-400">
                RBAC, token-based authentication, and API versioning
                </span>.
            </p>

            <p>
                Currently working as a{" "}
                <span className="text-cyan-400 font-medium">
                Full Stack Developer at Ragyatech Pvt Ltd
                </span>
                , where I build scalable applications using{" "}
                <span className="text-cyan-400">
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
              <span className="text-cyan-400">Data Science Internship</span>, I worked
              with real-world datasets, applying{" "}
              <span className="text-cyan-400">
                data analysis, visualization, and machine learning
              </span>{" "}
              techniques to extract meaningful insights.
            </p>

            <p>
              I also have prior experience as a{" "}
              <span className="text-cyan-400">Java Developer Intern</span>,
              where I contributed to building web-based systems using JSP,
              Servlets, and MySQL.
            </p>
          </div>

          {/* Projects */}
          <div className="border-t border-white/10 py-6 space-y-3">
            <p>
              I have built multiple real-world projects including an{" "}
              <span className="text-cyan-400">
                Emotion Detection System
              </span>{" "}
              using Deep Learning and a{" "}
              <span className="text-cyan-400">
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
              <span className="text-cyan-400">
                clean, maintainable, and scalable code
              </span>{" "}
              and continuously improving my{" "}
              <span className="text-cyan-400">
                problem-solving and logical thinking
              </span>.
            </p>

            <p>
              My goal is to grow into a highly skilled engineer who can design
              scalable systems and contribute to impactful, real-world products.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}