import { Code, Database, Wrench, BookOpen, Lightbulb } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 60 },
        { name: 'C', level: 70 },
      ],
    },
    {
      title: 'Web Technologies',
      icon: Code,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
      ],
    },
    {
      title: 'Frameworks & Tools',
      icon: Wrench,
      skills: [
        { name: 'Django', level: 85 },
        { name: 'MS Power BI', level: 80 },
        { name: 'MS Office', level: 85 },
      ],
    },
    {
      title: 'Libraries',
      icon: BookOpen,
      skills: [
        { name: 'NumPy', level: 85 },
        { name: 'Pandas', level: 90 },
        { name: 'Matplotlib', level: 80 },
        { name: 'Seaborn', level: 80 },
      ],
    },
  ];

  const softSkills = [
    'Problem Solving',
    'Decision Making',
    'Communication',
    'Interpersonal Skills',
    'Presentation Skills',
    'Team Collaboration',
    'Code Review',
    'Requirement Analysis',
    'Debugging',
  ];

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Technical Skills
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            My technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${catIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transition-all duration-1000 ease-out animate-skill-bar"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(catIndex * 100) + (skillIndex * 200)}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Soft Skills
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Core competencies that drive effective collaboration
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform duration-300" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
