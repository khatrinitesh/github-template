import { Container } from "react-bootstrap";
import { getImage } from "../../utils/assets";
import "./Footer.css";
const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <Container>
        <div className="content">
          <div className="logo">
            <img src={getImage("footer_logo.png")} alt="Sharks" />
          </div>
          <p className="footer-text">
            A TechnikLabs Project. All Rights Reserved 2021.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
