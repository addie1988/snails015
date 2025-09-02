import { useState, useEffect } from "react";
import LogoSvg from "./LogoSvg";
import "./style.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 監聽滾動事件
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollThreshold = 3; // 降低滾動閾值，提高敏感度

          // 判斷滾動方向和距離
          if (currentScrollY > lastScrollY + scrollThreshold) {
            // 向下滾動超過閾值
            setIsScrollingUp(false);
          } else if (currentScrollY < lastScrollY - scrollThreshold) {
            // 向上滾動超過閾值
            if (currentScrollY > 0) {
              // 只有在不在最頂部時才顯示陰影
              setIsScrollingUp(true);
            } else {
              // 在最頂部時不顯示陰影
              setIsScrollingUp(false);
            }
          }
          // 如果滾動距離小於閾值，保持當前狀態

          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    // 監聽滑鼠滾輪事件，提供更即時的響應
    const handleWheel = (event) => {
      const currentScrollY = window.scrollY;

      if (event.deltaY < 0) {
        // 滑鼠滾輪向上滾動
        if (currentScrollY > 0) {
          // 只有在不在最頂部時才顯示陰影
          setIsScrollingUp(true);
        } else {
          // 在最頂部時不顯示陰影
          setIsScrollingUp(false);
        }
      } else if (event.deltaY > 0) {
        // 滑鼠滾輪向下滾動 - Header 隱藏
        setIsScrollingUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [lastScrollY]);

  // 點擊漢堡按鈕時，切換導覽選單的顯示狀態
  const toggleMenu = (event) => {
    event.stopPropagation(); // 阻止事件冒泡
    setIsMenuOpen(!isMenuOpen);
  };

  // 點擊畫面其他地方時，關閉導覽選單
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  // 點擊導覽選單內部時，阻止事件冒泡，不會關閉選單
  const handleMenuClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className={`header ${isScrollingUp ? "scrolled-up" : ""}`}>
        <div className="header_content">
          <div className="logo">
            <div className="logo_content">
              <LogoSvg />
            </div>
          </div>

          <div className="menu">
            <div className="hamburger" id="hamburger" onClick={toggleMenu}>
              ☰
            </div>
            <div
              className={`nav-menu ${isMenuOpen ? "show" : ""}`}
              id="nav-menu"
              onClick={handleMenuClick}
            >
              <div className="min_menu_content">
                <ul>
                  <li>
                    <a
                      className="scroll-link"
                      href="#position"
                      data-i18n="nav.position"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      className="scroll-link"
                      href="#advantages"
                      data-i18n="nav.advantages"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="scroll-link"
                      href="#Vision"
                      data-i18n="nav.vision"
                    >
                      Career
                    </a>
                  </li>
                </ul>
                <div className="min_buttonLink">
                  <div className="min_buttonLink_content">
                    <a href="./contact">Contact us</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="menu_content">
              <ul>
                <li>
                  <a href="./index">About us</a>
                </li>
                <li>
                  <a href="./about">Blog</a>
                </li>
                <li>
                  <a href="./contact">Career</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="buttonLink">
            <div className="buttonLink_content">
              <a href="./contact">Contact us</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
