import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faVk,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="content">
          <div className="social-icons">
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faVk} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>

          <div className="right">
            <h1 className="logo">acer</h1>
            <p className="secondary-text">
              Federally registered <br />
              trademarks of Ziff Davis, LLC
            </p>
            <br />
            <p className="secondary-text">
              Much more is coming &nbsp;&nbsp;© 1996–2020 Acer Inc, LLC. PCMag
              Digital Group
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
