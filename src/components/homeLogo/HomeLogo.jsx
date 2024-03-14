import './HomeLogo_style.css'
import logo from '../../assets/marcaAleCarvalho.png'
function Home() {
  return (
    <div className="container__home">
      <img src={logo} alt="" className='container__home__logo' />
    </div>
  )
}

export default Home