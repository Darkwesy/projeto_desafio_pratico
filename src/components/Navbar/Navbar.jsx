import './Navbar_style.css'

function Navbar (){
  return(
    <div className="navbar">
      <nav className='navbar__wrapper'>
        <ul className='navbar__wrapper__ul'>
          <li className='navbar__wrapper__ul__li'><a href="">Home</a></li>
          <li className='navbar__wrapper__ul__li'><a href="">Serviços</a></li>
          <li className='navbar__wrapper__ul__li'><a href="">Contato</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar