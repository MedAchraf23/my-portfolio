import { useState } from 'react'
import './App.css'
import "./index.css"
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);//On déclaré le menuOpen ici pour pouvoir partager sa valeur dans d'autres composants que le navbar


  return (
    <>
    
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />

        {/* Je compte faire mon portfolio en anglais et en francais
du coup je compte utiliser json (fichier en anglais et en francais) mais j'ai jamais fait tel taff
d'abord explique moi comment faire (la structure de cette demarche)
genre coment creer mes json ou les mettre, comment faire en sorte que la page charge le contenu et comment elle charge le bo contenu en fonction de la lange choisie
quelles dependances ... bref */}

        </div>
    
    </>
  )
}

export default App
