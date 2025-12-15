import { Github, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl w-full">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Pasupuleti Siva Kishore
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium">
              Python Full-Stack Developer & Data Analyst
            </p>
          </div>

          <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Passionate about building innovative web applications and extracting insights from data.
            Combining expertise in full-stack development, data analysis, and visualization to drive
            impactful solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:sivakishore.pasupuleti@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/50 hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
            <button
              onClick={() => onNavigate('projects')}
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-500 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <a
              href="https://github.com/Siva-pa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sivakishore-pasupuleti-38a0a524b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="tel:9573747465"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">9573747465</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-500 pt-4">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Rayachoti, Annamayya (D.T), Andhra Pradesh</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
            <div className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">Projects</div>
            </div>
            <div className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">4</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">Internships</div>
            </div>
            <div className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">8.04</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">CGPA</div>
            </div>
            <div className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
