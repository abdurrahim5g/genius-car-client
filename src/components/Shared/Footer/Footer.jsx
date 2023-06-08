import logo from "../../../assets/footer-logo.svg";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="Footer-component"
      style={{ background: "var(--footer-bg)" }}
    >
      <div className="car-container">
        <div className="footer p-10 text-base-content">
          <div className="footer-brand">
            <img src={logo} alt="Footer Logo" />
            <p className="text-lg my-4">
              Edwin Diaz is a software and web technologies
              <br /> engineer, a life coach trainer who is also a serial .
            </p>
            <div className="social-links">
              <Link to="">
                <FaGoogle />
              </Link>
              <Link to="">
                <FaTwitter />
              </Link>
              <Link to="">
                <FaInstagram />
              </Link>
              <Link to="">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Services</h4>
            <Link className="link link-hover">Branding</Link>
            <Link className="link link-hover">Design</Link>
            <Link className="link link-hover">Marketing</Link>
            <Link className="link link-hover">Advertisement</Link>
          </div>
          <div>
            <h4 className="footer-title">Company</h4>
            <Link className="link link-hover">About us</Link>
            <Link className="link link-hover">Contact</Link>
            <Link className="link link-hover">Jobs</Link>
            <Link className="link link-hover">Press kit</Link>
          </div>
          <div>
            <h4 className="footer-title">Legal</h4>
            <Link className="link link-hover">Terms of use</Link>
            <Link className="link link-hover">Privacy policy</Link>
            <Link className="link link-hover">Cookie policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
