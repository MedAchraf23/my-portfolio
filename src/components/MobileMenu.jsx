import { useTranslation } from "react-i18next";
import { FrFlag, GbFlag } from "./Flags";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(nextLang);
  };

  const linkClass = `text-2xl font-semibold text-white hover:text-accent my-4 transform transition-transform duration-300
    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`;

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(26,26,26,0.96)] z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out
                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer hover:text-accent transition-colors"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a href="#home" onClick={() => setMenuOpen(false)} className={linkClass}>
        {t("navbar.home")}
      </a>
      <a href="#about" onClick={() => setMenuOpen(false)} className={linkClass}>
        {t("navbar.about")}
      </a>
      <a href="#projects" onClick={() => setMenuOpen(false)} className={linkClass}>
        {t("navbar.projects")}
      </a>
      <a href="#contact" onClick={() => setMenuOpen(false)} className={linkClass}>
        {t("navbar.contact")}
      </a>

      {/* Language toggle button */}
      <button
        onClick={toggleLanguage}
        className={`mt-6 px-4 py-2 text-base font-semibold rounded border border-gray-600 text-gray-300 hover:text-white hover:border-accent transition-all flex items-center gap-2 cursor-pointer
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        aria-label="Toggle language"
      >
        {i18n.language === "en" ? <FrFlag /> : <GbFlag />}
        <span>{i18n.language === "en" ? "FR" : "EN"}</span>
      </button>
    </div>
  );
};