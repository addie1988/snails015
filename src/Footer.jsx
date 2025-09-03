import React from "react";
import LogoSvg from "./LogoSvg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="footer_logo">
          <div className="footer_logo_content">
            <LogoSvg />
            <p>Let's do crazy things together!</p>
          </div>
        </div>
        <div className="footer_menu">
          <div className="footer_menu_content">
            <span>COMPANY</span>
            <ul>
              <li>
                <a href="#">
                  <p>About us</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Blog</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Career</p>
                </a>
              </li>
            </ul>
            <span>SOCIALY</span>
            <ul>
              <li>
                <a href="#">
                  <p>Twitter</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Instagram</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Tiktok</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Linkedin</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_button">
            <div className="footer_button_content">
                <a href="#">Get Started</a>
                <a href="#">Join our Discord</a>
            </div>
        </div>
      </div>
      <div className="footer_p">
        <div className="footer_p_content">
          <p>Copyright ©2012~2025 Snails . All rights reserved.</p>
          <a href="">Terms & Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}
