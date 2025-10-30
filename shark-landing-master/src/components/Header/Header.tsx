import { Container, Nav } from "react-bootstrap";
import { useSidebarStore } from "../../store/useSidebarStore";
import styled from "styled-components";
import { getImage } from "../../utils/assets";
import Sidebar from "../Sidebar/Sidebar";
import "./Header.css";

const Header = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore();

  const ToggleSwitch = styled.div`
    .toggleBtn {
      display: none;
    }

    @media (max-width: 768px) {
      .toggleBtn {
        display: unset;
        padding-right: 1rem;
        transition: all 0.3s ease;
        z-index: 3;
      }
      .logo {
        z-index: -2;
      }
      .toggleBtn:hover {
        cursor: pointer;
      }
      .btns {
        display: none;
      }
    }
  `;
  return (
    <div id="header">
      <Container>
        <div className="content">
          <Nav className="nav">
            <div className="logo">
              <img src={getImage("logo.png")} alt="ROGUE SHARKS" />
            </div>

            <ToggleSwitch>
              <div className="toggleBtn">
                {/* Toggle image based on the state from Zustand */}
                {!isSidebarOpen ? (
                  <img
                    src={getImage("hamburger.png")}
                    alt="toggle"
                    onClick={toggleSidebar}
                  />
                ) : (
                  <img
                    src={getImage("closeburger.png")}
                    alt="toggle"
                    onClick={toggleSidebar}
                  />
                )}
              </div>
              <div className="btns">
                <button className="btn btn-mint">Mint a Shark</button>
                <button className="btn btn-connect">Connect Wallet</button>
              </div>
            </ToggleSwitch>

            {/* Conditionally render Sidebar */}
            {isSidebarOpen && <Sidebar />}
          </Nav>

          <div className="centerText">
            <h1 className="title">
              We are
              <br /> more than art
            </h1>
            <h3 className="desc">dive deeper</h3>
            <hr className="vertical-line" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
