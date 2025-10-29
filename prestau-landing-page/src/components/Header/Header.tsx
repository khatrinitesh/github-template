import { Container } from "react-bootstrap";
import { getImage } from "../../utils/assets";

const Header = () => {
  return (
    <header>
      <Container>
        <nav>
          <div className="header-logo">
            <img src={getImage("headerLogo.png")} alt="Logo" />
          </div>
          <div className="header-text">Delivering winning menus</div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
