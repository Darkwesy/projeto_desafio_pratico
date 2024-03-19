import './Slide_style.css'
import { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function Slider() {
  const images = [
    { url: "/products_assets/product_1.jpg" },
    { url: "/products_assets/product_2.jpg" },
    { url: "/products_assets/product_3.jpg" },
    { url: "/products_assets/product_4.jpg" },
    { url: "/products_assets/product_5.jpg" },
    { url: "/products_assets/product_6.jpg" },
    { url: "/products_assets/product_7.jpg" },
    { url: "/products_assets/product_8.jpg" }
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
      <img className="Products__Images" src={images[actualIndex].url} alt={`Imagem ${actualIndex + 1}`} />
      <div className="Products__Wrapper__Slider__Buttons">
        <button onClick={backSlide}><MdArrowBackIos /></button>
        <button onClick={nextSlide}><MdArrowForwardIos /></button>
      </div>
    </div>
  );
}

export default Slider;