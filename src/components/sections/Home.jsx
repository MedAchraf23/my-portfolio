import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'; // Import des icônes
import myPhoto from '../../assets/profile-picture.png'; // Remplacez par le chemin réel de votre photo
import myCV from '../../assets/my-cv.pdf'; // Remplacez par le chemin réel de votre CV

export const Home = () => {
  return (
    <section id="home" className="text-white py-20"> {/* Fond sombre et texte blanc */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between"> {/* Flexbox pour la mise en page, colonne sur mobile, ligne sur desktop */}
        
        {/* Colonne de gauche : Texte et Boutons */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Développeur de logiciels
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Bonjour, je suis <br />
            <span className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">Mohamed Achraf HAFDI</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Je me spécialise dans la création de solutions numériques innovantes et de haute qualité, 
            en utilisant les dernières technologies pour répondre à vos besoins.
          </p>
 
          {/* Boutons et Liens Sociaux */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
            {/* Bouton Télécharger le CV */}
            <a
              href={myCV}
              download="Mohamed_Achraf_HAFDI_CV.pdf" // Nom du fichier téléchargé
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center"
            >
              TÉLÉCHARGER LE CV
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>

            {/* Icônes Sociales */}
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="https://github.com/MedAchraf23" // Remplacez par votre lien GitHub
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition duration-300 p-3 rounded-full border border-gray-700 hover:border-teal-400"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/mohamedachrafhafdi" // Remplacez par votre lien LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition duration-300 p-3 rounded-full border border-gray-700 hover:border-teal-400"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Colonne de droite : Photo */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Cercle décoratif derrière la photo (optionnel) */}
            <div className="absolute inset-0 bg-teal-500 opacity-20 rounded-full blur-xl transform translate-x-4 translate-y-4"></div>
            <img
              src={myPhoto} // Utilisez votre photo importée
              alt="Mohamed Achraf HAFDI"
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover border-4 relative z-10"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;