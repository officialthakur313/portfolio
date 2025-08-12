import React from "react";

// Abhishek Panwar - Single-file React portfolio component
// Built with Tailwind CSS utility classes (no external styles required here)
// Usage: Drop into a React app (Create React App / Vite). Tailwind must be configured in the project.

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">AP</div>
            <div>
              <h1 className="text-lg font-semibold">Abhishek Panwar</h1>
              <p className="text-sm text-gray-500">PL/SQL Developer</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-4 text-sm">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#experience" className="hover:text-indigo-600">Experience</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* Hero */}
        <section className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Hi — I'm Abhishek.</h2>
            <p className="mt-4 text-gray-700 max-w-2xl">
              PL/SQL Developer with 2.5 years of hands-on experience building high-performance Oracle database
              solutions, optimizing complex queries, and automating reporting pipelines. I enjoy turning messy data
              into reliable, fast systems that power product features and analytics.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              >
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Location</p>
                <p className="font-medium">Meerut, UP, India</p>
              </div>
              <div>
                <p className="text-gray-500">Email</p>
                <p className="font-medium">abhishekpanwar8090@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-500">Phone</p>
                <p className="font-medium">+91 86300 52490</p>
              </div>
            </div>
          </div>

          <aside className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-36 h-36 rounded-full bg-gray-100 flex items-center justify-center text-4xl font-bold text-gray-400">AP</div>
              <div>
                <p className="text-gray-500 text-sm">Open to:</p>
                <p className="font-medium">PL/SQL Development · DB Optimization · Reporting Automation</p>
              </div>
            </div>
          </aside>
        </section>

        {/* About */}
        <section id="about" className="mt-12">
          <h3 className="text-2xl font-semibold">About Me</h3>
          <p className="mt-3 text-gray-700">
            I'm a database-first engineer who loves writing clean, efficient PL/SQL and solving performance problems.
            With experience at Qryde by HBSS and Saral ERP Solutions, I've worked on ride-booking backend logic, fare
            calculations, and automated reporting systems. I enjoy collaborating with product and operations teams to
            convert real business requirements into reliable, maintainable database code.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-10">
          <h3 className="text-2xl font-semibold">Technical Skills</h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              'Oracle PL/SQL',
              'SQL & Query Tuning',
              'Oracle 12c/23c',
              'SQL Developer',
              'HTML & CSS',
              'MS Excel & Reporting'
            ].map((s) => (
              <div key={s} className="rounded-md bg-white p-3 border flex items-center justify-center text-sm">
                {s}
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-10">
          <h3 className="text-2xl font-semibold">Experience</h3>
          <div className="mt-4 space-y-6">
            <article className="bg-white p-5 rounded-lg border">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">PL/SQL Developer — Qryde by HBSS</h4>
                  <p className="text-sm text-gray-500">Dec 2022 – Present · Gurgaon, India</p>
                </div>
                <p className="text-sm text-gray-500">Full-time</p>
              </div>

              <ul className="mt-3 list-disc ml-5 text-gray-700">
                <li>Developed and maintained PL/SQL scripts and packages for backend processing.</li>
                <li>Improved system reliability by optimizing complex SQL queries.</li>
                <li>Created automated reporting systems and performance reports using PL/SQL and Excel.</li>
              </ul>
            </article>

            <article className="bg-white p-5 rounded-lg border">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">PL/SQL Intern — Saral ERP Solutions</h4>
                  <p className="text-sm text-gray-500">Jan 2021 – Apr 2021 · Meerut, India</p>
                </div>
                <p className="text-sm text-gray-500">Internship</p>
              </div>

              <ul className="mt-3 list-disc ml-5 text-gray-700">
                <li>Assisted in writing and testing PL/SQL procedures for ERP modules.</li>
                <li>Performed data analysis and supported migration and deployment of backend modules.</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-10">
          <h3 className="text-2xl font-semibold">Projects</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg border">
              <h4 className="font-semibold">Ride Booking Software – RTD Denver</h4>
              <p className="text-sm text-gray-500">Dec 2024 – Present</p>
              <p className="mt-3 text-gray-700">
                Designed backend PL/SQL logic for trip, user, and payment management. Optimized fare calculation and
                trip analytics through efficient queries and created automated performance reports for business
                intelligence.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://rtd.hbssweb.com/portal/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-3 py-2 rounded-md border text-sm"
                >
                  View Portal
                </a>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg border">
              <h4 className="font-semibold">Automation & Reporting</h4>
              <p className="text-sm text-gray-500">Internal projects</p>
              <p className="mt-3 text-gray-700">
                Built automated reports and dashboards by combining PL/SQL and Excel exports to help stakeholders
                monitor system health and business KPIs.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mt-10">
          <h3 className="text-2xl font-semibold">Education</h3>
          <div className="mt-4 bg-white p-5 rounded-lg border">
            <p className="font-medium">B.Tech in Computer Science</p>
            <p className="text-sm text-gray-500">College of Engineering & Rural Technology, Meerut · 2018 – 2022</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-10 mb-16 grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h3 className="text-2xl font-semibold">Get in touch</h3>
            <p className="mt-3 text-gray-700">I'm available for PL/SQL development, performance tuning, and short-term consultations.</p>

            <ul className="mt-4 text-sm space-y-2">
              <li>
                <strong>Email:</strong> <a className="text-indigo-600" href="mailto:abhishekpanwar8090@gmail.com">abhishekpanwar8090@gmail.com</a>
              </li>
              <li>
                <strong>Phone:</strong> <a className="text-indigo-600" href="tel:+918630052490">+91 86300 52490</a>
              </li>
              <li>
                <strong>LinkedIn:</strong> <a className="text-indigo-600" href="https://www.linkedin.com/in/abhishek" target="_blank" rel="noreferrer">/in/abhishek</a>
              </li>
            </ul>
          </div>

          <form className="bg-white p-6 rounded-lg border shadow-sm">
            <label className="block text-sm font-medium">Name</label>
            <input className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Your name" />

            <label className="block text-sm font-medium mt-4">Email</label>
            <input className="mt-1 w-full rounded-md border px-3 py-2" placeholder="you@domain.com" />

            <label className="block text-sm font-medium mt-4">Message</label>
            <textarea className="mt-1 w-full rounded-md border px-3 py-2 h-28" placeholder="How can I help?" />

            <div className="mt-4 flex justify-end">
              <button type="button" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Send</button>
            </div>
          </form>
        </section>

        <footer className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Abhishek Panwar — Built with React + Tailwind
        </footer>
      </main>
    </div>
  );
}
