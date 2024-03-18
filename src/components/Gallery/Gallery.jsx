import { useState, useEffect } from 'react';
import './Gallery_style.css';

function Gallery() {
  const images = [
    { url: "/products_assets/product_1.jpg" },
    { url: "/products_assets/product_2.jpg" },
    { url: "/products_assets/product_3.jpg" },
    { url: "/products_assets/product_4.jpg" },
    { url: "/products_assets/product_5.jpg" }
  ];

  const [bigCardIndex, setBigCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBigCardIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="Gallery__Wrapper">
      <div className="Gallery__Wrapper__BigCard">
        <img src={images[bigCardIndex].url} alt="" className="Gallery__Wrapper__BigCard__Image" />
      </div>
      <div className="Gallery__Wrapper__Card">
        {images.map((image, index) => (
          <div
            key={index}
            className="Gallery__Wrapper__Card__Item"
          >
            <img
              src={image.url}
              alt=""
              className="Gallery__Wrapper__Card__Image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
