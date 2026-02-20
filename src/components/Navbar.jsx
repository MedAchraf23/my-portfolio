import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { t, i18n } = useTranslation();

  // Method to toggle the application language
  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(nextLang);
  };

  useEffect(() => {
    /* The useEffect code executes every time React detects a change
       in the menuOpen variable, thus blocking the scroll when menuOpen is true.
       Why do we do this? Imagine opening a full-screen menu on your phone.
       Without this line: If you scroll inside the menu, once you reach the bottom, 
       the site behind the menu starts scrolling.
       With this line: The site behind is "frozen". The user stays focused on the menu. */
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "} Achraf<span className="text-blue-500">.Hafdi</span>{" "}
          </a>

          {/* Mobile menu toggle icon */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop menu items */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("navbar.home")}
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("navbar.about")}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("navbar.projects")}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("navbar.contact")}
            </a>

            {/* Language toggle button */}
            <button
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1 text-sm font-semibold rounded border border-gray-600 text-gray-300 hover:text-white hover:border-white transition-colors"
            >
              {i18n.language === "en" ? "FR" : "EN"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};