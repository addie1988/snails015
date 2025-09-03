import React, { useState, useEffect, useRef } from "react";

const items = [
  {
    title:
      "https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/664da0c9bfb9c61658d7a07c_Screenshot%202024-05-20%20at%2023.16%201%40svg.svg",
    content: "Our Text-To-AR App Got 25K Users Within Two Months Of Launch",
  },
  {
    title:
      "https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/666817918b9a702c504d6bf0_image%20102.png", 
    content:
      "Shader app: Creation AR magic and video with founder, Darya Sesitskaya",
  },
  {
    title:
      "https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/663dea48eb3f5b4d3474d5b6_product-hunt-logo-horizontal-black%201.svg",
    content: "",
    specialContent:
      "https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/663de561c0df05452046bf02_product%20of%20the%20day.svg",
  },
  {
    title:
      "https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/663dea48b88c315e0f54f4db_TechCrunch%201.svg",
    content:
      "Former Snap design lead debuts Shader, an AR creation tool that uses AI to generate custom effects",
  },
  {
    title:
      "https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/663dea49bc64494c1b4d6f0b_image%2090.svg",
    content:
      "Transforming text to AR: Backed by Betaworks and Greycroft, Shader's AI-driven real-time camera app",
  },
  {
    title:
      "https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/664a37c2b4eba08fddc369ae_REVIEW%204.svg",
    content: "",
    specialContent:
      "https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/663de561c0df05452046bf02_product%20of%20the%20day.svg",
  },
];

export default function As_seen_in() {
  const [isHovered, setIsHovered] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const displayItems = [...items, ...items, ...items];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scroll = () => {
      if (isHovered || isDragging) return;

      container.scrollLeft += 1; // 改為增加scrollLeft來實現向右滾動
      if (container.scrollLeft >= (container.scrollWidth * 2) / 3) {
        container.scrollLeft = container.scrollWidth / 3;
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="as_seen_in">
      <div className="as_seen_in_content">
        <div className="as_seen_in_content_title">
          <div className="as_seen_in_content_title_content">
            <h3>
              As <span>seen in</span>
            </h3>
          </div>
        </div>
        <div className="as_seen_in_content_area">
          <div
            className="as_seen_in_content_area_content"
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              height: "400px",
              whiteSpace: "nowrap",
              cursor: isDragging ? "grabbing" : "grab",
              WebkitOverflowScrolling: "touch",
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <div
              className="as_seen_in_content_area_box"
              style={{
                display: "inline-flex",
                transition: "transform 0.3s ease",
                gap: "clamp(10px, 2vw, 20px)",
                padding: "0 clamp(10px, 3vw, 30px)",
              }}
            >
              {displayItems.map((item, index) => {
                const gradientColors = [
                  "linear-gradient(45deg, rgba(255,107,107,1), rgba(78,205,196,1))",
                  "linear-gradient(45deg, rgba(168,230,207,1), rgba(255,211,182,1))",
                  "linear-gradient(45deg, rgba(255,154,158,1), rgba(250,208,196,1))",
                  "linear-gradient(45deg, rgba(102,126,234,1), rgba(118,75,162,1))",
                  "linear-gradient(45deg, rgba(137,247,254,1), rgba(102,166,255,1))",
                  "linear-gradient(45deg, rgba(252,203,144,1), rgba(213,126,235,1))",
                ];

                const randomGradient =
                  gradientColors[index % gradientColors.length];

                return (
                  <div
                    key={index}
                    style={{
                      display: "inline-block",
                      width: "clamp(250px, 80vw, 300px)",
                      borderRadius: "clamp(15px, 3vw, 20px)",
                      padding: "clamp(26px, 2vw, 20px)",
                      position: "relative",
                      zIndex: 2,
                      transition: "all 0.3s ease",
                      transform: "scale(0.98)",
                      "&:hover": {
                        transform: "scale(1) translateY(-5px)",
                      },
                    }}
                  >
                    <a
                      href="https://shader.app"
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        borderRadius: "clamp(15px, 3vw, 20px)",
                        backgroundColor: "#fff",
                        border: "1px solid #000",
                        textDecoration: "none",
                        color: "#000",
                        padding: "clamp(15px, 3vw, 20px)",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                      }}
                    >
                      <div className="as_seen_in_li_information" style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%"}}>
                        <div className="as_seen_in_li_title">
                          <img
                            src={item.title}
                            loading="lazy"
                            alt=""
                            className="tesimonials_logo"
                            style={{
                              width: "100%",
                              height: "auto",
                              objectFit: "contain",
                              maxHeight: "clamp(40px, 8vw, 60px)",
                            }}
                          />
                        </div>
                        <div
                          className="as_seen_in_li_p"
                          style={{
                            fontSize: "clamp(12px, 2vw, 14px)",
                            wordBreak: "keep-all",
                            lineHeight: "1.5",
                            marginTop: "clamp(10px, 2vw, 20px)",
                            marginBottom: "clamp(10px, 2vw, 20px)",
                            minHeight: "60px",
                            display: "flex",
                            alignItems: "center"
                          }}
                        >
                          {item.specialContent ? (
                            <div style={{width: "100%"}}>
                              <img
                                src={item.specialContent}
                                loading="lazy"
                                alt=""
                                className="nav_logo"
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  maxHeight: "40px",
                                  objectFit: "contain"
                                }}
                              />
                            </div>
                          ) : (
                            <p style={{
                              margin: 0,
                              display: "-webkit-box",
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              textOverflow: "ellipsis"
                            }}>{item.content}</p>
                          )}
                        </div>
                        <a href="https://google.com" style={{textDecoration: "none", color: "#000"}} target="_blank" rel="noopener noreferrer">
                          <div
                            className="as_seen_in_li_button"
                            style={{
                              width: "80%",
                              margin: "0 auto",
                              textAlign: "center", 
                              padding: "clamp(8px, 1.5vw, 10px)",
                              border: "1px solid #000",
                              borderRadius: "10px",
                              marginTop: "clamp(8px, 2vw, 10px)",
                              fontSize: "clamp(12px, 2vw, 14px)",
                              fontWeight: "500",
                              transition: "all 0.3s ease",
                              cursor: "pointer",
                              "&:hover": {
                                background: "rgba(0,0,0,0.1)",
                              },
                            }}
                          >
                            閱讀更多
                            <span style={{ fontSize: "1rem", marginLeft: "5px" }}>⭠</span>
                          </div>
                        </a>
                        <div
                          style={{
                            width: "94%",
                            height: "94%",
                            position: "absolute",
                            inset: "16px",
                            borderRadius: "clamp(15px, 3vw, 20px)",
                            padding: "2px",
                            background: randomGradient,
                            border: "1px solid #000",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                            transform: "translate(20px, 4vw, 30px)",
                            zIndex: -2,
                            transition: "all 0.3s ease",
                          }}
                        />
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "clamp(10px, 3vw, 20px)",
            color: "#ffffff",
            fontSize: "clamp(16px, 3vw, 24px)",
          }}
        >
          {Array(5)
            .fill("⭠")
            .map((arrow, index) => (
              <span
                key={index}
                style={{
                  animation: `slideRight 2s ${index * 0.2}s infinite linear`,
                  display: "inline-block",
                  marginRight: "clamp(5px, 1vw, 10px)",
                }}
              >
                {arrow}
              </span>
            ))}
        </div>
        <style>
          {`
            @keyframes slideRight {
              0% {
                transform: translateX(0);
                opacity: 0;
              }
              20% {
                opacity: 1;
              }
              80% {
                opacity: 1;
              }
              100% {
                transform: translateX(50px);
                opacity: 0;
              }
            }

            @media (max-width: 768px) {
              .as_seen_in_content_area_content {
                -webkit-overflow-scrolling: touch;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
}
