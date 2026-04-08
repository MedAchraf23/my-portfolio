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
      className="flex items-center justify-center py-28"
    >
      <RevealOnScroll>
        <div className="w-4/5 max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
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
                <h3 className="text-3xl font-bold mb-4">{t("about.frontend")}</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-base hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-3xl font-bold mb-4">{t("about.backend")}</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-base hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2. Second Block: Work Experience */}
          <h3 className="text-3xl font-bold mb-6">{t("about.experience.title")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {["job1", "job2"].map((job) => (
              <div
                key={job}
                className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all"
              >
                <h4 className="text-xl font-semibold text-blue-500 mb-2">
                  {t(`about.experience.${job}.title`)}
                </h4>
                <p className="text-white font-medium mb-2">
                  {t(`about.experience.${job}.company`)}
                </p>
                <p className=" whitespace-pre-line text-gray-400 text-base mb-4">
                  {t(`about.experience.${job}.description`)}
                </p>
                <span className="text-blue-400 text-sm">
                  {t(`about.experience.${job}.period`)}
                </span>
              </div>
            ))}
          </div>

          {/* 3. Third Block: Education */}
          <h3 className="text-3xl font-bold mb-6">{t("about.education.title")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["degree1", "degree2", "degree3"].map((deg) => (
              <div
                key={deg}
                className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all"
              >
                <h4 className="text-xl font-semibold text-blue-500 mb-2">
                  {t(`about.education.${deg}.title`)}
                </h4>
                <p className="text-white font-medium mb-4">
                  {t(`about.education.${deg}.school`)}
                </p>
                <span className="text-blue-400 text-sm">
                  {t(`about.education.${deg}.period`)}
                </span>
              </div>
            ))}
          </div>
          
        </div>
      </RevealOnScroll>
    </section>
  );
};