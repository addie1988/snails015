import React, { useState, useEffect } from "react";
import "./SocialVideos.sass";
import Social_videos_svg from "./Social_videos_svg";

export default function SocialVideos() {
  const [activeMenu, setActiveMenu] = useState(0);
  const [counter, setCounter] = useState(1);
  const [expandedMenus, setExpandedMenus] = useState(new Set([0])); // 追蹤展開的選單
  const [countdown, setCountdown] = useState(5); // 倒數計時器

  const menuItems = [
    {
      id: 0,
      title: "AI Use selfie mode",
      description: "With Shader, you can generate filters that closely resemble who you are, or be specific and create fun characters, such as monsters — or simply bring to reality any idea you have! Everything starts with a good selfie, which helps us track your emotions in real-time.",
      videoUrl:
        "https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd%2F664785643ff3ce624cf91d50_%5B01%5D%20Use%20selfie%20mode-transcode.mp4",
    },
    {
      id: 1,
      title: "AR Write your idea or use templates",
      description: "You can reimagine your photo or AR filter with simple text prompts. Use short descriptions, such as 'make me look romantic', 'transform me into a cyberpunk princess', or, if you need creative inspiration, you can learn from our templates to craft something unique. We can’t wait to see your results!",
      videoUrl:
        "https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd%2F664785e3a63d2e46bafdfa81_%5B02%5D%20Write%20your%20idea%20or%20use%20templates-transcode.mp4",
    },
    {
      id: 2,
      title: "Explore your library",
      description: "All of your creations are saved to your profile, where you can also see the status of your Shader effects. You can generate them, usually, in only a few seconds!",
      videoUrl:
        "https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd%2F6650c4f811fad4561ad511f7_Explore%20your%20library2_1_prob3-transcode.mp4",
    },
    {
      id: 3,
      title: "Record videos with your AR masks",
      description: "You can easily share your results on social media.  With a Shader PRO account, you can remove watermarks and take your creations to the next level!",
      videoUrl:
        "https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd%2F6647861534a2ba590939fa68_%5B04%5D%20Record%20videos%20with%20your%20AR%20masks-transcode.mp4",
    },
  ];

  // 自動切換選單
  useEffect(() => {
    const interval = setInterval(() => {
      const newActiveMenu = (activeMenu + 1) % menuItems.length;
      setActiveMenu(newActiveMenu);
      setCounter((prev) => prev + 1);

      // 同步更新展開的選單
      setExpandedMenus(new Set([newActiveMenu]));

      // 重置倒數計時器
      setCountdown(10);
    }, 10000); // 每10秒切換一次

    return () => clearInterval(interval);
  }, [activeMenu, menuItems.length]);

  // 倒數計時器
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev > 0) {
          return prev - 1;
        }
        return prev;
      });
    }, 1000); // 每秒更新一次

    return () => clearInterval(countdownInterval);
  }, [activeMenu]); // 當選單改變時重置

  // 手動切換選單
  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
    setCounter((prev) => prev + 1);

    // 只展開當前選單，關閉其他所有選單
    setExpandedMenus(new Set([menuId]));

    // 重置倒數計時器
    setCountdown(5);
  };

  // 檢查選單是否展開
  const isMenuExpanded = (menuId) => {
    return expandedMenus.has(menuId);
  };

  return (
    <div className="social-videos">
      <div className="social-videos-container">
        {/* 標題區域 */}
        <div className="social-videos-header">
          <h2>
            Learn how to generate <span>AI Filters</span> and{" "}
            <span>Photo Effects</span> using text
          </h2>
        </div>

        {/* 選單切換區域 */}
        <div className="social-videos-content">
          {/* 左側影片區域 */}
          <div className="social-videos-video">
            <div className="video-container">
              <video
                src={menuItems[activeMenu].videoUrl}
                autoPlay
                loop
                muted
                playsInline
                key={activeMenu} // 強制重新渲染影片
              />
              <Social_videos_svg />
            </div>
          </div>

          {/* 右側內容區域 */}
          <div className="social-videos-info">
            {/* 選單標籤和內容 */}
            <div className="menu-tabs-container">
              {menuItems.map((item, index) => (
                <div key={item.id} className="menu-tab-section">
                  <button
                    className={`menu-tab ${
                      activeMenu === index ? "active" : ""
                    } ${isMenuExpanded(item.id) ? "expanded" : ""}`}
                    onClick={() => handleMenuClick(item.id)}
                  >
                    <span className="tab-number">{index + 1}</span>
                    <span className="tab-title">{item.title}</span>
                    <span className="tab-toggle">
                      {isMenuExpanded(item.id) ? "−" : "+"}
                    </span>
                  </button>

                  {/* 每個選單的內容 */}
                  <div
                    className={`tab-content ${
                      isMenuExpanded(item.id) ? "expanded" : ""
                    }`}
                  >
                    <div className="content-header">
                      <p className="description">{item.description}</p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
            {/* 讀秒器 */}
            <div className="countdown-timer">
              <div className="timer-display">
                <div className="timer-bar-container">
                  <div className="timer-bar">
                    <div
                      className="timer-progress"
                      style={{ width: `${(countdown / 5) * 100}%` }}
                    ></div>
                  </div>
                  <div className="timer-number">{countdown}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
