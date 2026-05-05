import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import project1Img from "../../assets/projects/project1.png";
import project2Img from "../../assets/projects/project2.png";
import project3Img from "../../assets/projects/project3.png";

export const Projects = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      key: "project1",
      image: project1Img,
      github: "https://github.com/MedAchraf23",
    },
    {
      key: "project2",
      image: project2Img,
      github: "https://github.com/MedAchraf23",
    },
    {
      key: "project3",
      image: project3Img,
      github: "https://github.com/MedAchraf23",
    },
  ];

  const current = projects[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="projects"
      className="flex items-center justify-center py-20 md:py-28"
    >
      <RevealOnScroll>
        <div className="w-11/12 md:w-4/5 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold pb-14 text-accent text-center tracking-wide">
            {t("projects.title")}
          </h2>

          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Left column — Project info */}
            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl md:text-4xl font-semibold text-accent-soft mb-6">
                  {t(`projects.${current.key}.name`)}
                </h3>
                <p className="text-white text-base leading-relaxed mb-8">
                  {t(`projects.${current.key}.description`)}
                </p>
                <p className="text-accent text-base font-medium">
                  {t(`projects.${current.key}.tools`)}
                </p>
              </div>

              <div className="mt-10">
                <hr className="border-white/10 mb-6" />
                <a
                  href={current.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-gray-400 hover:text-white hover:border-white transition"
                  aria-label="GitHub Repository"
                >
                  <FaGithub size={22} />
                </a>
              </div>
            </div>

            {/* Right column — Project image + Navigation */}
            <div className="md:w-1/2 flex flex-col items-end gap-6">
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
                <img
                  src={current.image}
                  alt={t(`projects.${current.key}.name`)}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={goToPrevious}
                  className="w-12 h-12 flex items-center justify-center bg-accent hover:bg-accent-soft text-[#1a1a1a] rounded-md transition cursor-pointer"
                  aria-label="Previous project"
                >
                  <FaChevronLeft size={18} />
                </button>
                <button
                  onClick={goToNext}
                  className="w-12 h-12 flex items-center justify-center bg-accent hover:bg-accent-soft text-[#1a1a1a] rounded-md transition cursor-pointer"
                  aria-label="Next project"
                >
                  <FaChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
