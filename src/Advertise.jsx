import React from "react";

const items = [
  {
    title: "Advertise",
    content: "Advertise",
  },
];

export default function Advertise() {
  return (
    <div className="advertise">
      <div className="advertise_content">
        <div className="advertise_content_title">
          <div className="advertise_content_title_content">
            <h3>Discover more</h3>
            <h2>only on SHADER</h2>
            <p>
              AI photo and video editor for premium AR filters. Create content
              with real-time camera effects!
            </p>
          </div>
        </div>
        <div className="advertise_content_button">
          <div className="advertise_content_button_content">
            <a href="#">Get Started</a>
          </div>
        </div>
        <div className="advertise_bg">
        <img
          src="https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/663cffeb23deef2c5261a294_Group%201374.webp"
          loading="lazy"
          sizes="100vw"
          srcset="https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/663cffeb23deef2c5261a294_Group%201374-p-500.png 500w, https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/663cffeb23deef2c5261a294_Group%201374-p-800.png 800w, https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/663cffeb23deef2c5261a294_Group%201374-p-1080.png 1080w, https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/663cffeb23deef2c5261a294_Group%201374-p-1600.webp 1600w, https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/663cffeb23deef2c5261a294_Group%201374-p-2000.webp 2000w, https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/663cffeb23deef2c5261a294_Group%201374-p-2600.webp 2600w, https://cdn.prod.website-files.com/63c3059a658a4c786dbd48fd/663cffeb23deef2c5261a294_Group%201374.webp 4221w"
          alt="A picture of a pair of scissors and an eye."
          class="cta_card-image is-main"
        />
      </div>
      </div>
    </div>
  );
}
