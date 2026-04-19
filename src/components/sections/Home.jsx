import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import myPhoto from '../../assets/profile-picture.png';
import cvFr from '../../assets/CV_FR.pdf';
import cvEn from '../../assets/CV_EN.pdf';

export const Home = () => {
  const { t, i18n } = useTranslation();
  const myCV = i18n.language === 'en' ? cvEn : cvFr;

  return (
    <section id="home" className="text-white py-20 md:py-28 min-h-screen 2xl:min-h-[80vh] flex items-center">
      <div className="w-4/5 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 2xl:gap-16">

        {/* Left Column: Text and Buttons */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-xl md:text-2xl 2xl:text-3xl font-semibold mb-2 text-accent-soft tracking-wide">
            {t('home.role')}
          </h2>
          <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-extrabold leading-tight mb-4 text-white">
            {t('home.greeting')} <br />
            <span className="text-5xl md:text-6xl 2xl:text-7xl font-extrabold mb-6 text-accent">
              {t('home.name')}
            </span>
          </h1>
          <p className="text-white/90 text-base md:text-lg 2xl:text-xl mb-8 max-w-lg 2xl:max-w-xl mx-auto md:mx-0 leading-relaxed">
            {t('home.description')}
          </p>

          {/* Buttons and Social Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            {/* Download CV Button */}
            <a
              href={myCV}
              download={t('home.cvFileName')}
              className="bg-accent hover:bg-accent-soft text-[#1a1a1a] font-bold py-3 px-6 rounded-full transition duration-300 flex items-center"
            >
              {t('home.downloadCV')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://github.com/MedAchraf23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition duration-300 p-3 rounded-full border border-gray-700 hover:border-accent"
                aria-label="GitHub Profile"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/mohamedachrafhafdi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition duration-300 p-3 rounded-full border border-gray-700 hover:border-accent"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Photo */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Decorative circle behind the photo */}
            <div className="absolute inset-0 bg-accent opacity-20 rounded-full blur-2xl scale-110"></div>
            <img
              src={myPhoto}
              alt={t('home.name')}
              className="rounded-full w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 2xl:w-96 2xl:h-96 object-cover border-4 border-accent/30 relative z-10"
              style={{ objectPosition: '20% 30%' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};
