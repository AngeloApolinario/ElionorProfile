function Projects() {
  const projects = [
    {
      title: "HealthyPaws",
      description:
        "A veterinary appointment booking system for pet owners. Built with Android (Java) and Firebase. Features include appointment scheduling, profile management, and real-time updates.",
      image: "/healthypaws.png",
      link: "https://github.com/AngeloApolinario/HealthyPaws",
    },
    {
      title: "VNHS Record Management System",
      description:
        "A document request and approval system for a high school, built using Laravel and Tailwind. Supports multiple user roles, dashboard reports, and document recycling confirmation.",
      image: "/Vnhslogin.png",
      link: "https://github.com/AngeloApolinario/VNHS-Record-Management",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
