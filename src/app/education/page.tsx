export default function EducationPage() {
  return (
    <section className="min-h-screen bg-[#020617] text-white px-6 py-16 md:pl-36">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10">
          Education
        </h1>

        <div className="space-y-8">

          {/* MCA */}
          <div className="p-6 md:p-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md hover:border-cyan-400/30 transition-all duration-300">

            <h3 className="text-xl font-semibold text-gray-200">
              Master of Computer Applications (MCA)
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Uttar Pradesh, India
            </p>

            <p className="text-green-400 text-sm font-medium mt-2">
              CGPA - 9.07
            </p>

            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-300 text-sm leading-6">

              <li>
                Developed <span className="text-yellow-400">Dr Care</span> — an online doctor appointment booking system.
              </li>

              <li>
                Users can book appointments, manage schedules, and access healthcare services online.
              </li>

              <li>
                Focused on backend development, database design, and scalable architecture.
              </li>

              <li>
                Improved problem-solving skills and real-world project experience.
              </li>

            </ul>
          </div>

          {/* BCA */}
          <div className="p-6 md:p-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md hover:border-cyan-400/30 transition-all duration-300">

            <h3 className="text-xl font-semibold text-gray-200">
              Bachelor of Computer Applications (BCA)
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Uttar Pradesh, India
            </p>

            <p className="text-green-400 text-sm font-medium mt-2">
              CGPA - 7.48
            </p>

            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-300 text-sm leading-6">

              <li>
                Built <span className="text-yellow-400">College Management System</span> to manage student records and academic data.
              </li>

              <li>
                Learned core concepts of programming, data structures, and web development.
              </li>

              <li>
                Gained hands-on experience with databases and CRUD operations.
              </li>

              <li>
                Developed strong foundation in software engineering principles.
              </li>

            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}