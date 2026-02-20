import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import myPhoto from '../../assets/profile-picture.png';
import myCV from '../../assets/my-cv.pdf';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Column: Text and Buttons */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            {t('home.role')}
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            {t('home.greeting')} <br />
            <span className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r text-blue-400 bg-clip-text">
              {t('home.name')}
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            {t('home.description')}
          </p>

          {/* Buttons and Social Links */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
            {/* Download CV Button */}
            <a
              href={myCV}
              download={t('home.cvFileName')}
              className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center"
            >
              {t('home.downloadCV')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="https://github.com/MedAchraf23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-300 p-3 rounded-full border border-gray-700 hover:border-blue-400"
                aria-label="GitHub Profile"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/mohamedachrafhafdi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-300 p-3 rounded-full border border-gray-700 hover:border-blue-400"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Photo */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Decorative circle behind the photo */}
            <div className="absolute inset-0 bg-blue-400 opacity-20 rounded-full blur-xl transform translate-x-4 translate-y-4"></div>
            <img
              src={myPhoto}
              alt={t('home.name')}
              className="rounded-full w-48 h-48 md:w-72 md:h-72 object-cover border-4 relative z-10"
              style={{ objectPosition: '20% 30%' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};