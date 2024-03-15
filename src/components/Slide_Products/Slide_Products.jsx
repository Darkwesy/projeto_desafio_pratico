import './Slide_style.css'
import { useState } from "react";

function Slider() {
  const images = [
    {
      url: "/products_assets/product_1.jpg"
    },
    {
      url: "/products_assets/product_2.jpg"
    },
    {
      url: "/products_assets/product_3.jpg"
    },
    {
      url: "/products_assets/product_4.jpg"
    },
    {
      url: "/products_assets/product_5.jpg"
    }
  ];
  const [actualIndex, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const backSlide = () => {
    setIndex(prevIndex => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? 0 : nextIndex;
    });
  };

  return (
    <div className='Products__Wrapper__Slider'>
      <p>{`Image Index - ${actualIndex+1}`}</p>
      <img className="Products__Images" src={images[actualIndex].url} alt={`Imagem ${actualIndex + 1}`} />
      <div className="Products__Wrapper__Slider__Buttons">
        <button onClick={nextSlide}>Proxima Imagem</button>
        <button onClick={backSlide}>Imagem Anterior</button>
      </div>
    </div>
  );
}

export default Slider;
