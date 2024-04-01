import logo from "../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { FiYoutube } from "react-icons/fi";
import { SlSocialPintarest } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo} className="Logo" alt="Logo" />
          </div>
          <p>Seamless Travel Solutions: Book Your Bus Adventure Today?</p>
          <div className="socialIcon flex">
            <FaFacebookF className="icon" />
            <SlSocialTwitter className="icon" />
            <FiYoutube className="icon" />
            <SlSocialPintarest className="icon" />
          </div>
        </div>

        {/* Footer Links */}
        <div className="footerLinks">
          <span className="linkTitle">Quick Links</span>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Explore</a>
            </li>
            <li>
              <a href="">Travel</a>
            </li>
            <li>
              <a href="">Manage Your Booking</a>
            </li>
          </ul>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Quick Guides</span>
          <ul>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">How To Book</a>
            </li>
            <li>
              <a href="">Feature</a>
            </li>
            <li>
              <a href="">Route Map</a>
            </li>
            <li>
              <a href="">Bus Communities</a>
            </li>
          </ul>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Quick Information</span>
          <ul>
            <li>
              <a href="">Our Partners</a>
            </li>
            <li>
              <a href="">Destination</a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">Transportation</a>
            </li>
            <li>
              <a href="">Program Rules</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyRightDiv flex">
        <p>© 2024 D.Drive · All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
