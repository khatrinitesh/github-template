import { Container } from "react-bootstrap";
import "./Footer.scss";
import { getImage } from "../../utils/assets";

const Footer = () => {
  return (
    <footer id="home-footer">
      <Container>
        <div className="content">
          <div className="footer-logo">
            <img src={getImage("footer-logo.png")} alt="Logo" />
            <p>
              Your Restaurants At Full Capacity.
              <br />© Copyright 2021, Prestau
            </p>
            <p>
              1209 North Orange Street
              <br />
              Wilmington
              <br />
              Delaware, USA
            </p>
          </div>
          <div className="footer-text">Delivering winning menus</div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
