import React, { useEffect, useRef, useState } from "react";

export default function Photo() {
  const photoArea1Ref = useRef(null);
  const photoArea2Ref = useRef(null);
  const lastScrollY = useRef(0);
  const animationId = useRef(null);
  const accumulatedMove1 = useRef(0);
  const accumulatedMove2 = useRef(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // 監聽視窗大小變化
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // 初始化 ul 位置至中間
    if (photoArea1Ref.current && photoArea2Ref.current) {
      const area1 = photoArea1Ref.current.querySelector("ul");
      const area2 = photoArea2Ref.current.querySelector("ul");
      
      const containerWidth = photoArea1Ref.current.offsetWidth;
      const ulWidth = area1.scrollWidth;
      const initialOffset = (ulWidth - containerWidth) / 2;
      
      accumulatedMove1.current = -initialOffset;
      accumulatedMove2.current = -initialOffset;
      
      area1.style.transform = `translateX(${accumulatedMove1.current}px)`;
      area2.style.transform = `translateX(${accumulatedMove2.current}px)`;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        animationId.current = requestAnimationFrame(() => {
          updatePhotoMovement();
          ticking = false;
        });
      }
    };

    const updatePhotoMovement = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY.current ? "down" : "up";
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);

      if (photoArea1Ref.current && photoArea2Ref.current) {
        const area1 = photoArea1Ref.current.querySelector("ul");
        const area2 = photoArea2Ref.current.querySelector("ul");

        // 根據螢幕寬度調整移動速度
        const moveSpeed = windowWidth <= 768 ? 1.2 : 1.5;
        const moveDistance = scrollDelta * moveSpeed;

        if (scrollDirection === "down") {
          // 向下滾動時,ul向左右移出視窗
          accumulatedMove1.current += moveDistance;
          accumulatedMove2.current -= moveDistance;
        } else {
          // 向上滾動時,ul交錯返回
          accumulatedMove1.current = Math.max(-area1.scrollWidth/2, accumulatedMove1.current - moveDistance * 1.5);
          accumulatedMove2.current = Math.min(area2.scrollWidth/2, accumulatedMove2.current + moveDistance * 1.5);
        }

        // 設定移動極限值並重置位置實現無縫循環
        const ulWidth = area1.scrollWidth / 2;
        if (accumulatedMove1.current >= ulWidth) {
          accumulatedMove1.current = -ulWidth;
        }
        if (Math.abs(accumulatedMove2.current) >= ulWidth) {
          accumulatedMove2.current = -ulWidth;
        }

        // 套用transform
        area1.style.transform = `translateX(${accumulatedMove1.current}px)`;
        area2.style.transform = `translateX(${accumulatedMove2.current}px)`;

        // 設定過渡效果
        const transitionDuration = windowWidth <= 768 ? "0.3s" : "0.4s";
        area1.style.transition = `transform ${transitionDuration} ease-out`;
        area2.style.transition = `transform ${transitionDuration} ease-out`;
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }

      // 清除所有效果
      if (photoArea1Ref.current && photoArea2Ref.current) {
        const area1 = photoArea1Ref.current.querySelector("ul");
        const area2 = photoArea2Ref.current.querySelector("ul");
        area1.style.transform = "translateX(0)";
        area2.style.transform = "translateX(0)";
        area1.style.transition = "none";
        area2.style.transition = "none";
        accumulatedMove1.current = 0;
        accumulatedMove2.current = 0;
      }
    };
  }, [windowWidth]);

  const photoItems1 = [
    {
      maxImg: "./public/photo_area_1.webp",
      minImg: "./public/photo_min_img_7.webp", 
      name: "@Phil Walton"
    },
    {
      maxImg: "./public/photo_area_2.webp",
      minImg: "./public/photo_min_img_8.webp",
      name: "@Linus ●ᴗ● Ekenstam"
    },
    {
      maxImg: "./public/photo_area_3.webp",
      minImg: "./public/photo_min_img_9.webp",
      name: "@Jerrod Lew"
    },
    {
      maxImg: "./public/photo_area_4.webp",
      minImg: "./public/photo_min_img_10.webp",
      name: "@Jenny"
    },
    {
      maxImg: "./public/photo_area_9.webp",
      minImg: "./public/photo_min_img_11.webp",
      name: "@Jenny"
    },
    {
      maxImg: "./public/photo_area_6.webp",
      minImg: "./public/photo_min_img_12.webp",
      name: "@Jenny"
    }
  ];

  const photoItems2 = [
    {
      maxImg: "./public/photo_area_7.webp",
      minImg: "./public/photo_min_img_1.webp",
      name: "@Phil Walton"
    },
    {
      maxImg: "./public/photo_area_8.webp",
      minImg: "./public/photo_min_img_2.webp",
      name: "@Linus ●ᴗ● Ekenstam"
    },
    {
      maxImg: "./public/photo_area_9.webp",
      minImg: "./public/photo_min_img_3.webp",
      name: "@Jerrod Lew"
    },
    {
      maxImg: "./public/photo_area_10.webp",
      minImg: "./public/photo_min_img_4.webp",
      name: "@Jenny"
    },
    {
      maxImg: "./public/photo_area_11.webp",
      minImg: "./public/photo_min_img_5.webp",
      name: "@Jenny"
    },
    {
      maxImg: "./public/photo_area_12.webp",
      minImg: "./public/photo_min_img_6.webp",
      name: "@Jenny"
    }
  ];

  return (
    <div className="photo">
      <div className="photo_content">
        <div className="photo_content_title">
          <div className="photo_content_title_content">
            <h3>
              The world loves SHADER with more than{" "}
              <span>40 000 downloads</span>{" "}
            </h3>
          </div>
        </div>
        <div className="photo_area">
          <div className="photo_area_content">
            <div className="photo_area_1" ref={photoArea1Ref}>
              <ul>
                {[...photoItems1, ...photoItems1, ...photoItems1].map((item, index) => (
                  <li key={index}>
                    <div className="photo_max_img">
                      <img src={item.maxImg} alt="photo" />
                    </div>
                    <div className="photo_min_img">
                      <img src={item.minImg} alt="photo" />
                      <p>{item.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="photo_area_2" ref={photoArea2Ref}>
              <ul>
                {[...photoItems2, ...photoItems2, ...photoItems2].map((item, index) => (
                  <li key={index}>
                    <div className="photo_max_img">
                      <img src={item.maxImg} alt="photo" />
                    </div>
                    <div className="photo_min_img">
                      <img src={item.minImg} alt="photo" />
                      <p>{item.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
