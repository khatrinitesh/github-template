import "./Header.css";
import { Link } from "react-scroll";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar">
      <Container>
        <Link to="/" className="link">
          LGR
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            <Link
              to="getStarted"
              smooth={true}
              duration={800}
              className="link cursor-pointer"
            >
              Features
            </Link>
            <Link
              to="mission"
              smooth={true}
              duration={800}
              className="link cursor-pointer"
            >
              About Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
