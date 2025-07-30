function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-8 py-16 flex items-center">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto w-full">
        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-widest text-blue-400 mb-2">
            Welcome
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Hey, I'm <span className="text-blue-500">Elionor</span>
            <br />I build web experiences.
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            I'm a software developer focused on creating fast, responsive, and
            visually appealing web applications using modern tools and
            frameworks.
          </p>
          <div className="flex space-x-4">
            <a
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
            >
              Explore Projects
            </a>
            <a
              href="/contact"
              className="border border-gray-600 hover:border-blue-500 hover:text-blue-400 text-gray-300 px-6 py-3 rounded-md font-medium transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <img
            src="/ella.jfif"
            alt="Developer illustration"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
