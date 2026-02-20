import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  // Tech stack arrays
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {t("about.title")}
          </h2>

          {/* 1. First Block: Description & Skills */}
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mb-8">
            <p className="text-gray-300 mb-6">
              {t("about.description")}
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Frontend Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">{t("about.frontend")}</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">{t("about.backend")}</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2. Second Block: Work Experience (Full width) */}
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mb-8">
            <h3 className="text-xl font-bold mb-6">{t("about.experience.title")}</h3>
            <div className="space-y-6 text-gray-300">
              
              {/* Job 1 */}
              <div className="border-l-2 border-blue-500/30 pl-4">
                <h4 className="font-semibold text-white">
                  {t("about.experience.job1.title")}
                </h4>
                <p className="mt-2 text-sm">
                  {t("about.experience.job1.description")}
                </p>
              </div>

              {/* Job 2 */}
              <div className="border-l-2 border-blue-500/30 pl-4">
                <h4 className="font-semibold text-white">
                  {t("about.experience.job2.title")}
                </h4>
                <p className="mt-2 text-sm">
                  {t("about.experience.job2.description")}
                </p>
              </div>

            </div>
          </div>

          {/* 3. Third Block: Education (Full width) */}
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-6">{t("about.education.title")}</h3>
            <ul className="space-y-4 text-gray-300">
              {/* Degree 1 */}
              <li className="border-l-2 border-blue-500/30 pl-4">
                <strong className="text-white block mb-1">{t("about.education.degree1.title")}</strong> 
                <span className="text-sm">{t("about.education.degree1.school")}</span>
              </li>
              {/* Degree 2 */}
              <li className="border-l-2 border-blue-500/30 pl-4">
                <strong className="text-white block mb-1">{t("about.education.degree2.title")}</strong> 
                <span className="text-sm">{t("about.education.degree2.school")}</span>
              </li>
              {/* Degree 3 */}
              <li className="border-l-2 border-blue-500/30 pl-4">
                <strong className="text-white block mb-1">{t("about.education.degree3.title")}</strong> 
                <span className="text-sm">{t("about.education.degree3.school")}</span>
              </li>
            </ul>
          </div>
          
        </div>
      </RevealOnScroll>
    </section>
  );
};