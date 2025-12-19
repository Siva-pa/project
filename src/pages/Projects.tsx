import { ExternalLink, Github, Code2, TrendingUp, Sparkles } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Web Scraping - Acko Drive Platform',
      description:
        'Developed a fully automated scraping pipeline that extracted over 5,000 car listings with 99% accuracy. Reduced manual data-collection efforts by 95% with strong error handling and performance optimizations.',
      technologies: ['Python', 'Beautiful Soup', 'Pandas'],
      highlights: [
        '1,000+ car listings extracted',
        '99% data accuracy',
        '95% reduction in manual effort',
      ],
      icon: Code2,
    },
    {
      title: 'Registration Page',
      description:
        'Built a user-friendly registration interface with seamless front-end experience and secure backend logic, demonstrating full-stack development capabilities.',
      technologies: ['Python', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Django'],
      highlights: [
        'Secure authentication',
        'Responsive design',
        'Full-stack implementation',
      ],
      icon: Sparkles,
    },
    {
      title: 'Comprehensive Sales Dashboard',
      description:
        'Designed and implemented a Power BI dashboard to analyse sales performance, KPIs, and customer trends with interactive visualizations for data-driven decisions.',
      technologies: ['Python', 'MySQL', 'Excel', 'MS Power BI'],
      highlights: [
        'Interactive visualizations',
        'KPI tracking',
        'Data modeling & DAX measures',
      ],
      icon: TrendingUp,
    },
    {
      title: 'Machine Learning - Diabetes Prediction',
      description:
        'Built and trained ML models including Logistic Regression, Random Forest, and SVM, achieving 89% prediction accuracy with automated data pipeline for 30% faster execution.',
      technologies: ['Python', 'ML Algorithms', 'Pandas', 'NumPy'],
      highlights: [
        '89% prediction accuracy',
        '30% faster model execution',
        'Comprehensive model evaluation',
      ],
      icon: TrendingUp,
    },
    {
      title: 'Smart Transport Services',
      description:
        'Developed a web application integrating real-time location maps, traffic data, and temperature insights to enhance route planning and enable efficient travel decisions.',
      technologies: ['Python', 'HTML', 'CSS', 'JavaScript', 'Django'],
      highlights: [
        'Real-time traffic data',
        'Location mapping',
        'Route optimization',
      ],
      icon: Code2,
    },
  ];

  const internships = [
    {
      title: 'Data Science',
      company: 'Innomatics Research Labs Bengaluru',
      duration: 'May 2025- Present',
      type: 'Current'
    },
    {
      title: 'Data Analytics',
      company: 'Trainity',
      duration: 'Mar 2025 - May 2025',
      type: 'Completed'
    },
    {
      title: 'Data Analytics',
      company: 'Digital Lync',
      duration: 'Oct 2024 - Feb 2025',
      type: 'Completed',
    },
    {
      title: 'Python Full Stack Trainee Engineer',
      company: 'Palle Technologies',
      duration: 'Feb 2024 - Sep 2024',
      type: 'Completed',
    },
    {
      title: 'Global Service Desk',
      company: 'NIIT Foundation',
      duration: 'Feb 2024 - Mar 2024',
      type: 'Completed',
    },
  ];

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Projects & Experience
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A showcase of my technical projects and professional journey
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              Professional Experience
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Internships and training programs
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {internships.map((internship, index) => (
              <div
                key={index}
                className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${(projects.length + index) * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                    {internship.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      internship.type === 'Current'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {internship.type}
                  </span>
                </div>
                <p className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-2">
                  {internship.company}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500">
                  {internship.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
