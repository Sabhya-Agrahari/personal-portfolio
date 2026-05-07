"use client";

import ShimmerButton from "../(components)/Button";

export default function ExperiencePage() {
  return (
   <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto flex">

        {/* 🔹 LEFT TIMELINE LINE */}
        <div className="relative mr-10 hidden md:block">
          <div className="absolute left-2 top-0 bottom-0 w-[1px] bg-white/10"></div>
        </div>

        {/* 🔹 RIGHT CONTENT */}
        <div className="flex-1">

          {/* 🔹 HEADING (same style as image) */}
          <div className="mb-16">
            <p className="text-xs tracking-[0.4em] text-gray-500 mb-3">
              WORK HISTORY
            </p>

            <h2 className="text-5xl md:text-7xl font-bold tracking-wide text-white">
              EXPERIENCE
            </h2>

            <p className="text-xs tracking-[0.3em] text-gray-600 mt-3">
              WHAT I’VE SHIPPIED AND WHERE
            </p>
          </div>

          {/* 🔹 ITEMS */}
          <div className="space-y-16">

          {/* 🔸 Ragyatech */}
             <div className="relative">

              {/* dot */}
              <div className="absolute -left-[34px] top-2 w-3 h-3 border border-white/30 bg-black"></div>


            <p className="text-[10px] tracking-[0.3em] text-gray-500 mb-2">
              SEP 2025 — PRESENT
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-white">
              RAGYATECH PVT LTD
            </h3>

            <p className="text-gray-500 text-xs tracking-wide mb-3">
              FULL STACK DEVELOPER
            </p>

            <ul className="space-y-2 text-gray-300 text-sm leading-6">
              <li>— Built and deployed full stack applications using Next.js & React.js</li>
              <li>— Managed backend logic, API integrations, and UI development</li>
              <li>— Delivered scalable, high-performance applications</li>
            </ul>
            <div className="mt-6 flex justify-left gap-2 flex-wrap">
            <ShimmerButton href="https://ragyatech.in/">
                Official Website
              </ShimmerButton>
              </div>
          </div>

          {/* 🔸 Esperance */}
             <div className="relative">

              {/* dot */}
              <div className="absolute -left-[34px] top-2 w-3 h-3 border border-white/30 bg-black"></div>
 
            <p className="text-[10px] tracking-[0.3em] text-gray-500 mb-2">
              SEP 2024 — SEP 2025
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-white">
              ESPERANCE TECHNOLOGIES
            </h3>

            <p className="text-gray-500 text-xs tracking-wide mb-3">
              BACKEND DEVELOPER (DJANGO REST)
            </p>

            <ul className="space-y-2 text-gray-300 text-sm leading-6">
              <li>— Developed scalable REST APIs using Django REST Framework</li>
              <li>— Improved performance using query optimization & caching</li>
              <li>— Implemented RBAC, authentication & API versioning</li>
            </ul>

            <div className="mt-6 flex justify-left gap-2 flex-wrap">
            <ShimmerButton href="http://esperancetech.com/">
                Official Website
              </ShimmerButton>
              </div>
          </div>

          {/* 🔸 NullClass */}
             <div className="relative">

              {/* dot */}
              <div className="absolute -left-[34px] top-2 w-3 h-3 border border-white/30 bg-black"></div>
  
            <p className="text-[10px] tracking-[0.3em] text-gray-500 mb-2">
              MAY 2024 — AUG 2024
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-white">
              NULLCLASS
            </h3>

            <p className="text-gray-500 text-xs tracking-wide mb-3">
              DATA SCIENCE INTERN
            </p>

            <ul className="space-y-2 text-gray-300 text-sm leading-6">
              <li>— Worked on real-world datasets using Python</li>
              <li>— Performed data analysis & visualization</li>
              <li>— Used Pandas & Matplotlib for insights</li>
            </ul>
            
            <div className="mt-6 flex justify-left gap-2 flex-wrap">
            <ShimmerButton href="https://www.nullclass.com/">
                Official Website
              </ShimmerButton>
              </div>
            
          </div>

          {/* 🔸 Internshala */}
             <div className="relative">
              {/* dot */}
              <div className="absolute -left-[34px] top-2 w-3 h-3 border border-white/30 bg-black"></div>
            <p className="text-[10px] tracking-[0.3em] text-gray-500 mb-2">
              APRIL 2024
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-white">
              INTERNSHALA
            </h3>

            <p className="text-gray-500 text-xs tracking-wide mb-3">
              DATA SCIENCE TRAINING (8 WEEKS)
            </p>

            <ul className="space-y-2 text-gray-300 text-sm leading-6">
              <li>— Completed certified Data Science training</li>
              <li>— Learned Python, ML basics & data analysis</li>
              <li>— Built real-world mini projects</li>
            </ul>

             <div className="mt-6 flex justify-left gap-2 flex-wrap">
            <ShimmerButton href="https://internshala.com/">
                Official Website
              </ShimmerButton>
              </div>

          </div>

        </div>
      </div>
      </div>
    </section>
  );
}