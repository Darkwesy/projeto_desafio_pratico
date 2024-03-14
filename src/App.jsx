import './App.css'
import Navbar from './components/Navbar/Navbar';
import FooterComponent from './components/Footer/FooterComponent';
import Home from './components/homeLogo/HomeLogo';
import { useState } from 'react';
import Card_Contato from './components/Card_Contato/Card_Contato';
import Products from './components/Products/Products';
import Gallery from './components/Gallery/Gallery';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };


  return (
    <div className="container">
      <header>
        <Navbar onSectionChange={handleSectionChange} /> 
      </header>
      <main>
        {currentSection === 'home' && <Home/>}
        {currentSection === 'servicos' && <Products/>}
        {currentSection === 'galeria' && <Gallery/>}
        {currentSection === 'contato' && <Card_Contato/>}
      </main>
      <footer>
        <FooterComponent/>
      </footer>    
    </div>
  )
}

export default App
