import React, { useEffect, useState } from "react";

export default function Partners() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const partners = [
    "https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/6642338aaf20bc8045926ed9_Partners%20-%20Logo%20%5B01%5D.svg",
    "https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/66423387e329ed7257372723_Partners%20-%20Logo%20%5B02%5D.svg", 
    "https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/664233861d8eac4478a538b6_Partners%20-%20Logo%20%5B03%5D.svg",
    "https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/66423385eab9b5f1edc25173_Partners%20-%20Logo%20%5B04%5D.svg",
    "https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/66423386f98e808d82eeb114_Partners%20-%20Logo%20%5B05%5D.svg",
    "https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/6648b3d028010eea54957f92_Partners%20-%20Logo%20%5B07%5D.svg"
  ];

  return (
    <div className="partners">
      <div className="partners_content">
        <div className="partners_content_title">
          <div className="partners_content_title_content">
            <h2>
              Backed by the best <span>investors</span>
            </h2>
          </div>
        </div>
        <div className="partners_ul">
          <div className="partners_ul_content" style={{overflow: "hidden"}}>
            <ul style={{
              display: "flex",
              transform: `translateX(-${scrollPosition}%)`,
              transition: "transform 0.5s linear",
              width: "200%"
            }}>
              {[...partners, ...partners].map((src, index) => (
                <li key={index} style={{
                  flex: "0 0 16.666%",
                  minWidth: "16.666%"
                }}>
                  <img
                    src={src}
                    loading="lazy"
                    alt=""
                    className="investors_image"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
