"use client";

import Link from "next/link";

export default function AchievementsPreview() {
  return (
    <section className="py-16 text-white bg-[#020617] px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
          Achievements
        </h2>

        <div className="border border-white/10 p-5 rounded-xl bg-white/5">
          <p className="text-gray-300">
            Improved API performance by 30% 🚀
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Optimized backend queries and implemented caching strategies.
          </p>

          <Link
            href="/achievements"
            className="inline-block mt-4 text-cyan-400 hover:underline"
          >
            View More →
          </Link>
        </div>

      </div>
    </section>
  );
}