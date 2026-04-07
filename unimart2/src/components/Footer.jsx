import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../styles/Footer.css";
import logo from "../assets/UnimartLogo.png";

const footerLinks = {
  Company: ["About Us", "Careers", "Blog", "Contact Us"],
  "Customer Services": ["My Account", "Track Your Order", "Return", "FAQ"],
  "Our Information": ["Privacy Policy", "Terms & Conditions", "Return Policy"],
};

const socials = [
  { icon: <FaFacebookF size={14} />, label: "Facebook" },
  { icon: <FaInstagram size={14} />, label: "Instagram" },
  { icon: <FaYoutube size={14} />, label: "YouTube" },
  { icon: <FaXTwitter size={14} />, label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <img src={logo} alt="Unimart Logo" className="footer-logo" />

          <p className="footer-desc">
            Bringing you quality products, trusted brands and a seamless shopping experience every day. Shop
            with confidence and enjoy convenience at your fingertips.
          </p>
          <div className="footer-socials">
            {socials.map(({ icon, label }) => (
              <a key={label} href="#" className="footer-social-btn" title={label}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="footer-col">
            <h4 className="footer-col-title">{title}</h4>
            <ul className="footer-list">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="footer-list-link">› {link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">
          Copyright © 2026 <span className="footer-copy-highlight">UniMart</span>. All Rights Reserved.
        </span>
        <div className="footer-bottom-links">
          {["Privacy Policy", "Terms of Use", "Cookies"].map((t) => (
            <a key={t} href="#" className="footer-bottom-link">{t}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}