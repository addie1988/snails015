import React from "react";
import InfiniteMarquee from "./InfiniteMarquee";
import Drag_and_play_svg_1 from "./Drag_and_play_svg_1";
import Drag_and_play_svg_2 from "./Drag_and_play_svg_2";
import Drag_and_play_svg_3 from "./Drag_and_play_svg_3";
import Drag_and_play_svg_4 from "./Drag_and_play_svg_4";
import Drag_and_play_svg_5 from "./Drag_and_play_svg_5";
import Drag_and_play_svg_6 from "./Drag_and_play_svg_6";
import Drag_and_play_svg_7 from "./Drag_and_play_svg_7";
import Drag_and_play_svg_8 from "./Drag_and_play_svg_8";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner_content">
        <div className="banner_area">
          <div className="banner_content_title">
            <div className="banner_content_title_content">
              <h3>
                Create an <span>AR/AI</span>
              </h3>
              <p>experience on your phone</p>
              <span>
                Real-time camera app to instantly customize your look with AI
                effects
              </span>
              <div className="banner_button">
                <div className="banner_button_content">
                  <a href="#">Get Started</a>
                </div>
              </div>
            </div>
          </div>
          <div className="banner_video">
            <div className="banner_video_content">
              <video
                src="https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd%2F664784d47bb04a90a15ea58e_%5B01%5D%20Create%20an%20ARAI_1-transcode.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>
              <img
                loading="lazy"
                src="https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/66420797898852cd59f9dc38_Hero%20Section%20-%20BG%402x.svg"
                alt="Hero Section - BG@2x"
                className="autotabs_bg is-hero"
              />
            </div>
          </div>
        </div>

        {/* 無限循環跑馬燈 */}
        <div className="banner_marquee">
          <InfiniteMarquee speed={50} direction="left" pauseOnHover={true}>
            {/* 原始項目 */}
            <div className="marquee-item">
              <Drag_and_play_svg_1 />
              <p>Personalized Avatar Generation</p>
            </div>
            <div className="marquee-item">
              <Drag_and_play_svg_2 />
              <p>Text-to-AR filters</p>
            </div>
            <div className="marquee-item">
              <Drag_and_play_svg_3 />
              <p>Real-time AI Effects</p>
            </div>
            <div className="marquee-item">
              <Drag_and_play_svg_4 />
              <p>Smart Beauty Enhancement</p>
            </div>
            <div className="marquee-item">
              <Drag_and_play_svg_5 />
              <p>3D Face Tracking</p>
            </div>
            <div className="marquee-item">
              <Drag_and_play_svg_6 />
              <p>Custom AR Masks</p>
            </div>
            <div className="marquee-item">
              <Drag_and_play_svg_7 />
              <p>AI Style Transfer</p>
            </div>
            <div className="marquee-item">
              <Drag_and_play_svg_8 />
              <p>Interactive Filters</p>
            </div>
          </InfiniteMarquee>
        </div>
      </div>
    </div>
  );
}
