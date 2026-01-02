const projects = [
  {
    title: "NAAC Accreditation Management System",
    tech: "Django • MySQL",
    description:
      "Web-based NAAC Accreditation management system to streamline institutional data collection, document uploads, automated report generation, and departmental evaluations.",
    github: "https://github.com/karthikraj431"
  },
  {
    title: "Job Portal (MERN Stack)",
    tech: "MongoDB • Express • React • Node",
    description:
      "Full-stack job portal with user authentication, role-based access for employers and candidates, job posting, and application tracking.",
    github: "https://github.com/karthikraj431"
  },
  {
    title: "WebCart – E-Commerce Application",
    tech: "MERN Stack • Tailwind CSS",
    description:
      "Feature-rich e-commerce platform with product catalog, shopping cart, checkout system, and admin dashboard for managing products and orders.",
    github: "https://github.com/karthikraj431/MERN-E-Commerce-Store"
  },
  {
    title: "PhishKit – Phishing Identifier",
    tech: "Python • Machine Learning",
    description:
      "Machine learning-based phishing website detector that classifies URLs as legitimate or malicious using feature extraction techniques.",
    github: "https://github.com/karthikraj431/Phishing"
  },
  {
    title: "NotesApp",
    tech: "MERN Stack • JWT • Tailwind CSS",
    description:
      "Secure notes application with JWT-based authentication, role-based access, and full CRUD functionality with a responsive UI.",
    github: "https://github.com/karthikraj431/Notes-App"
  }
];

export default function Projects() {
  return (
    <section className="relative z-10 pt-28 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">
              {project.title}
            </h3>

            <p className="text-sm text-blue-400 mt-1">
              {project.tech}
            </p>

            <p className="text-gray-400 mt-3">
              {project.description}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-blue-400 hover:underline"
            >
              🔗 View GitHub Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
