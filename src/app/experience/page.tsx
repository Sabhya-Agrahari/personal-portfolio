export default function ExperiencePage() {
  return (
    <section className="min-h-screen bg-[#020617] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-cyan-400 mb-10">
          Experience
        </h1>

        <div className="space-y-6">

          {/* Current Job */}
          <div className="p-6 border border-cyan-400/30 rounded-xl bg-white/5">
            <h3 className="text-xl font-semibold">
              Ragyatech Pvt Ltd
            </h3>
            <p className="text-gray-400 mt-1">
              Full Stack Developer | Sep 2025 – Present
            </p>
            <p className="text-gray-300 mt-2">
              Working on Next.js (backend) and React.js (frontend) to build scalable
              and high-performance web applications.
            </p>
          </div>

          {/* Esperance */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5">
            <h3 className="text-xl font-semibold">
              Esperance Technologies
            </h3>
            <p className="text-gray-400 mt-1">
              Backend Developer (Django REST Framework) | Sep 2024 – Sep 2025
            </p>
            <p className="text-gray-300 mt-2">
              Developed REST APIs, improved performance, and implemented RBAC,
              authentication systems, and optimized database queries.
            </p>
          </div>

          {/* NullClass */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5">
            <h3 className="text-xl font-semibold">
              NullClass
            </h3>
            <p className="text-gray-400 mt-1">
              Data Science Intern | May 2024 – Aug 2024
            </p>
            <p className="text-gray-300 mt-2">
              Worked on real-world datasets, data analysis, and visualization
              using Python libraries like Pandas and Matplotlib.
            </p>
          </div>

          {/* Internshala */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5">
            <h3 className="text-xl font-semibold">
                Internshala (Online Training)
            </h3>
            <p className="text-gray-400 mt-1">
                Data Science Training | 8 Weeks | April 2024
            </p>
            <p className="text-gray-300 mt-2">
                Successfully completed a certified training program covering Python,
                data analysis, machine learning fundamentals, and real-world projects.
            </p>
            </div>

        </div>

      </div>
    </section>
  );
}