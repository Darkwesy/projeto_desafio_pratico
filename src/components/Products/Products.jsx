import Slider from '../Slide_Products/Slide_Products';
import './Products_style.css';

function Products() {
  return (
    <div className="Products__Wrapper">
      <div className="Products__Wrapper__Description">

        <h1 className='Products__Wrapper__Description__Title'>Serviços</h1>

        <div className="Products__Wrapper__Description__Lists">
          <ul className='Products__Wrapper__Description__List'>
            <h2 className='Products__Wrapper__Description__List__Subtitle'>Unha Simples</h2>
            <li className='Products__Wrapper__Description__List__Item'>Mão - <span>R$20,00</span></li>
            <li className='Products__Wrapper__Description__List__Item'>Pé - <span>R$20,00</span></li>
            <li className='Products__Wrapper__Description__List__Item'>Mão e Pé Decorado - <span>R$35,00</span></li>
          </ul>

          <ul className='Products__Wrapper__Description__List'>
            <h2 className='Products__Wrapper__Description__List__Subtitle'>Unhas em Gel</h2>
            <li className='Products__Wrapper__Description__List__Item'>Alongamento de Fibra e Gel - <span>R$140,00</span></li>
            <li className='Products__Wrapper__Description__List__Item'>Blindagem/Banho de Gel - <span>R$80,00</span></li>
          </ul>

          <ul className='Products__Wrapper__Description__List'>
            <h2 className='Products__Wrapper__Description__List__Subtitle'>Extras</h2>
            <li className='Products__Wrapper__Description__List__Item'>Manutenção Fibra e Gel - <span>R$100,00</span></li>
            <li className='Products__Wrapper__Description__List__Item'>Reposição Unha (Unidade) - <span>R$15,00</span></li>
            <li className='Products__Wrapper__Description__List__Item'>Manutençao Blindagem/Banho de Gel - <span>R$60,00</span></li>
            <li className='Products__Wrapper__Description__List__Item'>Spa dos Pés/Plastica dos Pés - <span>R$60,00</span></li>
          </ul>
        </div>
      </div>
        <div className='Products__Wrapper__Slider'>
          <Slider />
        </div>
    </div>
  )
}

export default Products