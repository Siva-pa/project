import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'B. Tech in Civil Engineering',
      institution: 'Annamacharya Institute of Technology and Sciences',
      duration: '2020 - 2024',
      cgpa: '8.04',
      description: 'Focused on technical skills development while pursuing Civil Engineering. Completed multiple projects in Python full-stack development and data analytics.',
    },
    {
      degree: 'Intermediate',
      institution: 'ANM & BR Junior College',
      duration: '2018 - 2020',
      cgpa: '7.11',
      description: 'Built strong foundation in mathematics and sciences.',
    },
    {
      degree: 'SSC',
      institution: 'Sri Chaitanya School',
      duration: 'Completed 2018',
      cgpa: '9.0',
      description: 'Achieved excellent academic performance with strong fundamentals.',
    },
  ];

  const certifications = [
    'Python Full Stack - Palle Technologies',
    'Data Analytics - Digital Lync',
    'Tech-Marathon Participation Certificate',
    'Global Service Desk - NIIT Foundation',
    'Python & Java - HackerRank',
  ];

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Education
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            My academic journey and achievements
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
                <div className="flex md:flex-col gap-4 md:items-end">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{edu.duration}</span>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-bold shadow-lg">
                    CGPA: {edu.cgpa}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              Certifications
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Professional certifications and achievements
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <Award className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
