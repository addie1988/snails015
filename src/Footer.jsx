import React from "react";
import LogoSvg from "./LogoSvg";
import Message_button_svg from "./Message_button_svg";

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
            <div className="footer_menu_area-1">
              <div className="footer_menu_area-1_content">
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
              </div>
            </div>

            <div className="footer_menu_area-2">
              <div className="footer_menu_area-2_content">
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
          </div>
        </div>
        <div className="footer_button">
          <div className="footer_button_content">
            <div className="footer_button_content_a">
            <a href="#"><p>Get Started</p></a>
            <a href="#">
              <Message_button_svg />
              <p>Join our Discord</p>
            </a>
            </div>
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
