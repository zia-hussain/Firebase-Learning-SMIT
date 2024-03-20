import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../ContentWrapper/ContentWrapper";

import "./style.scss";
import { Navigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Connect with us and stay updated on the latest news and releases by
          following our social media profiles. Explore our comprehensive
          services, learn more about our mission and team, and discover
          insightful articles on our blog. Have questions? Check out our FAQ
          section or reach out to us directly. Thank you for being part of our
          community!
        </div>
        <div className="socialIcons">
          <span title="No navigation available" className="icon">
            <FaFacebookF />
          </span>
          <span title="This icon has no link" className="icon">
            <FaInstagram />
          </span>
          <span title="Not linked to anything" className="icon">
            <FaTwitter />
          </span>
          <span title="Non-navigable" className="icon">
            <FaLinkedin />
          </span>
        </div>
        <div className="copyRightBanner">
          <h6>
            Copyright © 2024 <span className="name"> Zia Hussain</span>. All
            Rights Reserved.
          </h6>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
