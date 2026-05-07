"use client";

export default function EducationPage() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto flex">

        {/* 🔹 LEFT TIMELINE LINE */}
        <div className="relative mr-10 hidden md:block">
          <div className="absolute left-2 top-0 bottom-0 w-[px] bg-white/10"></div>
        </div>

        {/* 🔹 RIGHT CONTENT */}
        <div className="flex-1">

          {/* 🔹 HEADING (same style as image) */}
          <div className="mb-16">
            <p className="text-xs tracking-[0.4em] text-gray-500 mb-3">
              ACADEMIC HISTORY
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-wide text-white">
              EDUCATION
            </h1>

            <p className="text-xs tracking-[0.3em] text-gray-600 mt-3">
              WHAT I’VE LEARNED AND BUILT
            </p>
          </div>

          {/* 🔹 ITEMS */}
          <div className="space-y-16">

            {/* 🔸 MCA */}
            <div className="relative">

              {/* dot */}
              <div className="absolute -left-[34px] top-2 w-3 h-3 border border-white/30 bg-black"></div>

              <p className="text-xs tracking-[0.3em] text-gray-500 mb-2">
                2019 — 2021
              </p>

              <h3 className="text-2xl font-semibold">
                MASTER OF COMPUTER APPLICATIONS
              </h3>

              <p className="text-sm tracking-[0.2em] text-gray-400 mt-1">
                UTTAR PRADESH, INDIA
              </p>

              <p className="text-sm text-white mt-2">
                CGPA — 9.07
              </p>

              <ul className="mt-6 space-y-3 text-gray-400 text-sm leading-6">
                <li>— Developed Dr Care — doctor appointment system</li>
                <li>— Built scalable backend & database systems</li>
                <li>— Focused on performance and architecture</li>
                <li>— Strengthened real-world problem solving</li>
              </ul>
            </div>

            {/* 🔸 BCA */}
            <div className="relative">

              {/* dot */}
              <div className="absolute -left-[34px] top-2 w-3 h-3 border border-white/30 bg-black"></div>

              <p className="text-xs tracking-[0.3em] text-gray-500 mb-2">
                2016 — 2019
              </p>

              <h3 className="text-2xl font-semibold">
                BACHELOR OF COMPUTER APPLICATIONS
              </h3>

              <p className="text-sm tracking-[0.2em] text-gray-400 mt-1">
                UTTAR PRADESH, INDIA
              </p>

              <p className="text-sm text-white mt-2">
                CGPA — 7.02
              </p>

              <ul className="mt-6 space-y-3 text-gray-400 text-sm leading-6">
                <li>— Built College Management System</li>
                <li>— Learned core programming & DSA</li>
                <li>— Hands-on database & CRUD operations</li>
                <li>— Strong software engineering foundation</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}