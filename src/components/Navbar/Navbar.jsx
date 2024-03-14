import './Navbar_style.css';
import logo from '../../assets/submarcaAleCarvalho.png';

// eslint-disable-next-line react/prop-types
function Navbar ( { onSectionChange }){

  const handleSectionClick = (section) => {
    onSectionChange(section);
  };
  
  return(
    <div className="navbar">
      <nav className='navbar__wrapper'>
        <div className="navbar__wrapper__logo">
          <img src={logo} alt="" className=''/>
        </div>
        <ul className='navbar__wrapper__ul'>
          <li onClick={() => handleSectionClick('home')} className='navbar__wrapper__ul__li'>Home</li>
          <li onClick={() => handleSectionClick('servicos')} className='navbar__wrapper__ul__li'>Serviços</li>
          <li onClick={() => handleSectionClick('galeria')} className='navbar__wrapper__ul__li'>Galeria</li>
          <li onClick={() => handleSectionClick('contato')} className='navbar__wrapper__ul__li'>Contato</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar