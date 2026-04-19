import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[rgba(26,26,26,0.95)] py-6">
      <div className="max-w-5xl mx-auto px-4 text-center text-gray-400 text-sm">
        <p>
          &copy; {currentYear} Achraf Hafdi. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};
