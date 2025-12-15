import { Download, FileText } from 'lucide-react';

export default function Resume() {
  const resumePath = '/siva_kishore_-_resume.pdf';

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Resume
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            View and download my professional resume
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <a
            href={resumePath}
            download="Siva_Kishore_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>

        <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-slide-up">
          <div className="aspect-[8.5/11] w-full">
            <iframe
              src={resumePath}
              className="w-full h-full"
              title="Resume PDF"
            />
          </div>
        </div>

        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-3">
            <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-2">
                Professional Summary
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Python Full-Stack Developer and Data Analyst with expertise in web technologies,
                database management, and data visualization. Proven track record in building
                automated solutions, developing interactive dashboards, and implementing machine
                learning models. Strong background in Django, Power BI, and data analysis libraries
                including Pandas, NumPy, and Matplotlib.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
