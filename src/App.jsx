import './App.css'
import Navbar from './components/Navbar/Navbar';
import Cronometro from './components/Cronometro/Cronometro';
import FooterComponent from './components/Footer/FooterComponent';

function App() {
  return (
    <div className="container">
      <header>
        <Navbar/>
      </header>
      <main>
        <Cronometro/>
      </main>
      <footer>
        <FooterComponent/>
      </footer>
    </div>
  )
}

export default App
