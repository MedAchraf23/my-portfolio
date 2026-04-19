import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";
import orangeLogo from "../../assets/Orange_logo.png";
import provencaleLogo from "../../assets/Provencale_logo.png";
import uhaLogo from "../../assets/UHA_logo.png";
import uc2Logo from "../../assets/UC2_logo.png";

export const About = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      key: "backend",
      skills: ["Java (Spring Boot)", "C# (.NET)", "Python (Flask)", "PHP (Laravel)"],
    },
    {
      key: "frontend",
      skills: ["JavaScript", "React", "Vue.js", "HTML/CSS", "Tailwind CSS"],
    },
    {
      key: "architecture",
      skills: ["REST API", "Clean Architecture", "MVC", "Microservices", "Agile/Scrum"],
    },
    {
      key: "devops",
      skills: ["Git", "GitLab CI/CD", "Docker", "Jira"],
    },
    {
      key: "database",
      skills: ["MySQL", "PostgreSQL", "SQLite"],
    },
  ];

  const experiences = [
    {
      key: "job1",
      logo: orangeLogo,
      logoAlt: "Orange",
      website: "https://www.orange.com/",
    },
    {
      key: "job2",
      logo: provencaleLogo,
      logoAlt: "Provençale SA",
      website: "https://www.provencale.com/",
    },
  ];

  const educations = [
    {
      key: "degree1",
      logo: uhaLogo,
      logoAlt: "UHA",
      website: "https://www.uha.fr/",
    },
    {
      key: "degree2",
      logo: uhaLogo,
      logoAlt: "UHA",
      website: "https://www.uha.fr/",
    },
    {
      key: "degree3",
      logo: uc2Logo,
      logoAlt: "Université Abdelhamid Mehri",
      website: "https://www.univ-constantine2.dz/",
    },
  ];

  return (
    <section
      id="about"
      className="flex items-center justify-center py-20 md:py-28"
    >
      <RevealOnScroll>
        <div className="w-11/12 md:w-4/5 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-accent text-center tracking-wide">
            {t("about.title")}
          </h2>

          {/* 1. First Block: Description & Skills */}
          <div className="rounded-xl p-8 bg-[#262626] border border-white/5 hover:-translate-y-1 transition-all mb-12">
            <p className="text-white mb-6 leading-relaxed">
              {t("about.description")}
            </p>

            {/* Ligne 1 : 3 catégories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {skillCategories.slice(0, 3).map(({ key, skills }) => (
                <div key={key} className="rounded-xl p-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-accent-soft text-center">
                    {t(`about.skills.${key}`)}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {skills.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-accent/10 text-accent py-1 px-3 rounded-full text-base hover:bg-accent/20 hover:shadow-[0_2px_8px_rgba(210,180,140,0.25)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* Ligne 2 : 2 catégories centrées */}
            <div className="flex flex-col md:flex-row justify-center gap-6">
              {skillCategories.slice(3).map(({ key, skills }) => (
                <div key={key} className="rounded-xl p-6 md:w-1/3">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-accent-soft text-center">
                    {t(`about.skills.${key}`)}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {skills.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-accent/10 text-accent py-1 px-3 rounded-full text-base hover:bg-accent/20 hover:shadow-[0_2px_8px_rgba(210,180,140,0.25)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Work Experience */}
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-accent-soft text-center">
            {t("about.experience.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
            {experiences.map(({ key, logo, logoAlt, website }) => (
              <div
                key={key}
                className="rounded-xl p-6 bg-[#262626] border border-white/5 hover:-translate-y-1 transition-all flex flex-col items-start text-left"
              >
                <h4 className="text-xl font-semibold text-accent mb-2">
                  {t(`about.experience.${key}.title`)}
                </h4>
                <p className="text-accent-light italic font-normal mb-3">
                  {t(`about.experience.${key}.company`)}
                </p>
                <p className="whitespace-pre-line text-white text-base mb-4 leading-relaxed">
                  {t(`about.experience.${key}.description`)}
                </p>
                <span className="text-accent-soft text-sm mb-3">
                  {t(`about.experience.${key}.period`)}
                </span>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {t(`about.experience.${key}.tools`)
                    .split(", ")
                    .map((tool, i) => (
                      <span
                        key={i}
                        className="bg-accent/10 text-accent py-0.5 px-2 rounded-full text-xs hover:bg-accent/20 hover:shadow-[0_2px_8px_rgba(210,180,140,0.25)] transition"
                      >
                        {tool}
                      </span>
                    ))}
                </div>
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${logoAlt} — site officiel`}
                  className="mt-auto cursor-pointer hover:opacity-100 hover:scale-105 transition-all"
                >
                  <img
                    src={logo}
                    alt={logoAlt}
                    className="h-14 w-auto object-contain opacity-90"
                  />
                </a>
              </div>
            ))}
          </div>

          {/* 3. Education */}
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-accent-soft text-center">
            {t("about.education.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {educations.map(({ key, logo, logoAlt, website }) => (
              <div
                key={key}
                className="rounded-xl p-6 bg-[#262626] border border-white/5 hover:-translate-y-1 transition-all flex flex-col items-start text-left"
              >
                <h4 className="text-xl font-semibold text-accent mb-2">
                  {t(`about.education.${key}.title`)}
                </h4>
                <p className="text-accent-light italic font-normal mb-4">
                  {t(`about.education.${key}.school`)}
                </p>
                <span className="text-accent-soft text-sm mb-4">
                  {t(`about.education.${key}.period`)}
                </span>
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${logoAlt} — site officiel`}
                  className="mt-auto cursor-pointer hover:opacity-100 hover:scale-105 transition-all"
                >
                  <img
                    src={logo}
                    alt={logoAlt}
                    className="h-14 w-auto object-contain opacity-90"
                  />
                </a>
              </div>
            ))}
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
