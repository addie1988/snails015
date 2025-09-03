import React, { useState, useEffect, useRef } from "react";
import "./style.sass";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const carouselRef = useRef(null);
  const slidesRef = useRef(null);

  const originalProducts = [
    {
      id: 1,
      name: "Personalized Avatar Generation", 
      image: "66477f87dbc1c49e082d801f_card [03] - Personalized Avatar Generation-p-800.webp",
      description: "Don't hesitate to show the real you! Create and inspire people with your ideas and generate your own virtual identity.",
    },
    {
      id: 2,
      name: "Text-to-AR Filters",
      image: "66477f888a64803dff8bf367_card [01] - Text-to-AR Filters-p-800.webp", 
      description: "Stay tuned for future updates that will let you bring real-time Shader effects into your video calls and live streams!",
    },
    {
      id: 3,
      name: "AI Relighting",
      image: "66477f87fa721f03ed5ec9fc_card [04] - AI Relighting-p-800.webp",
      description: "Experience the magic! We've done a great job tracking lights from 3D masks and reimagining the full scene on your real-time screen in specific colors.",
    },
    {
      id: 4, 
      name: "AI Background",
      image: "66477f8734a2ba5909347ff2_card [05] - AI Background-p-800.webp",
      description: "We have learned additional insights on what it takes to improve the quality of our AR models as well as a number of techniques to introduce new features with constrained capabilities.",
    },
    {
      id: 5,
      name: "Image-to-Image", 
      image: "66477f8735d70648fcb04d1b_card [02] - Image-to-Image-p-800.webp",
      description: "Prefer to remix your existing images? Transform your social media posts into any art style you can imagine. Show off your unique personality and share your own virtual world with friends!",
    },
  ];

  const products = Array.from({ length: 999 }, (_, i) => originalProducts[i % originalProducts.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex(prev => (prev + 1) % products.length);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isDragging]);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    const diff = startX - currentX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        setCurrentIndex(prev => (prev + 1) % products.length);
      } else {
        setCurrentIndex(prev => (prev - 1 + products.length) % products.length);
      }
    }

    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  const handleImageClick = (productId) => {
    return;
  };

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="carousel_content">
        <div className="carousel_content_title">
          <div className="carousel_content_title_content">
            <h3>
              Make your content creation process easier and{" "}
              <span>more fun with AI</span>
            </h3>
          </div>
        </div>

        <div className="carousel_area">
          <div className="carousel_area_content">
            <div className="carousel_container">
              <ul
                className="carousel_slides"
                ref={slidesRef}
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: isDragging ? "none" : "transform 0.5s ease-in-out",
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {products.map((product, index) => {
                  const gradients = [
                    'linear-gradient(to top, #9795f0 0%, #fbc8d4 100%)',
                    'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
                    'linear-gradient(to right, #fa709a 0%, #fee140 100%)',
                    'linear-gradient(to top, #96fbc4 0%, #f9f586 100%)',
                    'linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%)'
                  ];
                  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

                  return (
                    <li key={`${product.id}-${index}`} className="carousel_slide">
                      <div
                        className="product_card"
                        data-product-id={product.id}
                        onClick={() => handleImageClick(product.id)}
                        style={{background: randomGradient}}
                      >
                        <div className="product_info">
                          <h4>{product.name}</h4>
                          <p>{product.description}</p>
                        </div>
                        <div className="product_image">
                          <img src={product.image} alt={product.name} />
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="carousel_arrows_bottom">
              <button
                className="arrow_btn prev_arrow"
                onClick={() => setCurrentIndex(prev => (prev - 1 + products.length) % products.length)}
                disabled={isDragging}
                style={{
                  background: [
                    'linear-gradient(to top, #9795f0 0%, #fbc8d4 100%)',
                    'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
                    'linear-gradient(to right, #fa709a 0%, #fee140 100%)',
                    'linear-gradient(to top, #96fbc4 0%, #f9f586 100%)',
                    'linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%)'
                  ][Math.floor(Math.random() * 5)]
                }}
              >
                ←
              </button>
              <button
                className="arrow_btn next_arrow"
                onClick={() => setCurrentIndex(prev => (prev + 1) % products.length)}
                disabled={isDragging}
                style={{
                  background: [
                    'linear-gradient(to top, #9795f0 0%, #fbc8d4 100%)',
                    'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
                    'linear-gradient(to right, #fa709a 0%, #fee140 100%)',
                    'linear-gradient(to top, #96fbc4 0%, #f9f586 100%)',
                    'linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%)'
                  ][Math.floor(Math.random() * 5)]
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
