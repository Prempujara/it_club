import React from "react";
import logo from "../assets/itclublogo.png";
import facebookIcon from "../assets/facebook_icon.svg";
import instagramIcon from "../assets/instagram_icon.svg";
import linkedinIcon from "../assets/linkedin_icon.svg";

function Footer() {
  return (
    <footer className="Footer_Bg_Class">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Email</h3>
          <p>
            <a href="mailto:itclub.upgacs@gmail.com">itclub.upgacs@gmail.com</a>
          </p>
        </div>
        <div className="footer-section">
          <h3>Phone</h3>
          <p>Irfan Pathan (President): 9999999999</p>
          <p>Prem Pujara (Vice President): 9999999999</p>
        </div>
        <div className="footer-section footer-logo">
          <img src={logo} alt="IT Club Logo" />
          <div className="footer-social">
            <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
            <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
            <a href="#"><img src={linkedinIcon} alt="LinkedIn" /></a>
          </div>
          <p>&copy; Copyright IT Club 2025</p>
        </div>
        <div className="footer-section">
          <h3>Address</h3>
          <p>
            Usha Pravin Gandhi College of <br />
            Arts, Science and Commerce,<br />
            Vile Parle West,<br />
            Mumbai, Maharashtra 400056
          </p>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <p>
            <a href="#">Privacy Policy</a><br />
            <a href="#">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
