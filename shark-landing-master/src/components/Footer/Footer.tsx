import { Container } from "react-bootstrap";
import { useFooterStore } from "../../store/useFooterStore/useFooterStore";
import { FOOTER_CONTENT } from "../../constants/footerData";
import "./Footer.css";

const Footer = () => {
  const { theme, year } = useFooterStore();
  return (
    <footer id="footer" className={`footer-${theme}`}>
      <Container>
        <div className="content">
          <div className="logo">
            <img
              src={FOOTER_CONTENT.logoSrc}
              alt={FOOTER_CONTENT.altText}
              className="footer-logo"
            />
          </div>
          <p className="footer-text">
            {FOOTER_CONTENT.description} © {year}.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
