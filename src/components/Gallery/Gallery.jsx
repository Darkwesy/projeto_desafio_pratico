import { useEffect, useState } from 'react';
import './Gallery_style.css';

function Gallery() {
  const images = [
    { url: "/products_assets/product_1.jpg" },
    { url: "/products_assets/product_2.jpg" },
    { url: "/products_assets/product_3.jpg" },
    { url: "/products_assets/product_4.jpg" },
    { url: "/products_assets/product_5.jpg" },
    { url: "/products_assets/product_6.jpg" },
    { url: "/products_assets/product_7.jpg" },
    { url: "/products_assets/product_8.jpg" },
    { url: "/products_assets/product_9.jpg" },
    { url: "/products_assets/product_10.jpg" },
    { url: "/products_assets/product_11.jpg" },
    { url: "/products_assets/product_12.jpg" },
    { url: "/products_assets/product_13.jpg" },
    { url: "/products_assets/product_14.jpg" },
    { url: "/products_assets/product_15.jpg" },
    { url: "/products_assets/product_16.jpg" },
    { url: "/products_assets/product_17.jpg" },
    { url: "/products_assets/product_18.jpg" },
    { url: "/products_assets/product_19.jpg" },
    { url: "/products_assets/product_20.jpg" }
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
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: '1s', // Altere o valor da duração conforme necessário
              opacity: 0
            }}
          >
            <img
              src={image.url}
              alt=""
              className="Gallery__Wrapper__Card__Image"
              onLoad={() => {
                setTimeout(() => {
                  document.querySelector(`.Gallery__Wrapper__Card__Item:nth-child(${index + 1})`).style.opacity = 1;
                }, 100 * (index + 1));
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
