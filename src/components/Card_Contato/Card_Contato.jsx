import './Card_Contato.css'
import cardImage from '../../assets/image_contacts.png'

function Card_Contato () {
  return (
    <div className="card">
      <div className="card__image">
        <img src={cardImage} alt="" />
      </div>
      <div className="card__contacts">
        <div className="card__contacts__button">
          <p className='card__contacts__button__name'>Instagram</p>
          <p>@alecarvalho.naildesigner</p>
          <a href="https://instagram.com/alecarvalho.naildesigner"><button className='card__contacts__button__instagram'>Instagram</button></a>
        </div>
        <div className="card__contacts__button">
          <p className='card__contacts__button__name'>Whatsapp</p>
          <p>(75) 9 9806-2150</p>
          <a href="https://api.whatsapp.com/send?phone=5575998062150"><button className='card__contacts__button__whatsapp'>Whatsapp</button></a>
        </div>
      </div>
    </div>
  )
}
export default Card_Contato;