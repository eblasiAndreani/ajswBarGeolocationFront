import React from "react";
import "./Footer.css";
import { socialIcons, socialUri } from "./socialIcons ";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2023 ajsw BuscaBar</p>
      <div className="social-icons">
        <a
          href={socialUri.facebook}
          className="social-icon facebook"
          style={{ backgroundImage: socialIcons.facebook }}
        >
          {" "}
        </a>
        <a
          href={socialUri.twitter}
          className="social-icon twitter"
          style={{ backgroundImage: socialIcons.twitter }}
        >
          {" "}
        </a>
        <a
          href={socialUri.instagram}
          className="social-icon instagram"
          style={{ backgroundImage: socialIcons.instagram }}
        >
          {" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;
