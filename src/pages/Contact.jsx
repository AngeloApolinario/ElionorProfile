import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

function Contact() {
  return (
    <section className="min-h-screen bg-gray-950 text-gray-100 px-8 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-500">Get in Touch</h2>
        <p className="text-lg text-gray-400 mb-12">
          Feel free to reach out — whether you have a question, a project, or
          just want to connect.
        </p>
        

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-500" />
              <span className="text-gray-300">
                vefe.godoy.au@mail.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-500" />
              <span className="text-gray-300">09647649527</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-500" />
              <span className="text-gray-300">
                San Josef Sur, Cabanatuan City, Nueva Ecija
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Github className="text-blue-500" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                github.com/ElionorOliveros
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
