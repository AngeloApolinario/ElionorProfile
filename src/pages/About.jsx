function About() {
  return (
    <section className="min-h-screen bg-black text-gray-200 px-8 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-blue-500">About Me</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="mb-6 text-lg text-gray-300 leading-relaxed">
              Hey! I'm{" "}
              <span className="text-white font-medium">Elionor Oliveros</span>
              , a passionate software developer with a love for crafting modern
              and user-focused web applications.
              <br />
              <br />I enjoy solving real-world problems through clean code,
              sharp interfaces, and simple interactions. Whether it’s a personal
              project or a team collaboration, I bring dedication and curiosity
              to everything I do.
            </p>
            <p className="text-gray-400">
              Currently exploring:
              <ul className="list-disc ml-5 mt-2">
                <li>React and component-driven UI design</li>
                <li>Backend with Node.js and Firebase</li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Skills & Tools
            </h3>
            <div className="grid grid-cols-2 gap-3 text-gray-300">
              <span>✔️ JavaScript</span>
              <span>✔️ React</span>
              <span>✔️ Tailwind CSS</span>
              <span>✔️ Git & GitHub</span>
              <span>✔️ PHP & MySQL</span>
              <span>✔️ Laravel</span>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Journey</h3>
          <ul className="border-l-2 border-blue-500 pl-6 space-y-6">
            <li>
              <span className="text-blue-400 font-semibold">
                Third Year - Present
              </span>
              <p className="text-gray-300">Exploring React ecosystem deeply.</p>
            </li>
            <li>
              <span className="text-blue-400 font-semibold">Second Year</span>
              <p className="text-gray-300">
                Started working with Laravel, Firebase, and built a capstone app
                called "HealthyPaws" for veterinary appointments.
              </p>
            </li>
            <li>
              <span className="text-blue-400 font-semibold">First Year</span>
              <p className="text-gray-300">
                First dived into web development, HTML/CSS/JavaScript
                foundations.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
